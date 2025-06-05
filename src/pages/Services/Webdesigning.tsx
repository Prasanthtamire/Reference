import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Reuse existing CSS for layout

// Replace with your own images if needed
import design1 from '../../../src/projectimages/webdesigning.jpg';
import design2 from '../../../src/projectimages/Responsive Design.png';
import design3 from '../../../src/projectimages/Application Development.jpg';

const WebDesigning = () => {
  const images = [
    {
      src: design1,
      title: "UI/UX Design",
      desc: "Crafting intuitive interfaces and engaging experiences for your users."
    },
    {
      src: design2,
      title: "Responsive Design",
      desc: "Websites that adapt beautifully to all screen sizes and devices."
    },
    {
      src: design3,
      title: "Interactive Prototypes",
      desc: "Bringing ideas to life with functional and visual design mockups."
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
          <h1 className="main-heading">Web Designing</h1>
          <p className="main-description">
            Transform your digital presence with stunning, user-centered website designs that captivate, convert, and communicate your brand’s value effectively.
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
            At Jayam Solutions, we blend creativity and functionality to deliver web designs that not only look stunning but also offer a seamless user experience. Whether you need a corporate website, a landing page, or a product interface, our design-first approach ensures your vision comes to life.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default WebDesigning;
