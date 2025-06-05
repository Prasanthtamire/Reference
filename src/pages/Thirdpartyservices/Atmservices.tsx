import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create ../css/AtmVan.css for custom styles

import atmVan1 from '../../../src/projectimages/Application Development.jpg'; // Replace with actual image paths
import atmVan2 from '../../../src/projectimages/software soluions.jpg';
import atmVan3 from '../../../src/projectimages/software-product-development-maintenance.png';

const AtmVan = () => {
  const atmVanFeatures = [
    {
      src: atmVan1,
      title: 'Banking on Wheels',
      desc: 'Mobile ATM vans provide banking access to rural, remote, and underserved areas efficiently.',
    },
    {
      src: atmVan2,
      title: 'Secure Transactions',
      desc: 'Equipped with CCTV, biometric security, and encrypted connections for safe banking on the move.',
    },
    {
      src: atmVan3,
      title: 'Disaster Response & Outreach',
      desc: 'Used during emergencies, festivals, and outreach programs to maintain banking services.',
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
          <h1 className="main-heading">ATM Van Services</h1>
          <p className="main-description">
            Jayam Solutions offers end-to-end ATM Van Services—mobile banking units equipped with ATM machines, secure communication, and power backup. These vans extend financial inclusion by reaching unbanked populations in rural, hilly, or disaster-hit regions.
         An "ATM Van" refers to a mobile Automated Teller Machine (ATM) facility that is
housed within a vehicle, typically a van, and is used to provide banking services in
areas where fixed ATM installations are not feasible or accessible. These mobile ATMs
are equipped with similar functionalities as traditional ATMs but offer the added
advantage of mobility, allowing banks to extend their reach to remote or underserved
locations temporarily or during special events.

          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {atmVanFeatures.map((item, idx) => (
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
            Whether it’s for financial inclusion campaigns, last-mile banking, or disaster relief, our ATM vans are built to be mobile, secure, and fully functional. Partner with Jayam Solutions to bring banking to the doorstep of every citizen.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default AtmVan;
