const variants = {
  primary:
    'border-transparent bg-[var(--accent-bg)] hover:border-[var(--accent-border)] hover:shadow-[var(--shadow)]',
  secondary:
    'border-[var(--border)] bg-transparent hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)]',
}

export default function Button({ children, href, variant = 'primary', ...props }) {
  const className = [
    'inline-flex items-center rounded-md border-2 px-4 py-2 text-base text-[var(--text-h)] transition-[border-color,background-color,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
    variants[variant],
  ].join(' ')

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
