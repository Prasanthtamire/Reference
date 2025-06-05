import { motion } from 'framer-motion';
import '../css/Webapplication.css';

import hrm1 from '../../../src/projectimages/HR Dashboard.png';
import hrm2 from '../../../src/projectimages/Payroll.png';
import hrm3 from '../../../src/projectimages/Attendance.png';

const HRMPayroll = () => {
  const features = [
    {
      src: hrm1,
      title: 'Centralized HR Dashboard',
      desc: 'Monitor employee performance, leave requests, and more from a unified dashboard.'
    },
    {
      src: hrm2,
      title: 'Automated Payroll',
      desc: 'Accurate salary processing with tax, benefits, and compliance automation.'
    },
    {
      src: hrm3,
      title: 'Attendance & Leave Tracking',
      desc: 'Real-time attendance tracking and seamless leave management system.'
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
             <h2 className="section-heading ">Unlock The Power Of HRM and Payroll</h2>
          <p className="main-description2">
            Calculating every employee’s attendance, working hours and Salaries becomes a hectic task for HR! To tackle this Jayam Solution has come up with an extraordinary HRM and Pay Roll Software. With this, you can easily track your employee’s working records and salaries. This an innovative tool in which you can easily do your HRM activities like Personal Details, Leave Applications, Approvals, Timesheet, Attendance Regularisation, Loan Request, Advance Requests, ETC.
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

          <h3 className="subheading">The Features Of Jayam Solution HRM and Pay Roll Software</h3> 

          <ul className="feature-list list-disc pl-12 space-y-4">
            <li >
              <strong>Payroll Management System:-</strong> Managing and administering employee compensation has become a burden to the companies they make mistakes and miss-match the data to avoid this Jayam Solutions bought the Payroll Management System with high accuracy and it is a cloud-based payroll Management System with this you can easily do your Payroll activities like Calculating TDS, Taxes, PF, Professional Tax, And Other Allowances Withholding, Paperwork of new employees, delivering payroll checks and Reporting.
            </li>
            <li>
              <strong>Leave Management System:-</strong> The main aspect of this HRM is to manage your employee's Leaves calculate the Leaves and deduct the salary of Employees who take more than their actual Leaves. With this innovative HRM Tool, you can do activities like Defining leaves, Approving leaves, managing holidays, Enforcing leave Policies, Centralizing leaves tracking, Integrating HR and payroll systems, ETC.
            </li>
            <li>
              <strong>Automated Payroll Management System:-</strong> This Innovative HRM Payroll is designed for an Automated Payroll system with this system you can set a date of payment this HRM Payroll tool will directly credit the salaries to your employee's account without fail.
            </li>
            <li>
              <strong>Automated Human Resource Management System:-</strong> With this HRM Payroll tool, you can manage your human resources according to your Team Lead's requirements you place a suitable candidate for a suitable task according to their ability.
            </li>
            <li>
              <strong>Track Over Leaves:</strong> In Tool, there is a feature of Tracking Over leaves with this you can track the performance of your employees. And you can also find out the efficiency of your employees.
            </li>
            <li>
              <strong>Increase Workforce Productivity:</strong> Jayam’s HRM Payroll's main function is to Increase workforce productivity. This tool will enforce the employees to do their assigned task until it is finished.
            </li>
            <li>
              <strong>Detailed review of employee's performance:</strong> The HRM payroll software will give a detailed review of your employee's performance, attendance, leaves, holidays, working hours, project current position, ETC.
            </li>
          </ul>

          <p className=" main-description2">
            Jayam Solutions’ innovative HRM software tool is designed with advanced cloud-based technology to cater to your HR activities and you can also manage all the deductions like PF, TDS, and taxes. It has the feature of a centralized leaves tracking system and enforces your employees to leave policies and it has an automated Payroll Management System that ensures you a timely salary disbursement not only this it also provides detailed performance and reviews of the employees.
          </p>

          <p className=" main-description2">
            Jayam HRM Payroll will give power to you to manage your employees and you can also manage your Human resources effectively and efficiently.
          </p>

          <h3 className="subheading mt-4 mb-2">FAQs</h3>

          <ol className="list-decimal pl-6 space-y-3 main-description3 ">
            <li className=" main-description3 ">
              <strong>Who are the best providers of HR software ?</strong><br />
              ● The Jayam Solutions is the best provider of HR Software and Payroll Software.
            </li>
            <li>
              <strong>Best HR Payroll Software Features?</strong><br />
              ● The Jayam Solutions will give the best HR Payroll Software Features.
            </li>
            <li>
              <strong>Cloud-based Payroll Software in India?</strong><br />
              ● The Jayam Solutions will provide the best Cloud-based Payroll Software in India.
            </li>
            <li>
              <strong>Best HRM Software for Startups</strong><br />
              ● The Jayam Solutions will provide the best HRM Software for Startups.
            </li>
          </ol>
        </motion.div>
      </section>
    </div>
  );
};

export default HRMPayroll;
