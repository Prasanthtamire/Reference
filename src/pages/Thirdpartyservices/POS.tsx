import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create ../css/PosPage.css if you want separate styling

import posImage1 from '../../../src/projectimages/247 net access.webp'; // Replace with actual image paths
import posImage2 from '../../../src/projectimages/ATM.jpg';
import posImage3 from '../../../src/projectimages/Accouting and Reporting.jpg';

const POSPage = () => {
  const posFeatures = [
    {
      src: posImage1,
      title: 'Smart POS Terminals',
      desc: 'Modern POS devices that support card, contactless, QR, and UPI payments with real-time settlement.',
    },
    {
      src: posImage2,
      title: 'Mobile POS (mPOS)',
      desc: 'Portable POS systems perfect for field agents, small businesses, and on-the-go sales professionals.',
    },
    {
      src: posImage3,
      title: 'Billing & Inventory Integration',
      desc: 'Automated billing and inventory sync integrated directly with backend ERP or accounting software.',
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
          <h1 className="main-heading">POS (Point of Sale) Services</h1>
          <p className="main-description">
            Jayam Solutions delivers modern POS systems that empower merchants with fast, reliable, and secure transaction capabilities—fully integrated with backend systems and scalable for all retail environments.
         It refers to the physical or digital location where a transaction is completed between
a merchant and a customer. The term encompasses both the hardware and software
components used to facilitate the sale of goods or services and process payments.
POS systems are widely used in retail stores, restaurants, hospitality establishments,
and various other businesses to manage sales transactions, track inventory, and
generate receipts.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {posFeatures.map((item, idx) => (
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

      {/* Outro Section */}
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          <p className="main-description">
            Whether you operate a retail outlet, mobile store, or a chain of franchises, our POS solutions are tailored to optimize your sales experience with speed, security, and ease.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default POSPage;
