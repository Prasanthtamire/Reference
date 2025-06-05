import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Reuse or create a new CSS if needed

// Replace these with actual images relevant to innovative solutions
 import innovation1 from '../../../src/projectimages/Dashbaord.jpg';
 import innovation2 from'../../../src/projectimages/ui.png';
 import innovation3 from'../../../src/projectimages/Problemsolving.jpg';
const InnovativeSolutions = () => {
  const images = [
    {
      src: innovation1,
      title: "Creative Strategy",
      desc: "We design customized, forward-thinking strategies that fuse creativity with data to fuel business growth and operational efficiency."
    },
    {
      src: innovation2,
      title: "Tech Innovation",
      desc: "From AI and automation to next-gen web platforms, we implement modern technologies that disrupt markets and deliver measurable impact."
    },
    {
      src: innovation3,
      title: "Problem Solving",
      desc: "Whether it’s optimizing a legacy system or launching a new product, we approach every challenge with logic, creativity, and speed."
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
          <h1 className="main-heading">Innovative Solutions </h1>
          <p className="main-description">
            Discover breakthrough ideas, creative methodologies, and forward-thinking strategies that empower businesses to solve problems and grow in dynamic environments.
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
            At Jayam Solutions, we believe that innovation is the key to sustainable success. Our approach combines design thinking, cutting-edge technologies, and deep industry insights to craft solutions that drive transformation. Whether it's streamlining operations or creating entirely new business models, we collaborate closely with clients to unlock value at every stage.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default InnovativeSolutions;

