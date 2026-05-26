import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Track if the form was successfully sent
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const endpoint = "https://formspree.io/f/xwvznked"; 

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true); // Show success message
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' }); 
        
        // Automatically hide the message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      
      {/* SUCCESS MESSAGE BOX */}
      {isSubmitted && (
        <div style={styles.successMessage}>
          <span style={styles.icon}>✓</span>
          <div>
            <strong style={styles.title}>Thank You!</strong>
            <p style={styles.text}>Your message has been sent successfully. We will get back to you shortly.</p>
          </div>
        </div>
      )}

      <div className='form-row'>
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-row'>
        <input
          type='tel'
          name='phone'
          placeholder='Phone Number'
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        rows='6'
        name='message'
        placeholder='Your Message'
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type='submit'>
        Send Message
      </button>
    </form>
  );
}

// INLINE STYLES FOR THE SUCCESS MESSAGE
const styles = {
  successMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#e6f4ea',
    color: '#137333',
    padding: '16px',
    borderRadius: '6px',
    border: '1px solid #dadce0',
    marginBottom: '20px',
    fontFamily: 'sans-serif',
  },
  icon: {
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: '#137333',
    color: '#ffffff',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '2px',
  },
  text: {
    margin: 0,
    fontSize: '14px',
    color: '#1e8e3e',
  }
};
