import { useEffect, useState } from 'react'

const LOCATION = 'Ho Chi Minh, Vietnam'
const TIME_ZONE = 'Asia/Ho_Chi_Minh'

const NEXT_LOCATIONS = [
  { place: 'Tokyo, Japan', when: 'until the end of January' },
  { place: 'San Francisco, USA', when: 'from February' },
]

function formatLocalTime() {
  const now = new Date()
  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: TIME_ZONE,
  }).format(now)

  const offset =
    new Intl.DateTimeFormat('en-US', {
      timeZone: TIME_ZONE,
      timeZoneName: 'shortOffset',
    })
      .formatToParts(now)
      .find((part) => part.type === 'timeZoneName')?.value ?? 'GMT+7'

  return `${time} ${offset}`
}

export default function LiveLocation() {
  const [timeLabel, setTimeLabel] = useState(formatLocalTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLabel(formatLocalTime())
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p className="text-[var(--text)]">Current location is:</p>
      <p className="flex items-center gap-2">
        <span>{LOCATION}</span>
        <span aria-hidden="true">·</span>
        <span>{timeLabel}</span>
      </p>
      <div className="pt-8">
        <p className="text-[var(--text)]">Next:</p>
        {NEXT_LOCATIONS.map(({ place, when }) => (
          <p key={place} className="flex items-center gap-2">
            <span>{place}</span>
            <span aria-hidden="true">·</span>
            <span>{when}</span>
          </p>
        ))}
      </div>
    </>
  )
}
