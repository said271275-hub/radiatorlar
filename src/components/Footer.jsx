import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext.jsx'
import { PhoneIcon, PinIcon, SearchIcon } from './Icons.jsx'

const cols = [
  [
    ['Trubkali radiatorlar', '/catalog/tubular'],
    ['Bimetall radiatorlar', '/catalog/bimetal'],
    ['Alyuminiy radiatorlar', '/catalog/aluminium'],
    ['Panelli radiatorlar', '/catalog/panel'],
    ['Sochiq quritgichlar', '/catalog/towel'],
  ],
  [
    ['Pol osti konvektorlari', '/catalog/convectors'],
    ['Pol usti konvektorlari', '/catalog/convectors'],
    ['Issiq pollar', '/catalog/floor'],
    ['Aksessuarlar', '/catalog'],
    ['Brendlar', '/catalog'],
  ],
  [
    ['Katalog', '/catalog'],
    ['Brendlar', '/catalog'],
    ['Sertifikatlar', '/about'],
    ['Xizmatlar', '/about'],
    ['Biz haqimizda', '/about'],
    ['Yetkazib berish va to‘lov', '/delivery'],
  ],
]

export default function Footer() {
  const { open } = useModal()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="logo logo--white">
            <img src="/images/logo.svg" alt="Issiq Oqim" style={{ height: '36px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentNode.innerText = 'Issiq Oqim'; }} />
          </div>
          <div className="footer__copy">© 2026 Issiq Oqim. Barcha huquqlar himoyalangan</div>
        </div>
        {cols.map((c, i) => (
          <ul key={i} className="footer__col">
            {c.map(([label, to]) => (
              <li key={label}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        ))}
        <div className="footer__contacts">
          <div className="search search--white">
            <input placeholder="Qidiruv..." />
            <button aria-label="Qidirish"><SearchIcon /></button>
          </div>
          <div className="footer__row"><PinIcon /><div>Toshkent sh., Chilonzor<div className="small">Dush-Juma 9:00-20:00</div></div></div>
          <div className="footer__row">
            <PhoneIcon />
            <div>
              +998 (90) 123-45-67
              <div className="small">info@issiqoqim.uz</div>
              <button className="footer__link" onClick={() => open('call')}>Qo‘ng‘iroqqa buyurtma</button>{' '}
              <button className="footer__link" onClick={() => open('calc')}>Hisob-kitob qilish</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
