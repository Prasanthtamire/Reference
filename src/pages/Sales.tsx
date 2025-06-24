import React from 'react';
import contactBanner from '../projectimages/salescontact.avif'; // <-- your image file

const ContactForm = () => {
  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      
      {/* Full-width banner image */}
       <img
        src={contactBanner}
        alt="Contact Sales"
        className="w-full max-h-64  shadow-md"
    style={{ height:"100vh", }}
      />

      {/* Title */}
      {/* <h2 style={{ textAlign: 'center', margin: '40px 0 20px' }}>
        Sales Contact Form
      </h2> */}

      {/* Zoho form iframe */}
      <div style={{ padding: '0 1rem', display: 'flex', justifyContent: 'center' }}>
        <iframe
          title="Zoho Bigin Sales Contact Form"
          src="https://in.bigin.online/org60042649176/forms/sales-contact-form"
          style={{
            width: '100%',
            maxWidth: '1000px',
            height: '1000px',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'transparent'
          }}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
