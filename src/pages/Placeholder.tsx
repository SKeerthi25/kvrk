import { motion } from 'framer-motion';

const Placeholder = ({ title }: { title: string }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold text-primary-500 mb-4">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Enterprise module currently under construction.</p>
      </motion.div>
    </div>
  );
};

export default Placeholder;
