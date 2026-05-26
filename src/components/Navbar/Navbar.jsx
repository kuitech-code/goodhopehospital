import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logoXL.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const socials = [
    {
      href: 'https://facebook.com/profile.php?id=100050299796342',
      label: 'Facebook',
      target: '_blank', // Opens the link in a brand new tab
      rel: 'noopener noreferrer', // Essential security measure for external tabs
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.27c-1.25 0-1.64.77-1.64 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.19 22 17.06 22 12.07Z"/>
        </svg>
      ),
    },
    {
      href: 'https://twitter.com/goodhopehospital',
      label: 'Twitter',
      target: '_blank',
      rel: 'noopener noreferrer',  target: '_blank', // Opens the link in a brand new tab
  rel: 'noopener noreferrer', // Essential security measure for external tabs
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 5.9c-.8.35-1.7.58-2.6.69a4.46 4.46 0 0 0 1.96-2.46 8.92 8.92 0 0 1-2.83 1.08 4.45 4.45 0 0 0-7.57 4.06A12.62 12.62 0 0 1 3 4.9a4.45 4.45 0 0 0 1.38 5.93 4.38 4.38 0 0 1-2.02-.56v.06a4.45 4.45 0 0 0 3.56 4.36 4.5 4.5 0 0 1-2 .08 4.46 4.46 0 0 0 4.16 3.1A8.93 8.93 0 0 1 2 19.54a12.6 12.6 0 0 0 6.84 2.01c8.2 0 12.7-6.8 12.7-12.72 0-.2 0-.4-.01-.6A9.06 9.06 0 0 0 22 5.9Z"/>
        </svg>
      ),
    },
    {
      href: 'https://instagram.com/goodhopehospital',
      label: 'Instagram',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm10.4 2.1a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"/>
        </svg>
      ),
    },
  ]

  return (
    <nav className='container navbar'>
      <div className='nav-topbar'>
        <div className='nav-socials desktop'>
          {socials.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className='navbar-main'>
        <a href="/">
              <img src={logo} alt="Goodhope Hospital Logo" className='logo' />
            </a>
        <div className={`nav-panel ${menuOpen ? 'open' : ''}`}>
          <div className='nav-panel-header'>
            <a href="/">
              <img src={logo} alt="Goodhope Hospital Logo" className='panel-logo' />
            </a>
            <button
              type='button'
              className='close-panel'
              onClick={() => setMenuOpen(false)}
              aria-label='Close menu'
            >
              <span />
              <span />
            </button>
          </div>

          <ul className='nav-links'>
            <li>
              {/* 'end' ensures Home is only active when the path is exactly "/" */}
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/insurance">Insurance</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              {/* NavLink works directly on text links or can wrap styling blocks */}
              <NavLink to="/contact" className="nav-btn-link">
                <button className="btn">Contact Us</button>
              </NavLink>
            </li>
          </ul>


          <div className='nav-menu-footer'>
            <div className='nav-socials mobile'>
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
