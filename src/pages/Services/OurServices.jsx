// import { useState } from "react";
// import { motion } from "framer-motion";
// import appDevImage from "../projectimages/Application Development.jpg";
// import globeImage from "../projectimages/Mobileappsimage.jpg";
// import eKYCImage from "../projectimages/API.jpg";
// import creditBureauImage from "../projectimages/CreditReport.jpg";
// import bbpsImage from "../projectimages/bharath bill payment.png";
// import "../pages/Services.css";

// const Services = () => {
//   const [activeTab, setActiveTab] = useState("All");

//   const categories = ["All", "Our Services", "Third Party Services"];

//   const services = [
//     {
//       title: "Web Application",
//       description: "We Build Web applications refers to creating sotware applications thta run on web browsers and are accessed over the internet/intranet.",
//       category: "Our Services",
//       image: appDevImage,
//     },
//     {
//       title: "Mobile Apps",
//       description: "Our Mobile app software development refers to the process of creating software applications specifically designed to run on mobiles devices such as smartphones and tablets.",
//       category: "Our Services",
//       image: globeImage,
//     },
//     {
//       title: "Api Integration Services",
//       description: "We are experets in providing API Integrations conneceting different software systems,applications,or services using APIs to enable them to communicate,share data,and work together seamlessly.",
//       category: "Third Party Services",
//       image: eKYCImage,
//     },
//     {
//       title: "Credit Bureau Seamless Integrations",
//       description: "Jayam Solutions Credit Bureau Connection Integration integrates credit bureaus...",
//       category: "Third Party Services",
//       image: creditBureauImage,
//     },
//     {
//       title: "BBPS (Bharath Bill Payment System)",
//       description: "Bharat Bill Payment System (BBPS) is a RBI-mandated system...",
//       category: "Third Party Services",
//       image: bbpsImage,
//     },
//     {
//       title: "HRM Payroll",
//       description: "HRM Payroll is a RBI-mandated system...",
//       category: "Third Party Services",
//       image: bbpsImage,
//     },
//   ];

//   const filteredServices = activeTab === "All"
//     ? services
//     : services.filter(service => service.category === activeTab);

//   return (
//     <div className="min-h-screen pt-16">
//       {/* Tabs Section */}
//       <div className="flex justify-center space-x-4 py-4 bg-white shadow-md border-b border-gray-300">
//   {categories.map((category) => (
//     <button
//       key={category}
//       className={`px-4 py-2 rounded-md border text-sm font-medium transition duration-300 ${
//         activeTab === category
//           ? "bg-[#31497f] text-white border-[#31497f]"
//           : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
//       }`}
//       onClick={() => setActiveTab(category)}
//     >
//       {category}
//     </button>
//   ))}
// </div>



//       {/* Services Section */}
//       <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <h1 className="text-gray-900   underline-effect" style={{fontSize:"18px"}}>Our Services</h1>
//             <p className="mt-1  text-gray-500">Jayam Solutions private limited has developed unique Software Products catering to various industry verticals. Our Off Shore development and consulting services is complemented by highly skilled software product development experts. Avail our services which offer the flexibility of out sourcing combined with skill, result and cost effectiveness. </p>
//           </motion.div>

//           {/* Service Cards */}
//           <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {filteredServices.map((service, index) => (
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

// export default Services;
