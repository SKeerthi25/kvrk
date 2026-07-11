import { motion } from 'framer-motion';
import { Shield, Clock, HeartHandshake, Award } from 'lucide-react';

const commitments = [
  { icon: Shield, title: 'Uncompromising Safety', desc: 'Strict adherence to UK safety and building standards.' },
  { icon: Award, title: 'Premium Quality', desc: 'Using only top-tier materials for lasting, luxurious results.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Efficient project management to meet your deadlines.' },
  { icon: HeartHandshake, title: 'Client First', desc: 'Transparent, honest communication at every project stage.' },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary-500 text-white border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {commitments.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i} 
                className="p-8 bg-gray-800/40 rounded-3xl border border-gray-700 hover:bg-gray-800/80 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-accent-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
