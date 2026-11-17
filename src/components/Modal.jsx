import { useEffect, useState } from 'react'
import { useModal, MODALS } from '../context/ModalContext.jsx'
import { CloseIcon } from './Icons.jsx'

const labels = {
  name: ['Ismingiz', 'text'],
  phone: ['Telefon raqamingiz', 'tel'],
  email: ['Elektron pochta (e-mail)', 'email'],
  comment: ['Izoh yoki xabar', 'textarea'],
}

export default function Modal() {
  const { modal, close } = useModal()
  const [sent, setSent] = useState(false)

  useEffect(() => {
    setSent(false)
  }, [modal])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [close])

  if (!modal) return null
  const cfg = MODALS[modal.type]

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="modal-backdrop" onMouseDown={close}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal__close" onClick={close} aria-label="Yopish"><CloseIcon /></button>
        <h2>{cfg.title}</h2>
        {modal.context && <p className="muted">{modal.context}</p>}
        {sent ? (
          <p className="modal__ok">Rahmat! Tez orada siz bilan bog‘lanamiz.</p>
        ) : (
          <form onSubmit={submit}>
            {cfg.fields.map((f) => {
              const [label, type] = labels[f]
              return type === 'textarea' ? (
                <textarea key={f} placeholder={label} rows={3} />
              ) : (
                <input key={f} type={type} placeholder={label} required={f !== 'email'} />
              )
            })}
            <button className="btn btn--green btn--block">{cfg.button}</button>
            <label className="agree"><input type="checkbox" defaultChecked required /> Shaxsiy maʼlumotlarni qayta ishlashga roziman</label>
          </form>
        )}
      </div>
    </div>
  )
}
