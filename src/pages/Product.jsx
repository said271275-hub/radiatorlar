import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatPrice, kits, products, specs } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import { useModal } from '../context/ModalContext.jsx'
import ProductImage from '../components/ProductImage.jsx'
import Carousel from '../components/Carousel.jsx'
import { CartIcon, TruckIcon } from '../components/Icons.jsx'

const colors = ['#ffffff', '#4b4b4b', '#3a8f34', '#e62020']

function MiniCard({ p }) {
  return (
    <Link to={`/product/${p.id}`} className="mini">
      <ProductImage src={p.image} alt={p.name} />
      <div className="mini__row"><span>{p.name.toUpperCase()}</span><b>{formatPrice(p.price)}</b></div>
    </Link>
  )
}

export default function Product() {
  const { id } = useParams()
  const p = products.find((x) => x.id === id)
  const { add } = useCart()
  const { open } = useModal()
  const [qty, setQty] = useState(1)
  const [color, setColor] = useState(0)
  const [matte, setMatte] = useState(true)
  const [tab, setTab] = useState('specs')
  const [img, setImg] = useState(0)

  if (!p) return <div className="container page"><h1 className="h1">Mahsulot topilmadi</h1><Link to="/catalog" className="link-green">Katalogga qaytish</Link></div>

  const thumbs = [p.image, p.image, p.image, p.image]

  return (
    <div className="container page">
      <nav className="crumbs">
        <Link to="/">Bosh sahifa</Link> › <Link to="/catalog">Radiatorlar</Link> › <span>Mahsulot sahifasi</span>
      </nav>

      <section className="product card">
        <div className="product__gallery">
          <div className="product__main">
            <span className="badge">-{p.discount} %</span>
            <ProductImage src={thumbs[img]} alt={p.name} />
          </div>
          <div className="product__thumbs">
            {thumbs.map((t, k) => (
              <button key={k} className={k === img ? 'is-active' : ''} onClick={() => setImg(k)}>
                <ProductImage src={t} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="product__info">
          <h1 className="h1 h1--sm">{p.name}</h1>
          <div className="muted small">Mahsulot kodi: {p.code}</div>
          <h3 className="product__sub">Xususiyatlari</h3>
          <dl className="product__specs">
            <div><dt>Issiqlik quvvati:</dt><dd>{p.heatOutput}</dd></div>
            <div><dt>Isitish maydoni:</dt><dd>{p.area}</dd></div>
            <div><dt>Material:</dt><dd>{p.material}</dd></div>
            <div><dt>Ishchi bosim:</dt><dd>{p.pressure}</dd></div>
            <div><dt>O‘qlararo masofa:</dt><dd>500 mm</dd></div>
            <div><dt>Kafolat muddati:</dt><dd>10 yil</dd></div>
          </dl>
          <button className="link-muted" onClick={() => setTab('specs')}>Barchasini ko‘rish</button>

          <div className="product__colors">
            {colors.map((c, k) => (
              <button key={c} className={k === color ? 'is-active' : ''} style={{ background: c }} onClick={() => setColor(k)} aria-label={`Rang ${k + 1}`} />
            ))}
          </div>
          <div className="product__finish">
            <label><input type="checkbox" checked={matte} onChange={() => setMatte(true)} /> Xira (matoviy)</label>
            <label><input type="checkbox" checked={!matte} onChange={() => setMatte(false)} /> Yaltiroq (glyanes)</label>
          </div>
          <div className="qty">
            Soni
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <b>{qty}</b>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <div className="product__links">
            <span><TruckIcon /> Yetkazib berish va olib ketish shartlari</span>
            <span><TruckIcon /> Menejerdan mavjudligini aniqlash</span>
          </div>
        </div>

        <div className="product__buy">
          <div className="product__price">{formatPrice(p.price)}</div>
          <div className="small"><s className="muted">{formatPrice(p.old)}</s></div>
          <div className="small">+ 150 000 so‘m <span className="link-green">to‘plam uchun</span></div>
          <button className="btn btn--outline btn--block" onClick={() => open('oneclick', p.name)}>1 bosishda xarid qilish</button>
          <button className="btn btn--green btn--block" onClick={() => add(p, qty)}>Savatga qo‘shish <CartIcon /></button>
        </div>
      </section>

      <section className="card tabs">
        <div className="tabs__head">
          <button className={tab === 'specs' ? 'is-active' : ''} onClick={() => setTab('specs')}>Xususiyatlari</button>
          <button className={tab === 'desc' ? 'is-active' : ''} onClick={() => setTab('desc')}>Tavsif</button>
          <span className="muted small tabs__dl">ko‘rsatmani yuklab olish</span>
        </div>
        {tab === 'specs' ? (
          <dl className="specs-grid">
            {specs.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        ) : (
          <p className="tabs__desc">
            {p.name} — yuqori issiqlik tarqatish ko‘rsatkichi va uzoq xizmat muddatiga ega zamonaviy isitish uskunasi.
            Xonadonlar, hovli uylari va tijorat binolari uchun juda mos keladi.
          </p>
        )}
      </section>

      <h2 className="h2">Ulash to‘plami</h2>
      <Carousel>
        {kits.map((k) => (
          <div className="mini mini--kit" key={k.id}>
            <ProductImage src={k.image} alt={k.name} />
            <div className="mini__row"><span>{k.name}</span><b>{formatPrice(k.price)}</b></div>
          </div>
        ))}
      </Carousel>

      <h2 className="h2">Sizni qiziqtirishi mumkin</h2>
      <Carousel>{products.slice(0, 5).map((x) => <MiniCard key={x.id} p={x} />)}</Carousel>

      <h2 className="h2">Yaqinda ko‘rilganlar</h2>
      <Carousel>{products.slice(3, 8).map((x) => <MiniCard key={x.id} p={x} />)}</Carousel>
    </div>
  )
}
