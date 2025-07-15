import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/button.css'
import './css/dashboardAdmin.css'

import Loading from './js/pages/loadingpage.jsx'

const Homepage = lazy(() => import('./js/pages/news/homepage.jsx'));
const NewsPage = lazy(() => import('./js/pages/news/newsPage.jsx'));
const SearchPage = lazy(() => import('./js/pages/news/searchpage.jsx'));
const LoginPage = lazy(() => import('./js/pages/auth/loginPage.jsx'));
const SignupPage = lazy(() => import('./js/pages/auth/signupPage.jsx'));
const ForgotPassword = lazy(() => import('./js/pages/auth/forgotPassword.jsx'));
const Verification = lazy(() => import('./js/pages/auth/verification.jsx'));
const NewPassword = lazy(() => import('./js/pages/auth/newsPasswordPage.jsx'));

const DashboardAdmin = lazy(() => import('./js/pages/admin/dashboardAdmin.jsx'));
const NewsAdmin = lazy(() => import('./js/pages/admin/newsAdmin.jsx'));
const UsersAdmin = lazy(() => import('./js/pages/admin/usersAdmin.jsx'));
const CommentAdmin = lazy(() => import('./js/pages/admin/commentAdmin.jsx'));
const CategoryAdmin = lazy(() => import('./js/pages/admin/categoryAdmin.jsx'));
const ProfileAdmin = lazy(() => import('./js/pages/admin/profileAdmin.jsx'));

const DashboardJournalist = lazy(() => import('./js/pages/jurnalis/dashboardJournalist.jsx'));
const NewsJournalist = lazy(() => import('./js/pages/jurnalis/newsJournalist.jsx'));
const CreateNewsJournalist = lazy(() => import('./js/pages/jurnalis/createNewsJournalist.jsx'));
const CommentJournalist = lazy(() => import('./js/pages/jurnalis/commentJournalist.jsx'));
const ProfileJournalist = lazy(() => import('./js/pages/jurnalis/profileJournalist.jsx'));

const ProfileReader = lazy(() => import('./js/pages/reader/profileReader.jsx'));
const SaveNewsReader = lazy(() => import('./js/pages/reader/saveNewsReader.jsx'));
const CommentReader = lazy(() => import('./js/pages/reader/commentReader.jsx'));
const Notification = lazy(() => import('./js/pages/reader/notification.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/newpassword" element={<NewPassword />} />
          
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/news" element={<NewsAdmin />} />
          <Route path="/admin/users" element={<UsersAdmin />} />
          <Route path="/admin/comment" element={<CommentAdmin />} />
          <Route path="/admin/category" element={<CategoryAdmin />} />
          <Route path="/admin/profile" element={<ProfileAdmin />} />

          <Route path="/journalist/dashboard" element={<DashboardJournalist />} />
          <Route path="/journalist/news" element={<NewsJournalist />} />
          <Route path="/journalist/create-news" element={<CreateNewsJournalist />} />
          <Route path="/journalist/comment" element={<CommentJournalist />} />
          <Route path="/journalist/profile" element={<ProfileJournalist />} />

          <Route path="/reader/profile" element={<ProfileReader />} />
          <Route path="/reader/save-news" element={<SaveNewsReader />} />
          <Route path="/reader/comment" element={<CommentReader />} />
          <Route path='/reader/notification' element={<Notification/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
