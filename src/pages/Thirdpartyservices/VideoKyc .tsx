import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or use a dedicated ../css/VideoKyc.css for custom styles

import videoKyc1 from '../../../src/projectimages/AI.png';
import videoKyc2 from '../../../src/projectimages/API.jpg';
import videoKyc3 from '../../../src/projectimages/API.jpg';


const VideoKyc = () => {
  const kycFeatures = [
    {
      src: videoKyc1,
      title: 'Live Customer Verification',
      desc: 'Conduct real-time video calls to verify customer identity, reducing fraud and enhancing onboarding speed.',
    },
    {
      src: videoKyc2,
      title: 'AI-Driven Facial Recognition',
      desc: 'Leverage AI and biometric verification to ensure that the customer’s identity is authenticated securely and accurately.',
    },
    {
        src: videoKyc3,
        title: 'AI-Driven Facial Recognition',
        desc: 'Leverage AI and biometric verification to ensure that the customer’s identity is authenticated securely and accurately.',
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
          <h1 className="main-heading">Video KYC Solution</h1>
          <p className="main-description">
            Jayam Solutions offers Video KYC technology that ensures fast, secure, and RBI-compliant digital onboarding of customers from anywhere in the country.
          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {kycFeatures.map((item, idx) => (
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
            Eliminate physical paperwork and in-person verification delays. Partner with Jayam Solutions to implement secure, paperless Video KYC for seamless digital onboarding.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default VideoKyc;
