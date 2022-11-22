import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../src/class16/pages/home/Home.container';
import AboutPage from '../src/class16/pages/about/About.container';
import RegisterPage from './class16/pages/auth/register/Register.container';
import LoginPage from '../src/class16/pages/auth/login/Login.container';
import ProtectedRoutes from '../src/class16/components/protected-routes/ProtectedRoutes';

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/register" element={ <RegisterPage /> } />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route element={<ProtectedRoutes isAuthenticated={isAuth} />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter