import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

const PLACES = [
  { location: [37.7749, -122.4194], size: 0.045 },
  { location: [19.4326, -99.1332], size: 0.04 },
  { location: [1.3521, 103.8198], size: 0.04 },
  { location: [21.0278, 105.8342], size: 0.04 },
  { location: [37.5665, 126.978], size: 0.04 },
  { location: [47.4979, 19.0402], size: 0.04 },
  { location: [10.8231, 106.6297], size: 0.06 },
  { location: [35.6762, 139.6503], size: 0.045 },
]

function hexToRgb01(hex) {
  const value = hex.trim().replace('#', '')
  const full = value.length === 3 ? value.split('').map((part) => part + part).join('') : value
  const color = Number.parseInt(full, 16)

  if (Number.isNaN(color) || full.length !== 6) {
    return [1, 1, 1]
  }

  return [(color >> 16) / 255, ((color >> 8) & 255) / 255, (color & 255) / 255]
}

function readPalette() {
  const styles = getComputedStyle(document.documentElement)
  const light = document.documentElement.dataset.theme === 'light'
  const ink = hexToRgb01(styles.getPropertyValue('--text') || (light ? '#0a0a0a' : '#ffffff'))
  const page = hexToRgb01(styles.getPropertyValue('--page') || (light ? '#fafafa' : '#0e0e0e'))

  if (light) {
    return {
      ink,
      land: hexToRgb01(styles.getPropertyValue('--bg-surface') || '#ffffff'),
      page,
      dark: 0,
      mapBrightness: 1.35,
    }
  }

  return {
    ink,
    land: hexToRgb01(styles.getPropertyValue('--text-muted') || '#6e6e6e'),
    page,
    dark: 1,
    mapBrightness: 0.9,
  }
}

export default function SiteGlobe() {
  const canvasRef = useRef(null)
  const pointerInteracting = useRef(null)
  const pointerMovement = useRef(0)
  const thetaMovement = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    let width = canvas.offsetWidth || 420
    let phi = 1.9
    let palette = readPalette()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

    const globe = createGlobe(canvas, {
      devicePixelRatio: pixelRatio,
      width,
      height: width,
      phi,
      theta: 0.28,
      dark: palette.dark,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: palette.mapBrightness,
      baseColor: palette.land,
      markerColor: palette.ink,
      glowColor: palette.page,
      markers: PLACES,
    })

    const draw = () => {
      if (pointerInteracting.current === null && !reducedMotion) {
        phi += 0.003
      }

      globe.update({
        phi: phi + pointerMovement.current / 220,
        theta: Math.min(0.55, Math.max(0.05, 0.28 + thetaMovement.current / 700)),
        width,
        height: width,
        dark: palette.dark,
        mapBrightness: palette.mapBrightness,
        baseColor: palette.land,
        markerColor: palette.ink,
        glowColor: palette.page,
      })
      frame = requestAnimationFrame(draw)
    }

    let frame = requestAnimationFrame(draw)

    const resize = new ResizeObserver(() => {
      width = canvas.offsetWidth || width
    })
    resize.observe(canvas)

    const theme = new MutationObserver(() => {
      palette = readPalette()
    })
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    canvas.style.opacity = '1'

    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      theme.disconnect()
      globe.destroy()
    }
  }, [])

  function stopDragging(event) {
    pointerInteracting.current = null
    event.currentTarget.style.cursor = 'grab'
  }

  return (
    <div className="mx-auto w-full p-[16px]">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Globe. Drag to turn it."
        className="aspect-square w-full cursor-grab opacity-0"
        onPointerDown={(event) => {
          pointerInteracting.current = {
            x: event.clientX - pointerMovement.current,
            y: event.clientY - thetaMovement.current,
          }
          event.currentTarget.setPointerCapture(event.pointerId)
          event.currentTarget.style.cursor = 'grabbing'
        }}
        onPointerMove={(event) => {
          if (!pointerInteracting.current) {
            return
          }

          pointerMovement.current = event.clientX - pointerInteracting.current.x
          thetaMovement.current = event.clientY - pointerInteracting.current.y
        }}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      />
    </div>
  )
}
