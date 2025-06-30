import React from 'react';

const ServicesPage = () => {
  return (
    <div>
      {/* Page Header with floating elements */}
      <div style={headerStyles}>
        {/* Floating Icons */}
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
        
        <div style={headerContainerStyles}>
          <h1 style={headerTitleStyles}>Our Services</h1>
          <div style={titleUnderline}></div>
        </div>
      </div>

      {/* SEO Section - Text Left, Image Right */}
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
              <li style={perkItemStyles}>Increased Online Visibility</li>
              <li style={perkItemStyles}>Increased Conversions</li>
              <li style={perkItemStyles}>Better User experience</li>
              <li style={perkItemStyles}>Measurable ROI</li>
              <li style={perkItemStyles}>Increased brand awareness</li>
              <li style={perkItemStyles}>Stay Ahead of Algorithm Updates</li>
              <li style={perkItemStyles}>Targeted Traffic</li>
              <li style={perkItemStyles}>Long-term outcomes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Media Marketing Section - Image Left, Text Right */}
      <section id="social-media" style={sectionStyles}>
        <div style={containerStyles}>
          <div style={contentGridStylesReverse}>
            <div style={imageContainerStylesSM}>
              <img 
                src="https://brand-geek.com/wp-content/uploads/2025/06/smm2.jpg" 
                alt="Social Media Marketing" 
                style={imageStylesSM}
              />
            </div>
            
            <div style={textContentStylesSM}>
              <h2 style={titleStyles}>Social Media Marketing</h2>
              <p style={descriptionStyles}>
                Use our social media marketing services to interact with, instruct, and expand your audience. We provide engine content for social media sites like Facebook, Instagram, Twitter, Linkedin and Tik Tok that appeals to your target demographic. Our well-planned campaigns create leads, build loyalty among customers, and raise visibility for the brand. We customize our strategy to optimise your social media return on investment and assist your brand in developing and effective digital presence by utilising data visualization and audience perspective.
              </p>
            </div>
          </div>

          <div style={perksBoxStyles}>
            <h3 style={perksHeaderStyles}>Perks of Our Social Media Marketing Services</h3>
            <ul style={perksListStyles}>
              <li style={perkItemStyles}>Increased brand awareness</li>
              <li style={perkItemStyles}>Enhanced Website traffic</li>
              <li style={perkItemStyles}>Improved customer engagement</li>
              <li style={perkItemStyles}>Cost-effective marketing</li>
              <li style={perkItemStyles}>Better focusing</li>
              <li style={perkItemStyles}>Direct Interaction with customers</li>
              <li style={perkItemStyles}>Access to Data Insights</li>
              <li style={perkItemStyles}>Boosts Brand Loyalty</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Content Marketing Section - Text Left, Image Right */}
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

          <div style={perksBoxStylesCM}>
            <h3 style={perksHeaderStyles}>Perks of Our Content Marketing Services</h3>
            <ul style={perksListStyles}>
              <li style={perkItemStyles}>Enhanced brand awareness</li>
              <li style={perkItemStyles}>Enhanced recognition</li>
              <li style={perkItemStyles}>Boosts organic traffic</li>
              <li style={perkItemStyles}>Better SEO rankings</li>
              <li style={perkItemStyles}>Lead generation and conversion</li>
              <li style={perkItemStyles}>Cost-effective</li>
              <li style={perkItemStyles}>Increased customer engagement rate</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Website Design and Development Section - Image Left, Text Right */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={contentGridStylesReverse}>
            <div style={imageContainerStylesWeb}>
              <img 
                src="https://brand-geek.com/wp-content/uploads/2025/06/web2.jpg"
                alt="Website Design and Development"
                style={imageStylesWeb}
              />
            </div>

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

          <div style={perksBoxStylesWeb}>
            <h3 style={perksHeaderStyles}>Perks of Our Website Design and Web Development Services</h3>
            <ul style={perksListStyles}>
              <li style={perkItemStyles}>Brand Credibility</li>
              <li style={perkItemStyles}>User Retention</li>
              <li style={perkItemStyles}>SERP Rankings</li>
              <li style={perkItemStyles}>Fascinates the audience</li>
              <li style={perkItemStyles}>Seamless user experience</li>
              <li style={perkItemStyles}>Intuitive navigation</li>
              <li style={perkItemStyles}>Impactful visuals</li>
              <li style={perkItemStyles}>Effective security</li>
              <li style={perkItemStyles}>Enhanced user experience</li>
              <li style={perkItemStyles}>Cost-effective marketing possibilities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pay-Per-Click Advertising Section - Text Left, Image Right */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
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

          <div style={perksCard}>
            <h3 style={perksTitle}>Perks of Our Pay-Per-Click Advertising</h3>
            <ul style={perkList}>
              <li style={perkItem}><span style={checkMark}>•</span> Drives site traffic and enhances website visibility</li>
              <li style={perkItem}><span style={checkMark}>•</span> More targeted advertising</li>
              <li style={perkItem}><span style={checkMark}>•</span> Cost-effective</li>
              <li style={perkItem}><span style={checkMark}>•</span> Measurable outcomes</li>
              <li style={perkItem}><span style={checkMark}>•</span> Remarketing possibilities</li>
              <li style={perkItem}><span style={checkMark}>•</span> Generating warm leads</li>
              <li style={perkItem}><span style={checkMark}>•</span> Gives instant site traffic</li>
              <li style={perkItem}><span style={checkMark}>•</span> Flexibility in campaign</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          /* Tablet styles */
        }
        
        @media (max-width: 768px) {
          /* Mobile styles - Stack content vertically */
          .content-grid,
          .content-grid-reverse,
          .grid-styles {
            flex-direction: column !important;
          }
          
          .text-content,
          .text-content-sm,
          .text-block,
          .text-section {
            padding-left: 0 !important;
            padding-right: 0 !important;
            order: 2 !important;
            text-align: center !important;
          }
          
          .image-container,
          .image-container-sm,
          .image-container-web {
            order: 1 !important;
            margin-bottom: 20px !important;
          }
          
          .floating-icons {
            display: none !important;
          }
          
          .perks-list {
            padding-left: 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          /* Small mobile styles */
          .container {
            padding: 0 15px !important;
          }
          
          .section {
            padding: 40px 0 !important;
          }
          
          .header {
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }
          
          .perks-container,
          .perks-box,
          .perks-card {
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
};

// Header Styles - Updated to match second image
const headerStyles = {
  background: 'linear-gradient(135deg, #0a2e3f 0%, #1a4757 25%, #2a5a6b 50%, #1a4757 75%, #0a2e3f 100%)',
  paddingTop: 'clamp(100px, 15vw, 180px)',
  paddingBottom: 'clamp(40px, 8vw, 60px)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden'
};

const headerContainerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  position: 'relative',
  zIndex: 2
};

const headerTitleStyles = {
  fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
  fontWeight: '700',
  color: '#ffffff',
  margin: '0 0 20px 0',
  letterSpacing: '-1px'
};

const titleUnderline = {
  width: 'clamp(60px, 15vw, 100px)',
  height: '4px',
  background: '#4ade80',
  margin: '0 auto',
  borderRadius: '2px'
};

// Floating Icons - Responsive positioning
const topLeftCircle = {
  position: 'absolute',
  top: 'clamp(80px, 12vw, 120px)',
  left: 'clamp(20px, 8vw, 80px)',
  width: 'clamp(50px, 8vw, 70px)',
  height: 'clamp(50px, 8vw, 70px)',
  backgroundColor: 'rgba(30, 58, 75, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
  '@media (max-width: 768px)': {
    display: 'none'
  }
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
  width: 'clamp(6px, 1.5vw, 8px)',
  height: 'clamp(6px, 1.5vw, 8px)',
  backgroundColor: '#ef4444',
  borderRadius: '50%',
};

const redDot2 = {
  position: 'absolute',
  top: '0',
  right: '0',
  width: 'clamp(6px, 1.5vw, 8px)',
  height: 'clamp(6px, 1.5vw, 8px)',
  backgroundColor: '#ef4444',
  borderRadius: '50%',
};

const leftBlueSquare = {
  position: 'absolute',
  top: 'clamp(180px, 25vw, 250px)',
  left: 'clamp(50px, 20vw, 200px)',
  width: 'clamp(45px, 7vw, 60px)',
  height: 'clamp(45px, 7vw, 60px)',
  backgroundColor: 'rgba(59, 130, 246, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
  '@media (max-width: 768px)': {
    display: 'none'
  }
};

const blueSquareIcon = {
  width: '20px',
  height: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '3px',
};

const rightBlueTriangle = {
  position: 'absolute',
  top: 'clamp(120px, 18vw, 180px)',
  right: 'clamp(50px, 15vw, 150px)',
  width: 'clamp(50px, 8vw, 65px)',
  height: 'clamp(50px, 8vw, 65px)',
  backgroundColor: 'rgba(59, 130, 246, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
  '@media (max-width: 768px)': {
    display: 'none'
  }
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
  top: 'clamp(70px, 10vw, 100px)',
  right: 'clamp(20px, 8vw, 80px)',
  width: 'clamp(50px, 8vw, 70px)',
  height: 'clamp(50px, 8vw, 70px)',
  backgroundColor: 'rgba(245, 158, 11, 0.8)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  border: '2px solid rgba(255, 255, 255, 0.1)',
  '@media (max-width: 768px)': {
    display: 'none'
  }
};

const yellowIcon = {
  color: '#ffffff',
  fontSize: 'clamp(18px, 3vw, 24px)',
  fontWeight: 'bold',
};

// Common Section Styles
const sectionStyles = {
  background: 'linear-gradient(180deg, #173b4c 0%, #0a2e3f 100%)',
  padding: 'clamp(40px, 10vw, 80px) 0',
  color: 'white',
  fontFamily: 'Segoe UI, sans-serif'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 clamp(15px, 3vw, 20px)'
};

const titleStyles = {
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontWeight: '700',
  marginBottom: '20px',
};

// SEO & Content Marketing Styles (Text Left, Image Right)
const contentGridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'clamp(20px, 5vw, 40px)',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 'clamp(20px, 5vw, 40px)',
  '@media (max-width: 768px)': {
    flexDirection: 'column'
  }
};

const textContentStyles = {
  flex: '1 1 500px',
  paddingRight: 'clamp(0px, 3vw, 20px)',
  '@media (max-width: 768px)': {
    order: 2,
    paddingRight: 0,
    textAlign: 'center'
  }
};

const descriptionStyles = {
  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
  lineHeight: '1.8',
  color: 'white'
};

const imageContainerStyles = {
  flex: '1 1 400px',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    order: 1,
    marginBottom: '20px'
  }
};

const imageStyles = {
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  borderRadius: '10px'
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
  lineHeight: '2',
  '@media (max-width: 768px)': {
    paddingLeft: '20px'
  }
};

const perkItemStyles = {
  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
};

// Social Media & Web Development Styles (Image Left, Text Right)
const contentGridStylesReverse = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 'clamp(20px, 5vw, 40px)',
  marginBottom: 'clamp(20px, 5vw, 40px)',
  '@media (max-width: 768px)': {
    flexDirection: 'column'
  }
};

const imageContainerStylesSM = {
  flex: '1 1 400px',
  order: 1,
  '@media (max-width: 768px)': {
    order: 1,
    marginBottom: '20px'
  }
};

const imageStylesSM = {
  width: '100%',
  height: 'auto',
  maxHeight: '350px',
  borderRadius: '20px'
};

const textContentStylesSM = {
  flex: '1 1 500px',
  textAlign: 'left',
  order: 2,
  paddingLeft: 'clamp(0px, 3vw, 20px)',
  '@media (max-width: 768px)': {
    order: 2,
    paddingLeft: 0,
    textAlign: 'center'
  }
};

const perksBoxStyles = {
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  padding: 'clamp(20px, 5vw, 40px) clamp(20px, 4vw, 30px)',
  marginTop: '20px',
  textAlign: 'left'
};

// Content Marketing Styles
const perksBoxStylesCM = {
  backgroundColor: '#23566c',
  borderRadius: '8px',
  padding: 'clamp(20px, 4vw, 30px)',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
};

// Web Development Styles
const imageContainerStylesWeb = {
  flex: '1 1 400px',
  textAlign: 'center',
  order: 1,
  '@media (max-width: 768px)': {
    order: 1,
    marginBottom: '20px'
  }
};

const imageStylesWeb = {
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  borderRadius: '12px',
};

const textBlockStyles = {
  flex: '1 1 500px',
  padding: '0 clamp(0px, 3vw, 20px)',
  order: 2,
  '@media (max-width: 768px)': {
    order: 2,
    padding: 0,
    textAlign: 'center'
  }
};

const perksBoxStylesWeb = {
  backgroundColor: '#23566c',
  borderRadius: '8px',
  padding: 'clamp(20px, 4vw, 30px)',
  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  marginTop: '20px'
};

// PPC Styles (Text Left, Image Right)
const gridStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 'clamp(20px, 5vw, 40px)',
  marginBottom: 'clamp(20px, 5vw, 40px)',
  '@media (max-width: 768px)': {
    flexDirection: 'column'
  }
};

const textSection = {
  flex: '1 1 500px',
  maxWidth: '600px',
  '@media (max-width: 768px)': {
    order: 2,
    textAlign: 'center'
  }
};

const titleStyle = {
  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
  fontWeight: 'bold',
  marginBottom: '20px'
};

const descriptionStyle = {
  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
  lineHeight: '1.8',
  color: '#dfe6e9'
};

const imageContainer = {
  flex: '1 1 400px',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    order: 1,
    marginBottom: '20px'
  }
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
  padding: 'clamp(20px, 4vw, 30px) clamp(25px, 5vw, 40px)',
  textAlign: 'center',
  margin: '0 auto',
  maxWidth: '600px'
};

const perksTitle = {
  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
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
  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
  padding: '8px 0',
  color: '#dcdde1'
};

const checkMark = {
  color: 'white',
  fontWeight: 'bold',
  marginRight: '10px'
};

export default ServicesPage;