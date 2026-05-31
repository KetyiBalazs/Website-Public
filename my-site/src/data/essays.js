import { allPosts, getPostBySlug } from 'virtual:posts'

function formatPostDate(date) {
  if (!date) {
    return ''
  }

  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getEssayBySlug(slug) {
  const post = getPostBySlug(slug)

  if (!post) {
    return null
  }

  return {
    ...post,
    meta: formatPostDate(post.date),
  }
}

export function getEssayLinkItems() {
  return allPosts.map(({ slug, title, date }) => ({
    label: title,
    meta: formatPostDate(date),
    href: `/essays/${slug}`,
  }))
}
