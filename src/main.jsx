import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './hooks/Language.jsx'

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </LanguageProvider>,
)
