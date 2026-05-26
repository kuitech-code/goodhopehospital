import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <header className='About-hero'>
        <div className='About-hero-overlay'></div>

        <div className='About-hero-inner'>
          <span className='tag'>ABOUT GOODHOPE</span>

          <h1>
            Compassionate Healthcare <br />
            Rooted in Community
          </h1>

          <p>
            Goodhope Nursing Hospital has grown into a trusted healthcare
            provider in Nyahururu, delivering affordable, professional, and
            patient-centered care with compassion and excellence.
          </p>

          <div className='underline'></div>
        </div>
      </header>

      <main className='About-page'>

        <section className='about-intro cont'>
          <div className='about-grid'>

            <div className='about-card large'>
              <span className='section-label'>OUR STORY</span>

              <h2>Built on Hope, Care, and Trust</h2>

              <p>
                Located in the heart of Nyahururu Town, Goodhope Nursing
                Hospital was founded with a simple but powerful vision —
                to provide quality healthcare that feels human.
              </p>

              <p>
                Over the years, the hospital has steadily grown from a
                developing healthcare center into a respected Level 3A
                healthcare facility trusted by individuals, families, and
                the wider community.
              </p>

              <p>
                Through compassion, professionalism, and continuous
                improvement, the hospital continues to evolve while staying
                true to its mission of making healthcare accessible,
                affordable, and patient-centered.
              </p>
            </div>

            <div className='about-card stat-card'>
              <h3>Level 3A</h3>
              <p>Healthcare Facility</p>
            </div>

            <div className='about-card stat-card'>
              <h3>Trusted</h3>
              <p>By Families Across Nyahururu</p>
            </div>

          </div>
        </section>


        <section className='about-values'>
          <div className='cont'>

            <div className='section-heading'>
              <span className='section-label'>OUR FOUNDATION</span>
              <h2>The Values That Guide Us</h2>
            </div>

            <div className='values-grid'>

              <div className='value-box'>
                <h3>Compassion</h3>
                <p>
                  Every patient is treated with empathy, dignity,
                  and respect.
                </p>
              </div>

              <div className='value-box'>
                <h3>Integrity</h3>
                <p>
                  We uphold honesty, transparency, and ethical medical care.
                </p>
              </div>

              <div className='value-box'>
                <h3>Excellence</h3>
                <p>
                  We strive to maintain the highest standards in healthcare.
                </p>
              </div>

              <div className='value-box'>
                <h3>Innovation</h3>
                <p>
                  Embracing modern healthcare solutions to better serve our
                  community.
                </p>
              </div>

            </div>
          </div>
        </section>


        <section className='about-growth cont'>

          <div className='growth-content'>
            <span className='section-label'>OUR JOURNEY</span>

            <h2>Growing With the Community</h2>

            <p>
              As healthcare needs in the region have continued to grow,
              Goodhope Nursing Hospital has expanded its capacity,
              strengthened its medical team, and improved patient care
              experiences through continuous investment in quality and
              modern healthcare practices.
            </p>

            <p>
              Today, the hospital operates within a well-structured
              two-floor facility strategically located within Nyahururu
              Town, making healthcare more accessible for patients and
              families.
            </p>

            <p>
              Supported by skilled nurses, clinical officers, medical
              officers, and consultant specialists, the hospital remains
              committed to delivering safe, reliable, and compassionate
              care every day.
            </p>
          </div>

        </section>


        <section className='cont recognition-section'>
          <div className=' recognition-card'>

            <span className='section-label'>RECOGNITION</span>

            <h2>Recognized for Community Impact</h2>

            <p>
              Goodhope Nursing Hospital was recognized as a finalist in
              the Kenya Chamber of Commerce and Industry Business Awards
              under the Community Impact Award category — a reflection of
              the hospital’s commitment to improving lives through
              compassionate healthcare.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default AboutPage