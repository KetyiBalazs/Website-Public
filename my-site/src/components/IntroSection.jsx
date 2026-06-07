import Button, { GitHubIcon, LinkedInIcon } from './Button'
import LinkSection from './LinkSection'
import { getEssayLinkItems } from '../data/essays'

const projects = [
  { label: 'Headline', meta: 'March 2026', href: 'https://example.com' },
  { label: 'Headline', meta: 'April 2026', href: 'https://example.com' },
  { label: 'Headline', meta: 'Soon', disabled: true },
  { label: 'Headline', meta: 'Soon', disabled: true },
]

export default function IntroSection() {
  return (
    <section aria-label="Introduction" className="pt-[120px] pb-0">
      <div className="mx-auto flex w-full max-w-[600px] flex-col px-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div
              className="flex flex-wrap gap-1.5 text-[14px] leading-[22px] text-[var(--text-muted)]"
              aria-label="Hey"
            >
              <span>Hey,</span>
            </div>

            <div className="flex flex-col gap-3">
              <p>
              I'm Balázs - a designer, builder and mentor. Co-founder of <a
                  href="https://www.internode.ai"
                  className="site-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internode
                </a>{' '}
              - the AI-native product building system for enterprise teams.
              </p>
              <p>
          Previously, studio founder and teacher - I spent 10 years designing interfaces and design systems for complex products in industries like space, robotics, fintech and government.
                </p>
              <p>
                From Hungary, currently living in California.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button>
                  Essays{' '}
                  <span className="text-[var(--text-muted)]">(coming soon)</span>
                </Button>
                <Button
                  href="https://www.linkedin.com/in/balazsketyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<LinkedInIcon />}
                >
                  LinkedIn
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
                className="text-[14px] font-normal text-[var(--text-muted)]"
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
                <a href="mailto:balazs@internode.ai" className="site-link">
                  balazs@internode.ai 
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
      </div>
    </section>
  )
}
