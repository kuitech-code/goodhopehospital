import React from 'react'
import { Link } from 'react-router-dom'
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/services/${service.slug}`} className='service-card-link'>
      <article className={`service-card ${service.dark ? 'dark' : ''}`}>
        <div className='icon-box'>
          <img src={service.icon} alt={service.title} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <div className='learn-more'>Learn More →</div>
      </article>
    </Link>
  )
}

export default ServiceCard
