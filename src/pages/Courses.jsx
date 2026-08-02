import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Code, Server, Cloud, Cpu, Terminal, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const coursesData = [
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Master data analysis tools and techniques to make data-driven business decisions.',
    topics: ['Excel & SQL', 'Power BI & Tableau', 'Python for Data Analysis', 'Statistical Analysis', 'Data Cleaning', 'Data Visualization'],
    projects: ['Sales Data Dashboard', 'Customer Churn Analysis']
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    icon: <Server className="w-6 h-6" />,
    description: 'Build scalable data pipelines and robust data architectures for modern organizations.',
    topics: ['Hadoop & Spark', 'ETL Pipelines', 'Data Warehousing', 'Airflow', 'Cloud Data Services', 'Big Data Architecture'],
    projects: ['Real-time Streaming Pipeline', 'Data Lake Implementation']
  },
  {
    id: 'data-science',
    title: 'Data Science',
    icon: <Code className="w-6 h-6" />,
    description: 'Learn advanced machine learning, predictive modeling, and deep data exploration.',
    topics: ['Machine Learning Algorithms', 'Deep Learning Basics', 'NLP & Computer Vision', 'Predictive Modeling', 'Feature Engineering'],
    projects: ['House Price Prediction', 'Recommendation System']
  },
  {
    id: 'gen-ai',
    title: 'Generative AI',
    icon: <Cpu className="w-6 h-6" />,
    description: 'Explore the cutting edge of AI, building models that generate text, images, and code.',
    topics: ['LLMs & Transformers', 'Prompt Engineering', 'LangChain', 'RAG (Retrieval-Augmented Generation)', 'Fine-tuning Models'],
    projects: ['Custom AI Chatbot', 'Automated Content Generator']
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Design and deploy autonomous AI agents capable of reasoning, planning, and executing complex tasks.',
    topics: ['Autonomous Agents', 'Multi-Agent Systems', 'Tool Use & APIs', 'Planning Algorithms', 'AI Safety & Ethics'],
    projects: ['Autonomous Research Agent', 'Multi-Agent Workflow Automation']
  },
  {
    id: 'mlops',
    title: 'MLOps',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Streamline the deployment, monitoring, and maintenance of machine learning models in production.',
    topics: ['Model Deployment', 'CI/CD for ML', 'Model Monitoring', 'MLflow & Kubeflow', 'Data Version Control (DVC)'],
    projects: ['End-to-End ML Pipeline', 'Automated Model Retraining System']
  },
  {
    id: 'aiops',
    title: 'AIOps',
    icon: <Server className="w-6 h-6" />,
    description: 'Leverage AI and machine learning to automate and enhance IT operations and monitoring.',
    topics: ['Anomaly Detection', 'Log Analysis with AI', 'Predictive Maintenance', 'Automated Incident Response'],
    projects: ['Smart Alerting System', 'Automated Log Anomaly Detector']
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: <Code className="w-6 h-6" />,
    description: 'Bridge development and operations with modern CI/CD tools and practices for faster delivery.',
    topics: ['Linux & Git', 'Docker & Kubernetes', 'Jenkins & GitLab CI', 'Terraform', 'Monitoring (Prometheus/Grafana)'],
    projects: ['Complete Automated CI/CD Pipeline', 'Microservices Deployment']
  },
  {
    id: 'fde',
    title: 'Forward Deployed Engineer (FDE)',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Bridge the gap between product engineering and enterprise clients with tailored solutions.',
    topics: ['Client Engagement', 'Rapid Prototyping', 'System Integration', 'Solution Architecture', 'Cross-functional Collaboration'],
    projects: ['Custom Enterprise Integration', 'Client-specific Solution POC']
  },
  {
    id: 'cloud',
    title: 'Cloud Computing (AWS / Azure / GCP)',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Master the core services of major cloud providers to design scalable architectures.',
    topics: ['Compute Services', 'Storage & Databases', 'Networking & Content Delivery', 'Security & IAM', 'Serverless Architecture'],
    projects: ['Multi-Tier Cloud Application', 'Serverless API Deployment']
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: <Server className="w-6 h-6" />,
    description: 'Understand the fundamental protocols, architectures, and security principles of computer networks.',
    topics: ['OSI & TCP/IP Models', 'Routing & Switching', 'Network Security', 'VPNs & Firewalls', 'Cloud Networking'],
    projects: ['Enterprise Network Design', 'Secure VPN Implementation']
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack Development',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Learn rapid application development using Python, Django/FastAPI, and frontend frameworks.',
    topics: ['Python & OOP', 'Django & FastAPI', 'Database Management', 'React.js / Next.js', 'Deployment'],
    projects: ['Real-Time Web Application', 'AI-integrated Dashboard']
  },
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Development',
    icon: <Code className="w-6 h-6" />,
    description: 'Master enterprise application development using Java, Spring Boot, and modern frontends.',
    topics: ['Java Core & OOPS', 'Spring Boot & Microservices', 'REST APIs', 'Database Integration', 'React.js'],
    projects: ['Enterprise E-commerce Platform', 'Banking Application']
  }
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState(coursesData[0].id);

  const activeCourse = coursesData.find(c => c.id === activeTab);

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Training Programs</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Comprehensive, industry-aligned courses designed to take you from a beginner to a job-ready professional.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs Sidebar */}
        <div className="md:w-1/3 flex flex-col gap-2">
          {coursesData.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(course.id)}
              className={`flex items-center gap-4 p-4 text-left rounded-xl transition-all duration-300 ${
                activeTab === course.id
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.3)]'
                  : 'bg-dark-card text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className={`${activeTab === course.id ? 'text-white' : 'text-primary'}`}>
                {course.icon}
              </div>
              <span className="font-semibold text-lg">{course.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="md:w-2/3 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCourse.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-card border border-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">{activeCourse.title}</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">{activeCourse.description}</p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4 border-b border-gray-800 pb-2">Key Topics Covered</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCourse.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 border-b border-gray-800 pb-2">Real-Time Projects</h3>
                <ul className="space-y-3">
                  {activeCourse.projects.map((project, index) => (
                    <li key={index} className="flex items-center gap-3 bg-gray-900 p-4 rounded-lg border border-gray-800">
                      <Code className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 mb-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">
                  <span className="font-semibold text-white">Industrial Certification</span> will be provided to all candidates upon successful completion, which is highly valued across IT companies.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Courses;
