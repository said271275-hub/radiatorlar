const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
)
export const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)
export const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)
export const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...s}>
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
    <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.1a2 2 0 0 0 2-1.5L21.5 8H6" />
  </svg>
)
export const DocIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h8" />
  </svg>
)
export const ChevronIcon = ({ dir = 'down' }) => {
  const r = { down: 0, up: 180, left: 90, right: -90 }[dir]
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" {...s} style={{ transform: `rotate(${r}deg)` }}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
export const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" {...s}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)
export const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...s}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)
export const TruckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" {...s}>
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" />
    <circle cx="5.5" cy="18.5" r="2" />
    <circle cx="18.5" cy="18.5" r="2" />
  </svg>
)
