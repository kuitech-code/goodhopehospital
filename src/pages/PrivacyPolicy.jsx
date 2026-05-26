import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />

      <header className='policy-hero'>
        <div className='policy-hero-inner'>
          <h1>Privacy Policy & Terms</h1>
          <p>
            How we collect, use, and protect your information at
            Goodhope Nursing Hospital.
          </p>
        </div>
      </header>

      <main className='policy-page cont'>

        {/* PRIVACY POLICY */}
        <section className='policy-section'>
          <h2>Privacy Policy</h2>

          <div className='policy-card'>
            <h3>1. Information We Collect</h3>
            <p>
              We may collect personal details such as your name, contact
              information, medical inquiry details, and appointment
              requests when you interact with our services.
            </p>
          </div>

          <div className='policy-card'>
            <h3>2. How We Use Your Information</h3>
            <p>
              Your information is used to provide medical services,
              respond to inquiries, schedule appointments, and improve
              patient care.
            </p>
          </div>

          <div className='policy-card'>
            <h3>3. Data Protection</h3>
            <p>
              We are committed to keeping your information safe. We use
              appropriate security measures to prevent unauthorized access
              or disclosure.
            </p>
          </div>

          <div className='policy-card'>
            <h3>4. Sharing of Information</h3>
            <p>
              We do not sell or share your personal data except where
              required by law or necessary for medical treatment.
            </p>
          </div>
        </section>

        {/* TERMS */}
        <section className='policy-section'>

          <h2>Terms & Conditions</h2>

          <div className='policy-card'>
            <h3>1. Use of Services</h3>
            <p>
              By using our website or services, you agree to provide
              accurate information when booking appointments or making
              inquiries.
            </p>
          </div>

          <div className='policy-card'>
            <h3>2. Medical Disclaimer</h3>
            <p>
              Information on this website is not a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>
          </div>

          <div className='policy-card'>
            <h3>3. Appointments</h3>
            <p>
              Appointment availability may change based on medical
              urgency and hospital capacity.
            </p>
          </div>

          <div className='policy-card'>
            <h3>4. Changes to Terms</h3>
            <p>
              We reserve the right to update these terms at any time to
              reflect operational or legal changes.
            </p>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy