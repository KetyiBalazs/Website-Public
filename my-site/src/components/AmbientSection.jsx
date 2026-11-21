const VIDEOS = [
  {
    title: 'Budapest',
    place: 'Budapest, Hungary',
    href: 'https://youtu.be/n97hfiEYuOY',
    image: '/build/budapest.jpg',
  },
  {
    title: 'Vietnam',
    place: 'Nha Trang, Vietnam',
    href: 'https://youtu.be/70x7Y9-pZzA',
    image: '/build/vietnam.jpg',
  },
  {
    title: 'Hackathon Day I',
    place: 'San Francisco',
    href: 'https://youtu.be/HGR6guTO7lo',
    image: '/build/day-1.jpg',
  },
  {
    title: 'Hackathon House II',
    place: 'San Francisco',
    href: 'https://youtu.be/T2N6cRzoWkI',
    image: '/build/day-2.jpg',
  },
  {
    title: 'Hackathon House III',
    place: 'San Francisco',
    href: 'https://youtu.be/w4hn3DezgP4',
    image: '/build/day-3.jpg',
  },
]

function ArrowUpRightIcon() {
  return (
    <svg
      className="ml-1 inline-block size-[16px] shrink-0 align-[-3px]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.75 11.25 11.25 4.75M6.25 4.75h5v5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AmbientSection() {
  return (
    <section aria-labelledby="build-title" className="pt-[56px] pb-[32px]">
      <h2 id="build-title" className="flex flex-wrap items-baseline gap-2 font-normal">
        <span className="font-medium text-[var(--text)]">Build in public</span>
        <span className="text-[var(--text-muted)]" aria-hidden="true">
          ·
        </span>
        <span className="text-[var(--text-muted)]">
          Videos where I'm working on building our startups.
        </span>
      </h2>
      <div className="build-videos mt-[16px] grid grid-cols-2 gap-[16px]">
        {VIDEOS.map((video) => (
          <a
            key={video.href}
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-[16px]"
          >
            <img
              src={video.image}
              alt=""
              width={1024}
              height={576}
              className="aspect-video w-full rounded-2xl object-cover"
            />
            <span className="flex min-w-0 flex-col">
              <span className="font-medium text-[var(--text)]">
                {video.title}
                <ArrowUpRightIcon />
              </span>
              {video.place ? (
                <span className="text-[var(--text-muted)]">{video.place}</span>
              ) : null}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
