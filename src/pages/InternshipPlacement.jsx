import { motion } from 'framer-motion';
import { Briefcase, FileText, Users, Award, FolderGit2, CheckCircle, Code } from 'lucide-react';
import techmiyaLogo from '../assets/images/techmiyaedtech_new_logo.png';
import xcienciaLogo from '../assets/images/x_ciencia_technologies_logo.jpg';

const InternshipPlacement = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Internship Section */}
      <div className="mb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Industry Internship Program</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Gain real-world experience and build a professional portfolio before you graduate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 bg-dark-card border border-gray-800 rounded-xl">
              <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Live Projects</h3>
                <p className="text-gray-400">Work on actual production systems and client projects under expert supervision.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-dark-card border border-gray-800 rounded-xl">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Mentor Support</h3>
                <p className="text-gray-400">Get 1-on-1 guidance from senior developers and industry veterans.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-dark-card border border-gray-800 rounded-xl">
              <FolderGit2 className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">GitHub Portfolio</h3>
                <p className="text-gray-400">Build a solid open-source presence and commit history to showcase to employers.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-dark-card border border-gray-800 rounded-xl">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Experience Certificate</h3>
                <p className="text-gray-400">Receive a valid industry internship certificate upon successful completion.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl absolute inset-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interns working together" 
              className="relative z-10 rounded-2xl shadow-2xl border border-gray-800"
            />
          </motion.div>
        </div>
      </div>

      {/* Internship Section */}
      <div className="mt-32 pt-20 border-t border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Internship Program</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Exclusive Internship Program designed specifically for BE/B.Tech, MCA, MBA, B.Com, BBA, BCA, and Diploma students to gain real-time, hands-on project experience.
          </p>

          <div className="bg-dark-card border border-gray-800 p-8 rounded-2xl max-w-xl mx-auto shadow-xl text-center">
            <div className="text-5xl font-black text-primary mb-2">200+</div>
            <div className="text-gray-200 font-semibold text-xl">Startups & MNC Companies</div>
            <div className="text-sm text-gray-500 mt-2 uppercase tracking-wider font-medium">Hiring Partners</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Code className="w-6 h-6" />, title: 'Real-Time Hands-On Projects', desc: 'Work directly on live industry projects instead of theoretical assignments.' },
            { icon: <Award className="w-6 h-6" />, title: 'VTU Compliant Certification', desc: 'Receive official certification that perfectly aligns with your university internship requirements.' },
            { icon: <Users className="w-6 h-6" />, title: 'For All IT Students', desc: 'Tailored perfectly for all MCA, BCA, and BE/B.Tech students seeking core industry exposure.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-gray-800 p-8 rounded-2xl hover:border-primary/50 transition-colors text-center"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default InternshipPlacement;
