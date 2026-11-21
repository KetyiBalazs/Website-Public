import { useState } from 'react'

const PAST = [
  { when: 'October', place: 'Budapest, HU' },
  { when: 'July', place: 'San Francisco, US' },
  { when: 'May', place: 'Hanoi, VN' },
  { when: 'April', place: 'Singapore, SG' },
  { when: 'March', place: 'San Francisco, US' },
  { when: 'February', place: 'Mexico City, MX' },
  { when: 'January', place: 'San Francisco, US' },
]

const NOW = [{ when: 'November', place: 'Ho Chi Minh, VN', current: true }]

const NEXT = [
  { when: 'December', place: 'Tokyo, JP' },
  { when: 'February 2027', place: 'San Francisco, US' },
  { when: 'June 2027', place: 'Seoul, KR' },
]

function StopGroup({ title, stops, muted = false }) {
  return (
    <div>
      <p className="text-[var(--text)]">{title}</p>
      {stops.map((stop) => (
        <p
          key={`${stop.when}-${stop.place}`}
          className={muted ? 'text-[var(--text-muted)]' : undefined}
        >
          {stop.when}
          <span aria-hidden="true"> · </span>
          {stop.current ? (
            <span className="underline underline-offset-[3px]">{stop.place}</span>
          ) : (
            stop.place
          )}
        </p>
      ))}
    </div>
  )
}

function PastStops() {
  const [showAll, setShowAll] = useState(false)
  const stops = showAll ? PAST : PAST.slice(0, 3)

  return (
    <div>
      <p className="text-[var(--text)]">Past</p>
      {stops.map((stop) => (
        <p key={`${stop.when}-${stop.place}`} className="text-[var(--text-muted)]">
          {stop.when}
          <span aria-hidden="true"> · </span>
          {stop.place}
        </p>
      ))}
      {!showAll && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="cursor-pointer border-0 bg-transparent p-0 text-left font-[inherit] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
        >
          Show more
        </button>
      )}
    </div>
  )
}

export default function TravelPlan() {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-[16px]" aria-label="Travel plan">
      <StopGroup title="Next" stops={NEXT} />
      <StopGroup title="Now" stops={NOW} />
      <PastStops />
    </div>
  )
}
