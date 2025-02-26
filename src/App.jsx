import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Funcionatily } from './pages/Functionality/Functionality';
import { Navbar } from './pages/Components/Navbar/Navbar';
import {Footer} from './pages/Components/Footer/Footer';


export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Funcionatily />} />
      </Routes>
      <Footer/>
    </Router>

  )
}
