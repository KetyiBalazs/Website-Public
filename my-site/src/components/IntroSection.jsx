import Button, { PlaceholderIcon } from './Button'
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
      <div className="mx-auto flex w-full max-w-[600px] flex-col px-[30px]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3.5">
            <div
              className="flex flex-wrap gap-1.5 text-[14px] leading-[22px] text-[var(--text-muted)]"
              aria-label="Greetings"
            >
              <span>Hello,</span>
              <span lang="ja">üdvözöllek</span>
            </div>

            <div className="flex flex-col gap-3">
              <p>
              My name is Balázs Kétyi. I'm a product designer, design engineer, and educator from Hungary, now based in San Francisco.                <a
                  href="https://www.internode.ai"
                  className="site-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internode
                </a>{' '}
                — an AI-native product building system for teams.
              </p>
              <p>
          I've spent years working on complex systems and design systems, and I'm currently building Internode — an AI-native product building system for teams.
                </p>
              <p>
                Alongside that, I teach and mentor people on how to design human-centered products, adopt design and systems thinking, and integrate AI into their work in a meaningful way.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button to="/essays">Essays</Button>
                <Button
                  href="https://www.linkedin.com/in/balazsketyi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<PlaceholderIcon shape="square" />}
                >
                  LinkedIn
                </Button>
                <Button
                  href="https://github.com/KetyiBalazs"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<PlaceholderIcon shape="circle" />}
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="hidden" aria-hidden="true">
              <div className="h-px w-full bg-[var(--border-divider)]" />

              <LinkSection id="projects" title="Projects" items={projects} />

              <div className="h-px w-full bg-[var(--border-divider)]" />

              <LinkSection id="essays" title="Essays" items={getEssayLinkItems()} />
            </div>

            <div className="h-px w-full bg-[var(--border-divider)]" aria-hidden="true" />

            <section
              className="mb-6 flex flex-col gap-3.5"
              aria-labelledby="connect-title"
            >
              <h2
                id="connect-title"
                className="text-[14px] font-normal text-[var(--text-muted)]"
              >
                Connect with me
              </h2>
              <div className="flex flex-col gap-3">
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
                  , and follow me on{' '}
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
