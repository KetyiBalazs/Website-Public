import Button from './Button'

export default function IntroSection() {
  return (
    <section className="flex w-full flex-col items-start gap-y-8 px-8 py-16 text-left md:px-12 md:py-24">
      <p className="text-sm text-[var(--text)]">lorem, ipsum, dolor</p>

      <h1 className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-[var(--text-h)] md:text-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-h)]">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore.
      </p>

      <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-h)]">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
        omnis iste natus error sit voluptatem.
      </p>

      <p className="max-w-2xl text-lg text-[var(--text-h)]">
        Explore my{' '}
        <a
          href="#work"
          className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
        >
          selected work
        </a>
        .
      </p>

      <Button href="#contact">Get in touch</Button>
    </section>
  )
}
