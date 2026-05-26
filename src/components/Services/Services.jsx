import React from 'react'
import './Services.css'
import outpatientIcon from '../../assets/outpatient-icon.svg'
import inpatientIcon from '../../assets/inpatient-icon.svg'
import maternityIcon from '../../assets/maternity-icon.svg'
import surgeryIcon from '../../assets/surgery-icon.svg'
import labIcon from '../../assets/laboratory-icon.svg'
import specialistIcon from '../../assets/specialist-icon.svg'

const Services = () => {
  return (
    <div className='services'>
      <div className="header">
        <h2>Our Care & Services</h2>
        <p>Explore our healthcare solutions, specialized treatments, and wellness programs tailored to provide the best medical support for the Nyahururu community.</p>
        <div className="underline"></div>
      </div>
      <div className='services-cards'>
        <div className='service-card'>
          <div className='icon-box'>
            <img src={outpatientIcon} alt='Outpatient Services' />
          </div>
          <h3>Outpatient Services</h3>
          <p>
            General consultations, diagnosis, follow-ups and everyday medical care.
          </p>
          <a href='/services/outpatient'>Explore</a>
        </div>
        <div className='service-card dark'>
          <div className='icon-box'>
            <img src={inpatientIcon} alt='Inpatient Services' />
          </div>
          <h3>Inpatient Services</h3>
          <p>
            24-hour patient care, admission and recovery support.
          </p>
          <a href='/services/inpatient'>Explore</a>
        </div>
        <div className='service-card'>
          <div className='icon-box'>
            <img src={maternityIcon} alt='Maternity and Child Care' />
          </div>
          <h3>Maternity & Child Care</h3>
          <p>
            Comprehensive care for mothers, newborns and children.
          </p>
          <a href='/services/maternity'>Explore</a>
        </div>
        <div className='service-card dark'>
          <div className='icon-box'>
            <img src={surgeryIcon} alt='Surgical Services' />
          </div>
          <h3>Surgical Services</h3>
          <p>
            Major and minor surgical procedures performed by qualified professionals.
          </p>
          <a href='/services/surgery'>Explore</a>
        </div>
        <div className='service-card'>
          <div className='icon-box'>
            <img src={labIcon} alt='Diagnostics and Laboratory' />
          </div>
          <h3>Diagnostics & Laboratory</h3>
          <p>
            Laboratory testing and imaging services for accurate diagnosis.
          </p>
          <a href='/services/laboratory'>Explore</a>
        </div>
        <div className='service-card dark'>
          <div className='icon-box'>
            <img src={specialistIcon} alt='Specialized Care' />
          </div>
          <h3>Specialized Care</h3>
          <p>
            Long-term and specialist healthcare support tailored to patient needs.
          </p>
          <a href='/services/specialized'>Explore</a>
        </div>
      </div>
    </div>
  )
}

export default Services
