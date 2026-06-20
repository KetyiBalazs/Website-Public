import IntroSection from '../components/IntroSection'
import LiveLocation from '../components/LiveLocation'
import PageContainer from '../components/PageContainer'

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <footer className="pt-8 pb-8 text-[var(--text-muted)]">
        <PageContainer className="gap-0 align-middle">
          <LiveLocation />
        </PageContainer>
      </footer>
    </>
  )
}
