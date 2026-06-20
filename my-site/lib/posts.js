import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'
import { marked } from 'marked'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const postsDirectory = path.join(__dirname, '../posts')

function getPostFilenames() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs.readdirSync(postsDirectory).filter((file) => {
    return file.endsWith('.md') && !file.startsWith('.')
  })
}

function parsePostFile(filename) {
  const filePath = path.join(postsDirectory, filename)

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      ...data,
      slug: data.slug ?? path.basename(filename, path.extname(filename)),
      contentMarkdown: content.trim(),
    }
  } catch (error) {
    console.warn(`Failed to parse post "${filename}": ${error.message}`)
    return null
  }
}

function getParsedPosts() {
  return getPostFilenames()
    .map(parsePostFile)
    .filter(Boolean)
}

export function getAllPosts() {
  return getParsedPosts()
    .map(({ contentMarkdown, ...meta }) => meta)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPost(slug) {
  const post = getParsedPosts().find((entry) => entry.slug === slug)

  if (!post) {
    return null
  }

  const { contentMarkdown, ...meta } = post

  return {
    ...meta,
    content: marked.parse(contentMarkdown),
  }
}
