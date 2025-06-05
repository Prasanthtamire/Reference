import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create a specific ../css/HumanATM.css if desired

import humanAtm1 from '../../../src/projectimages/API.jpg';
import humanAtm2 from '../../../src/projectimages/ATMLock.png';
import humanAtm3 from '../../../src/projectimages/ATM.jpg';

const HumanATM = () => {
  const humanAtmFeatures = [
    {
      src: humanAtm1,
      title: 'Last-Mile Banking',
      desc: 'Human ATMs enable cash withdrawal and micro-banking services in rural or underserved areas using biometric devices.',
    },
    {
      src: humanAtm2,
      title: 'Agent-Based Model',
      desc: 'Local agents or banking correspondents serve as Human ATMs to provide secure financial services using handheld devices.',
    },
    {
      src: humanAtm3,
      title: 'Real-Time Transactions',
      desc: 'Powered by Aadhaar-enabled Payment System (AePS) and UPI, transactions are processed instantly through the Human ATM channel.',
    },
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
          <h1 className="main-heading">Human ATM Services</h1>
          <p className="main-description">
            Jayam Solutions enables financial inclusion through Human ATM Services, leveraging biometric technology and agent-assisted models to bring banking to doorsteps across remote regions.
          The universal ATM/CDM application has been designed for BC ID concept and runs
consuming several API’s and web browser-based application for Cash Withdrawals,
BBPS, DMT, AEPS, NEFT/RTGS, etc., processing.
          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {humanAtmFeatures.map((item, idx) => (
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

      {/* Closing Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            With Jayam Solutions’ Human ATM Services, banking becomes accessible, secure, and scalable—even in the most remote parts of the country.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HumanATM;
