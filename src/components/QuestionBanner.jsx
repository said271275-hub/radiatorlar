import { useState } from 'react'

export default function QuestionBanner({ title = 'Savollaringiz qoldimi?', subtitle = 'Mutaxassisimiz sizga to‘g‘ri model va komplektatsiyani tanlashda yordam beradi' }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="qbanner">
      <div className="container qbanner__inner">
        <div className="qbanner__content">
          <h2 className="qbanner__title">{title}</h2>
          <p className="qbanner__desc">{subtitle}</p>

          {sent ? (
            <div className="qbanner__success">
              ✓ Rahmat! Arizangiz qabul qilindi. Tez orada mutaxassisimiz siz bilan bog‘lanadi.
            </div>
          ) : (
            <form className="qbanner__form" onSubmit={handleSubmit}>
              <div className="qbanner__inputs">
                <input
                  type="text"
                  placeholder="Ismingiz"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Elektron pochta"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="qbanner__action">
                <button type="submit" className="btn btn--green">Yuborish</button>
                <label className="qbanner__agree">
                  <input type="checkbox" defaultChecked required />
                  <span>Shaxsiy maʼlumotlarni qayta ishlashga roziman</span>
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
