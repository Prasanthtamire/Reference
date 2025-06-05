import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // You can use this or create ../css/PayoutPage.css

import payoutImage1 from '../../../src/projectimages/247 net access.webp'; // Replace with actual image paths
import payoutImage2 from '../../../src/projectimages/ATM.jpg';
import payoutImage3 from '../../../src/projectimages/Application Development.jpg';

const PayoutPage = () => {
  const payoutFeatures = [
    {
      src: payoutImage1,
      title: 'Fund Transfer Services',
      desc: 'Facilitate NEFT, RTGS, IMPS, and UPI-based fund transfers to bank accounts across India.',
    },
    {
      src: payoutImage2,
      title: 'Instant Payouts',
      desc: 'Disburse funds instantly to customers, vendors, and employees using APIs and dashboards.',
    },
    {
      src: payoutImage3,
      title: 'Automated Bulk Payouts',
      desc: 'Schedule or trigger automated payouts in bulk for salaries, incentives, and refunds.',
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
          <h1 className="main-heading">Payout Services</h1>
          <p className="main-description">
            Jayam Solutions provides secure and scalable payout solutions for enterprises and startups to manage vendor payments, employee salaries, customer refunds, and real-time fund disbursements.
          It refers to the process of distributing funds or payments to individuals, businesses,
or other entities. It is a fundamental aspect of various financial transactions,
business operations, and service delivery models. Payouts can encompass a wide
range of scenarios, including salary payments to employees, vendor payments,
refunds, dividends, royalties, rebates, incentives, and more.

          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {payoutFeatures.map((item, idx) => (
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
            From API-driven payouts to dashboard-based disbursements, our system is built to meet your custom payout workflows with efficiency and compliance.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PayoutPage;
