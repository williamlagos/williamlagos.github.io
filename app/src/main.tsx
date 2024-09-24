import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Main } from './components/pages'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>
)
