import { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { brands, categories, products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import ProductImage from '../components/ProductImage.jsx'

const sorts = [
  { v: 'popular', label: 'mashhurlik bo‘yicha' },
  { v: 'price-asc', label: 'narx: arzondan qimmatga ↑' },
  { v: 'price-desc', label: 'narx: qimmatdan arzonga ↓' },
]

export default function Catalog() {
  const { category } = useParams()
  const [params] = useSearchParams()
  const query = (params.get('q') || '').toLowerCase()

  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [brand, setBrand] = useState('')
  const [sort, setSort] = useState('popular')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const current = categories.find((c) => c.slug === category)
  const title = current ? current.title : 'Katalog'

  const list = useMemo(() => {
    let r = products.filter((p) => (category ? p.category === category : true))
    if (query) r = r.filter((p) => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query))
    if (min) r = r.filter((p) => p.price >= Number(min))
    if (max) r = r.filter((p) => p.price <= Number(max))
    if (brand) r = r.filter((p) => p.brand === brand)
    if (sort === 'price-asc') r = [...r].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') r = [...r].sort((a, b) => b.price - a.price)
    return r
  }, [category, query, min, max, brand, sort])

  const reset = () => {
    setMin('')
    setMax('')
    setBrand('')
  }

  return (
    <div className="container page">
      <nav className="crumbs">
        <Link to="/">Bosh sahifa</Link> › <span>{title}</span>
      </nav>

      <div className="catalog-head">
        <h1 className="h1">{title}</h1>
        <div className="catalog-sort">
          <span>Saralash:</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {sorts.map((s) => (
              <option key={s.v} value={s.v}>{s.label}</option>
            ))}
          </select>
          <button className="btn btn--outline btn--sm catalog-filters-btn" onClick={() => setFiltersOpen((v) => !v)}>
            Filtrlar
          </button>
        </div>
      </div>

      <div className="catalog-layout">
        <aside className={`filters ${filtersOpen ? 'filters--open' : ''}`}>
          <div className="card">
            <h3>Filtrlar</h3>
            <div className="filter-group">
              <label>Narx, so‘m</label>
              <div className="price-inputs">
                <input placeholder="...dan" value={min} onChange={(e) => setMin(e.target.value)} type="number" />
                <input placeholder="...gacha" value={max} onChange={(e) => setMax(e.target.value)} type="number" />
              </div>
            </div>

            <div className="filter-group">
              <label>Brend</label>
              <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="">Barcha brendlar</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="filter-actions">
              <button className="btn btn--green btn--block" onClick={() => setFiltersOpen(false)}>Qo‘llash</button>
              <button className="btn btn--outline btn--block" onClick={reset}>Tozalash</button>
            </div>
          </div>

          <div className="catalog-banner">
            <ProductImage src="/images/side-1.jpg" alt="Chegirma!" />
          </div>
        </aside>

        <section className="catalog-content">
          {list.length === 0 ? (
            <div className="card"><p>Hech narsa topilmadi. Qidiruv parametrlarini o‘zgartirib ko‘ring.</p></div>
          ) : (
            <div className="product-grid">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
