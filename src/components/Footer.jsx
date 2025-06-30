import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .footer-link:hover, .legal-link:hover {
        color: #7fff00 !important;
      }

      .back-to-top:hover {
        transform: translateY(-3px);
        background-color: #7fff00;
        color: #103330;
      }

      @media (max-width: 768px) {
        .footer-grid {
          grid-template-columns: 1fr !important;
          gap: 30px !important;
        }

        .bottom-bar {
          flex-direction: column !important;
          text-align: center !important;
        }

        .legal-links {
          justify-content: center !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={footerGridStyles} className="footer-grid">
          {/* About Section */}
          <div style={footerSectionStyles}>
            <h3 style={footerTitleStyles}>About</h3>
            <p style={footerTextStyles}>
              Each customer has different demands, we develop a strategic marketing plan that thoroughly examines each marketing objective and establishes precise metrics.
            </p>
          </div>

          {/* Quick Links */}
          <div style={footerSectionStyles}>
            <h4 style={footerSubtitleStyles}>Quick Links</h4>
            <ul style={footerListStyles}>
              <li><a href="#home" className="footer-link" style={footerLinkStyles}>Home</a></li>
              <li><Link to="/about" className="footer-link" style={footerLinkStyles}>About</Link>
</li>
              <li>
                <Link to="/contact" className="footer-link" style={footerLinkStyles}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link" style={footerLinkStyles}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="footer-link" style={footerLinkStyles}>
                  Refund and Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="footer-link" style={footerLinkStyles}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookie-notice" className="footer-link" style={footerLinkStyles}>
                  Cookie Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div style={footerSectionStyles}>
            <h4 style={footerSubtitleStyles}>Services</h4>
            <ul style={footerListStyles}>
              <li><a  style={footerLinkStyles}>Social Media Marketing</a></li>
              <li><a  style={footerLinkStyles}>Search Engine Optimization</a></li>
              <li><a  style={footerLinkStyles}>Pay-Per-Click Advertising</a></li>
              <li><a  style={footerLinkStyles}>Content Marketing</a></li>
              <li><a   style={footerLinkStyles}>Website Design & Development</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={footerSectionStyles}>
            <h4 style={footerSubtitleStyles}>Contact Info</h4>
            <p style={footerTextStyles}><strong>Email:</strong> info@brand-geek.com</p>
            <p style={footerTextStyles}><strong>Address:</strong><br />
              Street: 2142 Mayo Street<br />
              City: Williamstown<br />
              State/province/area: Kentucky<br />
              Zip code: 41097<br />
              Country calling code: +1<br />
              Country: United States
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div style={backToTopWrapper}>
          <button onClick={scrollToTop} className="back-to-top" style={backToTopButton}>
            ^
          </button>
        </div>
      </div>

      {/* Full-width copyright bar */}
      <div style={fullWidthCopyright}>
        <p>Copyright © 2025 Brand Geek.</p>
      </div>
    </footer>
  );
};

export default Footer;

// ========== Styles ==========

const footerStyles = {
  background: 'linear-gradient(135deg, #2a5a6b 0%, #3b6b7a 50%, #4a7c8a 100%)',
  color: '#d9faff',
  padding: '60px 0 0',
  position: 'relative'
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const footerGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '40px',
  marginBottom: '40px'
};

const footerSectionStyles = {
  padding: '0 10px'
};

const footerTitleStyles = {
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#7fff00'
};

const footerSubtitleStyles = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#7fff00'
};

const footerTextStyles = {
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '10px',
  color: '#d9faff'
};

const footerListStyles = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const footerLinkStyles = {
  color: '#d9faff',
  textDecoration: 'none',
  display: 'block',
  padding: '4px 0',
  transition: 'color 0.3s ease'
};

const backToTopWrapper = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: 'auto',
  height: 'auto',
  zIndex: 1001 
};


const backToTopButton = {
  backgroundColor: '#7fff00',
  color: '#103330',
  border: 'none',
  borderRadius: '6px',
  width: '45px',
  height: '45px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1002
};


const fullWidthCopyright = {
  width: '100%',
  backgroundColor: '#0a2e3f',
  color: '#d9faff',
  textAlign: 'center',
  padding: '20px 0',
  fontSize: '0.95rem',
  marginTop: '20px'
};

