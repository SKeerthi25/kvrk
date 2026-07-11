import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import ProjectShowcase from '../components/home/ProjectShowcase';

const Home = () => {
  return (
    <div>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg.png" alt="Construction Site at Sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-block px-6 py-2 rounded-full bg-accent-500/20 border border-accent-500/30 backdrop-blur-sm"
          >
            <span className="text-accent-500 font-bold tracking-[0.2em] text-sm uppercase">KVRK Construction Ltd</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl"
          >
            Building Tomorrow's <br /> Legacy Today
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-200 mb-10 drop-shadow-md"
          >
            Premium domestic construction and finishing services in the UK.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:bg-secondary-500 hover:-translate-y-1 transition-all duration-300 inline-block">
              Explore Projects
            </a>
            <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-white hover:text-primary-500 transition-all duration-300 inline-block">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Stats />
      
      <ProjectShowcase />

      {/* Services Preview */}
      <section className="py-24 bg-white dark:bg-gray-800 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-16">Our Premium Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Domestic Construction', desc: 'Full-scale house builds and extensions tailored to your vision.' },
              { title: 'Interior Finishing', desc: 'Luxurious flooring, painting, and interior styling.' },
              { title: 'Structural Repairs', desc: 'Ensuring safety and longevity with expert masonry and repair.' }
            ].map((srv, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="h-12 w-12 rounded-xl bg-secondary-500 mb-6 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">0{i+1}</div>
                <h3 className="text-2xl font-bold mb-4 text-dark">{srv.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-dark mb-6">Why Clients Trust KVRK</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              We go beyond simple construction. We deliver an enterprise-grade experience tailored to your unique domestic needs.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Uncompromising Quality', desc: 'We source the finest materials and employ master craftsmen.' },
                { title: 'Transparent Process', desc: 'Real-time project updates and clear communication at every step.' },
                { title: 'Safety First', desc: 'Rigorous safety standards protecting your home and our team.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-white shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <img 
              src="/construction-illustration.png" 
              alt="Premium Construction Project" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-500 mix-blend-multiply opacity-20 hover:opacity-10 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;
