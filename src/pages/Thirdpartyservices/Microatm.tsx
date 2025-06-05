import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Use the same CSS or create MicroAtm.css if needed

import microAtm1 from '../../../src/projectimages/247 net access.webp'; // Replace with real paths
import microAtm2 from '../../../src/projectimages/ATM.jpg';
import microAtm3 from '../../../src/projectimages/Accouting and Reporting.jpg';

const MicroAtm = () => {
  const microAtmFeatures = [
    {
      src: microAtm1,
      title: 'Rural Banking Access',
      desc: 'Micro ATMs provide essential banking services to remote and rural locations.',
    },
    {
      src: microAtm2,
      title: 'Secure & Portable Devices',
      desc: 'Compact, biometric-enabled machines for cash withdrawal, balance inquiry, and fund transfers.',
    },
    {
      src: microAtm3,
      title: 'Agent-assisted Services',
      desc: 'Used by banking correspondents to serve customers at their doorstep securely and efficiently.',
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
          <h1 className="main-heading">Micro ATM Services</h1>
          <p className="main-description">
            Jayam Solutions delivers Micro ATM services designed for last-mile banking. Our Micro ATMs empower banking correspondents to offer secure and convenient transactions in the most remote areas.
         A Micro-ATM (Automated Teller Machine) is a handheld device that performs the
functions of a traditional ATM on a smaller scale and with limited capabilities. It is
primarily used in areas where access to traditional banking infrastructure is limited
or absent, such as rural or remote areas, to provide basic banking services to
underserved populations.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {microAtmFeatures.map((item, idx) => (
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

      {/* Outro */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            With Jayam's Micro ATM solutions, reach the unbanked, increase financial inclusion, and ensure seamless transactions anywhere in India.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default MicroAtm;
