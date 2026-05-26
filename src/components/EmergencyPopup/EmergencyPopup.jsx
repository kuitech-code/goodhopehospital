import React, { useEffect, useState } from 'react'
import './EmergencyPopup.css'
import ambulance from '../../assets/ambulance.svg'

const EmergencyPopup = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const NOW = Date.now()
    const FIVE_MINUTES = 300000 
    const EIGHT_SECONDS = 8000

    const lastShown = localStorage.getItem('emergencyPopupLastShown')
    let delayBeforeShow = EIGHT_SECONDS

    // Check if the popup has been shown previously across pages
    if (lastShown) {
      const timeElapsed = NOW - parseInt(lastShown, 10)

      if (timeElapsed < FIVE_MINUTES) {
        // Calculate remaining time left of the 5-minute wait window
        delayBeforeShow = FIVE_MINUTES - timeElapsed
      } else {
        // 5 minutes have already passed, show it immediately
        delayBeforeShow = 0
      }
    }

    // Schedule the popup display
    const popupTimeout = setTimeout(() => {
      setShowPopup(true)
      localStorage.setItem('emergencyPopupLastShown', Date.now().toString())

      // Set up a repeating interval every 5 minutes from this point forward
      const interval = setInterval(() => {
        setShowPopup(true)
        localStorage.setItem('emergencyPopupLastShown', Date.now().toString())
      }, FIVE_MINUTES)

      return () => clearInterval(interval)
    }, delayBeforeShow)

    return () => clearTimeout(popupTimeout)
  }, []) 

  // Function to handle manual close click
  const handleClose = () => {
    setShowPopup(false)
    // Optional: Refresh timestamp when closed to guarantee a full 5-minute break
    localStorage.setItem('emergencyPopupLastShown', Date.now().toString())
  }

  return (
    <>
      {showPopup && (
        <div className='emergency-popup'>

          <button
            className='close-popup'
            onClick={handleClose}
          >
            ✕
          </button>

          <div className='popup-icon'>
            <img src={ambulance} alt='Emergency Icon' className='icon-global'/>
          </div>

          <h3>Emergency Assistance</h3>

          <p>
            Are you experiencing a medical emergency?
            Our team is available to assist you.
            Ambulance support is available 24/7 for urgent medical needs.
          </p>
          <a
            href='tel:+254728882528'
            className='call-now-btn'
          >
            Call Now
          </a>

        </div>
      )}
    </>
  )
}

export default EmergencyPopup
