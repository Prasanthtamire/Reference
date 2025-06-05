import { motion } from 'framer-motion';
import '../css/Webapplication.css';

import api1 from '../../../src/projectimages/API.jpg';
import api2 from '../../../src/projectimages/Backend.jpg';
import api3 from '../../../src/projectimages/Bharat-Bill-Payment-System-BBPS.jpg';

const Apiintegration = () => {
  const apiFeatures = [
    {
      src: api1,
      title: 'Seamless Integration',
      desc: 'Connect your software with 3rd party services using clean and secure APIs.'
    },
    {
      src: api2,
      title: 'Real-Time Data',
      desc: 'Deliver up-to-the-second data across platforms and devices effortlessly.'
    },
    {
      src: api3,
      title: 'Custom APIs',
      desc: 'Build scalable custom APIs tailored to your business needs.'
    }
  ];

  return (
    <div className="api-container min-h-screen pt-20">
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <h1 className="main-heading">API Integration Services</h1>
          <p className="main-description">
            Jayam Solutions offers API Integration services that help you streamline business processes, enhance functionality, and improve connectivity with third-party services. We specialize in RESTful APIs, payment gateway integrations, social login APIs, and more.
          </p>
        </motion.div>
      </section>

      <section className="gallery-section">
        <div className="image-grid">
          {apiFeatures.map((item, idx) => (
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

      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Whether you're connecting to internal tools or third-party platforms, our team ensures secure, efficient, and reliable API implementations. We help businesses improve workflow automation and offer better services through strategic API integrations.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Apiintegration;
