import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { brands, products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import ProductImage from '../components/ProductImage.jsx'
import QuestionBanner from '../components/QuestionBanner.jsx'

const brandDescriptions = {
  Zehnder: "Zehnder (Germaniya) — yuqori sifatli dizayn-radiatorlar va mikroiqlim uskunalarini ishlab chiqaruvchi jahon yetakchisi.",
  Rommer: "Rommer — mustahkam po‘lat va bimetall radiatorlar bilan tanilgan, mustahkamlik va samaradorlikni birlashtirgan brend.",
  Zenden: "Zenden — zamonaviy texnologiyalar asosida tayyorlangan ishonchli isitish jihozlari va issiq pol tizimlari.",
  Askon: "Askon — pol osti va devoriy konvektorlar bo‘yicha ixtisoslashgan innovatsion ishlab chiqaruvchi.",
  Kermi: "Kermi (Germaniya) — ilg‘or X2 texnologiyasi bilan energiya tejovchi premium panelli radiatorlar brendi.",
  Valtec: "Valtec — mukammal muhandislik santexnikasi va isitish tizimlari armaturalari ishlab chiqaruvchisi."
}

export default function Brand() {
  const { name } = useParams()
  const currentBrand = brands.find((b) => b.toLowerCase() === (name || '').toLowerCase()) || name || 'Zehnder'
  const [subcat, setSubcat] = useState('all')

  const subcats = [
    { id: 'all', title: 'Barchasi' },
    { id: 'tubular', title: 'Trubkali' },
    { id: 'bimetal', title: 'Bimetall' },
    { id: 'aluminium', title: 'Alyuminiy' },
    { id: 'panel', title: 'Panelli' },
  ]

  const list = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = p.brand.toLowerCase() === currentBrand.toLowerCase()
      const matchSub = subcat === 'all' || p.category === subcat
      return matchBrand && matchSub
    })
  }, [currentBrand, subcat])

  const desc = brandDescriptions[currentBrand] || `${currentBrand} — ishonchli va zamonaviy isitish uskunalari ishlab chiqaruvchisi.`

  return (
    <div className="page-wrap">
      <div className="container page">
        <nav className="crumbs">
          <Link to="/">Bosh sahifa</Link> › <Link to="/catalog">Brendlar</Link> › <span>{currentBrand}</span>
        </nav>

        <div className="brand-header card">
          <div className="brand-header__info">
            <h1 className="h1">{currentBrand.toUpperCase()}</h1>
            <p className="brand-header__desc">{desc}</p>
          </div>
          <div className="brand-header__logo">
            <ProductImage src={`/images/brand-${currentBrand}.png`} alt={currentBrand} />
          </div>
        </div>

        <div className="brand-nav">
          {subcats.map((sc) => (
            <button
              key={sc.id}
              className={`brand-nav__item ${subcat === sc.id ? 'is-active' : ''}`}
              onClick={() => setSubcat(sc.id)}
            >
              {sc.title}
            </button>
          ))}
        </div>

        <div className="brand-content">
          {list.length === 0 ? (
            <div className="card">
              <p>Bu toifada hozircha mahsulotlar mavjud emas.</p>
              <Link to="/catalog" className="btn btn--green">Barcha mahsulotlar</Link>
            </div>
          ) : (
            <div className="product-grid">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      <QuestionBanner
        title={`${currentBrand} uskunalarini hisoblash kerakmi?`}
        subtitle="Bizning muhandislar uyingiz yoki obyektingiz uchun bepul hisob-kitob qilib beradi."
      />
    </div>
  )
}
