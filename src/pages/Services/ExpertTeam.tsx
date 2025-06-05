import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Reuse or create a new CSS if needed

// Replace these with actual images relevant to innovative solutions
 import innovation1 from '../../../src/projectimages/Collebrative.jpg';
 import innovation2 from'../../../src/projectimages/ui.png';
 import innovation3 from'../../../src/projectimages/client-centric-approach.jpg';
const ExpertTeam = () => {
  const images = [
    {
      src: innovation1,
      title: "Collaborative Experts",
      desc: "Highly skilled professionals working together to deliver exceptional solutions."
    },
    {
      src: innovation2,
     title: "Industry Specialists",
      desc: "Experts with deep domain knowledge across various technologies and sectors."
    },
    {
      src: innovation3,
      title: "Client-Centric Approach",
      desc: "Our team prioritizes client success through proactive communication and delivery."
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
          <h1 className="main-heading">Expert Team </h1>
          <p className="main-description">
          Meet the driving force behind Jayam Solutions — a passionate and experienced team committed to delivering high-impact digital solutions across industries.
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
          Our team of software architects, designers, developers, and analysts are carefully chosen for their expertise, creativity, and dedication. With a proven track record of delivering enterprise-grade solutions, we work closely with clients to align strategies and ensure project success from concept to execution.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default ExpertTeam;




