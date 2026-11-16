import { Link, Navigate, useParams } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import { getEssayBySlug } from '../data/essays'

export default function EssayPage() {
  const { slug } = useParams()
  const essay = getEssayBySlug(slug)

  if (!essay) {
    return <Navigate to="/essays" replace />
  }

  return (
    <article aria-label={essay.title} className="pt-[var(--page-padding-120)] pb-[var(--page-padding-200)]">
      <PageContainer>
        <div className="mb-8">
          <Link
            to="/essays"
            className="text-[length:var(--font-14)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            ← Essays
          </Link>
        </div>

        <header className="mb-8 flex flex-col gap-3">
          <h1 className="text-[length:var(--font-14)] font-normal leading-[var(--font-22)] text-[var(--text)]">
            {essay.title}
          </h1>
          <p className="text-[length:var(--font-14)] text-[var(--text-muted)]">{essay.meta}</p>
        </header>

        <div
          className="essay-content flex flex-col gap-3 text-[length:var(--font-14)] leading-[var(--font-22)]"
          dangerouslySetInnerHTML={{ __html: essay.content }}
        />
      </PageContainer>
    </article>
  )
}
