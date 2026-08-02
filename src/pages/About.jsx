import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Tech-Bengaluru</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Empowering the next generation of tech leaders in Bengaluru and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Students in a lab" 
            className="rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.2)] border border-gray-800"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Tech-Bengaluru is a premier software training institute and skill development center located in Bengaluru, Karnataka. We specialize in transforming students and professionals into industry-ready experts through rigorous, practical training programs.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our approach goes beyond theoretical knowledge. We focus on real-world application, internships, and career preparation to ensure our candidates are perfectly aligned with current IT industry demands.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-dark-card border border-gray-800 p-8 rounded-2xl text-center"
        >
          <Target className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-400 leading-relaxed">
            "Empowering students and professionals with industry-ready software skills through practical training, real-world projects, internships, and career guidance."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-dark-card border border-gray-800 p-8 rounded-2xl text-center"
        >
          <Lightbulb className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-gray-400 leading-relaxed">
            To be the leading technology education hub in North Karnataka, fostering a community of innovative developers and creating a robust talent pool for the global IT sector.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-dark-card border border-gray-800 p-8 rounded-2xl text-center"
        >
          <Shield className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
          <p className="text-gray-400 leading-relaxed">
            We provide comprehensive software training, practical projects, industry mentorship, and dedicated internship programs to bridge the gap between academia and industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
