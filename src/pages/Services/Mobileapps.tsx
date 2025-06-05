import { motion } from 'framer-motion';
import '../css/Webapplication.css';

import mobile1 from '../../../src/projectimages/API.jpg';
import mobile2 from '../../../src/projectimages/Bhararhbillpay.png';
import mobile3 from '../../../src/projectimages/CreditReport.jpg';

const MobileApps = () => {
  const apps = [
    {
      src: mobile1,
      title: 'Intuitive UI',
      desc: 'Designs that adapt to any screen with interactive and responsive elements.'
    },
    {
      src: mobile2,
      title: 'Performance First',
      desc: 'Fast, smooth, and optimized apps for seamless mobile experience.'
    },
    {
      src: mobile3,
      title: 'Cross Platform',
      desc: 'Develop once, run anywhere – iOS, Android, and beyond.'
    }
  ];

  return (
    <div className="mobileapp-container min-h-screen pt-20">
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <h1 className="main-heading">Mobile App Development</h1>
          <p className="main-description">
            Jayam Solutions creates smart and scalable mobile applications tailored for modern devices. With a mobile-first approach, we deliver stunning performance and user-centric designs that stand out in a competitive app ecosystem.
          </p>
        </motion.div>
      </section>

      <section className="gallery-section">
        <div className="image-grid">
          {apps.map((item, idx) => (
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
            Our mobile app development services combine strategy, design, and development to build powerful applications. Whether you need native apps or cross-platform solutions, we ensure high performance, top security, and superior user experience across all devices.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default MobileApps;
