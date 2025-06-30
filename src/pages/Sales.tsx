
// import contactBanner from '../projectimages/Contactpage.jpg'; // <-- your image file
// const ContactForm = () => {
//   return (
    
//     <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      
//       {/* Full-width banner image */}
//        <img
//         src={contactBanner}
//         alt="Contact Sales"
//     className="w-full max-h-64  shadow-md "
//     style={{ height:"100vh", }}
//       />


//       <div style={{ padding: '0 1rem', display: 'flex', justifyContent: 'center' }}>
//         <iframe
//           title="Zoho Bigin Sales Contact Form"
//           src="https://in.bigin.online/org60042649176/forms/sales-contact-form"
//           style={{
//             width: '100%',
//             maxWidth: '1000px',
//             height: '1000px',
//             border: 'none',
//             borderRadius: '8px',
//             boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
//             backgroundColor: 'transparent',
//             fontFamily: 'Poppins, sans-serif'
//           }}
//           frameBorder="0"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
import contactBanner from '../projectimages/Contactpage.jpg';

const ContactForm = () => {
  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      {/* Full-width banner image */}
      <img
        src={contactBanner}
        alt="Contact Sales"
        className="w-full max-h-64 shadow-md"
        style={{  height:"100vh",  }} // Adjusted from 100vh to avoid pushing form down
      />

      <div
        style={{
          padding: '0 1rem',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '0px'
        }}
      >
        <iframe
          title="Zoho Bigin Sales Contact Form"
          src="https://in.bigin.online/org60042649176/forms/sales-contact-form"
          style={{
            width: '100%',
            maxWidth: '1000px',
            height: '830px', // Adjusted from 1000px to reduce bottom scroll
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'transparent',
            fontFamily: 'Poppins, sans-serif',
            marginBottom: 0
          }}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;

