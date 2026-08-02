import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, Layers, Rocket, CloudUpload, Award } from 'lucide-react';

const steps = [
  { icon: <BookOpen className="w-8 h-8" />, title: '1. Theory Concepts', desc: 'Build a strong foundation with deep theoretical understanding of core computer science and software principles.' },
  { icon: <MonitorPlay className="w-8 h-8" />, title: '2. Hands-on Practice', desc: 'Apply concepts immediately through guided coding exercises and practical lab sessions.' },
  { icon: <Layers className="w-8 h-8" />, title: '3. Mini Projects', desc: 'Combine multiple concepts to build small, functional applications independently.' },
  { icon: <Rocket className="w-8 h-8" />, title: '4. Real-Time Projects', desc: 'Work on industry-standard, complex projects mimicking real-world business requirements.' },
  { icon: <CloudUpload className="w-8 h-8" />, title: '5. Deployment', desc: 'Learn to deploy your applications to cloud platforms like AWS or Azure.' },
  { icon: <Award className="w-8 h-8" />, title: '6. Interview Prep', desc: 'Mock interviews, resume building, and technical HR rounds to get you job-ready.' },
];

const TrainingModel = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Training Model</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A proven, structured pathway from Beginner to Industry-Level Professional.
        </p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 rounded-full" />

        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <div className={`inline-block p-4 bg-dark-card border border-gray-800 rounded-2xl shadow-xl hover:border-primary/50 transition-colors max-w-md ${
                  index % 2 === 0 ? 'ml-0 md:ml-8' : 'mr-0 md:mr-8'
                }`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>

              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 border-4 border-dark-bg text-primary z-10 shrink-0 shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                {step.icon}
              </div>

              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingModel;
