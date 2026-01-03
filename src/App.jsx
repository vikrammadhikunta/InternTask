import React from 'react'
import { Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Header from './components/Header.jsx'
import { Toaster } from "react-hot-toast";
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'


const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App