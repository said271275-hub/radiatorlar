import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'
import ProductImage from '../components/ProductImage.jsx'
import Carousel from '../components/Carousel.jsx'
import QuestionBanner from '../components/QuestionBanner.jsx'
import { ChevronIcon } from '../components/Icons.jsx'

const slides = ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg']
const brandLogos = ['Zehnder', 'Rommer', 'Zenden', 'Askon', 'Kermi']

export default function Home() {
  const [i, setI] = useState(0)
  const go = (d) => setI((v) => (v + d + slides.length) % slides.length)

  return (
    <>
      <section className="hero">
        <ProductImage key={i} src={slides[i]} alt="Dizayn-radiator" className="hero__img" />
        <button className="hero__arrow hero__arrow--l" onClick={() => go(-1)} aria-label="Orqaga"><ChevronIcon dir="left" /></button>
        <button className="hero__arrow hero__arrow--r" onClick={() => go(1)} aria-label="Oldinga"><ChevronIcon dir="right" /></button>
      </section>

      <section className="section container">
        <h2 className="h2">Mahsulotlar katalogi</h2>
        <div className="cat-grid">
          {categories.map((c) => (
            <Link key={c.slug} to={`/catalog/${c.slug}`} className="cat-card">
              <ProductImage src={c.image} alt={c.title} />
              <span>{c.title}</span>
              <span className="btn btn--outline btn--block cat-card__btn">Katalogga o‘tish</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2 className="h2">Bizning hamkor brendlar</h2>
        <Carousel className="brands">
          {brandLogos.map((b, k) => (
            <Link key={k} to={`/brand/${b}`} className="brand-logo">
              <ProductImage src={`/images/brand-${b}.png`} alt={b} />
              <span className="brand-fallback">{b}</span>
            </Link>
          ))}
        </Carousel>
      </section>

      <section className="about-block">
        <div className="container about-block__grid">
          <div>
            <h2 className="h2">Biz haqimizda</h2>
            <p><b className="green">«Issiq Oqim»</b> kompaniyasi jahon texnologik yangiliklari va isitish uskunalari dizayni tendensiyalarini doimiy kuzatib boradi.</p>
            <p>Bozordagi bir xil andozadagi uskunalardan farqli o‘laroq, biz yangi avlod mahsulotlarini — ixcham, zamonaviy va sinovdan o‘tgan nostandart modellarni taqdim etamiz.</p>
            <p>Bizning internet-do‘konimizda nafaqat standart modellarni tanlashingiz, balki o‘zingizning interyeringizga mos individual dizayndagi mahsulotlarga ham buyurtma berishingiz mumkin.</p>
            <p>Har bir mahsulot ishlab chiqarishda qatʼiy sifat nazoratidan o‘tadi va barcha xalqaro xavfsizlik hamda sifat standartlariga javob beradi.</p>
            <p>Uyingizga qulaylik, iliqlik va ishonchlilik ulashamiz.<br />Sizga g‘amxo‘rlik bilan!</p>
          </div>
          <ProductImage src="/images/about.jpg" alt="Kompaniya haqida" className="about-block__img" />
        </div>
      </section>

      <section className="section container promos">
        <ProductImage src="/images/promo-1.jpg" alt="2 ta konvektorga -5% chegirma" className="promos__big" />
        <div className="promos__side">
          <ProductImage src="/images/promo-2.jpg" alt="-5% chegirma" />
          <ProductImage src="/images/promo-3.jpg" alt="Panelli radiatorlarga -10% chegirma" />
        </div>
      </section>

      <QuestionBanner
        title="Isitish tizimini hisoblash kerakmi?"
        subtitle="Raqamingizni qoldiring, muhandislarimiz 15 daqiqa ichida sizga to‘liq hisob-kitob qilib beradi."
      />
    </>
  )
}
