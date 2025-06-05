import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create a separate PaymentGateway.css if needed

import pgImage1 from '../../../src/projectimages/247 net access.webp'; // Replace with your actual image paths
import pgImage2 from '../../../src/projectimages/API.jpg';
import pgImage3 from '../../../src/projectimages/ATM.jpg';

const PaymentGateway = () => {
  const pgFeatures = [
    {
      src: pgImage1,
      title: 'Unified Payment Interface (UPI)',
      desc: 'Enable seamless UPI payments across apps and devices for quick and secure transactions.',
    },
    {
      src: pgImage2,
      title: 'Multi-Channel Support',
      desc: 'Accept payments via credit/debit cards, net banking, wallets, and QR codes through a single platform.',
    },
    {
      src: pgImage3,
      title: 'Secure & Compliant',
      desc: 'PCI DSS compliant architecture with fraud detection and 24/7 transaction monitoring.',
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
          <h1 className="main-heading">Payment Gateway Solutions</h1>
          <p className="main-description">
            Jayam Solutions offers end-to-end Payment Gateway services enabling businesses to accept digital payments seamlessly, securely, and reliably. Empower your digital commerce with our scalable and integrated solutions.
          A payment gateway is a technology solution that facilitates online transactions by
securely transmitting payment information between a merchant's website or
application and the acquiring bank or financial institution. It acts as an intermediary
that authorizes and processes payment transactions, enabling merchants to accept
electronic payments from customers via various payment methods, such as credit
cards, debit cards, digital wallets, and bank transfers.
          </p>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {pgFeatures.map((item, idx) => (
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
            Whether you're running an e-commerce store, SaaS business, or utility service, our Payment Gateway services ensure your customers can pay easily, securely, and without friction.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PaymentGateway;
