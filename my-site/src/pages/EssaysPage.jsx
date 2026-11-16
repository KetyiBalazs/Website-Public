import { Link } from 'react-router-dom'
import LinkSection from '../components/LinkSection'
import PageContainer from '../components/PageContainer'
import { getEssayLinkItems } from '../data/essays'

export default function EssaysPage() {
  return (
    <section aria-label="Essays" className="pt-[var(--page-padding-120)] pb-10">
      <PageContainer>
        <div className="mb-8">
          <Link
            to="/"
            className="text-[length:var(--font-14)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            ← Back
          </Link>
        </div>
        <LinkSection id="essays" title="Essays" items={getEssayLinkItems()} />
      </PageContainer>
    </section>
  )
}
