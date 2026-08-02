import { motion } from 'framer-motion';
import { ExternalLink, Code2, Monitor, Server, Database, Cpu } from 'lucide-react';

const softwareProjects = [
  "Projects from scratch", "Portfolio websites", "ERP", "CRM", "AI Chatbot", "E-Commerce", "Hospital Management", "College Management", "Banking App", "Ride Sharing", "Food Delivery", "Inventory Management", "Student Management", "HRMS", "Real-world SaaS applications"
];

const hardwareProjects = [
  "Arduino", "ESP32", "STM32", "Raspberry Pi", "Robotics", "Automation", "EV", "IoT", "PCB Design", "Sensors", "Drone", "Embedded Linux"
];

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack Development',
    tech: 'React + Spring Boot + MySQL',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A complete e-commerce solution with user authentication, product catalog, shopping cart, and secure payment gateway integration.',
    icons: [<Monitor key="1" />, <Server key="2" />, <Database key="3" />]
  },
  {
    title: 'Cloud DevOps Pipeline',
    category: 'DevOps & Cloud',
    tech: 'Docker + Jenkins + Kubernetes + AWS',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'An automated CI/CD pipeline deploying microservices to a managed Kubernetes cluster on AWS.',
    icons: [<Server key="1" />, <Database key="2" />]
  },
  {
    title: 'Hospital Management System',
    category: 'Backend Architecture',
    tech: 'Python + Django + PostgreSQL',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A robust backend system handling patient records, appointment scheduling, and doctor availability with role-based access control.',
    icons: [<Server key="1" />, <Database key="2" />]
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'Python Full Stack',
    tech: 'React + FastAPI + Python',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Real-time data visualization dashboard integrating machine learning models for predictive analytics.',
    icons: [<Monitor key="1" />, <Server key="2" />]
  }
];

const Projects = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Student & Training Projects</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore the industry-standard applications built by our students during their training.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
          <Monitor className="w-8 h-8 text-primary" />
          Software Lab
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {softwareProjects.map((project, idx) => (
            <span key={idx} className="px-5 py-2.5 bg-dark-card border border-gray-700 text-gray-300 rounded-lg font-medium hover:border-primary hover:text-white hover:bg-primary/5 transition-all cursor-default shadow-lg">
              {project}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
          <Cpu className="w-8 h-8 text-primary" />
          Hardware Lab
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {hardwareProjects.map((project, idx) => (
            <span key={idx} className="px-5 py-2.5 bg-dark-card border border-gray-700 text-gray-300 rounded-lg font-medium hover:border-primary hover:text-white hover:bg-primary/5 transition-all cursor-default shadow-lg">
              {project}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-card border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors group"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <div className="flex gap-2 text-gray-400">
                  <a href="#" className="hover:text-white transition-colors"><Code2 className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-300 bg-gray-800 px-3 py-1 rounded-full">
                  {project.tech}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href="/contact" className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)]">
          Start Building Projects Like These
        </a>
      </div>
    </div>
  );
};

export default Projects;
