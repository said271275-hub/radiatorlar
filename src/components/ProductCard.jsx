import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice } from '../data/products.js'
import ProductImage from './ProductImage.jsx'
import { CartIcon } from './Icons.jsx'

export default function ProductCard({ product: p }) {
  const { add } = useCart()
  return (
    <article className="pcard">
      <Link to={`/product/${p.id}`} className="pcard__media">
        <span className="badge">-{p.discount} %</span>
        <ProductImage src={p.image} alt={p.name} />
      </Link>
      <div className="pcard__head">
        <Link to={`/product/${p.id}`} className="pcard__name">{p.name}</Link>
        <span className="pcard__code">mahsulot kodi: {p.code}</span>
      </div>
      <div className="pcard__body">
        <dl>
          <div><dt>Maydon:</dt><dd>{p.area}</dd></div>
          <div><dt>Qo‘llanishi:</dt><dd>{p.application}</dd></div>
          <div className="pcard__more"><dt>Material:</dt><dd>{p.material}</dd></div>
          <div className="pcard__more"><dt>Bosim:</dt><dd>{p.pressure}</dd></div>
        </dl>
        <div className="pcard__price">
          <s>{formatPrice(p.old)}</s>
          <b>{formatPrice(p.price)}</b>
        </div>
      </div>
      <button className="btn btn--green btn--block pcard__add" onClick={() => add(p)}>
        Savatga qo‘shish <CartIcon />
      </button>
    </article>
  )
}
