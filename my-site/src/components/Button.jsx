import { Link } from 'react-router-dom'

const variants = {
  primary:
    'border-transparent bg-[var(--bg-icon)] text-[var(--text)] hover:bg-[var(--bg-icon-hover)]',
  secondary:
    'border border-[var(--border-divider)] bg-transparent text-[var(--text)] hover:border-[var(--text-muted)]',
}

function PlaceholderIcon({ shape }) {
  const className = 'size-4 shrink-0 bg-[var(--text-muted)] opacity-50'

  if (shape === 'circle') {
    return <span className={`${className} rounded-full`} aria-hidden="true" />
  }

  return <span className={`${className} rounded-sm`} aria-hidden="true" />
}

export default function Button({ children, href, to, variant = 'primary', icon, ...props }) {
  const className = [
    'inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[14px] leading-[22px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
    variants[variant],
  ].join(' ')

  const content = (
    <>
      {icon}
      {children}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} {...props}>
      {content}
    </button>
  )
}

export { PlaceholderIcon }
