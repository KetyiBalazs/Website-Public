import Button, { GitHubIcon, LinkedInIcon, SubstackIcon } from './Button'
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
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div
              className="flex flex-wrap gap-1.5 text-[length:var(--font-14)] leading-[var(--font-22)] text-[var(--text-muted)]"
              aria-label="Hey"
            >
              <span>Hey,</span>
            </div>

            <div className="flex flex-col gap-3">
              <p>
                I'm Balázs - a designer, builder and mentor. I'm building{' '}
                <a
                  href="https://www.grum.so/coming-soon"
                  className="site-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grum
                </a>, a design harness that keeps AI agents on the design system.
              </p>
              <p>
          Previously, studio founder and teacher - I spent 10 years designing interfaces and design systems for complex products in industries like space, robotics, fintech and government.
                </p>
              <p>
                From Hungary, currently living in San Francisco.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
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
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="hidden" aria-hidden="true">
              <div className="h-px w-full bg-[var(--border-divider)]" />

              <LinkSection id="projects" title="Projects" items={projects} />

              <div className="h-px w-full bg-[var(--border-divider)]" />

              <LinkSection id="essays" title="Essays" items={getEssayLinkItems()} />
            </div>

            <div className="h-px w-full bg-[var(--border-divider)]" aria-hidden="true" />

            <section
              className="flex flex-col gap-0"
              aria-labelledby="connect-title"
            >
              <h2
                id="connect-title"
                className="text-[length:var(--font-14)] font-normal text-[var(--text-muted)]"
              >
                Connect with me
              </h2>
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
            </section>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
