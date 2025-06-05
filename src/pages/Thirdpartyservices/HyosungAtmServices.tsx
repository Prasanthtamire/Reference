import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create ../css/HyosungAtmServices.css for customization

import hyosungAtmImage from '../../../src/projectimages/247 net access.webp';
import recyclerImage from '../../../src/projectimages/API.jpg';
import tlsImage from '../../../src/projectimages/ATMLock.png';
import amcImage from '../../../src/projectimages/Application Development.jpg';

const HyosungAtmServices = () => {
  const services = [
    {
      src: hyosungAtmImage,
      title: 'Hyosung ATM Installation & Setup',
      desc: 'Deployment of robust Hyosung ATMs offering advanced security, high-speed transactions, and user-friendly interfaces.',
    },
    {
      src: recyclerImage,
      title: 'Cash Recycler Solutions',
      desc: 'Efficient, secure cash recyclers for deposit and withdrawal using Hyosung’s latest technology for branches and service points.',
    },
    {
      src: tlsImage,
      title: 'TLS Configuration for Hyosung',
      desc: 'Ensure encrypted ATM communication with proper TLS setup and secure networking for all transaction points.',
    },
    {
      src: amcImage,
      title: 'Hyosung AMC (Annual Maintenance)',
      desc: 'End-to-end AMC coverage for Hyosung ATMs and recyclers to maximize uptime and extend hardware lifecycle.',
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
          <h1 className="main-heading">Hyosung ATM / Recycler / TLS / AMC Services</h1>
          <p className="main-description">
We supply Cash Dispensers, Cash Deposit Machines, and other products & services
of Hyosung to State Co-op. Banks, District Central Co-op. Banks, Grameena Banks,
Urban Co-op. Banks in India.          </p>
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

      {/* Closing Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Optimize your banking delivery with Jayam Solutions’ reliable Hyosung ATM deployment, secure TLS integration, and AMC programs tailored for operational excellence.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default HyosungAtmServices;
