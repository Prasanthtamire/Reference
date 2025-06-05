import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create a custom CSS like ../css/NcrAtmServices.css

import atmImage from '../../../src/projectimages/webdesigning.jpg';
import recyclerImage from '../../../src/projectimages/warehouse.jpg';
import tlsImage from '../../../src/projectimages/staffagumentation.webp';
import amcImage from '../../../src/projectimages/AI.png';

const NcrAtmServices = () => {
  const services = [
    {
      src: atmImage,
      title: 'NCR ATM Installation & Setup',
      desc: 'Deployment of advanced NCR ATMs with secure PIN pads, card readers, and cash dispensing units customized for urban and rural locations.',
    },
    {
      src: recyclerImage,
      title: 'Cash Recycler Machines',
      desc: 'Enable deposit and withdrawal from a single unit using high-speed, secure cash recycler machines for banks and branches.',
    },
    {
      src: tlsImage,
      title: 'TLS Configuration',
      desc: 'Transport Layer Security (TLS) setup and management for encrypted transactions and secured ATM-network communication.',
    },
    {
      src: amcImage,
      title: 'Annual Maintenance Contracts (AMC)',
      desc: 'Comprehensive AMC services for ATMs, recyclers, and network components to ensure high uptime and performance.',
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
          <h1 className="main-heading">NCR ATM / Recycler / TLS / AMC Services</h1>
          <p className="main-description">
            Jayam Solutions offers end-to-end NCR ATM and Cash Recycler deployment, secure TLS integration, and dedicated AMC support to ensure continuous uptime and banking reach across all locations.
          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {services.map((item, idx) => (
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

      {/* Outro Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Partner with Jayam Solutions for professional NCR ATM and Cash Recycler management—from installation and encryption to ongoing service and AMC. Keep your banking infrastructure future-ready.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default NcrAtmServices;
