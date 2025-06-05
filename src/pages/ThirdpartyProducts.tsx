import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eKYCImage from "../projectimages/API.jpg";
import creditBureauImage from "../projectimages/CreditReport.jpg";
import bbpsImage from "../projectimages/bharath bill payment.png";
import ATM from "../projectimages/AtmVanservices.jpg";
import KIOSK from "../projectimages/Kisok.jpg";
import ATM1 from "../projectimages/ATM.jpg";
import Payouts from "../projectimages/Payouts.jpg";
import Paymentgateway from "../projectimages/Payment_gateway.png";
import POS from "../projectimages/POS.jpg";
import MicroATM from "../projectimages/MicroATM.jpg";
import VideoKYC from "../projectimages/Videokyc.png";
import ATMLock from "../projectimages/ATMLock.png";
import Sign from "../projectimages/Sign.jpg";
import HumanAtm from "../projectimages/HumanAtm.jpg";
import Reconcilation from "../projectimages/Reconsilation.webp";

import "../pages/Services.css";

const ThirdPartyProducts = () => {
  const navigate = useNavigate();

  const thirdPartyServices = [
    {
      title: "KIOSK Services",
      description:
        "Our KIOSK solutions provide self-service access to essential services, enhancing customer convenience.",
      image: KIOSK,
      link: "/thirdpartyservices/kiosk",
    },
    {
      title: "ATM VAN Services",
      description:
        "Our ATM VANs ensure cash availability and ATM maintenance across remote or underserved locations.",
      image: ATM,
      link: "/thirdpartyservices/AtmVan",
    },
    {
      title: "NCR ATM / Recycler /TLS / AMC",
      description:
        "Boost your team’s capabilities with our reliable and experienced IT staffing solutions.",
      image: bbpsImage,
      link: "/Thirdpartyservices/NcrAtmServices",
    },
    {
      title: "Hyosung ATM / Recycler / TLS / AMC",
      description:
        "Jayam Solutions offers credit bureau integration for real-time credit assessments and automation.",
      image: creditBureauImage,
      link: "/thirdpartyservices/HyosungAtmServices",
    },
    {
      title: "Perto ATM/AMC",
      description:
        "Perto ATM/AMC solutions for seamless ATM operations and cash management.",
      image: ATM1,
      link: "/thirdpartyservices/PetroAtmServices",
    },
    {
      title: "Payouts",
      description:
        "Instant and secure payouts to customers or vendors through integrated platforms.",
      image: Payouts,
      link: "/thirdpartyservices/Payout",
    },
    {
      title: "Micro-ATM",
      description:
        "Empowering financial access in remote areas through compact and portable ATMs.",
      image: MicroATM,
      link: "/thirdpartyservices/microatm",
    },
    {
      title: "Payment Gateway",
      description:
        "Secure and scalable online payment gateway solutions for businesses.",
      image: Paymentgateway,
      link: "/thirdpartyservices/Paymentgateway",
    },
    {
      title: "POS",
      description:
        "Reliable Point-of-Sale systems for efficient in-store payment experiences.",
      image: POS,
      link: "/thirdpartyservices/pos",
    },
    {
      title: "OTC ATM Lock Management Solution",
      description:
        "Centralized lock management solutions to enhance ATM safety and control.",
      image: ATMLock,
      link: "/thirdpartyservices/OtcAtmLockSolution",
    },
    {
      title: "Sign",
      description:
        "Advanced electronic and digital signature solutions for secure document handling.",
      image: Sign,
      link: "/thirdpartyservices/sign",
    },
    {
      title: "FRMS",
      description:
        "Fraud Risk Management Systems for monitoring and preventing suspicious transactions.",
      image: bbpsImage,
      link: "/thirdpartyservices/frms",
    },
    {
      title: "Human ATM",
      description:
        "Human ATMs offering assisted financial services in underserved regions.",
      image: HumanAtm,
      link: "/thirdpartyservices/HumanATM",
    },
    {
      title: "Reconciliation",
      description:
        "Automated reconciliation systems for efficient financial reporting.",
      image: Reconcilation,
      link: "/thirdpartyservices/Reconciliation",
    },
    {
      title: "Video-KYC",
      description:
        "Secure and compliant video-based KYC verification solutions.",
      image: VideoKYC,
      link: "/thirdpartyservices/VideoKyc",
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
            <h1 className="text-gray-900 underline-effect text-xl font-semibold">
              Third Party Products
            </h1>
            <p className="mt-2 text-gray-500">
              Jayam Solutions also offers a range of third-party integration services including APIs, Credit Bureau, and Bharat Bill Payment System (BBPS) solutions to streamline business processes.
            </p>
          </motion.div>

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
                  <button className="button" onClick={() => navigate(service.link)}>
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

export default ThirdPartyProducts;
