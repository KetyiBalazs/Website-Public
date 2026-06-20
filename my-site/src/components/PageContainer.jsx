export default function PageContainer({ children, className = '' }) {
  return (
    <div
      className={['page-container flex flex-col', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
