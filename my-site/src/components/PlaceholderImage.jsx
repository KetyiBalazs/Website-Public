export default function PlaceholderImage({ alt = 'Placeholder image', className = '' }) {
  return (
    <div
      className={`my-[20px] aspect-[4/3] w-full rounded-2xl bg-[var(--image-placeholder)] ${className}`.trim()}
      role="img"
      aria-label={alt}
    />
  )
}
