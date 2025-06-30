import React from 'react';

const PPC = () => {
  const perks = [
    "Drives site traffic and enhances website visibility",
    "More targeted advertising",
    "Cost-effective",
    "Measurable outcomes",
    "Remarketing possibilities",
    "Generating warm leads",
    "Gives instant site traffic",
    "Flexibility in campaign"
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        {/* Top Grid Section */}
        <div style={gridStyles}>
          <div style={textSection}>
            <h2 style={titleStyle}>Pay-Per-Click Advertising</h2>
            <p style={descriptionStyle}>
              In the system of pay-per-click of online advertising, a marketer rewards an advertising firm when an ad gets clicked on, hence increasing website traffic. In contrast, conventional marketing typically demands payment up advance irrespective of interaction.
              In essence, you're shelling for a click that can lead to prospects or purchases by bringing visitors to your website. Businesses may focus on particular audiences and monitor the success of the lir advertisement using this technique.
            </p>
          </div>

          <div style={imageContainer}>
            <img
              src="https://brand-geek.com/wp-content/uploads/2025/06/ppc2.jpg"
              alt="PPC"
              style={imageStyle}
            />
          </div>
        </div>

        {/* Perks Section */}
        <div style={perksCard}>
          <h3 style={perksTitle}>Perks of Our Pay-Per-Click Advertising</h3>
          <ul style={perkList}>
            {perks.map((perk, index) => (
              <li key={index} style={perkItem}>
                <span style={checkMark}>•</span> {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-width CTA Section */}
      <div style={ctaFullWidth}>
        <div style={ctaInner}>
          <p style={ctaText}>
            Using our professional digital marketing services, you may increase your digital exposure and expand your business reach.
            We'll assist you in reaching your target market, building brand recognition, and boosting sales. You will have a competitive benefit in the digital era, kudos to our customised solutions. Obtain attention, produce outcomes, and accomplish your business objectives. Allow us to assist you with your online success.
          </p>
          <p style={ctaText}>
            Together, let's captivate your audience and broaden your business right now. Consult an experienced professional right now from us!!!
          </p>
          <p style={ctaQuote}>
            *It’s Time to Revamp Your Digital Strategy, and Unleash Your Business Possibilities *
          </p>
        </div>
      </div>
    </section>
  );
};

export default PPC;

const sectionStyles = {
  background: 'linear-gradient(to bottom, #0a2a43, #1f4e5f)',
  color: '#ffffff',
  paddingTop: '60px',
  paddingBottom: '0px'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const gridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '40px',
  marginBottom: '40px'
};

const textSection = {
  flex: '1 1 500px',
  maxWidth: '600px'
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px'
};

const descriptionStyle = {
  fontSize: '16px',
  lineHeight: '1.8',
  color: '#dfe6e9'
};

const imageContainer = {
  flex: '1 1 400px',
  textAlign: 'center'
};

const imageStyle = {
  width: '100%',
  maxWidth: '400px',
  borderRadius: '15px'
};

const perksCard = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '10px',
  padding: '30px 40px',
  textAlign: 'center',
  margin: '0 auto',
  maxWidth: '600px'
};

const perksTitle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#ffffff'
};

const perkList = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  textAlign: 'left'
};

const perkItem = {
  fontSize: '15px',
  padding: '8px 0',
  color: '#dcdde1'
};

const checkMark = {
  color: 'white',
  fontWeight: 'bold',
  marginRight: '10px'
};

const ctaFullWidth = {
  backgroundColor: '#031a27',
  padding: '60px 20px',
  marginTop: '60px'
};

const ctaInner = {
  maxWidth: '1000px',
  margin: '0 auto',
  textAlign: 'center'
};

const ctaText = {
  fontSize: '15px',
  color: '#dcdde1',
  lineHeight: '1.8',
  marginBottom: '20px'
};

const ctaQuote = {
  fontStyle: 'italic',
  color: '#74b9ff',
  fontSize: '14px'
};
