import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ContactForm from '../components/ContactForm'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <header className='Contact-hero'>
        <div className='Contact-hero-overlay'></div>

        <div className='Contact-hero-inner'>
          <span className='tag'>CONTACT GOODHOPE</span>

          <h1>We’re Here When You Need Us</h1>

          <p>
            Whether you need medical assistance, want to book an
            appointment, or have questions about our services,
            our team is ready to help.
          </p>

          <div className='underline'></div>
        </div>
      </header>

      <main className='Contact-page'>

        <section className='contact-section cont'>

          <div className='contact-grid'>

            {/* LEFT SIDE */}
            <div className='contact-info'>

              <div className='info-card'>
                <h3>Visit Our Hospital</h3>
                <p>
                  Conveniently located within Nyahururu Town, our facility provides accessible healthcare services for individuals and families. We are situated on <strong>Shepherd Road, directly opposite Laikipia Comfort and on your way to the Nyahururu Law Courts.</strong>
                </p>
              </div>

              <div className='info-card'>
                <h3>Call</h3>
                <a href='tel:+254728882528'>
                  +254728882528
                </a>
              </div>
              <div className='info-card'>
                <h3>WhatsApp</h3>
                <a href='https://wa.me/254728882528?text=Hello%20Good%20Hope%20Hospital,%20I%20would%20like%20to%20make%20an%20inquiry.'>
                  +254728882528
                </a>
              </div>
              <div className='info-card'>
                <h3>SMS</h3>
                <a href="sms:+254728882528?body=Hello%20Good%20Hope%20Hospital,%20I%20would%20like%20to%20make%20an%20inquiry.">
                  +254728882528
                </a>
              </div>
              <div className='info-card'>
                <h3>Email Address</h3>
                <a href='mailto:goodhopenyahururu@gmail.com?subject=Hospital%20Inquiry&body=Hello%20Good%20Hope%20Hospital,%20I%20would%20like%20to%20make%20an%20inquiry.'>
                  goodhopenyahururu@gmail.com
                </a>
              </div>
              <div className='info-card'>
                <h3>Working Hours</h3>

                <div className='hours'>
                  <span>Monday - Monday</span>
                  <span>24 Hours</span>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className='contact-form-wrapper'>

              <div className='form-header'>
                <span className='badge'>
                  SEND A MESSAGE
                </span>

                <h2>Get In Touch</h2>

                <p>
                  Fill out the form below and our team will
                  get back to you as soon as possible.
                </p>
              </div>
              {/* form component */}
              <ContactForm />
            </div>

          </div>

        </section>


        {/* MAP */}
        <section className='map-section'>

          <div className='map-header cont'>
            <span className='section-label'>
              LOCATION
            </span>

            <h2>Find Us Easily</h2>

            <p>
              Visit Goodhope Nursing Hospital in Nyahururu Town.
            </p>
          </div>

          <div className='map-wrapper'>
            <iframe
              title='hospital-map'
              src='https://maps.google.com/maps?q=0.0395321,36.3640081&z=15&output=embed'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  )
}

export default ContactPage