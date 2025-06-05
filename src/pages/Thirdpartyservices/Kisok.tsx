import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create ../css/Kiosk.css

import kioskImg1 from '../../../src/projectimages/eKYC-seamless-integrations.jpg'; // Replace with actual image paths
import kioskImg2 from '../../../src/projectimages/ui.png';
import kioskImg3 from '../../../src/projectimages/Application Development.jpg';

const Kiosk = () => {
  const kioskFeatures = [
    {
      src: kioskImg1,
      title: "Interactive Touch Kiosks",
      desc: "Engaging touchscreen solutions for enhanced customer interaction."
    },
    {
      src: kioskImg2,
      title: "Self-Service Terminals",
      desc: "Efficient kiosks for ticketing, check-ins, and transactions."
    },
    {
      src: kioskImg3,
      title: "Custom Hardware Integration",
      desc: "Tailored kiosk systems with integrated hardware solutions."
    }
    // ... add links for other services as needed

  ];

  return (
    <div className="api-container min-h-screen pt-20">
      {/* Hero / Intro Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <h1 className="main-heading">Kiosk Services</h1>
          <p className="main-description">
            Jayam Solutions provides comprehensive Kiosk services that offer self-service terminals for banking, utility payments, identity verification, and customer service tasks. Our kiosks are designed to operate in high-traffic environments with intuitive user interfaces and secure backend integration.
         A kiosk is a self-service, standalone interactive terminal or booth that is typically
used to provide information, services, or products to customers or users. Kiosks are
commonly found in various public locations such as airports, malls, retail stores,
hospitals, hotels, banks, and transportation hubs, where they offer convenience and
accessibility to users for a wide range of purposes
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {kioskFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              className="image-card-3d"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <img src={item.src} alt={item.title} className="card-image" />
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Paragraph */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Our kiosk solutions improve accessibility, reduce operational costs, and enhance customer satisfaction across sectors like banking, telecom, government, and utilities. We offer end-to-end deployment—from hardware to software integration.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Kiosk;
