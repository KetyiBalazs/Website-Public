import { Link } from 'react-router-dom'
import { allPosts } from 'virtual:posts'

const TALKS = [
  {
    kind: 'talk',
    title: 'Agentic Design Systems • Service Design Day 2026 Előadás',
    date: '2026-10-14',
    href: 'https://youtu.be/HSuH6DLUswU',
  },
]

function parseDate(value) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function formatDay(value) {
  return parseDate(value).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function BlogIcon() {
  return (
    <svg
      className="mt-0.5 size-[16px] shrink-0 text-[var(--text-muted)]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="2.25"
        y="1.75"
        width="11.5"
        height="12.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M4.75 5.25h6.5M4.75 8h6.5M4.75 10.75h4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ArrowUpRightIcon() {
  return (
    <svg
      className="ml-1 inline-block size-[16px] shrink-0 align-[-3px]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.75 11.25 11.25 4.75M6.25 4.75h5v5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg
      className="mt-0.5 size-[16px] shrink-0 text-[var(--text-muted)]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.75"
        y="3.25"
        width="12.5"
        height="9.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M6.6 6.15v3.7L10.35 8 6.6 6.15Z" fill="currentColor" />
    </svg>
  )
}

function WritingLink({ item }) {
  const content = (
    <>
      {item.kind === 'talk' ? <VideoIcon /> : <BlogIcon />}
      <span className="shrink-0 text-[var(--text-muted)]">{formatDay(item.date)}</span>
      <span className="min-w-0 font-medium text-[var(--text)]">
        {item.title}
        <ArrowUpRightIcon />
      </span>
    </>
  )

  const className = 'flex items-start gap-2.5'

  if (item.href.startsWith('/')) {
    return (
      <Link to={item.href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <a href={item.href} className={className} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

export default function WritingSection() {
  const items = [
    ...allPosts.map(({ slug, title, date }) => ({
      kind: 'essay',
      title,
      date,
      href: `/essays/${slug}`,
    })),
    ...TALKS,
  ].sort((a, b) => parseDate(b.date) - parseDate(a.date))

  const years = [...new Set(items.map((item) => parseDate(item.date).getFullYear()))]

  return (
    <section aria-labelledby="writing-title" className="pt-[56px]">
      <h2 id="writing-title" className="flex items-baseline gap-2 font-normal">
        <span className="font-medium text-[var(--text)]">Writing</span>
        <span className="text-[var(--text-muted)]" aria-hidden="true">
          ·
        </span>
        <span className="text-[var(--text-muted)]">Essays and talks</span>
      </h2>
      <div className="mt-[16px] flex flex-col gap-[32px]">
        {years.map((year) => (
          <div key={year} className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start">
            <p className="text-[var(--text-muted)]">{year}</p>
            <div className="flex flex-col gap-[16px]">
              {items
                .filter((item) => parseDate(item.date).getFullYear() === year)
                .map((item) => (
                  <WritingLink key={item.href} item={item} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
