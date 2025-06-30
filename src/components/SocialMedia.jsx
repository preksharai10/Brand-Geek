import React from 'react';

const SocialMedia = () => {
  const perks = [
    "Increased brand awareness",
    "Enhanced Website traffic",
    "Improved customer engagement",
    "Cost-effective marketing",
    "Better focusing",
    "Direct Interaction with customers",
    "Access to Data Insights",
    "Boosts Brand Loyalty"
  ];

  return (
    <section id="social-media" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={contentGridStyles}>
          <div style={imageContainerStyles}>
            <img 
              src="https://brand-geek.com/wp-content/uploads/2025/06/smm2.jpg" 
              alt="Social Media Marketing" 
              style={imageStyles}
            />
          </div>
          
          <div style={textContentStyles}>
            <h2 style={titleStyles}>Social Media Marketing</h2>
            <p style={descriptionStyles}>
              Use our social media marketing services to interact with, instruct, and expand your audience. We provide engine content for social media sites like Facebook, Instagram, Twitter, Linkedin and Tik Tok that appeals to your target demographic. Our well-planned campaigns create leads, build loyalty among customers, and raise visibility for the brand. We customize our strategy to optimise your social media return on investment and assist your brand in developing and effective digital presence by utilising data visualization and audience perspective.
            </p>
          </div>
        </div>

        <div style={perksBoxStyles}>
          <h3 style={perksHeaderStyles}>Perks of Our Social Media Marketing Services</h3>
          <ul style={perksListStyles}>
            {perks.map((perk, index) => (
              <li key={index} style={perkItemStyles}>{perk}</li>
            ))}
          </ul>
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

const contentGridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px'
};

const imageContainerStyles = {
  flex: '0 0 400px'
};

const imageStyles = {
  width: '100%',
  height: 'auto',
  maxHeight: '350px',
  borderRadius: '20px'
};

const textContentStyles = {
  flex: '1',
  textAlign: 'left'
};

const titleStyles = {
  fontSize: '1.5rem',
  fontWeight: '700',
  marginBottom: '20px',
  color: '#ffffff'
};

const descriptionStyles = {
  fontSize: '1rem',
  color: '#d1d5db',
  lineHeight: '1.7'
};

const perksBoxStyles = {
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: '40px 30px',
  marginTop: '50px',
  textAlign: 'left'
};

const perksHeaderStyles = {
  fontSize: '1.2rem',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '20px',
  textAlign: 'center'
};

const perksListStyles = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  color: '#d1d5db'
};

const perkItemStyles = {
  marginBottom: '10px',
  fontSize: '0.95rem'
};

export default SocialMedia;