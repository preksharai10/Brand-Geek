import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const getLinkStyle = (path) => (
    location.pathname === path ? activeLinkStyle : navLinkStyles
  );

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* Logo & Title */}
        <div style={logoStyles}>
          <div style={logoIconStyles}>
            <img
              src="/logo.png"
              alt="Fusionfame Logo"
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
                borderRadius: '0'
              }}
            />
          </div>
          <h2 style={logoTextStyles}>
            <span style={{ color: '#4ade80' }}>Fusionfame</span>{' '}
            <span style={{ color: 'white' }}>Digital</span>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav style={navStyles} className="nav-desktop">
          <ul style={navListStyles}>
            <li><Link to="/" style={getLinkStyle('/')}>Home</Link></li>
            <li><Link to="/about" style={getLinkStyle('/about')}>About</Link></li>
            <li><Link to="/services" style={getLinkStyle('/services')}>Services</Link></li>
            <li><Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-btn" style={mobileMenuButtonStyles} onClick={toggleMenu}>
          <div style={hamburgerStyles}></div>
          <div style={hamburgerStyles}></div>
          <div style={hamburgerStyles}></div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div style={mobileMenuStyles}>
            <Link to="/" style={mobileNavLinkStyles}>Home</Link>
            <Link to="/about" style={mobileNavLinkStyles}>About</Link>
            <Link to="/services" style={mobileNavLinkStyles}>Services</Link>
            <Link to="/contact" style={mobileNavLinkStyles}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

// ---------------------- STYLES ----------------------

const headerStyles = {
  background: '#00555A',
  color: 'white',
  padding: '0.75rem 0',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
};

const containerStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box'
};

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  minWidth: 0,
  flex: '1 1 auto'
};

const logoIconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const logoTextStyles = {
  fontSize: '1.6rem',
  fontWeight: '700',
  margin: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
};

const navStyles = {
  display: 'block'
};

const navListStyles = {
  display: 'flex',
  listStyle: 'none',
  gap: '1.5rem',
  margin: 0,
  padding: 0,
  alignItems: 'center'
};

const navLinkStyles = {
  color: '#e2e8f0',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '0.95rem',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  whiteSpace: 'nowrap'
};

const activeLinkStyle = {
  ...navLinkStyles,
  color: '#4ade80',
  fontWeight: '600'
};

const mobileMenuButtonStyles = {
  display: 'none',
  flexDirection: 'column',
  cursor: 'pointer',
  padding: '8px',
  borderRadius: '6px',
  transition: 'background-color 0.3s ease',
  flexShrink: 0
};

const hamburgerStyles = {
  width: '22px',
  height: '2px',
  backgroundColor: 'white',
  margin: '2.5px 0',
  borderRadius: '2px'
};

const mobileMenuStyles = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  background: 'linear-gradient(180deg, #134e4a 0%, #0f766e 50%, #0d9488 100%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',
  borderRadius: '0 0 12px 12px',
  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
  zIndex: 999
};

const mobileNavLinkStyles = {
  color: '#e2e8f0',
  textDecoration: 'none',
  padding: '12px 0',
  fontSize: '1rem',
  fontWeight: '500',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  transition: 'color 0.3s ease'
};

// ---------------------- RESPONSIVE STYLES ----------------------

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .nav-desktop { display: none !important; }
      .mobile-menu-btn { display: flex !important; }
    }

    @media (min-width: 769px) {
      .nav-desktop { display: block !important; }
      .mobile-menu-btn { display: none !important; }
    }

    @media (max-width: 480px) {
      header div[style*="maxWidth"] {
        padding: 0 12px !important;
      }

      h2[style*="fontSize"] {
        font-size: 1.2rem !important;
      }

      img {
        width: 28px !important;
        height: 28px !important;
      }
    }

    @media (max-width: 375px) {
      h2[style*="fontSize"] {
        font-size: 1rem !important;
      }

      header div[style*="gap: 12px"] {
        gap: 8px !important;
      }
    }

    .mobile-menu-btn:hover {
      background-color: rgba(255,255,255,0.1);
    }

    * {
      box-sizing: border-box;
    }
  `;
  document.head.appendChild(style);
}

export default Header;
