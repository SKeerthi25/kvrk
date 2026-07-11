import { motion } from 'framer-motion';
import { Leaf, Sun, Droplets, Recycle } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    { icon: Leaf, title: 'Eco-Friendly Materials', desc: 'We source sustainable, low-carbon materials that reduce the environmental impact of your build.' },
    { icon: Sun, title: 'Energy Efficiency', desc: 'Implementing cutting-edge insulation and solar solutions for net-zero ready homes.' },
    { icon: Recycle, title: 'Waste Reduction', desc: 'Strict recycling protocols on all our sites to minimize landfill waste during construction.' },
    { icon: Droplets, title: 'Water Conservation', desc: 'Installing smart plumbing and greywater systems for sustainable living.' },
  ];

  return (
    <div className="pt-20 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-primary-500 mb-6 flex justify-center items-center gap-4"
        >
          <Leaf className="w-12 h-12 text-green-500 hidden md:block" /> Sustainability
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Building the future means protecting it. Discover our commitment to green construction practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initiatives.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-start gap-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <Icon className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-dark">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Sustainability;
