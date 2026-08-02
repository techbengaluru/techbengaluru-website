import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Data Analytics',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // NOTE: Replace this URL with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwh_u_hLiAdQOSEdu_C7TS1HBN0FyLJgrO9JjZyPJtTjaM5L-Q_dT6l8DPTVfdaxC_J/exec';
      
      const formDataObj = new FormData();
      Object.keys(formData).forEach(key => {
        formDataObj.append(key, formData[key]);
      });

      // Fire and forget: We don't await the fetch so the UI updates instantly
      fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj
      }).catch(err => console.error('Background fetch error:', err));
      
      // Instantly show success
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', course: 'Data Analytics', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Error in form setup:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hi, I am interested in joining Tech-Bengaluru. My name is ${formData.name || '[Your Name]'}.`;
    const phone = '917349524065'; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to kickstart your tech career? Contact us for course details, demo classes, or any queries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-card border border-gray-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-400 mt-1">Bengaluru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Call Us</h4>
                  <p className="text-gray-400 mt-1">7349524065</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email Us</h4>
                  <p className="text-gray-400 mt-1">techbengaluru4@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold text-xl">IG</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Instagram</h4>
                  <p className="text-gray-400 mt-1"><a href="https://www.instagram.com/tech_bglr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">tech_bglr</a></p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-green-900/20"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-card border border-gray-800 p-8 md:p-12 rounded-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Interested Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                  >
                    <option>Data Analytics</option>
                    <option>Data Engineering</option>
                    <option>Data Science</option>
                    <option>Generative AI</option>
                    <option>Agentic AI</option>
                    <option>MLOps</option>
                    <option>AIOps</option>
                    <option>DevOps</option>
                    <option>Forward Deployed Engineer (FDE)</option>
                    <option>Cloud Computing (AWS / Azure / GCP)</option>
                    <option>Networking</option>
                    <option>Python Full Stack Development</option>
                    <option>Java Full Stack Development</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your background and what you're looking to achieve..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 mt-4 p-3 bg-green-400/10 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Enquiry submitted successfully! We will contact you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 mt-4 p-3 bg-red-400/10 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again or contact via WhatsApp.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      

    </div>
  );
};

export default Contact;
