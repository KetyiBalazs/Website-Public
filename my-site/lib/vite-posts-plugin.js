import path from 'path'
import { fileURLToPath } from 'url'
import { getAllPosts, getPost } from './posts.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const postsDirectory = path.join(__dirname, '../posts')
const virtualModuleId = 'virtual:posts'
const resolvedVirtualModuleId = '\0' + virtualModuleId

function buildVirtualModuleSource() {
  const allPosts = getAllPosts()
  const postsBySlug = Object.fromEntries(
    allPosts.map((post) => [post.slug, getPost(post.slug)]),
  )

  return `
export const allPosts = ${JSON.stringify(allPosts)};
export const postsBySlug = ${JSON.stringify(postsBySlug)};

export function getPostBySlug(slug) {
  return postsBySlug[slug] ?? null;
}
`
}

export default function postsPlugin() {
  return {
    name: 'vite-posts-plugin',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return buildVirtualModuleSource()
      }
    },
    configureServer(server) {
      server.watcher.add(postsDirectory)
    },
    handleHotUpdate({ server, file }) {
      if (file.startsWith(postsDirectory)) {
        const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
        if (module) {
          server.moduleGraph.invalidateModule(module)
        }
        server.ws.send({ type: 'full-reload' })
      }
    },
  }
}
