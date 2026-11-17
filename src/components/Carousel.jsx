import { useRef } from 'react'
import { ChevronIcon } from './Icons.jsx'

export default function Carousel({ children, className = '' }) {
  const ref = useRef(null)
  const scroll = (dir) => {
    const el = ref.current
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }
  return (
    <div className={`carousel ${className}`}>
      <button className="carousel__btn" onClick={() => scroll(-1)} aria-label="Назад"><ChevronIcon dir="left" /></button>
      <div className="carousel__track" ref={ref}>{children}</div>
      <button className="carousel__btn" onClick={() => scroll(1)} aria-label="Вперёд"><ChevronIcon dir="right" /></button>
    </div>
  )
}
