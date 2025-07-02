import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p>
        At <strong>Fusionfame Digital</strong>, your privacy is a priority. This Privacy Policy outlines how we collect,
        use, disclose, and safeguard your information when you visit our website, use our services, or interact
        with us in any way. By using Fusionfame Digital, you agree to the terms of this policy.
      </p>

      <h2 style={styles.subheading}>1. Information We Collect</h2>
      <p>We collect information in several ways:</p>

      <h3 style={styles.sectionTitle}>a. Information You Provide</h3>
      <ul>
        <li>Account details: such as name, email, phone number, and password when you register.</li>
        <li>Communication data: including emails, support requests, survey responses, or participation in promotions.</li>
      </ul>

      <h3 style={styles.sectionTitle}>b. Automated Data Collection</h3>
      <ul>
        <li>Cookies & Tracking Technologies: We collect browser type, IP address, device ID, pages visited, and time spent using analytics tools.</li>
        <li>Usage Data: We analyze how you use our platform to improve performance and personalize experience.</li>
      </ul>

      <h3 style={styles.sectionTitle}>c. Third-Party Sources</h3>
      <ul>
        <li>We may receive information from marketing partners, social media platforms, or data providers that help us enhance your experience.</li>
      </ul>

      <h2 style={styles.subheading}>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and manage our services</li>
        <li>Communicate with you (support, updates, promotions)</li>
        <li>Improve our website and services</li>
        <li>Analyze usage for better performance</li>
      </ul>

      <h2 style={styles.subheading}>3. Data Security</h2>
      <p>We use administrative, technical, and physical safeguards to protect your information. However, no system is 100% secure.</p>

      <h2 style={styles.subheading}>4. Your Rights</h2>
      <ul>
        <li>You can access, correct, or delete your personal information</li>
        <li>You may opt-out of marketing communications</li>
      </ul>

      <h2 style={styles.subheading}>5. Changes to This Policy</h2>
      <p>We may update this policy from time to time. Any changes will be posted on this page.</p>

      <h2 style={styles.subheading}>6. Contact Us</h2>
      <p>If you have any questions or concerns, contact us at <strong>support@fusionfamedigital.io</strong>.</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '140px 20px 40px',
    backgroundColor: '#ffffff',
    color: '#333333',
    lineHeight: 1.6,
    fontSize: '1rem',
    minHeight: '100vh' 
  },

  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '40px',
    marginBottom: '15px'
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '20px'
  }
};

export default PrivacyPolicy;
