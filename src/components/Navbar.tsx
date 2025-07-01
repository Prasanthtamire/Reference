import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../projectimages/JAYAM LOGO.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    {
      label: 'Services',
      dropdown: [
        { path: '/our-services', label: 'Our Services' },
        { path: '/services/ThirdpartyServices', label: 'Third Party Services' },
      ],
    },
    {
      label: 'Products',
      dropdown: [
        { path: '/our-products', label: 'Our Products' },
        { path: '/products/third-party', label: 'Third Party Products' },
      ],
    },
    { path: '/careers', label: 'Careers' },
    { path: '/blogs', label: 'Blogs' },
    {
      label: 'Contact',
     dropdown: [
                { path: '/contact/office', label: 'Office' },
                { path: '/contact/sales_team', label: 'Sales Inquiry' },
                { path: '/Contact/Atmsupport', label: 'ATM Support' },

      ],
      },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Jayam" className="w-[91px] h-[56px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-black">
            {navItems.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="flex items-center cursor-pointer px-3 py-2 hover:text-blue-600 transition">
                    {item.label}
                    <ChevronDown size={16} className="ml-1" />
                  </div>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
                      >
                        {item.dropdown.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-blue-600 transition-colors duration-300 px-3 py-2 rounded-md ${
                    location.pathname === item.path ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-black">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="md:hidden"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
        {navItems.map((item, idx) =>
          item.dropdown ? (
            <div key={idx} className="space-y-1">
              <div
                onClick={() =>
                  setActiveDropdown(activeDropdown === item.label ? null : item.label)
                }
                className="flex items-center justify-between px-3 py-2 font-medium text-gray-700 cursor-pointer hover:text-blue-600"
              >
                {item.label}
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`}
                  size={18}
                />
              </div>
              <AnimatePresence>
                {activeDropdown === item.label && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.path}
                        className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
