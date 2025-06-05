import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create ../css/PertoAtmServices.css for custom styles

import pertoAtmImage from '../../../src/projectimages/ATMLock.png';
import pertoMaintenanceImage from '../../../src/projectimages/ATM.jpg';
import pertoMaintenanceImage1 from '../../../src/projectimages/ATM.jpg';

const PertoAtmServices = () => {
  const services = [
    {
      src: pertoAtmImage,
      title: 'Perto ATM Deployment',
      desc: 'High-performance, secure Perto ATMs installed and configured for banks and financial service providers across India.',
    },
    {
      src: pertoMaintenanceImage,
      title: 'Perto AMC & Maintenance',
      desc: 'Comprehensive Annual Maintenance Contracts for Perto ATMs with 24/7 support, preventive servicing, and quick issue resolution.',
    },
    {
        src: pertoMaintenanceImage1,
        title: 'Perto AMC & Maintenance',
        desc: 'Comprehensive Annual Maintenance Contracts for Perto ATMs with 24/7 support, preventive servicing, and quick issue resolution.',
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
          <h1 className="main-heading">Perto ATM / AMC Services</h1>
          <p className="main-description">
            Jayam Solutions provides full-scale support for Perto ATM deployments and maintenance services with quick turnaround times and certified technical experts.
         We supply Cash Dispensers, Cash Deposit Machines, and other products & services
of Perto to State Co-op. Banks, District Central Co-op. Banks, Grameena Banks, Urban
Co-op. Banks in India.

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

      {/* Closing Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Trust Jayam Solutions for your Perto ATM infrastructure—from initial deployment to lifecycle maintenance—ensuring uninterrupted banking services.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PertoAtmServices;
