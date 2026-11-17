import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '30px', color: 'red', fontFamily: 'sans-serif', background: '#fff' }}>
          <h2>React komponentida xatolik yuz berdi:</h2>
          <pre>{this.state.error && (this.state.error.stack || this.state.error.message)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <CartProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </CartProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  )
}
