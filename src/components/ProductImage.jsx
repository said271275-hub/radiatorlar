import { useState } from 'react'

// Показывает картинку из /public/images. Если файла нет — аккуратная заглушка.
export default function ProductImage({ src, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div className={`img-placeholder ${className}`} role="img" aria-label={alt}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    )
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
