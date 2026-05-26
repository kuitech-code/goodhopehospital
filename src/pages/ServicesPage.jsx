import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import services from '../data/services'
import './ServicesPage.css'

const ServicesPage = () => {
  return (
    <div>
      <Navbar />

      <header className='hero1'>
        <div className='hero1-inner'>
          <span className='tag'>GOODHOPE SERVICES</span>
          <h1>Our Medical Services</h1>
          <p>Compassionate, affordable, and professional healthcare services designed to support your wellbeing at every stage of life.</p>
          <div className='underline'></div>
        </div>
      </header>

      <main className='services-page container'>
        <section className='services-grid'>
          {services.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </section>
        <section className='recognition-section'>
          <div className=' recognition-card'>

            <span className='section-label'>HELP</span>

            <h2>Didn’t Find the Specific Care You Need?</h2>

            <p>
              Our hospital continuously expands its clinical offerings to support our community. If the specific service, specialist clinic, or medical examination you are looking for is not listed here, please get in touch with our reception desk. We are here to guide you to the right medical professional.
            </p>
            <button className='btn primary' onClick={() => window.location.href = '/contact'}>Contact Us</button>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default ServicesPage
