import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './js/homepage.jsx'
import NewsPage from './js/newsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsPage />
  </StrictMode>,
)
