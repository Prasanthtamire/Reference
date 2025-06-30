import { useEffect, useRef, useState } from "react";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = {
    services: useRef(null),
    products: useRef(null),
    contact: useRef(null),
  };

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        Object.values(dropdownRefs).every(
          (ref) => ref.current && !ref.current.contains(e.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="bg-gray-900 py-12 md:py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <div className="relative w-10 h-10 bg-white rounded-lg flex items-center justify-center transform rotate-45">
                <Code2 className="h-6 w-6 text-blue-600 absolute transform -rotate-45" />
              </div>
              <span className="ml-2 text-xl text-white">Jayam Solutions</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-1 text-md">Quick Links</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">About Us</Link>
              </li>
              <li ref={dropdownRefs.services} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "services" ? null : "services")
                  }
                  className="hover:text-white hover:underline transition-colors font-medium"
                >
                  Services ▾
                </button>
                {openDropdown === "services" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-20 py-2">
                    <li>
                      <Link
                        to="/our-services"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/ThirdpartyServices"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        Third Party Services
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li ref={dropdownRefs.products} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "products" ? null : "products")
                  }
                  className="hover:text-white hover:underline transition-colors font-medium"
                >
                  Products ▾
                </button>
                {openDropdown === "products" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-20 py-2">
                    <li>
                      <Link
                        to="/our-Products"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        Our Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/third-party"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        Third Party Products
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
 <li>
                <Link to="/careers" className="hover:text-white hover:underline transition-colors">Careers</Link>
              </li>
               <li>
                <Link to="/blogs" className="hover:text-white hover:underline transition-colors">Blogs</Link>
              </li>
              <li ref={dropdownRefs.contact} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === "contact" ? null : "contact")
                  }
                  className="hover:text-white hover:underline transition-colors font-medium"
                >
                  Contact ▾
                </button>
                {openDropdown === "contact" && (
                  <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-20 py-2">
                    <li>
                      <Link
                        to="/contact/office"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        Contact Office
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact/sales"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition"
                      >
                        Contact Sales Team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

             
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-white mb-1 text-md">Technologies</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>Custom Software Development</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white mb-1 text-md">Connect With Us</h3>
            <div className="flex space-x-4 mt-1">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="text-[#1877F2] hover:text-[#145dbf]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="text-[#1DA1F2] hover:text-[#0c85d0]" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-[#0A66C2] hover:text-[#004182]" />
              </a>
              <a href="mailto:contact@jayamsolutions.com">
                <FaGoogle size={24} className="text-[#DB4437] hover:text-[#A33224]" />
              </a>
            </div>
            <div className="mt-3 text-sm text-gray-400">
              <p>Email: contact@jayamsolutions.com</p>
              <p>Phone: 9848022338</p>
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
          <p className="text-center text-gray-400 text-sm">
            &copy; 2025 Jayam Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
