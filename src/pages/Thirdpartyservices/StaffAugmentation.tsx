import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or ../css/StaffAugmentation.css

import team1 from '../../../src/projectimages/Application Development.jpg'; // Replace with actual image paths
import team2 from '../../../src/projectimages/AI.png';
import team3 from '../../../src/projectimages/CloudComputing.jpg';

const StaffAugmentation = () => {
  const staffFeatures = [
    {
      src: team1,
      title: 'Scalable Talent On-Demand',
      desc: 'Quickly scale your workforce up or down based on project requirements without long-term commitments.',
    },
    {
      src: team2,
      title: 'Domain-Specific Expertise',
      desc: 'Access highly skilled professionals across technologies like web, mobile, cloud, data, and enterprise systems.',
    },
    {
      src: team3,
      title: 'Seamless Integration',
      desc: 'Our resources work as an extension of your internal team, aligning with your workflows and culture.',
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
          <h1 className="main-heading">Staff Augmentation Services</h1>
          <p className="main-description">
            Jayam Solutions provides Staff Augmentation Services that help companies rapidly onboard skilled professionals to fill critical gaps, meet deadlines, or expand capabilities without the overhead of full-time hiring.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="gallery-section">
        <div className="image-grid">
          {staffFeatures.map((item, idx) => (
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

      {/* Closing Paragraph */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Whether you need short-term developers, long-term IT consultants, or project-based specialists, Jayam Solutions offers flexible staff augmentation services tailored to your goals. Let us help you stay agile and competitive in a fast-paced tech environment.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default StaffAugmentation;
