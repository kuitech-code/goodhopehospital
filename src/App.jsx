import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Insuarance from './components/Insuarance/Insuarance'
import Footer from './components/Footer/Footer'
import Whatsapp from './components/Whatsapp/Whatsapp'
import EmergencyPopup from './components/EmergencyPopup/EmergencyPopup'
import ScrollToTop from './components/ScrollToTop';

import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import InsurancePage from './pages/InsurancePage'

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <Services />
    <Insuarance />
    <Footer />
  </div>
)

const App = () => {
  return (
    <BrowserRouter basename="/goodhopehospital">

      <Whatsapp />
      <EmergencyPopup />
      <ScrollToTop />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/services/:slug' element={<ServiceDetail />} />
        <Route path='/insurance' element={<InsurancePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
