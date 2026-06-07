import { Link } from 'react-router-dom'

export default function LinkSection({ id, title, items }) {
  return (
    <section
      className="flex flex-col gap-3"
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`} className="text-[14px] font-normal text-[var(--text-muted)]">
        {title}
      </h2>
      <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5">
        {items.map((item) => (
          <LinkRow key={item.href ?? item.label} {...item} />
        ))}
      </div>
    </section>
  )
}

function LinkRow({ label, meta, href, disabled = false }) {
  const isInternal = href?.startsWith('/')

  const nameCell = disabled ? (
    <span className="text-[var(--text-muted)]">{label}</span>
  ) : isInternal ? (
    <Link to={href}>{label}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  )

  return (
    <>
      <div>{nameCell}</div>
      <div className="text-right text-[var(--text-muted)]">
        <span>{meta}</span>
      </div>
    </>
  )
}
