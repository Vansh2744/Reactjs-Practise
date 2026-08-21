import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Profile from './context/Profile.tsx'

createRoot(document.getElementById('root')!).render(
  <Profile>
    <App />
  </Profile>
)
