import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext.jsx'
import QuestionBanner from '../components/QuestionBanner.jsx'
import ProductImage from '../components/ProductImage.jsx'

export function Delivery() {
  const [tab, setTab] = useState('delivery')

  return (
    <div className="page-wrap">
      <div className="container page">
        <nav className="crumbs">
          <Link to="/">Bosh sahifa</Link> › <span>Yetkazib berish va to‘lov</span>
        </nav>

        <h1 className="h1">Yetkazib berish va to‘lov</h1>

        <div className="info-tabs">
          <button className={`info-tab ${tab === 'delivery' ? 'is-active' : ''}`} onClick={() => setTab('delivery')}>
            Yetkazib berish
          </button>
          <button className={`info-tab ${tab === 'payment' ? 'is-active' : ''}`} onClick={() => setTab('payment')}>
            To‘lov usullari
          </button>
        </div>

        {tab === 'delivery' ? (
          <div className="info-section">
            <div className="delivery-steps">
              <div className="delivery-step card">
                <span className="delivery-step__num">1</span>
                <h3>Buyurtma bering</h3>
                <p>Sayt orqali yoki mutaxassisimizga qo‘ng‘iroq qilib, kerakli radiatorlar va to‘plamlarni tanlang.</p>
              </div>
              <div className="delivery-step card">
                <span className="delivery-step__num">2</span>
                <h3>Manzilni tanlang</h3>
                <p>Kuryer orqali eshikkacha yetkazib berish yoki omborimizdan o‘zingiz olib ketish usulini tanlang.</p>
              </div>
              <div className="delivery-step card">
                <span className="delivery-step__num">3</span>
                <h3>Qabul qilib oling</h3>
                <p>Mahsulotni sifatini va butunligini tekshirib, qulay usulda qabul qiling.</p>
              </div>
            </div>

            <div className="card delivery-details">
              <h2>Toshkent shahri va viloyatlar bo‘ylab yetkazib berish</h2>
              <p>Omborda mavjud bo‘lgan tovarlar kelishuvga ko‘ra <b>1-2 ish kuni</b> ichida yetkaziladi. Boshqa ombordan keltiriladigan mahsulotlar uchun muddat 3-4 ish kunigacha bo‘lishi mumkin.</p>

              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Yetkazib berish hududi</th>
                      <th>Yuk og‘irligi</th>
                      <th>Taxminiy narx</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Toshkent shahri ichida</td>
                      <td>40 kg gacha</td>
                      <td>50 000 so‘m</td>
                    </tr>
                    <tr>
                      <td>Toshkent shahri ichida</td>
                      <td>40 kg dan 100 kg gacha</td>
                      <td>100 000 so‘m</td>
                    </tr>
                    <tr>
                      <td>Toshkent shahri ichida</td>
                      <td>100 kg dan 300 kg gacha</td>
                      <td>180 000 so‘m</td>
                    </tr>
                    <tr>
                      <td>Shahar tashqarisi / Viloyatlar</td>
                      <td>Masofaga qarab</td>
                      <td>Har bir km uchun qo‘shimcha tarif</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>O‘zi olib ketish (Samovivoz):</h3>
              <p>Buyurtmani omborimizdan bepul olib ketishingiz mumkin: <b>Toshkent sh., Chilonzor tumani</b>, Dushanba - Juma: 09:00 — 20:00.</p>
            </div>
          </div>
        ) : (
          <div className="info-section">
            <div className="payment-grid">
              <div className="card payment-card">
                <div className="payment-card__badge">1</div>
                <h3>Naqd pul orqali</h3>
                <p>Buyurtmani omborimizdan olganda yoki kuryer keltirganda to‘liq tekshirib naqd pulda to‘lash imkoniyati.</p>
              </div>

              <div className="card payment-card">
                <div className="payment-card__badge">2</div>
                <h3>Bank kartalari (Uzcard, Humo, Visa)</h3>
                <p>Istalgan milliy va xalqaro bank kartalari, shuningdek to‘lov ilovalari (Payme, Click) orqali to‘lov.</p>
              </div>

              <div className="card payment-card">
                <div className="payment-card__badge">3</div>
                <h3>Hisob-raqamga pul o‘tkazish (Yuridik shaxslar)</h3>
                <p>Tashkilotlar va korxonalar uchun rasmiy shartnoma, elektron hisob-faktura (shchyot-faktura) va nakladnoy bilan to‘lov.</p>
              </div>
            </div>

            <div className="card payment-notice">
              <h3>Muhim eslatma:</h3>
              <p>Pul o‘tkazishda to‘lov maqsadida buyurtma raqamini ko‘rsatishni unutmang. Barcha tasdiqlovchi hujjatlar tovar bilan birga topshiriladi.</p>
            </div>
          </div>
        )}
      </div>

      <QuestionBanner
        title="Yetkazib berish bo‘yicha savollaringiz bormi?"
        subtitle="Menejerimiz qulay vaqt va aniq manzilni belgilashda yordam beradi."
      />
    </div>
  )
}

export const Payment = Delivery

export function About() {
  return (
    <div className="page-wrap">
      <div className="container page">
        <nav className="crumbs">
          <Link to="/">Bosh sahifa</Link> › <span>Biz haqimizda</span>
        </nav>

        <h1 className="h1">Biz haqimizda</h1>

        <div className="about-hero card">
          <div className="about-hero__text">
            <h2>«Issiq Oqim» — xonadoningizdagi zamonaviy iliqlik</h2>
            <p>Biz isitish tizimlari bozorida ko‘p yillik tajribaga ega bo‘lib, jahonning eng ilg‘or brendlari (Zehnder, Rommer, Zenden, Kermi, Askon) bilan to‘g‘ridan-to‘g‘ri hamkorlik qilamiz.</p>
            <p>Bozordagi bir xil andozadagi uskunalardan farqli o‘laroq, biz har bir interyer uchun estetik va yuqori samarali yechimlarni taklif etamiz. Dizayn-radiatorlar nafaqat uyni isitadi, balki xonangizning zamonaviy ko‘rinishini taʼminlaydi.</p>
          </div>
          <div className="about-hero__img">
            <ProductImage src="/images/about.jpg" alt="Issiq Oqim" />
          </div>
        </div>

        <div className="about-features">
          <div className="card feature-box">
            <h3>Bizning afzalliklarimiz:</h3>
            <ul>
              <li>Keng assortiment — har qanday xona uchun o‘lcham va ranglar</li>
              <li>Obyekt uchun muhandislik hisob-kitobini bepul amalga oshirish</li>
              <li>Buyurtmalarni tezkor qayta ishlash va ombordan to‘g‘ridan-to‘g‘ri yetkazish</li>
              <li>Professional konsultantlar va montaj maslahatlari</li>
            </ul>
          </div>

          <div className="card feature-box">
            <h3>Uskunalar sifati:</h3>
            <ul>
              <li>Faqat rasmiy va sertifikatlangan Yevropa hamda xalqaro brendlar</li>
              <li>Ko‘p bosqichli zavod sifat nazorati</li>
              <li>Maksimal 10-25 bar bosimga bardoshli modellar</li>
              <li>Barcha uskunalarga 10 yilgacha rasmiy kafolat</li>
            </ul>
          </div>
        </div>
      </div>

      <QuestionBanner
        title="Obyektingiz uchun mos uskunani tanlashga yordam beramiz"
        subtitle="Raqamingizni qoldiring, muhandislarimiz eng optimal loyihani tayyorlab berishadi."
      />
    </div>
  )
}

export function Contacts() {
  const { open } = useModal()

  return (
    <div className="page-wrap">
      <div className="container page">
        <nav className="crumbs">
          <Link to="/">Bosh sahifa</Link> › <span>Aloqa</span>
        </nav>

        <h1 className="h1">Biz bilan bog‘lanish</h1>

        <div className="contacts-grid">
          <div className="card contacts-info">
            <h2>Bizning manzil va aloqa:</h2>
            <div className="contacts-item">
              <b>Manzil:</b>
              <p>Toshkent shahri, Chilonzor tumani, Bunyodkor shoh ko‘chasi</p>
            </div>
            <div className="contacts-item">
              <b>Ish vaqti:</b>
              <p>Dushanba – Juma: 09:00 — 20:00<br />Shanba – Yakshanba: 10:00 — 18:00</p>
            </div>
            <div className="contacts-item">
              <b>Telefon:</b>
              <p><a href="tel:+998901234567" className="link-green">+998 (90) 123-45-67</a></p>
            </div>
            <div className="contacts-item">
              <b>Elektron pochta:</b>
              <p><a href="mailto:info@issiqoqim.uz">info@issiqoqim.uz</a></p>
            </div>
            <div className="contacts-item">
              <b>Mo‘ljal:</b>
              <p>Metro bekati yonida, qulay avtoturargoh mavjud.</p>
            </div>
            <button className="btn btn--green" onClick={() => open('call')}>Qo‘ng‘iroqqa buyurtma</button>
          </div>

          <div className="card contacts-map">
            <h3>Xaritada ko‘rish</h3>
            <div className="map-placeholder">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47960.05705353846!2d69.19124!3d41.2858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a33a1e4a2d3%3A0x6b441a182c6!2zQ2hpbG9uem9yLCBUYXNoa2VudA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="320"
                style={{ border: 0, borderRadius: '8px' }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <QuestionBanner
        title="Savollaringiz bormi?"
        subtitle="Xabar yuboring, biz sizga tez orada qayta qo‘ng‘iroq qilamiz."
      />
    </div>
  )
}

export function NotFound() {
  return (
    <div className="container page">
      <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 className="h1">404</h1>
        <h2>Sahifa topilmadi</h2>
        <p>Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o‘chirilgan.</p>
        <Link to="/" className="btn btn--green" style={{ display: 'inline-block', marginTop: '20px' }}>
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  )
}
