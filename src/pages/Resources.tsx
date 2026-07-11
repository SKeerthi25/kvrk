import { motion } from 'framer-motion';
import { FileText, HelpCircle, ArrowRight } from 'lucide-react';

const Resources = () => {
  return (
    <div className="pt-20 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-primary-500 mb-6"
        >
          Resources & Guides
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Everything you need to know about starting your next construction project with us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Guides */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-dark mb-6 flex items-center gap-3">
            <FileText className="text-accent-500" /> Essential Guides
          </h2>
          {[
            { title: 'The Ultimate Guide to Home Extensions', desc: 'Planning permissions, budgeting, and timelines explained.' },
            { title: 'Choosing the Right Materials for Luxury Finish', desc: 'A comparison of premium flooring, masonry, and interior options.' },
            { title: 'Eco-Friendly Home Upgrades', desc: 'How to make your home more energy-efficient during renovation.' }
          ].map((guide, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary-500 transition-colors">{guide.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{guide.desc}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-accent-500 transition-colors shrink-0 ml-4" />
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
            <h3 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2">
              <HelpCircle className="text-accent-500" /> Frequently Asked Questions
            </h3>
            <div className="space-y-4 mt-6">
              <div>
                <h4 className="font-bold text-dark">Do you handle planning permissions?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Yes, our full-service package includes managing all council approvals.</p>
              </div>
              <hr className="border-gray-100 dark:border-gray-700" />
              <div>
                <h4 className="font-bold text-dark">Do you offer warranties?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Absolutely. All structural work comes with a 10-year guarantee.</p>
              </div>
              <hr className="border-gray-100 dark:border-gray-700" />
              <div>
                <h4 className="font-bold text-dark">What areas do you cover?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">We operate primarily across London and the surrounding Home Counties.</p>
              </div>
              <hr className="border-gray-100 dark:border-gray-700" />
              <div>
                <h4 className="font-bold text-dark">How accurate are your quotes?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">We provide fixed-price contracts once the final specifications are agreed upon, ensuring no hidden costs.</p>
              </div>
              <hr className="border-gray-100 dark:border-gray-700" />
              <div>
                <h4 className="font-bold text-dark">Are you fully insured?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Yes, we hold comprehensive public liability and employer's liability insurance up to £5M.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resources;
