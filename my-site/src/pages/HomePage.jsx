import IntroSection from '../components/IntroSection'
import LiveLocation from '../components/LiveLocation'

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <footer className="mx-auto flex w-full max-w-[600px] flex-col gap-0 px-6 pt-8 pb-8 align-middle text-[var(--text-muted)]">
        <LiveLocation />
      </footer>
    </>
  )
}
