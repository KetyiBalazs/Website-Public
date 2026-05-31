import { Link, Navigate, useParams } from 'react-router-dom'
import { getEssayBySlug } from '../data/essays'

export default function EssayPage() {
  const { slug } = useParams()
  const essay = getEssayBySlug(slug)

  if (!essay) {
    return <Navigate to="/essays" replace />
  }

  return (
    <article aria-label={essay.title} className="pt-[120px] pb-10">
      <div className="mx-auto flex w-full max-w-[600px] flex-col px-[30px]">
        <div className="mb-8">
          <Link
            to="/essays"
            className="text-[14px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            ← Essays
          </Link>
        </div>

        <header className="mb-8 flex flex-col gap-3">
          <h1 className="text-[14px] font-normal leading-[22px] text-[var(--text)]">
            {essay.title}
          </h1>
          <p className="text-[14px] text-[var(--text-muted)]">{essay.meta}</p>
        </header>

        <div
          className="essay-content flex flex-col gap-3 text-[14px] leading-[22px]"
          dangerouslySetInnerHTML={{ __html: essay.content }}
        />
      </div>
    </article>
  )
}
