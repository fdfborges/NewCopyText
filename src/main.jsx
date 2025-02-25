import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Funcionatily } from './pages/Functionality/Functionality'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Funcionatily />
  </StrictMode>,
)
