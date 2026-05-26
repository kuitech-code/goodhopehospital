import React from 'react'
import './Hero.css'
import r_arr from '../../assets/r_arr.svg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Nyahururu’s Trusted Healthcare & Caring Health Partner</h1>
        <p>Open 24/7, we provide fast, reliable, modern medical solutions powered by a team of expert doctors and nursing staff. We are dedicated to delivering high-quality, patient-centered care around the clock to keep you and your family healthy.</p>
        <button className="btn" onClick={() => window.location.href = '/contact'}>
          Book an appointment Now! <img src={r_arr} alt="Right arrow" />
        </button>
      </div>
    </div>
  )
}

export default Hero
