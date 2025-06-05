import { motion } from 'framer-motion';
import '../css/Webapplication.css';
import coop1 from '../../../src/projectimages/Membermanagment.jpg';
import coop2 from '../../../src/projectimages/Loans & Deposits.jpg';
import coop3 from '../../../src/projectimages/Accouting and Reporting.jpg';

const Cooperativesociety = () => {
  const features = [
    {
        src: coop1,
        title: "Member Management",
        desc: "Simplify registration, KYC, and lifecycle management of all society members."
      },
      {
        src: coop2,
        title: "Loans & Deposits",
        desc: "Manage savings, recurring deposits, and loan schemes tailored for members."
      },
      {
        src: coop3,
        title: "Accounting & Reporting",
        desc: "Automate bookkeeping with audit-ready reports and compliance tools."
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
             <h2 className="section-heading ">Leveraging Gold Loan Software A Game-Changer in the Digital Era</h2>
          <p className="main-description2">
          Managing Gold rate and interest has become difficult for Gold loan companies to
solve this problem Jayam solutions has come up with an attractive tool with
attractive features with this tool you can Manage your Gold loan activities like Loan
to value(LTV) Ratio Calculation, Insurance management, Interest rate calculation, and
it also supports the Multi Branch system.      </p>


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

          <h3 className="subheading">10 Features will make you Choose the Jayam Solutions Gold Loan
          Software:-
          </h3> 
<p className="main-description2">These 13 Features will make your Gold loan workflow easy and smooth with these
features you can enhance your efficiency and customer satisfaction. Let's explore the
one-by-one features of Jayam Solutions’ Gold Loan Software.</p>
          <ul className="feature-list list-disc pl-12 space-y-4">
            <li >
              <strong> User-Friendly Interface:-</strong>
              The main advantage of our Gold Loan Software has a User-Friendly Interface
that you and your employees can adopt easily and it can be learned quickly.           </li>
            <li>
              <strong>Reporting and Analytics:- </strong> 
              Our Gold Loan Software will provide you with Real-time Data and Analytics
which will help you in Decision-making and enhance customer satisfaction
with your decisions and customizable reports of KPIs and monitor your Gold
loan portfolio.
                      </li>
                      <li>
              <strong>Payment Management:- </strong> 
              With our Gold Loan Software, you easily track the Payments and you can also
send reminders to your clients or customers. And it can integrate with
third-party applications to receive digital payments.
                      </li>
                      <li>
              <strong>Risk Management:- </strong> 
              The most important feature of our Gold Loan Software is Risk management
with this feature you can assess the customer's creditworthiness and
collateral valuation based on this you can reduce the risk or loss.
                      </li>
                      <li>
              <strong> Customer Information Management:-</strong>
              Customer Information plays a crucial role in the gold loan business our Gold
Loan software will allow you to store the personal information of customers
and documents digitally. 
                      </li>
                      <li>
              <strong> Gold Inventory Management:-</strong> 
              Managing Gold Inventory plays an important role in the gold loan business
because you need to have an idea of where to store it in a safe place and with a
locker number and it also includes tracking the purity, weight, and value of
gold.
                      </li>
                      <li>
              <strong> Loan Processing Automation:-</strong> 
              You Can enhance your workflow with Loan origination, approvals,
Disbursement, and closures tasks, and not only saves time but also reduces
the risk of errors.                      </li>
                      <li>
              <strong>Interest Rate Calculation:- </strong> 
              Our Gold Loan Gold Loan Software is capable of calculating the interest rates
according to each customer’s profile like loan amount, and tenure, and it can
also calculate based on different parameters
                      </li>
                      <li>
              <strong> Scalability:-</strong> 
              Our Gold Loan Software has Scalability when your business grows This Gold
Loan Software can manage your growth.
                      </li>
                      <li>
              <strong> Integration Capabilities:-</strong> 
              Jayam Solutions’ Gold Loan Software can integrate with other software such as
CRM software, Accounting software, and credit scoring systems to manage
customers' data and enforce you to give your best to customers.
                      </li>
                     </ul>

           <p className=" main-description2">
           Jayam Solutions’ Gold Loan Software is a game changer in the loan Gold Loan
Software market. Our Gold Loan Software has a user-friendly interface that ensures
easy adoption and quick learning for employees and you can get real-time data with
our Gold Loan Softwarefeature reporting and analytics by considering KPIs which
enables you to manage your gold loan portfolio other than this it has a payment
management system with you can easily Track the payment and EMIs. It can be
integrated with third-party applications to receive digital payments. You can assess
your risk and it can be managed easily like customer creditworthiness and you can
manage your customer's data and personal information.          </p>

          <p className=" main-description2">
          With our software, you can manage gold Inventory this includes tracking, the purity,
weight, and Value of the gold. It will also enable you to automate of loan process and
our Gold Loan Software easily integrates with other software of your CRM, ERP, and
Accounting Software.
          </p>

          {/* <h3 className="subheading mt-4 mb-2">“We Are Fortunate
To Serve You With
Our Gold Loan Software”</h3> */}
<motion.h3
  className="subheading mt-4 mb-2"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  “We Are Fortunate<br />
  To Serve You With<br />
  Our Gold Loan Software”
</motion.h3>

          {/* <ol className="list-decimal pl-6 space-y-3 main-description3 ">
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
          </ol>  */}
        </motion.div>
      </section>
    </div>
  );
};

export default  Cooperativesociety;
