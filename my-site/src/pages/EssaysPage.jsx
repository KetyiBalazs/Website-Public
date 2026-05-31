import { Link } from 'react-router-dom'
import LinkSection from '../components/LinkSection'
import { getEssayLinkItems } from '../data/essays'

export default function EssaysPage() {
  return (
    <section aria-label="Essays" className="pt-[120px] pb-10">
      <div className="mx-auto flex w-full max-w-[600px] flex-col px-[30px]">
        <div className="mb-8">
          <Link
            to="/"
            className="text-[14px] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            ← Back
          </Link>
        </div>
        <LinkSection id="essays" title="Essays" items={getEssayLinkItems()} />
      </div>
    </section>
  )
}
