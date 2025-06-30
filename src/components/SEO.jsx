import React from 'react';

const SEO = () => {
  const perks = [
    "Increased Online Visibility",
    "Increased Conversions",
    "Better User experience",
    "Measurable ROI",
    "Increased brand awareness",
    "Stay Ahead of Algorithm Updates",
    "Targeted Traffic",
    "Long-term outcomes"
  ];

  return (
    <section id="seo" style={sectionStyles}>
      <div style={containerStyles}>
        <div style={contentGridStyles}>
          <div style={textContentStyles}>
            <h2 style={titleStyles}>Search Engine Optimization</h2>
            <p style={descriptionStyles}>
              Make an impression on nearby prospective prospects by using our SEO services. To ascertain that the business you run shows up in the search results, Google My Business listings, we optimise your digital identity. Among our focused tactics are the handling of reputation, citation development, and localised keyword optimization. We enhance traffic to your website and boost the probability of being discovered by customers searching for your services by improving your exposure in searches.
            </p>
          </div>

          <div style={imageContainerStyles}>
            <img 
              src="https://brand-geek.com/wp-content/uploads/2025/06/seo2.jpg" 
              alt="SEO Services" 
              style={imageStyles}
            />
          </div>
        </div>

        <div style={perksContainerStyles}>
          <h3 style={perksHeaderStyles}>Perks of Our SEO Services</h3>
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
  padding: '60px 0',
  color: 'white',
  fontFamily: 'Segoe UI, sans-serif'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 15px'
};

const titleStyles = {
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontWeight: '700',
  marginBottom: '20px',
  lineHeight: '1.2'
};

const contentGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
  alignItems: 'center',
  marginBottom: '40px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '20px'
  }
};

const textContentStyles = {
  paddingRight: '0',
  '@media (min-width: 769px)': {
    paddingRight: '20px'
  }
};

const descriptionStyles = {
  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
  lineHeight: '1.7',
  color: 'white',
  textAlign: 'justify'
};

const imageContainerStyles = {
  textAlign: 'center',
  order: '1',
  '@media (min-width: 769px)': {
    order: '2'
  }
};

const imageStyles = {
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '10px',
  '@media (min-width: 769px)': {
    maxWidth: '450px'
  }
};

const perksContainerStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: 'clamp(20px, 4vw, 30px)',
  borderRadius: '10px',
  textAlign: 'left'
};

const perksHeaderStyles = {
  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
  fontWeight: '700',
  marginBottom: '20px',
  textAlign: 'center'
};

const perksListStyles = {
  listStyle: 'disc',
  paddingLeft: 'clamp(20px, 5vw, 40px)',
  color: 'white',
  lineHeight: '1.8',
  margin: '0'
};

const perkItemStyles = {
  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
  marginBottom: '8px'
};

export default SEO;