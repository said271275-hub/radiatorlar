import { createContext, useContext, useState } from 'react'

const ModalContext = createContext(null)

export const MODALS = {
  call: { title: 'Qo‘ng‘iroqqa buyurtma berish', button: 'Yuborish', fields: ['name', 'phone'] },
  calc: { title: 'Hisob-kitob qilish', button: 'Ariza yuborish', fields: ['name', 'phone', 'email', 'comment'] },
  oneclick: { title: '1 bosishda xarid qilish', button: 'Buyurtmani rasmiylashtirish', fields: ['name', 'phone'] },
}

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null)
  const open = (type, context = '') => setModal({ type, context })
  const close = () => setModal(null)
  return <ModalContext.Provider value={{ modal, open, close }}>{children}</ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext)
