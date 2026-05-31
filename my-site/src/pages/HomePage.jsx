import ImageGallery from '../components/ImageGallery'
import IntroSection from '../components/IntroSection'
import LiveLocation from '../components/LiveLocation'

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <footer className="mx-auto w-full max-w-[600px] px-[30px] pt-7 pb-10 text-[13px] leading-5 text-[var(--text-muted)]">
        <LiveLocation />
        <ImageGallery />
      </footer>
    </>
  )
}
