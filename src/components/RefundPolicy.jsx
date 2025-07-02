import React from 'react';

const RefundPolicy = () => {
  return (
    <div style={wrapperStyle}>
      <div style={pageStyle}>
        <h1 style={headingStyle}>Refund and Returns Policy</h1>
        <p>
          At <strong>Fusionfame Digital</strong>, we stand behind the quality of our products and your satisfaction is our top priority.
          If something isn’t quite right, we’re here to make it right.
        </p>

        <h2 style={sectionHeading}>Returns Made Simple</h2>
        <p>
          We accept returns within <strong>30 days</strong> of delivery. To be eligible for a return, your item must be:
        </p>
        <ul>
          <li>Unused and in the same condition you received it</li>
          <li>In its original packaging</li>
          <li>Accompanied by the receipt or proof of purchase</li>
        </ul>
        <p>
          <strong>Note:</strong> Certain items are non-returnable, such as custom-made products, digital downloads, or items marked as final sale.
        </p>

        <h2 style={sectionHeading}>Refunds That Respect Your Time</h2>
        <p>
          Once your return is received and inspected, we’ll notify you via email. Approved refunds are processed within <strong>5–7 business days</strong> and will be automatically applied to your original method of payment.
        </p>
        <p>
          If the item was a gift, we can issue store credit instead — because everyone deserves geek-approved gear.
        </p>

        <h2 style={sectionHeading}>Exchanges</h2>
        <p>
          We only replace items if they are defective or damaged. If you need to exchange it for the same item, please contact us at support@fusionfamedigital.io.
        </p>

        <h2 style={sectionHeading}>Shipping Returns</h2>
        <p>
          To return your product, you should mail it to: #336, Tower A On 3rd Floor Spaze I-tech Park, Gurgaon, Haryana, India, 122018.
        </p>
        <p>
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
        </p>
      </div>
    </div>
  );
};

// Full-page background
const wrapperStyle = {
  backgroundColor: '#fff',
  paddingTop: '120px', // Adds space below fixed header
  minHeight: '100vh'
};

// Inner content box
const pageStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px 40px 20px',
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.7',
  fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '20px',
};

const sectionHeading = {
  fontSize: '1.3rem',
  fontWeight: '600',
  marginTop: '30px',
  marginBottom: '10px',
};

export default RefundPolicy;
