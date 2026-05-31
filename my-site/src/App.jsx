import IntroSection from './components/IntroSection'
import ThemeToggle from './components/ThemeToggle'
import LiveLocation from './components/LiveLocation'

function App() {
  return (
    <main className="site">
      <ThemeToggle />
      <IntroSection />
      <footer className="mx-auto w-full max-w-[520px] px-[30px] pt-7 pb-0 text-[13px] leading-5 text-[var(--text-muted)]">
        <LiveLocation />
      </footer>
    </main>
  )
}

export default App
