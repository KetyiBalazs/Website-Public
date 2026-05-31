import { useEffect, useState } from 'react'

const LOCATION = 'Hanoi, Vietnam'
const TIME_ZONE = 'Asia/Ho_Chi_Minh'

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
      <p className="text-[var(--text)]">My current location is:</p>
      <p>
        {LOCATION} · {timeLabel}
      </p>
    </>
  )
}
