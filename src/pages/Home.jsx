import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cloud, Database, Cpu, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Students', value: '10,000+' },
  { label: 'Startup Partners', value: '200+' },
  { label: 'Live Projects', value: '500+' },
  { label: 'Placement Support', value: '95%' },
  { label: 'Industry Mentors', value: '100+' },
];

const features = [
  { icon: <Database className="w-6 h-6" />, title: 'Data & Analytics', desc: 'Data Science, Engineering & Analytics' },
  { icon: <Cpu className="w-6 h-6" />, title: 'Artificial Intelligence', desc: 'Gen AI, Agentic AI, MLOps, AIOps' },
  { icon: <Cloud className="w-6 h-6" />, title: 'Cloud & DevOps', desc: 'AWS, Azure, GCP, CI/CD' },
  { icon: <Code2 className="w-6 h-6" />, title: 'Software Engineering', desc: 'Java & Python Full Stack, FDE' },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-dark-bg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-bg to-purple-900/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mt-6">
              Transform Your Career from <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Non-IT to IT
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn from industry experts, build real projects, earn certifications, complete internships, and get hired by top startups.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] flex items-center justify-center gap-2"
              >
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
              >
                Talk to Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-card border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Learning Paths</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Master the technologies that power modern applications, from the frontend to the cloud infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-card border border-gray-800 p-8 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-24 bg-gradient-to-b from-dark-bg to-dark-card border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Train With Tech-Bengaluru?</h2>
              <div className="space-y-6">
                {[
                  '100% Practical, Project-Based Learning',
                  'Mentorship from Industry Experts',
                  'Resume Building & Interview Preparation',
                  'Dedicated Placement Support'
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Students collaborating" 
                  className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-[40px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
