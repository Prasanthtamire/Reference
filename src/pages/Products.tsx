// import { motion } from "framer-motion";
// import appDevImage from "../projectimages/Vehiclefinance.jpg";
// import globeImage from "../projectimages/software soluions.jpg";
// import eKYCImage from "../projectimages/software-applicatons.jpg";
// import creditBureauImage from "../projectimages/API.jpg";
// import "../pages/Services.css";

// const Products = () => {
//   const products = [
//     {
//       title: "WIN Vehicle Finance Solution",
//       description: "This is a Full-fledged, end-to-end vertical solution covering from customer acquisition cum onboarding to legal & recovery. This is a available in both the platforms Web and Mobile.",
//       image: appDevImage,
//     },
//     {
//       title: "Neo Banking",
//       description: "The Jayam Neo banking module is an app aimed at revolutionizing the banking industry. it leverages the best of what technology has to offer today and helps a bank extend its existing new banking services beyond the premises of a bank.",
//       image: globeImage,
//     },
//     {
//       title: "Digital Verification Portal",
//       description: "We built a single sign on the digital verification services portal for all business requirements.we are offering Verification services like Asdhar,PAN Card,Voter ID, Driving License, Electricity bills, Mobile Number, Passport etc.",
//       image: eKYCImage,
//     },
//     {
//       title: "Warehouse Receipt Based Financing Solutions",
//       description: "This is a unique solution cater to the finance needs of a farm producers adanist their inventory stored in warehouses.",
//       image: creditBureauImage,
//     },
   
    
//   ];

//   return (
//     <div className="min-h-screen pt-16">
//       <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
//             <h1 className="text-1xl  underline-effect">Our Products</h1>
//             <p className=" text-1xl text-gray-500">Comprehensive solutions for your technology needs</p>
//           </motion.div>

//           <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {products.map((product, index) => (
//               <motion.div
//                 key={product.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="card"
//                 style={{ backgroundImage: `url(${product.image})` }}
//               >
//                 <div className="card-content">
//                   <h3 className="card-title underline-effect">{product.title}</h3>
//                   <p className="card-body">{product.description}</p>
//                   <a href="#" className="button">Learn More</a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Products;



import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import appDevImage from "../projectimages/Vehiclefinance.jpg";
import globeImage from "../projectimages/software soluions.jpg";
import eKYCImage from "../projectimages/software-applicatons.jpg";
import creditBureauImage from "../projectimages/API.jpg";
import bbpsImage from "../projectimages/bharath bill payment.png";
import Hrmpayroll from "../projectimages/Hrmpayroll.jpg";
import HousingFinance from "../../src/projectimages/Housingfinance.jpg";
import MicroFinance from "../projectimages/microfinance.jpg";
import Goldloan from "../projectimages/Goldloan.jpg";
import ERP from "../projectimages/ERP.png";
import Cooperativesociety from "../projectimages/CooperativeSolutions.jpg";
import corebanking from "../projectimages/Corebanking.jpg";
import DigitalVerificationPortal from "../projectimages/Digital verification.jpg";

import "../pages/Services.css";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "WIN Vehicle Finance Solution",
      description:
        "This is a Full-fledged, end-to-end vertical solution covering from customer acquisition cum onboarding to legal & recovery. This is available on both Web and Mobile.",
      image: appDevImage,
      link: "/products/vehiclefinance",
    },
    {
      title: "WIN Housing Finance Solution",
      description:
        "HRM Payroll is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image: HousingFinance,
      link: "/services/Housingfinance",
    },
    {
      title: "WIN Gold Loans Solution",
      description:
        "Micro Finance is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image: Goldloan,
      link: "/services/Goldloansoftware",
    },
    {
      title: "Neo Banking",
      description:
        "The Jayam Neo banking module is an app aimed at revolutionizing the banking industry. It helps banks extend their services beyond the premises.",
      image: globeImage,
      link: "/products/neobanking",
    },
    {
      title: "Digital Verification Portal",
      description:
        "A digital verification portal with single sign-on, offering Aadhaar, PAN, Voter ID, DL, Utility Bill, and other KYC verification services.",
      image: eKYCImage,
      link: "/products/digitalverification",
    },
    {
      title: "Warehouse Receipt Based Financing Solutions",
      description:
        "A unique solution catering to the finance needs of farm producers against inventory stored in warehouses.",
      image: creditBureauImage,
      link: "/products/warehousereceipt",
    },
    {
      title: "WIN HRM Payroll",
      description:
        "HRM Payroll is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image: Hrmpayroll,
      link: "/services/Hrmpayroll",
    },
   
    {
      title: "WIN MicroFinance ERP (eFIMO)",
      description:
        "Micro Finance is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image: MicroFinance,
      link: "/services/Microfinance",
    },
    
    {
      title: "WIN ERP",
      description:
        "Micro Finance is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image: ERP,
      link: "/services/ERP",
    },
    {
      title: "WIN Core Banking Software",
      description:
        "Micro Finance is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image: corebanking,
      link: "/services/corebanking",
    },
    {
      title: "Cooperative socities solutions",
      description:
        "Micro Finance is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image: Cooperativesociety,
      link: "/services/Cooperativesociety",
    },
    {
      title: " Digital Verification Portal",
      description:
        "Micro Finance is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      category: "Third Party Services",
      image:  DigitalVerificationPortal,
      link: "/services/Cooperativesociety",
    },
 
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-1xl underline-effect">Our Products</h1>
            <p className="text-1xl text-gray-500">
              Comprehensive solutions for your technology needs
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="card-content">
                  <h3 className="card-title underline-effect">{product.title}</h3>
                  <p className="card-body">{product.description}</p>
                  <button
                    className="button"
                    onClick={() => navigate(product.link)}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
