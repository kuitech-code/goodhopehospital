import React from 'react'
import './Whatsapp.css'
import whatsappIcon from '../../assets/whatsapp-icon.svg'

const Whatsapp = () => {
  return (
    <div className='whatsapp-wrapper'>

      {/* Hover Text */}
      <div className='whatsapp-tooltip'>
        Need urgent assistance?
      </div>

      {/* WhatsApp Button */}
      <a
        href='https://wa.me/254728882528?text=Hello%20Good%20Hope%20Hospital,%20I%20am%20having%20a%20medical%20emergency.%20Please%20get%20back%20to%20me%20as%20soon%20as%20possible.'
        target='_blank'
        rel='noopener noreferrer'
        className='whatsapp-button'
      >
        <img
          src={whatsappIcon}
          className='whatsapp-icon'
        />
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
          fill='white'
        > 
          <path d='M19.11 17.21c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.15-.19.29-.74.92-.91 1.11-.17.19-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.45-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.08-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.08-.75.37-.26.29-.98.96-.98 2.34s1 2.72 1.14 2.91c.15.19 1.97 3 4.78 4.08.67.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.69-.69 1.93-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z'/>
          <path d='M16.02 3C8.83 3 3 8.82 3 16c0 2.54.75 5.02 2.17 7.15L3 29l5.99-2.1A12.93 12.93 0 0016.02 29C23.2 29 29 23.18 29 16S23.2 3 16.02 3zm0 23.67c-2.11 0-4.17-.57-5.97-1.66l-.43-.25-3.56 1.25 1.16-3.47-.28-.45A10.64 10.64 0 015.35 16c0-5.89 4.79-10.68 10.67-10.68 2.85 0 5.53 1.11 7.54 3.13a10.6 10.6 0 013.12 7.55c0 5.89-4.79 10.67-10.66 10.67z'/>
        </svg> */}
      </a>

    </div>
  )
}

export default Whatsapp