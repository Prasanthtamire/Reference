import { motion } from 'framer-motion';
import '../css/Webapplication.css';

import webApp1 from '../../../src/projectimages/Dashbaord.jpg';
import webApp2 from'../../../src/projectimages/ui.png';
import webApp3 from'../../../src/projectimages/Backend.jpg';

const Webapplication = () => {
  const images = [
    {
      src: webApp1,
      title: "Custom Dashboards",
      desc: "Beautifully designed dashboards tailored to your business operations."
    },
    {
      src: webApp2,
      title: "User Interfaces",
      desc: "Clean and responsive UI for a seamless user experience."
    },
    {
      src: webApp3,
      title: "Robust Backend",
      desc: "Secure and scalable backend integrations for all platforms."
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
          <h1 className="main-heading">Web Application Development</h1>
          <p className="main-description">
            Jayam Solutions offers state-of-the-art software product solutions for consumers across various domains. We deliver end-to-end solutions from conceptualization to deployment, quality assurance, and maintenance, ensuring robust and seamless software for modern businesses.
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
          Jayam Solutions Application Development and Maintenance service enable an organization’s capability to keep pace with the continuously changing business dynamics. Our deep domain expertise allows us to manage mission-critical applications efficiently and operate in complex application environments. Today, the digital world has forced organizations to change, and software application development must keep pace and change accordingly. The need of the hour is to design applications that deliver an enjoyable experience to its users and Jayam Solutions is one such company. Our objective is to provide 100% client satisfaction. By offering most reliable and adaptable software solutions we empower our clients to meet the most challenging deadlines comfortably. We are also a Offshore Software Development Company where in clients can outsource their software product requirements to us across varied domains. We are a one stop Software Application Development company which believes in transforming ideas into reality by implementing highest quality software resolution. We bring in foremost economical, versatile and cost-efficient approach to software development
          </p>
        </motion.div>
      </section>
        </div>
        
  );
};

export default Webapplication;

