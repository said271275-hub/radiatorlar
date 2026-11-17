import { useState, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useModal } from '../context/ModalContext.jsx'
import { brands, formatPrice } from '../data/products.js'
import ProductImage from './ProductImage.jsx'
import { CartIcon, ChevronIcon, DocIcon, MenuIcon, CloseIcon, PhoneIcon, PinIcon, SearchIcon } from './Icons.jsx'

const radiatorCategories = [
  { slug: 'tubular', label: 'Trubkali radiatorlar' },
  { slug: 'bimetal', label: 'Bimetall radiatorlar' },
  { slug: 'aluminium', label: 'Alyuminiy radiatorlar' },
  { slug: 'panel', label: 'Panelli radiatorlar' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [cartPreview, setCartPreview] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [q, setQ] = useState('')
  const { count, items, total } = useCart()
  const { open: openModal } = useModal()
  const navigate = useNavigate()
  const menuTimer = useRef(null)

  const submit = (e) => {
    e.preventDefault()
    navigate(`/catalog?q=${encodeURIComponent(q)}`)
    setOpen(false)
  }

  const handleMouseEnter = (menu) => {
    if (menuTimer.current) clearTimeout(menuTimer.current)
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    menuTimer.current = setTimeout(() => {
      setActiveMenu(null)
    }, 200)
  }

  return (
    <header className="header">
      <div className="container header__top">
        <button className="burger" aria-label="Menyu" onClick={() => setOpen((v) => !v)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <Link to="/" className="logo">
          <img
            src="/images/logo.svg"
            alt="Issiq Oqim"
            style={{ height: '38px', width: 'auto', display: 'block' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentNode.innerText = 'Issiq Oqim'
            }}
          />
        </Link>

        <div className="header__contacts">
          <div className="header__contact">
            <PhoneIcon />
            <div>
              <a className="header__phone" href="tel:+998901234567">+998 (90) 123-45-67</a>
              <div className="muted small">info@issiqoqim.uz</div>
              <button className="link-green" onClick={() => openModal('call')}>Qo‘ng‘iroqqa buyurtma</button>
            </div>
          </div>
          <div className="header__contact">
            <PinIcon />
            <div>
              <div className="header__addr">Toshkent sh., Chilonzor</div>
              <div className="muted small">Dush-Juma 9:00-20:00</div>
            </div>
          </div>
        </div>

        <form className="search" onSubmit={submit}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Qidiruv..." />
          <button aria-label="Qidirish"><SearchIcon /></button>
        </form>

        <button className="btn btn--green btn--sm header__calc" onClick={() => openModal('calc')}>
          <DocIcon /> Hisob-kitob qilish
        </button>

        {/* Group 89: Mini cart widget */}
        <div
          className="header__cart-wrapper"
          onMouseEnter={() => setCartPreview(true)}
          onMouseLeave={() => setCartPreview(false)}
        >
          <Link to="/cart" className="header__cart" aria-label="Savat">
            <CartIcon />
            {count > 0 && <b className="cart-badge">{count}</b>}
          </Link>

          {cartPreview && (
            <div className="mini-cart-dropdown card">
              <div className="mini-cart__header">
                <b>Savatdagi mahsulotlar: {count} ta</b>
              </div>
              {items.length === 0 ? (
                <p className="small muted">Savat hozircha bo‘sh</p>
              ) : (
                <>
                  <div className="mini-cart__list">
                    {items.slice(0, 3).map((it) => (
                      <div className="mini-cart__item" key={it.id}>
                        <ProductImage src={it.image} alt={it.name} />
                        <div className="mini-cart__info">
                          <span className="small">{it.name}</span>
                          <b>{formatPrice(it.price)} × {it.qty}</b>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mini-cart__total">
                    <span>Jami:</span>
                    <b>{formatPrice(total)}</b>
                  </div>
                  <Link to="/cart" className="btn btn--green btn--block btn--sm">
                    Savatga o‘tish
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <nav className={`container nav ${open ? 'nav--open' : ''}`}>
        <div
          className="nav__item"
          onMouseEnter={() => handleMouseEnter('radiators')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/catalog/radiators" className="nav__link" onClick={() => setOpen(false)}>
            Radiatorlar <ChevronIcon />
          </NavLink>
          {activeMenu === 'radiators' && (
            <div className="nav__dropdown card">
              {radiatorCategories.map((rc) => (
                <Link
                  key={rc.slug}
                  to={`/catalog/${rc.slug}`}
                  className="nav__dropdown-item"
                  onClick={() => { setActiveMenu(null); setOpen(false); }}
                >
                  {rc.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/catalog/towel" className="nav__link" onClick={() => setOpen(false)}>
          Sochiq quritgichlar
        </NavLink>
        <NavLink to="/catalog/convectors" className="nav__link" onClick={() => setOpen(false)}>
          Konvektorlar
        </NavLink>
        <NavLink to="/catalog/floor" className="nav__link" onClick={() => setOpen(false)}>
          Issiq pollar
        </NavLink>
        <NavLink to="/catalog" className="nav__link" onClick={() => setOpen(false)}>
          Aksessuarlar
        </NavLink>

        <div
          className="nav__item"
          onMouseEnter={() => handleMouseEnter('brands')}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to="/catalog" className="nav__link" onClick={() => setOpen(false)}>
            Brendlar <ChevronIcon />
          </NavLink>
          {activeMenu === 'brands' && (
            <div className="nav__dropdown card nav__dropdown--brands">
              {brands.map((b) => (
                <Link
                  key={b}
                  to={`/brand/${b}`}
                  className="nav__dropdown-item"
                  onClick={() => { setActiveMenu(null); setOpen(false); }}
                >
                  {b}
                </Link>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/delivery" className="nav__link" onClick={() => setOpen(false)}>
          Yetkazib berish va to‘lov
        </NavLink>
        <NavLink to="/about" className="nav__link" onClick={() => setOpen(false)}>
          Biz haqimizda
        </NavLink>
        <NavLink to="/contacts" className="nav__link" onClick={() => setOpen(false)}>
          Aloqa
        </NavLink>
      </nav>
    </header>
  )
}
