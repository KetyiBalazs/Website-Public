import AmbientSection from '../components/AmbientSection'
import IntroSection from '../components/IntroSection'
import PageContainer from '../components/PageContainer'
import WritingSection from '../components/WritingSection'

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <PageContainer>
        <WritingSection />
        <AmbientSection />
      </PageContainer>
    </>
  )
}
