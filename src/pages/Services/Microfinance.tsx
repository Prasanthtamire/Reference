import { motion } from 'framer-motion';
import '../css/Webapplication.css';

import micro1 from '../../../src/projectimages/Group Lending.jpg';
import micro2 from '../../../src/projectimages/Digital Loan Disbursal.jpg';
import micro3 from '../../../src/projectimages/Villagebank.png';

const Microfinance = () => {
  const features = [
    {
        src: micro1,
        title: "Group Lending",
        desc: "Support for joint liability groups with flexible repayment structures."
      },
      {
        src: micro2,
        title: "Digital Loan Disbursal",
        desc: "Quick, paperless loan approvals and fund transfers to beneficiaries."
      },
      {
        src: micro3,
        title: "Village Banking System",
        desc: "Simplified banking and reporting solutions for rural communities."
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
             <h2 className="section-heading ">How to Choose the Perfect Microfinance ERP</h2>
          <p className="main-description2">
          Managing all your Microfinance has become problematic in this digital world to
solve this problem, Jayam Solution bought a Microfinance ERP tool this is an
innovative tool you can manage all your Microfinance. The Core Microfinance
Solution is designed to do all activities at the branch level. You can also track the
loans given and calculate interest rates easily. Our integrated Microfinance
Management System is all you need to take your business to the next level.        </p>


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

          <h3 className="subheading">The Perfect Micro Finance ERP features:-
          </h3> 

          <ul className="feature-list list-disc pl-12 space-y-4">
            <li >
              <strong>  Cloud-Based Application:-</strong>
              Jayam's Micro Finance ERP composites all your departments in a single
application where you can manage all department's activities with a single
application you do not need to overload your system with other applications to
manage your activities.            </li>
            <li>
              <strong>Leave Management System:-</strong> 
              Micro Finance ERP of Jayam's is a completely cloud-based application that you
access in remote locations and not only this you also integrate all your branches'
Data in one place for this you need just an internet connection.            </li>
            <li>
              <strong>Truly Versatile:-</strong> 
              Jayam's Micro-Finance ERP has complex features. However, still, you customize
your Micro Finance ERP according to your client's requirements and it is capable of
adopting new processes and modifications to Micro Finance ERP.            </li>
            <li>
              <strong>High Accuracy:-</strong> 
              Micro Finance ERP of Jayam's has High Accuracy with this you can get your data
reliably and fast within seconds. The Jayam ERP has this unique future of High
accuracy that will make your work very fast            </li>
            <li>
              <strong>Secure and Reliable:-</strong>
              Jayam's Micro-Finance ERP mainly focuses on data privacy for that reason only we
provide highly secured ERP Solutions and if you want to connect other systems
points are also highly secured. you can even expect our security and overall our
Micro-Finance ERP solution is equipped with High security            </li>
            <li>
              <strong> Maximum Integration:-</strong> 
              The Jayam's Micro-Finance ERP is designed to Integrate with third-party services
like SMS, Email Services, Aadhar Verification, and GPS which can collect your
customer's data easily and store it.            </li>
            <li>
              <strong> Excellent CRM System:-</strong>
              Jayam's Micro-Finance ERP has a CRM System, with that can you able you manage
your Customers and their data with your mobile application and website.
Jayam Solutions provides the Perfect microfinance ERP with the latest technology
in this digital world and ensures you seamless operations of microfinance with a
user-friendly interface and you can grow your Business in the long run            </li>
          </ul>

          {/* <p className=" main-description2">
            Jayam Solutions’ innovative HRM software tool is designed with advanced cloud-based technology to cater to your HR activities and you can also manage all the deductions like PF, TDS, and taxes. It has the feature of a centralized leaves tracking system and enforces your employees to leave policies and it has an automated Payroll Management System that ensures you a timely salary disbursement not only this it also provides detailed performance and reviews of the employees.
          </p>

          <p className=" main-description2">
            Jayam HRM Payroll will give power to you to manage your employees and you can also manage your Human resources effectively and efficiently.
          </p>

          <h3 className="subheading mt-4 mb-2">FAQs</h3>

          <ol className="list-decimal pl-6 space-y-3 main-description3 ">
            <li className=" main-description3 ">
              <strong>Who are the best providers of HR software ?</strong><br />
               The Jayam Solutions is the best provider of HR Software and Payroll Software.
            </li>
            <li>
              <strong>Best HR Payroll Software Features?</strong><br />
               The Jayam Solutions will give the best HR Payroll Software Features.
            </li>
            <li>
              <strong>Cloud-based Payroll Software in India?</strong><br />
               The Jayam Solutions will provide the best Cloud-based Payroll Software in India.
            </li>
            <li>
              <strong>Best HRM Software for Startups</strong><br />
               The Jayam Solutions will provide the best HRM Software for Startups.
            </li>
          </ol> */}
        </motion.div>
      </section>
    </div>
  );
};

export default  Microfinance;
