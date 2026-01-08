import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CheckoutFeedbackProvider } from './context/CheckoutFeedbackContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CheckoutFeedbackProvider>
      <App />
    </CheckoutFeedbackProvider>
  </StrictMode>,
)
