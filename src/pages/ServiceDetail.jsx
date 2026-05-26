import React from 'react'
import { useParams, Link } from 'react-router-dom'
import services from '../data/services'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './ServiceDetail.css'

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div>
        <Navbar />
        <main className='container not-found' style={{ padding: 80 }}>
          <h2>Service not found</h2>
          <p>The service you requested could not be found.</p>
          <Link to='/services'>Back to services</Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      
      <header className='service-detail-hero' style={{backgroundImage: `linear-gradient(rgba(7,28,61,0.6), rgba(4,20,44,0.8)), url(${service.image})`}}>
        <div className='service-detail-inner'>
          <h1>{service.title}</h1>
          <p>{service.short}</p>
        </div>
      </header>

      <main className='service-detail detail-container'>
        <div className='detail-grid'>
          <section className='detail-main'>
            <h2>About this service</h2>
            <p>{service.detail}</p>

            {service.extra && <p className='extra'>{service.extra}</p>}

            <h3>Included</h3>
            <ul>
              {service.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <div className='cta-row'>
              <a className='btn primary' href='/contact'>Book Appointment</a>
              <Link to='/services' className='btn ghost'>Back to services</Link>
            </div>
          </section>

          <aside className='related'>
            <h4>Related Services</h4>
            <ul>
              {services.filter(s => s.slug !== service.slug).slice(0,4).map(s => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </aside>
        </div>
        <section className='recognition-section'>
          <div className=' recognition-card'>
            <span className='section-label'>NEED MORE INFORMATION ABOUT THIS SERVICE?</span>
            <p>
              If you have any questions about our services or would like to learn more, don't hesitate to contact us. Our team is here to provide you with the information and support you need to make informed decisions about your healthcare.
            </p>
            <button className='btn primary' onClick={() => window.location.href = '/contact'}>Contact Us</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServiceDetail
