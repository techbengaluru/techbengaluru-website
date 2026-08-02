import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/tech-bengaluru-logo.jpeg';
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Training', path: '/training-model' },
  { name: 'Internship', path: '/internship-placement' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-gray-800">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img src={logo} alt="Tech-Bengaluru Logo" className="h-12 md:h-16 w-auto object-contain" />
              <span className="font-bold text-lg md:text-2xl tracking-tight text-white">Tech - Bengaluru</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
              Enquire Now
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-800 bg-dark-bg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-primary text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
