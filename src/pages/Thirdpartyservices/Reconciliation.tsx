import { motion } from 'framer-motion';
import '../css/Webapplication.css'; // Or create a custom ../css/Reconciliation.css if needed

import reco1 from '../../../src/projectimages/247 net access.webp';
import reco2 from '../../../src/projectimages/ATM.jpg';
import reco3 from '../../../src/projectimages/Accouting and Reporting.jpg';

const Reconciliation = () => {
  const reconciliationFeatures = [
    {
      src: reco1,
      title: 'Automated Reconciliation',
      desc: 'Save time and eliminate errors with automated reconciliation of transactions across multiple banking channels.',
    },
    {
      src: reco2,
      title: 'Multi-Channel Integration',
      desc: 'Reconcile data from ATMs, POS, NetBanking, UPI, and payment gateways under one unified platform.',
    },
    {
      src: reco3,
      title: 'Compliance & Reporting',
      desc: 'Generate accurate audit reports and stay compliant with regulatory guidelines through detailed reconciliation reports.',
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
          <h1 className="main-heading">Reconciliation Services</h1>
          <p className="main-description">
            Jayam Solutions offers comprehensive reconciliation services for financial institutions and businesses to ensure transaction accuracy, regulatory compliance, and improved operational efficiency.
        All delivery channels accounting, reconciliation refer to the process of ensuring that
two sets of records (usually the balances of two accounts) are in agreement.
Reconciliation is used to ensure that the money leaving an account matches the
actual money spent. This is done by making sure the balances match at the end of a
particular accounting period.
          </p>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="gallery-section">
        <div className="image-grid">
          {reconciliationFeatures.map((item, idx) => (
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
            Empower your business with Jayam Solutions’ reconciliation tools to detect mismatches, avoid revenue loss, and improve financial transparency.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Reconciliation;
