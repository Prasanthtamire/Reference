import { motion } from 'framer-motion';
import '../css/Webapplication.css';

import vehicle1 from '../../../src/projectimages/smartloanmanagment.jpg';
import vehicle2 from '../../../src/projectimages/customerportal.png';
import vehicle3 from '../../../src/projectimages/dealership.png_qjvgqe.webp';

const VehicleFinance = () => {
  const features = [
    {
        src: vehicle1,
        title: "Loan Management",
        desc: "Automated workflows to manage vehicle loan applications, approvals, and repayments."
      },
      {
        src: vehicle2,
        title: "Customer Portal",
        desc: "A user-friendly portal for customers to track loan status, payments, and EMI schedules."
      },
      {
        src: vehicle3,
        title: "Dealer Integration",
        desc: "Seamless integration with automobile dealers for real-time processing and validation."
      }
  ];

  return (
    <div className="mobileapp-container min-h-screen pt-20">
      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          {/* <h1 className="main-heading">HRM  Payroll </h1>
          <p className="main-description">
            Jayam Solutions offers advanced HRM and payroll systems designed to streamline HR processes, improve employee engagement, and ensure error-free payroll operations. Our solutions are tailored to meet both SME and enterprise needs.
          </p> */}
             <h2 className="section-heading ">Unlocking the Potential of Vehicle Financing Software
             </h2>
          <p className="main-description2">
          Calculating the EMI and maintaining the customer database of a Vehicle loan has
become typical for captive and non-captive automotive finance companies to
avoid this Jayam Solutions has come up with an innovative Vehicle Financing
Software that caters the all vehicle loan financing process done in a single
software with a hassle-free and allows companies to calculate the interest rate
based on clients profiles and it cloud-based software and it has a centralized
system which can connect all branches system to it          </p>


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

      <section className="intro-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center intro-text"
        >
          {/* <p className="main-description2">
            Our HRM & Payroll software automates the most time-consuming HR tasks. From recruitment and onboarding to performance reviews and payroll generation, we help you stay compliant and efficient.
          </p> */}
        </motion.div>
      </section>

      {/* New detailed text section */}
      <section className="intro-section detailed-text-section  mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          {/* <h2 className="section-heading ">Unlock The Power Of HRM and Payroll</h2>
          <p className="main-description2">
            Calculating every employee’s attendance, working hours and Salaries becomes a hectic task for HR! To tackle this Jayam Solution has come up with an extraordinary HRM and Pay Roll Software. With this, you can easily track your employee’s working records and salaries. This an innovative tool in which you can easily do your HRM activities like Personal Details, Leave Applications, Approvals, Timesheet, Attendance Regularisation, Loan Request, Advance Requests, ETC.
          </p>*/}

          <h3 className="subheading">What is the potential of Vehicle Financing Software</h3> 

          <ul className="feature-list list-disc pl-12 space-y-4">
            <li >
              <strong>            Vehicle Financing Loan Origination:-
              </strong> 
              This is the first and crucial potential of vehicle financing software in this
process you will able to find the Onboarding customers, LTV of the
customers, Configurable Origination workflow, and Pre-built credit
Assessment system with these steps can you easily process the vehicle
loan for a customer.            </li>


            <li>
              <strong> Vehicle Financing Loan Management:- </strong>
              In this step, You can view your client's loan Prepayment & closing
workflows. Automation of Charges & Penalties, Centralised Document
Storing, Rescheduling and Restructuring of Loan, SOA, and interest
pre-built.
            </li>
            <li>
              <strong>Fully Digital Vehicle Financing Software:- </strong>
              The Jayam Solutions Vehicle Financing software is fully digital without
paper you can process the Vehicle Loan and you can connect with the
centralized System for storing documents.
            </li>
            <li>
              <strong>Faster Process:-
              </strong>Jayam Solutions’s Vehicle Financing Software you can process your loan
process very fast and reliably and it enables you to the workflow with credit
decisions.
            </li>
            <li>
              <strong>Real-Time Risk Management:- </strong>
Managing Risk events efficiently and achieving Siwft credit profiling.
            </li>
            <li>
              <strong>Enhanced Customer Experience: </strong>Jayam Solutions Vehicle Financing software allows you to Engage with
              customers digitally and clarify customers' queries and doubts.
            </li>
            <li>
              <strong> Vehicle Financing Loan Collection:-</strong>In this step, you can collect the EMI from Clients with Jayam Solutions
Vehicle Financing Software will allow you to send the remainder like SMS
and Emails to your clients for payment and Comprehensive reports &
Dashboards for every client, a mobile app for on-field collections,
Integrations for digital payments, e-mandate for Digital Payments and
post-dated checks in advance.
            </li>
            <li>
            Jayam Solutions vehicle financing software is a significant advancement in
automotive finance, offering perfect digital solutions for managing vehicle loans,
By integrating all the aspects of the vehicle financing loan process into a single
cloud-based platform.
With the Jayam Solutions vehicle financing software automotive finance
companies can reach faster loan processing, risk management, and customer
satisfaction. Unlocking the full potential of Your vehicle financing operations.
            </li>
           
          </ul>

          {/* <p className=" main-description2">
            Jayam Solutions’ innovative HRM software tool is designed with advanced cloud-based technology to cater to your HR activities and you can also manage all the deductions like PF, TDS, and taxes. It has the feature of a centralized leaves tracking system and enforces your employees to leave policies and it has an automated Payroll Management System that ensures you a timely salary disbursement not only this it also provides detailed performance and reviews of the employees.
          </p>

          <p className=" main-description2">
            Jayam HRM Payroll will give power to you to manage your employees and you can also manage your Human resources effectively and efficiently.
          </p> */}

          <h3 className="subheading mt-4 mb-2">FAQs</h3>

          <ol className="list-decimal pl-6 space-y-3 main-description3 ">
            <li className=" main-description3 ">
              <strong>Which Software should be used for vehicle Loan Business?</strong><br />
              Jayam Solutions vehicle financing software should be used for vehicle Loan
              Business.            </li>
            <li>
              <strong> What is the best Loan Management Software?</strong><br />
              Jayam Solutions vehicle financing software is the best Loan management
              Software in India.
            </li>
            <li>
              <strong> What software do loan processors use?</strong><br />
              Jayam Solutions vehicle financing software is used by loan processors.
            </li>
            <li>
              <strong> Vehicle finance company software
             </strong><br />
             Jayam Solutions vehicle financing softwar
            </li>
            <li>
              <strong>Best auto finance software </strong><br />
              Jayam Solutions vehicle financing software is the best auto finance
            software
            </li>
          </ol>
        </motion.div>
      </section>
    </div>
  );
};

export default VehicleFinance;
