import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Funcionatily } from './pages/Functionality/Functionality';
import { Navbar } from './pages/Components/Navbar/Navbar';
import { Footer } from './pages/Components/Footer/Footer';
import { Newsletter } from './pages/Newsletter/Newsletter';
import { Register } from './pages/Register/Register';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Funcionatily />} />
        <Route path="newsletter" element={<Newsletter />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>

  )
}
