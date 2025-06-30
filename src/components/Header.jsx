import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top on route change
  }, [location]);

  const getLinkStyle = (path) => (
    location.pathname === path ? activeLinkStyle : navLinkStyles
  );

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* Logo */}
        <div style={logoStyles}>
          <div style={logoIconStyles}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#4ade80" />
              <path d="M12 10h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2z" fill="white" />
              <circle cx="16" cy="16" r="3" fill="#4ade80" />
            </svg>
          </div>
          <h2 style={logoTextStyles}>Brand Geek</h2>
        </div>

        {/* Desktop Nav */}
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

        {/* Mobile Menu */}
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

// ---------------- STYLES ----------------

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
  gap: '8px',
  minWidth: 0, // Allow flex shrinking
  flex: '1 1 auto'
};

const logoIconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
};

const logoTextStyles = {
  fontSize: '1.3rem',
  fontWeight: '700',
  color: 'white',
  margin: 0,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
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

// ------------- Inject Responsive CSS -------------
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
        font-size: 1.1rem !important;
      }
      
      svg {
        width: 24px !important;
        height: 24px !important;
      }
    }

    @media (max-width: 375px) {
      h2[style*="fontSize"] {
        font-size: 1rem !important;
      }
      
      header div[style*="gap: 8px"] {
        gap: 6px !important;
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