import React from 'react';

const CookieNotice = () => {
  return (
    <div style={wrapperStyle}>
      <div style={pageStyle}>
        <h1 style={headingStyle}>Cookie Notice</h1>
        <p style={paragraphStyle}>
          This Cookie Notice explains how Brand Geek uses cookies and similar technologies to recognize you when you visit our website.
        </p>

        <h2 style={subHeadingStyle}>What are cookies?</h2>
        <p style={paragraphStyle}>
          Cookies are small data files placed on your device. They are widely used to make websites work or to work more efficiently, as well as to provide reporting information.
        </p>

        <h2 style={subHeadingStyle}>Why do we use cookies?</h2>
        <p style={paragraphStyle}>
          We use cookies for several reasons, such as helping us understand how the site is being used, improve your experience, and customize content.
        </p>

        <h2 style={subHeadingStyle}>How can I control cookies?</h2>
        <p style={paragraphStyle}>
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings.
        </p>
        <p style={paragraphStyle}>
          If you have questions, email <strong>info@brand-geek.com</strong>.
        </p>

        <h3 style={subHeadingStyle}>We use:</h3>
        <ul style={listStyle}>
          <li>Essential cookies to keep our site running smoothly.</li>
          <li>Performance cookies to understand how you interact with our content.</li>
          <li>Functional cookies to remember your preferences and settings.</li>
          <li>Targeting cookies to show you ads that actually matter to you.</li>
        </ul>
        <p style={paragraphStyle}>
          Want to learn more? Check out our full <a href="/privacy-policy">Privacy Policy</a>, and Cookie Settings to take full control of your data experience.
        </p>
        <p style={paragraphStyle}>
          Stay smart. Stay geeky. Stay in control.
        </p>
      </div>
    </div>
  );
};

const wrapperStyle = {
  minHeight: 'calc(100vh - 150px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

const pageStyle = {
  maxWidth: '1200px',
  margin: '80px auto 40px auto',
  padding: '0 40px',
  color: '#1a1a1a',
  backgroundColor: '#fff',
  fontSize: '16px',
  lineHeight: '1.7',
  fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '20px',
};

const subHeadingStyle = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginTop: '30px',
  marginBottom: '10px',
};

const paragraphStyle = {
  color: '#333'
};

const listStyle = {
  paddingLeft: '20px',
  color: '#333',
  lineHeight: '1.6',
};

export default CookieNotice;
