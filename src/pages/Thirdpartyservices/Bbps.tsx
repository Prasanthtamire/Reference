import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or use a new file: Bbps.css

import bbps1 from '../../../src/projectimages/bharath bill payment.png';
import bbps2 from '../../../src/projectimages/Bhararhbillpay.png'; // Replace with actual relevant images
import bbps3 from '../../../src/projectimages/Bharat-Bill-Payment-System-BBPS.jpg'; // Replace with actual relevant images

const Bbps = () => {
  const bbpsFeatures = [
    {
      src: bbps1,
      title: 'Unified Platform',
      desc: 'One-stop destination for all utility bill payments including electricity, water, gas, telecom, and more.'
    },
    {
      src: bbps2,
      title: 'Real-Time Processing',
      desc: 'Instant transaction confirmations and updates ensure a smooth customer experience.'
    },
    {
      src: bbps3,
      title: 'Secure & RBI-Compliant',
      desc: 'Follows all RBI-mandated security protocols for safe and authorized bill processing.'
    }
  ];

  return (
    <div className="api-container min-h-screen pt-20">
      {/* Intro Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <h1 className="main-heading">Bharat Bill Payment System (BBPS)</h1>
          <p className="main-description">
            BBPS is a centralized payment ecosystem launched by the Reserve Bank of India to provide integrated and interoperable bill payment services. Jayam Solutions offers seamless BBPS API integration for businesses looking to offer utility and recurring bill payments to customers.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {bbpsFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              className="image-card-3d"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
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

      {/* Supporting Info Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Our BBPS integration empowers financial institutions, aggregators, and businesses to provide real-time, interoperable bill payment solutions across India. With a focus on security, compliance, and speed, we help you expand your digital service offerings effectively.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Bbps;
