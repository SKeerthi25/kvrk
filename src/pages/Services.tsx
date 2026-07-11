import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesList = [
    {
      title: 'Domestic Building Construction',
      desc: 'Complete house builds from foundation to finishing, ensuring structural integrity and luxurious design.',
      features: ['Custom House Builds', 'Structural Extensions', 'New Foundations'],
    },
    {
      title: 'House Renovation & Extensions',
      desc: 'Transform your existing space with modern renovations and spacious extensions.',
      features: ['Kitchen Renovations', 'Bathroom Remodeling', 'Loft Conversions'],
    },
    {
      title: 'Roofing & Brickwork',
      desc: 'Expert roofing installations and premium brickwork for durable and aesthetic exteriors.',
      features: ['Roof Repairs', 'New Roof Installations', 'Custom Brickwork'],
    },
    {
      title: 'Interior Finishing',
      desc: 'Flawless interior finishing including premium flooring, painting, and detailed carpentry.',
      features: ['Hardwood Flooring', 'Professional Painting', 'Bespoke Carpentry'],
    },
    {
      title: 'Electrical & Plumbing',
      desc: 'Certified installations and repairs for all your home electrical and plumbing needs.',
      features: ['Full Rewiring', 'Modern Lighting', 'Advanced Plumbing'],
    },
    {
      title: 'Exterior Finishing',
      desc: 'Enhancing curb appeal with professional landscaping, paving, and exterior painting.',
      features: ['Landscaping', 'Driveway Paving', 'Exterior Protection'],
    }
  ];

  return (
    <div className="pt-20 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-primary-500 mb-6"
        >
          Our Premium Services
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We deliver uncompromising quality across all aspects of domestic construction and finishing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesList.map((service, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-background text-secondary-500 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-inner">
              0{idx + 1}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-dark">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {service.desc}
            </p>
            <ul className="space-y-3">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-accent-500 mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 w-full py-4 rounded-xl border-2 border-primary-500 text-primary-500 font-bold hover:bg-primary-500 hover:text-white transition-colors duration-300 block text-center">
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
