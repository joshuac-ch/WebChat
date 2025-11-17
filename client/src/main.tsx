import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvide  from './UserProvider/UserProvide.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvide>
    <App />
    </UserProvide>    
    </BrowserRouter>
  </StrictMode>,
)
