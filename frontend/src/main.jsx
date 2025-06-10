import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './js/pages/homepage.jsx'
import NewsPage from './js/pages/newsPage.jsx'
import SearchPage from './js/pages/searchpage.jsx'
import LoginPage from './js/pages/loginPage.jsx'
import ProfileAdmin from './js/pages/profileAdmin.jsx'
import SignupPage from './js/pages/SignUpPage.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path="/profile-admin" element={<ProfileAdmin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
