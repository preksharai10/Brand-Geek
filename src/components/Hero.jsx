import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={heroSection}>
      {/* Top darker section */}
      <div style={topSection}>
        {/* Exact floating elements from first image */}
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
        
        <div style={container}>
          {/* Hero Header - exactly like first image */}
          <div style={headerSection}>
            <h1 style={title}>Digital Marketing Services</h1>
            <div style={titleUnderline}></div>
            <h2 style={subtitle}>
              Drive Real Outcome Using Our Expert Digital Marketing Services
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom lighter section */}
      <div style={bottomSection}>
        <div style={container}>
          {/* Main content section matching first image layout */}
          <div style={mainContent}>
            {/* Left text content */}
            <div style={leftTextSection}>
              <p style={paragraph}>
                Each customer has different demands, we develop a strategic marketing plan that thoroughly examines each marketing objective and establishes precise metrics. We're here to help you advance your digital marketing, from boosting website visitors and their participation to creating reputation and producing conversions that lead to revenues.
              </p>
              <p style={paragraph}>
                With professionals in all facets of digital marketing, we guarantee top-notch implementation that effectively appeals to your audience and produces outcomes. You can rest assured that all digital strategies will be carried out perfectly because our meticulous methodology has been refined and revamped over the course of 20 years.
              </p>
            </div>

            {/* Right image */}
            <div style={rightImageSection}>
              <img
                src="https://brand-geek.com/wp-content/uploads/2025/06/img1.jpg"
                alt="Ad Marketing"
                style={mainImage}
              />
            </div>
          </div>

          {/* Bottom section - Image left, text right */}
          <div style={bottomContent}>
            <div style={bottomLeftImage}>
              <img
                src="https://brand-geek.com/wp-content/uploads/2025/06/img2.jpg"
                alt="Digital Marketing"
                style={bottomImage}
              />
            </div>
            
            <div style={bottomRightText}>
              <p style={paragraph}>
                Strong data insights that help initiatives be optimised. Our digital experts use statistical techniques to assess the effectiveness of your marketing campaign. To assess accomplishment, optimise content, and deliver an unparalleled customer experience, our data experts use insights from data.
              </p>
              <p style={paragraph}>
                We can optimise your website from the forefront to the backend. Instead of stuffing your website with keywords, we make certain that it's style and framework help your clients find it. We have possession of the most recent training as a Google recommended associate to ensure that the appropriate clients are finding almost all of your unique websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------- Styles for Two-Section Layout ------------------

const heroSection = {
  minHeight: '100vh',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden'
};

const topSection = {
  background: 'linear-gradient(135deg, #0a2e3f 0%, #1a4757 25%, #2a5a6b 50%, #1a4757 75%, #0a2e3f 100%)',
  position: 'relative',
  paddingTop: '140px',
  paddingBottom: '40px'
};

const bottomSection = {
  background: 'linear-gradient(135deg, #2a5a6b 0%, #3b6b7a 50%, #4a7c8a 100%)',
  paddingTop: '40px',
  paddingBottom: '80px'
  
};

const container = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  position: 'relative',
  zIndex: 2
};

const headerSection = {
  textAlign: 'center',
  marginBottom: '80px'
};

const title = {
  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
  fontWeight: '700',
  marginBottom: '20px',
  letterSpacing: '-1px'
};

const titleUnderline = {
  width: '100px',
  height: '3px',
  background: '#4ade80',
  margin: '0 auto 30px',
  borderRadius: '2px'
};

const subtitle = {
  fontSize: '1.3rem',
  fontWeight: '400',
  color: '#e2e8f0',
  lineHeight: '1.6',
  maxWidth: '800px',
  margin: '0 auto'
};

const mainContent = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'center',
};

const leftTextSection = {
  flex: '1 1 45%',
  minWidth: '280px',
};

const rightImageSection = {
  flex: '1 1 45%',
  minWidth: '280px',
};

const mainImage = {
  width: '100%',
  maxWidth: '400px',
  height: '280px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
};

const bottomContent = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '60px',
  flexWrap: 'wrap'
};

const bottomLeftImage = {
  flex: '1 1 45%',
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'center'
};

const bottomImage = {
  width: '100%',
  maxWidth: '400px',
  height: '280px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
};

const bottomRightText = {
  flex: '1 1 45%',
  minWidth: '300px'
};

const paragraph = {
  fontSize: '1rem',
  color: '#ffffff',
  lineHeight: '1.7',
  marginBottom: '20px',
  textAlign: 'left',
  fontWeight: '600'
};

// Exact floating elements from first image
const topLeftCircle = {
  position: 'absolute',
  top: '120px',
  left: '80px',
  width: '70px',
  height: '70px',
  backgroundColor: 'rgba(30, 58, 75, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)'
};

const innerRedDots = {
  position: 'relative',
  width: '20px',
  height: '20px'
};

const redDot1 = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '8px',
  height: '8px',
  backgroundColor: '#ef4444',
  borderRadius: '50%'
};

const redDot2 = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: '8px',
  height: '8px',
  backgroundColor: '#ef4444',
  borderRadius: '50%'
};

const leftBlueSquare = {
  position: 'absolute',
  top: '250px',
  left: '200px',
  width: '60px',
  height: '60px',
  backgroundColor: 'rgba(59, 130, 246, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)'
};

const blueSquareIcon = {
  width: '20px',
  height: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '3px'
};

const rightBlueTriangle = {
  position: 'absolute',
  top: '180px',
  right: '150px',
  width: '65px',
  height: '65px',
  backgroundColor: 'rgba(59, 130, 246, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)'
};

const triangleIcon = {
  width: '0',
  height: '0',
  borderLeft: '10px solid transparent',
  borderRight: '10px solid transparent',
  borderBottom: '15px solid #ffffff'
};

const topRightYellowCircle = {
  position: 'absolute',
  top: '100px',
  right: '80px',
  width: '70px',
  height: '70px',
  backgroundColor: 'rgba(245, 158, 11, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)'
};

const yellowIcon = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold'
};

export default Hero;