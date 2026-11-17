import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice, products } from '../data/products.js'
import ProductImage from '../components/ProductImage.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Carousel from '../components/Carousel.jsx'

export default function Cart() {
  const { items, setQty, remove, total, clear } = useCart()
  const [done, setDone] = useState(false)
  const [deliveryType, setDeliveryType] = useState('courier')
  const [payType, setPayType] = useState('card')

  const submit = (e) => {
    e.preventDefault()
    setDone(true)
    clear()
  }

  if (done)
    return (
      <div className="container page">
        <div className="card order-success">
          <span className="order-success__icon">✓</span>
          <h1 className="h1">Buyurtmangiz muvaffaqiyatli qabul qilindi!</h1>
          <p>Menejerimiz qisqa vaqt ichida buyurtmani tasdiqlash uchun siz bilan bog‘lanadi.</p>
          <Link to="/catalog" className="btn btn--green">Xaridni davom ettirish</Link>
        </div>
      </div>
    )

  return (
    <div className="container page">
      <nav className="crumbs"><Link to="/">Bosh sahifa</Link> › <span>Savat</span></nav>
      <h1 className="h1">Savat ({items.length} ta mahsulot)</h1>

      {items.length === 0 ? (
        <div className="card cart-empty">
          <h2>Savatda hozircha mahsulot yo‘q</h2>
          <p>Katalogimizdan kerakli radiator yoki jihozlarni tanlang.</p>
          <Link to="/catalog" className="btn btn--green">Katalogga o‘tish</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart__items card">
            {items.map((i) => (
              <div className="cart__item" key={i.id}>
                <div className="cart__item-img">
                  <ProductImage src={i.image} alt={i.name} />
                </div>
                <div className="cart__item-title">
                  <Link to={`/product/${i.id}`} className="cart__name">{i.name}</Link>
                  <span className="muted small">Kodi: {i.code || i.id}</span>
                </div>
                <div className="qty">
                  <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Kamaytirish">−</button>
                  <b>{i.qty}</b>
                  <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Ko‘paytirish">+</button>
                </div>
                <div className="cart__item-price">
                  <div className="small muted">{formatPrice(i.price)} / dona</div>
                  <b className="cart__sum">{formatPrice(i.price * i.qty)}</b>
                </div>
                <button className="cart__remove" onClick={() => remove(i.id)} aria-label="O‘chirish">✕</button>
              </div>
            ))}
          </div>

          <aside className="cart__sidebar">
            <form className="cart__form card" onSubmit={submit}>
              <h3>Buyurtmani rasmiylashtirish</h3>
              
              <div className="form-group">
                <label className="small muted">Ismingiz *</label>
                <input placeholder="F.I.SH." required />
              </div>

              <div className="form-group">
                <label className="small muted">Telefon raqamingiz *</label>
                <input type="tel" placeholder="+998 90 123-45-67" required />
              </div>

              <div className="form-group">
                <label className="small muted">Yetkazib berish turi</label>
                <div className="cart-radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="delivery"
                      value="courier"
                      checked={deliveryType === 'courier'}
                      onChange={() => setDeliveryType('courier')}
                    />
                    <span>Kuryer orqali yetkazish</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={deliveryType === 'pickup'}
                      onChange={() => setDeliveryType('pickup')}
                    />
                    <span>Ombordan olib ketish</span>
                  </label>
                </div>
              </div>

              {deliveryType === 'courier' && (
                <div className="form-group">
                  <label className="small muted">Yetkazib berish manzili</label>
                  <textarea rows={2} placeholder="Shahar, tuman, ko‘cha, uy raqami" required />
                </div>
              )}

              <div className="form-group">
                <label className="small muted">To‘lov usuli</label>
                <div className="cart-radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={payType === 'card'}
                      onChange={() => setPayType('card')}
                    />
                    <span>Karta orqali (Uzcard / Humo / Visa)</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={payType === 'cash'}
                      onChange={() => setPayType('cash')}
                    />
                    <span>Qabul qilganda naqd</span>
                  </label>
                </div>
              </div>

              <div className="cart__total-box">
                <div className="cart__total-row">
                  <span>Mahsulotlar soni:</span>
                  <b>{items.reduce((acc, it) => acc + it.qty, 0)} ta</b>
                </div>
                <div className="cart__total-row cart__total-row--main">
                  <span>Jami to‘lov:</span>
                  <b>{formatPrice(total)}</b>
                </div>
              </div>

              <button className="btn btn--green btn--block" type="submit">Buyurtmani tasdiqlash</button>
            </form>
          </aside>
        </div>
      )}

      {/* Figma: "Sizni qiziqtirishi mumkin" carousel in Basket */}
      <section className="section" style={{ marginTop: '50px' }}>
        <h2 className="h2">Sizni qiziqtirishi mumkin</h2>
        <Carousel>
          {products.slice(0, 6).map((x) => (
            <div key={x.id} style={{ minWidth: '280px', maxWidth: '300px' }}>
              <ProductCard product={x} />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  )
}
