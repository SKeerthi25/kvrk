import { motion } from 'framer-motion';

import proj1 from '../../assets/image copy 2.png';
import proj2 from '../../assets/image copy 3.png';
import proj3 from '../../assets/image copy 7.png';
import proj4 from '../../assets/image copy 8.png';

const projects = [
  { title: "Modern Extension", category: "Construction", image: proj1 },
  { title: "Luxury Kitchen", category: "Interior Finishing", image: proj2 },
  { title: "Bespoke Brickwork", category: "Exterior", image: proj3 },
  { title: "Full Renovation", category: "Renovation", image: proj4 },
];

const ProjectShowcase = () => {
  return (
    <section id="projects" className="py-24 bg-primary-500 text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-accent-500 mb-6">Our Latest Masterpieces</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of completed projects. We take pride in delivering exceptional craftsmanship that transforms houses into extraordinary homes.
            </p>
          </div>
          <button className="mt-8 md:mt-0 bg-transparent border-2 border-accent-500 text-accent-500 px-8 py-3 rounded-full font-bold hover:bg-accent-500 hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative h-96 rounded-3xl overflow-hidden group cursor-pointer`}
            >
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-accent-500 font-semibold text-sm mb-2 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="h-1 w-12 bg-secondary-500 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
