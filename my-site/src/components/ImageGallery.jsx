import { useEffect, useRef, useState } from 'react'
import smallImage from '../assets/small.jpg'

const CANVAS_HEIGHT = 200
const IMAGE_WIDTH = 500
const IMAGE_HEIGHT = 500
const RECT_WIDTH = 140
const RECT_HEIGHT = Math.round(RECT_WIDTH * (IMAGE_HEIGHT / IMAGE_WIDTH))

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function ImageGallery() {
  const canvasRef = useRef(null)
  const dragState = useRef(null)
  const [position, setPosition] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const { width, height } = canvas.getBoundingClientRect()
    setPosition({
      x: (width - RECT_WIDTH) / 2,
      y: (height - RECT_HEIGHT) / 2,
    })
  }, [])

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    }
  }

  const handlePointerMove = (event) => {
    if (!dragState.current || dragState.current.pointerId !== event.pointerId) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const { width, height } = canvas.getBoundingClientRect()
    const dx = event.clientX - dragState.current.startX
    const dy = event.clientY - dragState.current.startY

    setPosition({
      x: clamp(dragState.current.originX + dx, 0, width - RECT_WIDTH),
      y: clamp(dragState.current.originY + dy, 0, height - RECT_HEIGHT),
    })
  }

  const handlePointerEnd = (event) => {
    if (!dragState.current || dragState.current.pointerId !== event.pointerId) {
      return
    }

    dragState.current = null
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <section aria-label="Gallery" className="mt-7 flex flex-col gap-3.5">
      <div
        ref={canvasRef}
        className="relative h-[200px] w-full overflow-visible"
        aria-label="Image gallery canvas"
      >
        {position && (
          <div
            className="absolute cursor-grab touch-none overflow-hidden rounded-2xl active:cursor-grabbing"
            style={{
              width: RECT_WIDTH,
              height: RECT_HEIGHT,
              transform: `translate(${position.x}px, ${position.y}px) rotate(-10deg)`,
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
          >
            <img
              src={smallImage}
              alt="Gallery photo"
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
              draggable={false}
              className="h-full w-full object-cover select-none"
            />
          </div>
        )}
      </div>
    </section>
  )
}
