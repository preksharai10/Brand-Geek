import React from 'react';

const ContentMarketing = () => {
  const perks = [
    "Enhanced brand awareness",
    "Enhanced recognition",
    "Boosts organic traffic",
    "Better SEO rankings",
    "Lead generation and conversion",
    "Cost-effective",
    "Increased customer engagement rate"
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <div style={contentGridStyles}>
          <div style={textContentStyles}>
            <h2 style={titleStyles}>Content Marketing</h2>
            <p style={descriptionStyles}>
              In order to draw in and keep the audience they seek interested, content marketing services assist companies in producing, disseminating, and promoting worthwhile, timely, and reliable material. These services seeking to increase client activity, generate knowledge, and foster trust. Among the many content marketing services we provide are strategy formulation and content production. View our bundles for content marketing services. Our speciality content creation services are intended to improve your brand's narrative and help you reach your marketing goals.
            </p>
          </div>

          <div style={imageContainerStyles}>
            <img 
              src="https://brand-geek.com/wp-content/uploads/2025/06/cm2.jpg" 
              alt="Content Marketing" 
              style={imageStyles}
            />
          </div>
        </div>

        <div style={perksBoxStyles}>
          <h3 style={perksHeaderStyles}>Perks of Our Content Marketing Services</h3>
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

// STYLES
const sectionStyles = {
  background: 'linear-gradient(180deg, #173b4c 0%, #0a2e3f 100%)',
  padding: '80px 20px',
  color: '#fff'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto'
};

const titleStyles = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px'
};

const contentGridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '50px'
};

const textContentStyles = {
  flex: '1 1 50%',
  minWidth: '300px'
};

const descriptionStyles = {
  fontSize: '1rem',
  lineHeight: '1.7',
  color: '#e1e1e1'
};

const imageContainerStyles = {
  flex: '1 1 40%',
  minWidth: '300px',
  textAlign: 'center'
};

const imageStyles = {
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
};

const perksBoxStyles = {
  backgroundColor: '#23566c',
  borderRadius: '8px',
  padding: '30px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
};

const perksHeaderStyles = {
  fontSize: '1.5rem',
  marginBottom: '20px'
};

const perksListStyles = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  margin: 0
};

const perkItemStyles = {
  fontSize: '1rem',
  padding: '8px 0',
  color: '#dbe9f0'
};

export default ContentMarketing;
