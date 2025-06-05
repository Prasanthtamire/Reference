import { motion } from 'framer-motion';
import '../css/Webapplication.css';

import housing1 from '../../../src/projectimages/smartloanmanagment.jpg';
import housing2 from '../../../src/projectimages/automaticloancut.png';
import housing3 from '../../../src/projectimages/securedocument.jpg';

const HousingFinance = () => {
  const features = [
    {
      src: housing1,
      title: 'Smart Loan Management',
      desc: 'Manage and monitor your housing loans efficiently with complete lifecycle tracking.'
    },
    {
      src: housing2,
      title: 'Automated EMI Calculations',
      desc: 'Accurate and automated EMI schedules, interest tracking, and amortization charts.'
    },
    {
      src: housing3,
      title: 'Secure Document Storage',
      desc: 'Digitally store and retrieve all customer KYC and property-related documents safely.'
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
          <h2 className="section-heading">A fantastic Housing Finance ERP and its Features</h2>
          <p className="main-description2">
          Managing customers' Home loans and interest rates has become a difficult task
for bankers. To avoid this Jayam Solution came forward with an exciting Housing
finance Software solution with this software you can easily process your client's
home loan requirements. Jayam Solutions has the feature of Calculating interest
rates as per the client profile.
          </p>
        </motion.div>
      </section>

      <section className="gallery-section">
        <div className="image-grid">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="image-card-3d"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
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

      <section className="intro-section detailed-text-section mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h3 className="subheading">Let's Look into the detailed Features of Jayam Solutions Housing
Finance Management
</h3>

          <ul className="feature-list list-disc pl-12 space-y-4">
            <li>
              <strong>Tracking Loan Applications:-
              </strong>
              The Jayam Solution has included a Tracking System for Housing Finance
Software with this you can Track the Loans, Clients's Profiles, Interest Rates,
credit scores, And Creditworthiness Of Clients.            </li>
            <li>
              <strong>Document Storage:-</strong>
              The main feature of Jayam Solutions Housing Finance Management
software is to store your Important Documents of the clients like Seal
deeded and original documents of the client.            </li>
            <li>
              <strong>Payment Processing:-</strong>
              In most cases, we may face problems with the Payment but Jayam
Solutions software has a very good Payment processing system with this
you can get payment within a fraction of a second.            </li>
            <li>
              <strong> Workflow Automation:-</strong>
              Jayam Solutions software will Allow you Workflow Automation of your Loan
              process and disbursing amount.            </li>
            <li>
              <strong>Reporting Functionalities:-</strong> 
              This function Will allow underwriters can write and mention their required
              Documents of a particular profile to disburse amount.            </li>
            <li>
              <strong>Cloud-Based And On-Premise:-</strong> 
              Jayam Solutions provides this software in 2 ways one is Cloud Based and
the other is On-Premise, you can choose as per your requirement.
            </li>
          
          </ul>

         

          <h3 className="subheading mt-4 mb-2">FAQs</h3>

          <ol className="list-decimal pl-6 space-y-3 main-description3">
            <li>
              <strong>Home Loan Software Builder India</strong><br />
              Jayam Solutions is the best Home Loan Software Builder in India
              </li>
            <li>
              <strong>Best Home Loan Software Builder
              </strong>
              <br />
              Jayam Solutions is the Best Home Loan Software Builder.
              </li>       
            <li>

              <strong> What is the best loan management Software?</strong><br />
              Jayam Solutions’s Loan Management is the best loan software in India.
              </li>
            <li>

              <strong>Loan Management Software for Small Business in India
              </strong><br />
              Jayam Solutions is the Best Loan Management Software for Small
Businesses in India.          
  </li>
  <li>
<strong>Loan Management Software for Small Businesses in Hyderabad</strong><br />
Jayam Solutions is the Best Loan Management Software for Small Businesses in Hyderabad.       
</li>
<li>
<strong> Best LAP Management Software
</strong><br />
Jayam Solutions is the Best LAP Management Software
  
</li> 
          </ol>
        </motion.div>
      </section>
    </div>
  );
};

export default HousingFinance;
