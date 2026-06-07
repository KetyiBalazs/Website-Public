import LinkSection from './LinkSection'

const projects = [
  { label: 'Headline', meta: 'March 2026', href: 'https://example.com' },
  { label: 'Headline', meta: 'April 2026', href: 'https://example.com' },
  { label: 'Headline', meta: 'Soon', disabled: true },
]

const essays = [
  { label: 'First Post', meta: 'January 1, 2026', href: '/essays/first-post' },
  { label: 'Second Post', meta: 'February 1, 2026', href: '/essays/second-post' },
]

export default {
  title: 'Components/LinkSection',
  component: LinkSection,
}

export const Projects = {
  args: {
    id: 'projects',
    title: 'Projects',
    items: projects,
  },
}

export const Essays = {
  args: {
    id: 'essays',
    title: 'Essays',
    items: essays,
  },
}
