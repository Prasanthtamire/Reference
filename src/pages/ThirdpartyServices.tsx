// import { motion } from "framer-motion";
// import eKYCImage from "../projectimages/API.jpg";
// import creditBureauImage from "../projectimages/CreditReport.jpg";
// import bbpsImage from "../projectimages/bharath bill payment.png";
// import "../pages/Services.css";

// const ThirdPartyServices = () => {
//   const thirdPartyServices = [
//     {
//       title: "API Integration Services",
//       description:
//         "We specialize in connecting software systems using APIs to ensure seamless data sharing and integration.",
//       category: "Third Party Services",
//       image: eKYCImage,
//     },
//     {
//       title: "Credit Bureau Seamless Integrations",
//       description:
//         "Jayam Solutions offers credit bureau integration for real-time credit assessments and automation.",
//       category: "Third Party Services",
//       image: creditBureauImage,
//     },
//     {
//       title: "BBPS (Bharath Bill Payment System)",
//       description:
//         "BBPS is an RBI-mandated bill payment system for seamless utility payments under one platform.",
//       category: "Third Party Services",
//       image: bbpsImage,
//     },
//     {
//       title: "KISOK",
//       description:
//         "BBPS is an RBI-mandated bill payment system for seamless utility payments under one platform.",
//       category: "Third Party Services",
//       image: bbpsImage,
//     },
//     {
//       title: "ATM  VAN ",
//       description:
//         "BBPS is an RBI-mandated bill payment system for seamless utility payments under one platform.",
//       category: "Third Party Services",
//       image: bbpsImage,
//     },
//     {
//       title: "Subscription Based Service and products ",
//       description:
//         "BBPS is an RBI-mandated bill payment system for seamless utility payments under one platform.",
//       category: "Third Party Services",
//       image: bbpsImage,
//     },
//     {
//       title: "Staff Augmentation Services  ",
//       description:
//         "BBPS is an RBI-mandated bill payment system for seamless utility payments under one platform.",
//       category: "Third Party Services",
//       image: bbpsImage,
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-16">
//       {/* Third Party Services Section */}
//       <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <h1 className="text-gray-900 underline-effect text-xl font-semibold">Third Party Services</h1>
//             <p className="mt-2 text-gray-500">
//               Jayam Solutions also offers a range of third-party integration services including APIs, Credit Bureau, and Bharat Bill Payment System (BBPS) solutions to streamline business processes.
//             </p>
//           </motion.div>

//           {/* Service Cards */}
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {thirdPartyServices.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="card"
//                 style={{ backgroundImage: `url(${service.image})` }}
//               >
//                 <div className="card-content">
//                   <h3 className="card-title underline-effect">{service.title}</h3>
//                   <p className="card-body">{service.description}</p>
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

// export default ThirdPartyServices;


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eKYCImage from "../../src/projectimages/API.jpg";
import creditBureauImage from "../../src/projectimages/CreditReport.jpg";
import bbpsImage from "../../src/projectimages/bharath bill payment.png";
import "../pages/Services.css";

const ThirdPartyServices = () => {
  const navigate = useNavigate();

  const thirdPartyServices = [
    {
      title: "API Integration Services",
      description:
        "We specialize in connecting software systems using APIs to ensure seamless data sharing and integration.",
      image: eKYCImage,
      link: "/services/APIintegration",
    },
    {
      title: "Credit Bureau Seamless Integrations",
      description:
        "Jayam Solutions offers credit bureau integration for real-time credit assessments and automation.",
      image: creditBureauImage,
      link: "/services/creditbureau",
    },
    {
      title: "BBPS (Bharath Bill Payment System)",
      description:
        "BBPS is an RBI-mandated bill payment system for seamless utility payments under one platform.",
      image: bbpsImage,
      link: "/thirdpartyservices/bbps",
    },
    
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Third Party Services Section */}
      <section className="py-10 bg-gradient-to-b from-[#c5cfdd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-gray-900 underline-effect text-xl font-semibold">
              Third Party Services
            </h1>
            <p className="mt-2 text-gray-500">
              Jayam Solutions offers a range of third-party integration services
              including APIs, Credit Bureau, BBPS, and other scalable utility platforms
              to streamline business operations.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thirdPartyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="card-content">
                  <h3 className="card-title underline-effect">{service.title}</h3>
                  <p className="card-body">{service.description}</p>
                  <button
                    className="button"
                    onClick={() => navigate(service.link)}
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

export default ThirdPartyServices;
