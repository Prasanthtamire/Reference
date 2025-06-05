import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create ../css/OtcAtmLockSolution.css for custom styles

import otcLock1 from '../../../src/projectimages/otc-lock.jpg';
import otcLock2 from '../../../src/projectimages/atm-security.jpg';

const OtcAtmLockSolution = () => {
  const lockFeatures = [
    {
      src: otcLock1,
      title: 'One-Time Code (OTC) Locking System',
      desc: 'Secure your ATMs with advanced OTC-based locking solutions, ensuring authorized access with time-bound and single-use passcodes.',
    },
    {
      src: otcLock2,
      title: 'Real-Time Monitoring & Control',
      desc: 'Monitor and manage ATM locks remotely through centralized dashboards. Instant notifications for unauthorized access attempts.',
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
          <h1 className="main-heading">OTC ATM Lock Management Solution</h1>
          <p className="main-description">
            Jayam Solutions offers secure OTC-based locking mechanisms for ATM cassettes and doors, improving operational safety and eliminating key duplication risks.
          OTC ATM Lock Management Solution is an end-to-end security security-encrypted a
fool-proof solution to prevent ATM fraud at the time of cash replenishment or
maintenance.
          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {lockFeatures.map((item, idx) => (
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
            Upgrade your ATM security with our OTC Lock Management Solutions and experience seamless operations, real-time control, and reduced security risks.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default OtcAtmLockSolution;
