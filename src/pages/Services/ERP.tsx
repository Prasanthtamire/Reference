import { motion } from 'framer-motion';
import '../css/Webapplication.css';
import erpImg1 from '../../../src/projectimages/Integrated Modules.jpg';
import erpImg2 from '../../../src/projectimages/Real-time Insights.png';
import erpImg3 from '../../../src/projectimages/Customizeworkflow.jpg';

const ERP = () => {
  const features = [
    {
        src: erpImg1,
        title: "Integrated Modules",
        desc: "Seamlessly unify Finance, HR, Inventory, and Sales into one platform."
      },
      {
        src: erpImg2,
        title: "Real-time Insights",
        desc: "Access business-critical data in real-time for better decision making."
      },
      {
        src: erpImg3,
        title: "Customizable Workflows",
        desc: "Tailored ERP workflows that suit your unique operational needs."
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
             <h2 className="section-heading ">Unleash the Power of ERP Your Secret Weapon for your Business!
             </h2>
          <p className="main-description2">
          Nowadays Managing all business activities become hectic for the proprietor to
solve this there is a Tool called ERP (Enterprise Resource Planning). This innovative
ERP tool is your secret weapon for planning your Resources. You can manage your
day-to-day business Functions such as accounting, procurement, project
management, risk management, and supply chain operations. Also, you can
manage your costs, and you can also find the real-time data of your business
within a single click.    </p>


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

          <h3 className="subheading"> Let's Find Out How ERP Will Help You In Business
          </h3>
<p className="main-description2">The Erp For Your Business:-</p>
          <ul className="feature-list list-disc pl-12 space-y-4">
            <li >
              <strong> Data Automation:-</strong>
              The ERP helps in accounting through Data Automation If the sales team
gets an order the salesperson can punch the order from the ERP Tool and
the Data automatically gets into the software no one needs to update it
again. You can check the real-time data of your orders at that particular
time.     </li>
            <li>
              <strong>Data Management:- </strong> 
              Data in the ERP you can Manage your data according to your convenience
like a particular time or season how many orders you got and you can easily
find the reason why sales have increased at that particular time so next
time you can stock the raw material for production or else you can start
distributing your products before that time.
                      </li>
                      <li>
              <strong>Real-Time Visibility:- </strong> 
              The main reason for this ERP tool is the real-time visibility of your business
data in various departments in a single window all the departments have
real visibility of your data. you can able to forecast based on real-time data
and take the next step in your business.
                      </li>
                      <li>
              <strong>Better Governance And Compliance:- </strong> 
              The ERP will Enhance efficiency and facilitate the decision-making process
by providing real-time data and also tracking the KPI and enforcing policy
adherence
                      </li>
                      <li>
              <strong> Improved Customer Relationship:-</strong>
              Nowadays managing and making a healthy relationship with customers
has become a challenging task for business owners this ERP will help you
improve relationships with customers and businesses can see the past
purchases of that one particular customer and will get a chance to
cross-sell or suggest other products related to their past purchased
products.

                      </li>
                      <li>
              <strong>  Improves Buying Process:-</strong> 
              With the ERP companies can automate their buying process which makes it
hassle-free by real-time data offered by ERP and companies can also
estimate the cost saving, gather the requirements, and get inputs. Other
than this it will help in managing the inventory and contractor or supplier.
                      </li>
                    
                      
                     </ul>

           <p className=" main-description2">
           The ERP will make your business functions in a stress-free manner. ERP is a Secret
Weapon for Your Business Automation and Real-Time Data will help you in the
long run of your business which will make your process of decision-making easy
also in the Buying Process and customer relationship management the Jayam
solution is the best option for your ERP solutions.       </p>

         

          {/* <h3 className="subheading mt-4 mb-2">“We Are Fortunate
To Serve You With
Our Gold Loan Software”</h3> */}


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

export default  ERP;
