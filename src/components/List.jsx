import React from 'react';
import { FaSearch, FaTwitter, FaRegFileAlt, FaLaptopCode, FaPaperPlane } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Search Engine Optimization",
      icon: <FaSearch size={40} color="#4ade80" />, // Increased size
    },
    {
      title: "Social Media Marketing",
      icon: <FaTwitter size={40} color="#4ade80" />, // Increased size
    },
    {
      title: "Content Marketing",
      icon: <FaRegFileAlt size={40} color="#4ade80" />, // Increased size
    },
    {
      title: "Website Design and Development Services",
      icon: <FaLaptopCode size={40} color="#4ade80" />, // Increased size
    },
    {
      title: "Pay-Per-Click Advertising",
      icon: <FaPaperPlane size={40} color="#4ade80" />, // Increased size
    }
  ];

  return (
    <section id="services" style={sectionStyles}>
      <div style={containerStyles}>
        <h2 style={titleStyles}>The List of Digital Marketing Services are;</h2>
        <div style={underline}></div>

        <div style={servicesWrapper}>
          {services.map((service, index) => (
            <div key={index} style={cardStyle}>
              <div style={iconContainer}>{service.icon}</div>
              <h3 style={cardTitle}>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const sectionStyles = {
  background: 'linear-gradient(180deg, #173b4c 0%, #0a2e3f 100%)',
  padding: '80px 0',
  color: '#ffffff',
  fontFamily: 'Segoe UI, sans-serif'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  textAlign: 'center'
};

const titleStyles = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '10px',
};

const underline = {
  width: '60px',
  height: '4px',
  backgroundColor: '#4ade80',
  margin: '20px auto 50px',
  borderRadius: '2px'
};

const servicesWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  flexWrap: 'nowrap'
};

const cardStyle = {
  backgroundColor: 'rgba(255,255,255,0.05)',
  borderRadius: '10px',
  padding: '30px 20px',
  border: '1px solid rgba(255,255,255,0.1)',
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  flex: '1',
  minWidth: '180px',
  maxWidth: '220px'
};

const iconContainer = {
  marginBottom: '20px'
};

const cardTitle = {
  fontSize: '1rem',
  fontWeight: '600',
  color: 'white'
};

export default Services;