import { motion } from 'framer-motion';
import { Building2, Home, Landmark, Factory } from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: Home, title: 'Residential & Domestic', desc: 'Bespoke homes, modern extensions, and luxury renovations tailored to modern living.' },
    { icon: Building2, title: 'Commercial Property', desc: 'High-end office spaces and retail environments designed for productivity and brand impact.' },
    { icon: Landmark, title: 'Heritage & Conservation', desc: 'Careful restoration of period properties, respecting history while upgrading functionality.' },
    { icon: Factory, title: 'Industrial Facilities', desc: 'Robust construction solutions for warehouses and light industrial spaces.' },
  ];

  return (
    <div className="pt-20 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-primary-500 mb-6"
        >
          Industries We Serve
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Delivering enterprise-grade construction excellence across multiple sectors in the UK.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 bg-accent-500/10 rounded-full flex items-center justify-center mb-6">
                <Icon className="w-10 h-10 text-accent-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-dark">{ind.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Industries;
