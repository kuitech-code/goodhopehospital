import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './InsurancePage.css'

const InsurancePage = () => {

  const providers = [
    { title: 'CIC', type: 'accepted', text: 'Accepted' },
    { title: 'APA Insurance', type: 'accepted', text: 'Accepted' },
    { title: 'Kenya Alliance', type: 'accepted', text: 'Accepted' },
    { title: 'Jubilee', type: 'accepted', text: 'Accepted' },
    { title: 'SHA', type: 'accepted', text: 'Accepted' },
    { title: 'Mtiba', type: 'corporate', text: '👥 Digital Health Cover' },
    { title: 'Liaison', type: 'accepted', text: 'Accepted' },
    { title: 'MUA', type: 'accepted', text: 'Accepted' },
    { title: 'SAHAM', type: 'accepted', text: 'Accepted' },
    { title: 'Birdview', type: 'accepted', text: 'Accepted' },
    { title: 'Takaful', type: 'accepted', text: 'Accepted' },
    { title: 'Minet', type: 'accepted', text: 'Accepted' },
    { title: 'AAR', type: 'accepted', text: 'Accepted' },
    { title: 'PACIS', type: 'accepted', text: 'Accepted' },
    { title: 'First Assurance', type: 'accepted', text: 'Accepted' },
    { title: 'Heritage', type: 'accepted', text: 'Accepted' },
    { title: 'Kenindia', type: 'accepted', text: 'Accepted' },
    { title: 'Transnep Insurance', type: 'accepted', text: 'Accepted' },
    { title: 'ICEA', type: 'accepted', text: 'Accepted' },
  ]

  return (
    <div>

      <Navbar />

      {/* HERO */}

      <header className='Insurance-hero'>

        <div className='Insurance-hero-inner'>
          <span className='tag'>INSURANCE COVERS</span>
          <h1>Insurance & Medical Covers</h1>

          <p>
            We partner with trusted insurance providers and
            medical schemes to make quality healthcare more
            accessible, affordable, and convenient for our patients.
          </p>

          <div className='underline'></div>

        </div>

      </header>

      {/* MAIN PAGE */}

      <main className='insurance-page'>

        <section className='insurance-section'>

          <div className='insurance-container'>

            {/* HEADING */}

            <div className='insurance-heading'>

              <span className='badge'>
                Accepted Medical Covers
              </span>

              <h2>
                Trusted Insurance Partners
              </h2>

              <p>
                Goodhope Nursing Hospital works with a wide
                range of insurance providers to ensure patients
                receive seamless and reliable healthcare support.
              </p>

            </div>

            {/* GRID */}

            <div className='insurance-grid'>

              {providers.map((p, i) => (

                <div className='insurance-card' key={i}>

                  <div className='card-glow'></div>

                  <h3>{p.title}</h3>

                  <div className={`status ${p.type}`}>

                    {p.type === 'accepted' ? (
                      <>
                        <span className='dot'></span>
                        {p.text}
                      </>
                    ) : (
                      p.text
                    )}

                  </div>

                </div>

              ))}

            </div>

            {/* DISCLAIMER */}

            <div className='insurance-disclaimer'>

              <div className='disclaimer-icon'>
                i
              </div>

              <div className='disclaimer-content'>

                <h3>Insurance Verification</h3>

                <p>
                  Insurance coverage may vary depending on your
                  individual plan and provider terms. Patients are
                  encouraged to confirm eligibility and coverage
                  details with both the insurer and hospital before treatment.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  )
}

export default InsurancePage