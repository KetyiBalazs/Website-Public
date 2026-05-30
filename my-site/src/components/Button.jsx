export default function Button({ children, href, ...props }) {
  const className =
    'inline-flex items-center rounded-md border-2 border-transparent bg-[var(--accent-bg)] px-4 py-2 text-base text-[var(--text-h)] transition-[border-color,box-shadow] hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  )
}
