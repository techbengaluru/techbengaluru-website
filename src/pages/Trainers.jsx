import { motion } from 'framer-motion';
import { Link, MessageCircle, Award, CheckCircle } from 'lucide-react';

const trainers = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Full Stack Instructor',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    experience: '8+ Years Industry Experience',
    skills: ['Java', 'Spring Boot', 'React.js', 'Microservices'],
    certifications: 'AWS Certified Developer'
  },
  {
    name: 'Priya Desai',
    role: 'Cloud & DevOps Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    experience: '6+ Years Industry Experience',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    certifications: 'AWS Solutions Architect'
  },
  {
    name: 'Arun Kumar',
    role: 'Python & Data Engineering Expert',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    experience: '7+ Years Industry Experience',
    skills: ['Python', 'Django', 'FastAPI', 'PostgreSQL'],
    certifications: 'Google Cloud Professional'
  }
];

const Trainers = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Learn From Industry Experts</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Our trainers are working professionals who bring real-world corporate experience directly to the classroom.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-card border border-gray-800 rounded-2xl overflow-hidden group"
          >
            <div className="relative h-72 overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover object-top filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
            </div>
            
            <div className="p-8 relative -mt-16 z-10">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-primary font-medium">{trainer.role}</p>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors">
                    <Link className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span>{trainer.experience}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{trainer.certifications}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {trainer.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
