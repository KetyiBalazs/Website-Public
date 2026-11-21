import Button, { GitHubIcon, LinkedInIcon, SubstackIcon } from './Button'
import SiteGlobe from './SiteGlobe'
import TravelPlan from './TravelPlan'
import LinkSection from './LinkSection'
import PageContainer from './PageContainer'
import { getEssayLinkItems } from '../data/essays'

const projects = [
  { label: 'Headline', meta: 'March 2026', href: 'https://example.com' },
  { label: 'Headline', meta: 'April 2026', href: 'https://example.com' },
  { label: 'Headline', meta: 'Soon', disabled: true },
  { label: 'Headline', meta: 'Soon', disabled: true },
]

export default function IntroSection() {
  return (
    <section aria-label="Introduction" className="pt-[var(--page-padding-120)] pb-0">
      <PageContainer>
        <div className="flex flex-col">
          <img
            src="/profile.png"
            alt="Balázs"
            width={100}
            height={100}
            className="mb-[32px] h-[100px] w-[100px] rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-[16px]">
            <div
              className="flex flex-wrap gap-1.5 text-[length:var(--font-14)] leading-[var(--font-22)] text-[var(--text-muted)]"
              aria-label="Hey"
            >
              <span>Hey,</span>
            </div>

            <p>
              I am Balázs, design engineer, founder and mentor. Currently building{' '}
              <a
                href="https://www.grum.so/coming-soon"
                className="site-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grum
              </a>, a design harness that hosts your design system and doesn't let your agents drift.
            </p>
            <p>
              Previously, studio founder and teacher - I spent 10 years designing interfaces and design systems for complex products in industries like space, robotics, fintech and government.
            </p>
          </div>
          <div className="mt-[32px] flex flex-wrap gap-2">
                <Button to="/essays">Essays</Button>
                <Button
                  href="https://www.linkedin.com/in/balazsketyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<LinkedInIcon />}
                >
                  LinkedIn
                </Button>
                <Button
                  href="https://substack.com/@ketyibalazs"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<SubstackIcon />}
                >
                  Substack
                </Button>
                <Button
                  href="https://github.com/KetyiBalazs"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<GitHubIcon />}
                >
                  GitHub
                </Button>
          </div>
          <div className="mt-[56px] flex flex-col gap-[16px]">
            <h2 className="font-medium text-[var(--text)]">Let's connect in person</h2>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--border-divider)] bg-[var(--bg-surface)] px-4 pt-[calc(1rem+16px)] pb-[calc(1rem+16px)] sm:flex-row sm:items-center">
                <div className="w-full max-w-[280px] shrink-0 sm:w-[46%]">
                  <SiteGlobe />
                </div>
                <TravelPlan />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="hidden" aria-hidden="true">
              <div className="h-px w-full bg-[var(--border-divider)]" />

              <LinkSection id="projects" title="Projects" items={projects} />

              <div className="h-px w-full bg-[var(--border-divider)]" />

              <LinkSection id="essays" title="Essays" items={getEssayLinkItems()} />
            </div>

            <section
              className="mt-[56px] flex flex-col gap-[16px]"
              aria-labelledby="connect-title"
            >
              <h2 id="connect-title" className="flex flex-wrap items-baseline gap-2 font-normal">
                <span className="font-medium text-[var(--text)]">Connect with me</span>
                <span className="text-[var(--text-muted)]" aria-hidden="true">
                  ·
                </span>
                <span className="text-[var(--text-muted)]">Book a call</span>
              </h2>
              <div className="flex flex-col gap-[8px]">
                <p>
                Reach me on{' '}
                <a
                  href="https://www.instagram.com/balazsketyi"
                  className="site-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                , via{' '}
                <a href="mailto:hello@ketyi.me" className="site-link">
                  hello@ketyi.me
                </a>
                , or follow me on{' '}
                <a
                  href="https://x.com/balazsketyi"
                  className="site-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
                .
                </p>
                <p>
                <a
                  href="https://calendar.app.google/Nb8ZkJk1g9VQobTTA"
                  className="site-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a time
                </a>{' '}
                for mentoring, or to talk about any design topic.
                </p>
              </div>
            </section>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
