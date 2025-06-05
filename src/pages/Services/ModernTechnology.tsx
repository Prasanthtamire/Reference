import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Reuse existing styles

// Replace with real image paths
import tech1 from '../../../src/projectimages/AI.png';
import tech2 from '../../../src/projectimages/CloudComputing.jpg';
import tech3 from '../../../src/projectimages/LOT.png';

const ModernTechnology = () => {
  const images = [
    {
      src: tech1,
      title: "Artificial Intelligence",
      desc: "Implement AI-powered solutions to automate, predict, and enhance operations."
    },
    {
      src: tech2,
      title: "Cloud Computing",
      desc: "Scale rapidly and securely with robust cloud infrastructure and services."
    },
    {
      src: tech3,
      title: "IoT Integration",
      desc: "Connect devices and systems seamlessly for smarter environments."
    }
  ];

  return (
    <div className="webapp-container min-h-screen pt-20">
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <h1 className="main-heading">Modern Technology</h1>
          <p className="main-description">
            Leverage the latest advancements in technology to build innovative, scalable, and intelligent digital solutions that transform how your business operates.
          </p>
        </motion.div>
      </section>

      <section className="gallery-section">
        <div className="image-grid">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              className="image-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <img src={item.src} alt={item.title} className="card-image " />
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
            At Jayam Solutions, we integrate emerging technologies like AI, cloud, IoT, and blockchain into our solutions to help clients stay ahead of industry trends. Our tech stack enables real-time decision-making, agile development, and continuous innovation — ensuring your systems are always future-ready.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default ModernTechnology;
