import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { storage } from './core/storage'
import { exposeTestHooks } from './core/testHooks'
import './styles/globals.css'

storage.migrate()
exposeTestHooks()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)
