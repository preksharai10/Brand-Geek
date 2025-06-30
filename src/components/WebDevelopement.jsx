import React from 'react';

const WebDevelopment = () => {
  const perks = [
    "Brand Credibility",
    "User Retention",
    "SERP Rankings",
    "Fascinates the audience",
    "Seamless user experience",
    "Intuitive navigation",
    "Impactful visuals",
    "Effective security",
    "Enhanced user experience",
    "Cost-effective marketing possibilities"
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        
        {/* Content Block */}
        <div style={contentRowStyles}>
          {/* Image Left */}
          <div style={imageContainerStyles}>
            <img 
              src="https://brand-geek.com/wp-content/uploads/2025/06/web2.jpg"
              alt="Website Design and Development"
              style={imageStyles}
            />
          </div>

          {/* Text Right */}
          <div style={textBlockStyles}>
            <h2 style={titleStyles}>Website Design and Web Development Services</h2>
            <p style={descriptionStyles}>
              We are your committed collaborator in developing powerful web experiences, not just a website design firm. Our crew of talented professionals, tactical digital marketers, and talented designers team up to provide outstanding services globally.
            </p>
            <p style={descriptionStyles}>
              Our speciality is developing user-friendly websites with responsive design that captivate visitors and generate leads. Our customised strategy guarantees that your online existence stands among others in the rapidly evolving marketplace, regardless of the fact that you're a small business needing a flawless, competent website or a large organization searching for cutting-edge e-commerce solutions.
            </p>
          </div>
        </div>

        {/* Perks Box */}
        <div style={perksBoxStyles}>
          <h3 style={perksHeaderStyles}>Perks of Our Website Design and Web Development Services</h3>
          <ul style={perksListStyles}>
            {perks.map((perk, index) => (
              <li key={index} style={perkItemStyles}>
                 {perk}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

// === STYLES ===

const sectionStyles = {
  background: 'linear-gradient(to bottom, #0c344b, #1b4d63)',
  padding: '80px 20px',
  color: '#ffffff'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const contentRowStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '50px',
};

const imageContainerStyles = {
  flex: '1 1 45%',
  textAlign: 'center',
};

const imageStyles = {
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  borderRadius: '12px',
};

const textBlockStyles = {
  flex: '1 1 50%',
  padding: '0 20px',
};

const titleStyles = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const descriptionStyles = {
  fontSize: '1rem',
  lineHeight: '1.7',
  marginBottom: '15px',
  color: '#e1e1e1',
};

const perksBoxStyles = {
  backgroundColor: '#23566c',
  borderRadius: '8px',
  padding: '30px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
};

const perksHeaderStyles = {
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const perksListStyles = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  color: '#dbe9f0',
  margin: 0
};

const perkItemStyles = {
  fontSize: '1rem',
  padding: '8px 0',
};

export default WebDevelopment;
