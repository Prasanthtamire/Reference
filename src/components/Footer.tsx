import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <div className="relative w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-45">
                <Code2 className="h-6 w-6 text-blue-600 absolute transform -rotate-45" />
              </div>
              <span className="ml-2 text-xl  text-white">Jayam Solutions</span>
            </div>
            <p className="mt-2 text-gray-400" style={{fontSize:"12px"}}>
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white  mb-1" style={{fontSize:"16px"}}>Quick Links</h3>
            <ul className="space-y-1" style={{fontSize:"14px"}}>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white hover:underline transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white  mb-1" style={{fontSize:"16px"}}>Services</h3>
            <ul className="space-y-1" style={{fontSize:"13px"}}>
              <li className="text-gray-400">Custom Software Development</li>
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Mobile App Development</li>
              <li className="text-gray-400">Cloud Solutions</li>
              <li className="text-gray-400">IT Consulting</li>
            </ul>
          </div>

         {/* Produts */}
         {/* <div>
            <h3 className="text-white  mb-1" style={{fontSize:"16px"}}>Products</h3>
            <ul className="space-y-1" style={{fontSize:"13px"}}>
              <li className="text-gray-400">Custom Software Development</li>
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Mobile App Development</li>
              <li className="text-gray-400">Cloud Solutions</li>
              <li className="text-gray-400">IT Consulting</li>
            </ul>
          </div> */}

          {/* Connect With Us */}
          <div>
            <h3 className="text-white  mb-1" style={{fontSize:"16px"}}>Connect With Us</h3>
            <div className="flex space-x-4 mt-1" style={{fontSize:"12px"}}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-[#1877F2] hover:text-[#145dbf] transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-[#1DA1F2] hover:text-[#0c85d0] transition-colors" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-[#0A66C2] hover:text-[#004182] transition-colors" />
              </a>
              <a href="h  " target="_blank" rel="noopener noreferrer">
                <FaGoogle size={30} className="text-[#DB4437] hover:text-[#A33224] transition-colors" />
              </a>
            </div>

            <div className="mt-3" style={{fontSize:"12px"}}>
              <p className="text-gray-400">Email: contact@jayamsolutions.com</p>
              <p className="text-gray-400">Phone: 9848022338</p>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-center text-gray-400">&copy;All rights reserved © 2025 | Jayam Solutions</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
