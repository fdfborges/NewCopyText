import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextModal } from './pages/Register/ContextModal';
import { ContextModalForLogin } from './pages/Login/ContextModalForLogin';
import { Funcionatily } from './pages/Functionality/Functionality';
import { Navbar } from './pages/Components/Navbar/Navbar';
import { Footer } from './pages/Components/Footer/Footer';
import { Newsletter } from './pages/Newsletter/Newsletter';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';

export const App = () => {
  return (
    <ContextModal>
      <ContextModalForLogin>
        <Router>
          <Navbar />
          <Login />
          <Register />
          <Routes>
            <Route path="/" element={<Funcionatily />} />
            <Route path="newsletter" element={<Newsletter />} />
          </Routes>
          <Footer />
        </Router>
      </ContextModalForLogin>
    </ContextModal>

  )
}
