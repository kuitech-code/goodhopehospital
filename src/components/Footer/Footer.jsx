import React from "react";
import "./Footer.css";
import logo from "../../assets/logoXL.png";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import locationIcon from "../../assets/location.svg";
import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/phone.svg";
import timeIcon from "../../assets/time.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section">
          <img
            src={logo}
            alt="Good Hope Hospital Logo"
            className="footer-logo"
          />

          <h2>Good Hope Hospital</h2>

          <p>
            Dedicated to improving the health and wellbeing of our
            community through trusted medical services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="#insurance">Insurance</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy & Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p> <img src={phoneIcon} className="footer-icon" alt="Phone Icon" /> Nyaururu, Kenya</p>
          <p> <img src={emailIcon} className="footer-icon" alt="Email Icon" /> +254728882528</p>
          <p> <img src={locationIcon} className="footer-icon" alt="Location Icon" /> goodhopenyahururu@gmail.com</p>
          <p> <img src={timeIcon} className="footer-icon" alt="Time Icon" /> Open 24 Hours</p>
        </div>

        {/* Map */}
        <div className="footer-section">
          <h3>Find Us</h3>

          <div className="map-container">
            <iframe
              title="Hospital Location"
              src="https://maps.google.com/maps?q=0.0395321,36.3640081&z=15&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Good Hope Hospital. All Rights Reserved. | 
          <a
            href="https://wa.me/254700000000?text=Hello%20KuiTech%2C%20I%20would%20like%20to%20inquire%20about%20website%20development%20services."
            target="_blank"
            rel="noopener noreferrer" >
            {" "}Website by KuiTech
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;