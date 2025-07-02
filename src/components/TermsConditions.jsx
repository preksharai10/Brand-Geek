import React from 'react';

const TermsConditions = () => {
  return (
    <div style={wrapperStyle}>
      <div style={pageStyle}>
        <h1 style={headingStyle}>Terms &amp; Conditions</h1>
        <p>
          Welcome to Fusionfame Digital! These Terms and Conditions (“Terms”) govern your access to and use of our website, products, and services (collectively, the “Services”). By using Fusionfame Digital, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our Services.
        </p>

        <h2 style={sectionHeading}>1. Who We Are</h2>
        <p>
          Fusionfame Digital (“we,” “us,” “our”) is a [describe nature of your business, e.g., branding consultancy/digital marketing/e‑commerce platform] committed to helping brands grow through innovative solutions.
        </p>

        <h2 style={sectionHeading}>2. Eligibility</h2>
        <p>
          You must be at least 18 years old or the age of majority in your jurisdiction to use our Services. By using our Services, you represent that you meet these requirements.
        </p>

        <h2 style={sectionHeading}>3. User Accounts</h2>
        <p>
          You may be required to create an account to access certain features. You are responsible for safeguarding your login credentials and agree to notify us immediately of any unauthorized use of your account.
        </p>

        <h2 style={sectionHeading}>4. Use of Services</h2>
        <p>You agree to use our Services only for lawful purposes and in accordance with these Terms. You shall not:</p>
        <ul>
          <li>Use the Services in any way that violates applicable laws.</li>
          <li>Attempt to gain unauthorized access to any part of the Services.</li>
          <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Services without express written permission.</li>
        </ul>

        <h2 style={sectionHeading}>5. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and intellectual property displayed on our platform are owned by or licensed to Fusionfame Digital. You may not use any of our intellectual property without prior written consent.
        </p>

        <h2 style={sectionHeading}>6. Payment &amp; Billing</h2>
        <p>If your use of our Services involves payment:</p>
        <ul>
          <li>You agree to pay all fees and applicable taxes.</li>
          <li>Payments are non‑refundable unless otherwise stated in writing.</li>
          <li>We reserve the right to change our pricing with notice.</li>
        </ul>

        <h2 style={sectionHeading}>7. Third-Party Links</h2>
        <p>
          Our Services may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party websites or services.
        </p>

        <h2 style={sectionHeading}>8. Termination</h2>
        <p>
          We may suspend or terminate your access to the Services at our sole discretion, without notice, if we believe you are in breach of these Terms.
        </p>

        <h2 style={sectionHeading}>9. Disclaimer of Warranties</h2>
        <p>
          The Services are provided “as is” and “as available.” Fusionfame Digital disclaims all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2 style={sectionHeading}>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Fusionfame Digital shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our Services.
        </p>

        <h2 style={sectionHeading}>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Fusionfame Digital and its affiliates from any claims, losses, or damages arising out of your use of the Services or your violation of these Terms.
        </p>

        <h2 style={sectionHeading}>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Your Country/State], without regard to conflict of law principles.
        </p>

        <h2 style={sectionHeading}>13. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Continued use of the Services after changes constitutes your acceptance of the new Terms.
        </p>

        <h2 style={sectionHeading}>14. Contact Us</h2>
        <p>
          For any questions or concerns, contact us at: Email: support@fusionfamedigital.io
        </p>
      </div>
    </div>
  );
};

const wrapperStyle = {
  backgroundColor: '#fff',
  paddingTop: '120px',
  minHeight: '100vh',
};

const pageStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px 40px',
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.7',
  fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '20px',
  color: '#000',
};

const sectionHeading = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginTop: '30px',
  marginBottom: '10px',
  color: '#000',
};

export default TermsConditions;
