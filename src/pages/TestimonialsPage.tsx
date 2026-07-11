import { motion } from 'framer-motion';
import TestimonialsComponent from '../components/home/Testimonials';

const TestimonialsPage = () => {
  return (
    <div className="pt-20 pb-32">
      <div className="text-center mb-12 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-primary-500 mb-6"
        >
          Client Success Stories
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Read what our clients have to say about their experience working with KVRK Construction Ltd.
        </p>
      </div>

      <TestimonialsComponent />
    </div>
  );
};

export default TestimonialsPage;
