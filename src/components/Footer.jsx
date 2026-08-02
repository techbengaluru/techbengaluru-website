import { Link } from 'react-router-dom';
import { Code, MapPin, Phone, Mail, Globe, Users, MessageSquare } from 'lucide-react';
import logo from '../assets/images/tech-bengaluru-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Tech-Bengaluru Logo" className="h-10 w-auto rounded object-contain bg-white/10" />
              <span className="font-bold text-xl tracking-tight text-white">Tech-Bengaluru</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Empowering students and professionals with industry-ready software skills through practical training, real-world projects, and career guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/tech_bglr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-center font-bold text-sm">
                IG
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link to="/training-model" className="hover:text-primary transition-colors">Training Model</Link></li>
              <li><Link to="/internship-placement" className="hover:text-primary transition-colors">Internship</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Student Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Top Courses</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Generative AI</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Data Science</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Agentic AI</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">MLOps</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Cloud Computing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Bengaluru</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>7349524065</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>techbengaluru4@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tech-Bengaluru. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
