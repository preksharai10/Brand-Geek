import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Top Section */}
      <div style={topHeader}>
        {/* Floating Symbols */}
        <div style={topLeftCircle}>
          <div style={innerRedDots}>
            <div style={redDot1}></div>
            <div style={redDot2}></div>
          </div>
        </div>
        <div style={leftBlueSquare}>
          <div style={blueSquareIcon}></div>
        </div>
        <div style={rightBlueTriangle}>
          <div style={triangleIcon}></div>
        </div>
        <div style={topRightYellowCircle}>
          <div style={yellowIcon}>€</div>
        </div>

        <h1 style={contactTitle}>Contact Us</h1>
        <div style={underline}></div>
      </div>

      {/* Main Content */}
      <div style={mainSection}>
        <div style={container}>
          {/* Map Section */}
          <div style={mapContainer}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14195.842962278444!2d-81.49111432673988!3d28.63114694872039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e779b4b20c6477%3A0x7a27693b32816b9e!2s4309%20Dovetail%20Dr%2C%20Orlando%2C%20FL%2032878%2C%20USA!5e0!3m2!1sen!2sin!4v1719680882076!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '6px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form Section or Success Message */}
          {!isSubmitted ? (
            <div style={formWrapper}>
              <div style={formRow}>
                <div style={{ ...inputGroup, flex: 1, marginRight: '10px' }}>
                  <label style={labelStyle}>Name *</label>
                  <input type="text" required style={inputStyle} />
                </div>
                <div style={{ ...inputGroup, flex: 1 }}>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" required style={inputStyle} />
                </div>
              </div>

              <div style={inputGroup}>
                <label style={labelStyle}>Phone Number</label>
                <input type="tel" style={inputStyle} />
              </div>
              <div style={inputGroup}>
                <label style={labelStyle}>Message</label>
                <textarea rows="4" style={textareaStyle}></textarea>
              </div>
              <button type="button" onClick={handleSubmit} style={submitButton}>Submit</button>
            </div>
          ) : (
            <div style={successMessageContainer}>
              <div style={successMessage}>
                Thanks for contacting us! We will be in touch with you shortly.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// =================== STYLES ===================

const topHeader = {
  background: 'linear-gradient(135deg, #0a2e3f 0%, #1a4757 50%, #0a2e3f 100%)',
  textAlign: 'center',
  padding: '180px 50px 100px',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden'
};

const contactTitle = {
  fontSize: '2.8rem',
  fontWeight: '700',
  margin: '0',
};

const underline = {
  width: '80px',
  height: '3px',
  backgroundColor: '#7fff00',
  margin: '16px auto 0',
  borderRadius: '2px'
};

const mainSection = {
  backgroundColor: '#1c4a57',
  padding: '60px 20px 100px',
  overflowX: 'hidden', // Prevent horizontal scroll from floating icons
};

const container = {
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'stretch',
  gap: '30px',
};

const mapContainer = {
  flex: '1 1 500px',
  minHeight: '400px',
  maxWidth: '500px',
};

const formWrapper = {
  flex: '1 1 500px',
  maxWidth: '500px',
  backgroundColor: '#0a2e3f',
  padding: '20px',
  borderRadius: '6px',
};

const successMessageContainer = {
  flex: '1 1 500px',
  maxWidth: '500px',
  backgroundColor: '#0a2e3f',
  padding: '20px',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '400px',
};

const successMessage = {
  backgroundColor: '#295B63',
  color: '#0a2e3f',
  padding: '20px 30px',
  borderRadius: '6px',
  fontSize: '1.1rem',
  fontWeight: '600',
  textAlign: 'center',
  maxWidth: '400px',
  lineHeight: '1.5',
};

const formRow = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  marginBottom: '20px',
  flexWrap: 'wrap'
};

const inputGroup = {
  marginBottom: '20px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  color: '#ffffff',
  fontWeight: '600'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
  backgroundColor: 'white',
  color: 'black',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical'
};

const submitButton = {
  backgroundColor: '#295B63',
  color: '#fff',
  border: 'none',
  padding: '10px 24px',
  borderRadius: '4px',
  fontWeight: '500',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  width: '100px',
  marginTop: '10px'
};

// Floating Icons – UPDATED positions with viewport units
const topLeftCircle = {
  position: 'absolute',
  top: '120px',
  left: '8vw',
  width: '70px',
  height: '70px',
  backgroundColor: 'rgba(30, 58, 75, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
};

const innerRedDots = {
  position: 'relative',
  width: '20px',
  height: '20px',
};

const redDot1 = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '8px',
  height: '8px',
  backgroundColor: '#ef4444',
  borderRadius: '50%',
};

const redDot2 = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '8px',
  height: '8px',
  backgroundColor: '#ef4444',
  borderRadius: '50%',
};

const leftBlueSquare = {
  position: 'absolute',
  top: '250px',
  left: '15vw',
  width: '60px',
  height: '60px',
  backgroundColor: 'rgba(59, 130, 246, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
};

const blueSquareIcon = {
  width: '20px',
  height: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '3px',
};

const rightBlueTriangle = {
  position: 'absolute',
  top: '180px',
  right: '10vw',
  width: '65px',
  height: '65px',
  backgroundColor: 'rgba(59, 130, 246, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
};

const triangleIcon = {
  width: '0',
  height: '0',
  borderLeft: '10px solid transparent',
  borderRight: '10px solid transparent',
  borderBottom: '15px solid #ffffff',
};

const topRightYellowCircle = {
  position: 'absolute',
  top: '100px',
  right: '8vw',
  width: '70px',
  height: '70px',
  backgroundColor: 'rgba(245, 158, 11, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
};

const yellowIcon = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
};

export default Contact;
