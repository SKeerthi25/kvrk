import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="bg-primary-500 text-white pt-32 pb-20 px-6 md:px-12 rounded-b-[4rem]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 text-accent-500"
          >
            Building Trust, <br/> Constructing Excellence
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            KVRK CONSTRUCTION LTD is a premier domestic building and finishing company based in Purley, UK. We blend modern technology with traditional craftsmanship.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Our Vision', desc: 'To be the most trusted and innovative domestic construction firm in the United Kingdom.' },
            { title: 'Our Mission', desc: 'Delivering exceptional quality homes through meticulous attention to detail and sustainable practices.' },
            { title: 'Our Values', desc: 'Integrity, craftsmanship, transparency, and a relentless pursuit of perfection in every project.' }
          ].map((val, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-secondary-500)] to-transparent opacity-10 rounded-bl-full"></div>
              <h3 className="text-3xl font-bold text-primary-500 mb-6">{val.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-dark">Our Journey</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {[
              { year: '2010', title: 'Company Founded', desc: 'Started with a small team focusing on interior finishing.' },
              { year: '2015', title: 'Expansion', desc: 'Expanded into full domestic building construction and renovations.' },
              { year: '2020', title: 'Enterprise Growth', desc: 'Adopted modern SaaS-like project management for clients.' },
              { year: 'Present', title: 'Industry Leaders', desc: 'Recognized as a premium construction partner in the UK.' },
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="font-bold text-accent-500 text-xl mb-2">{item.year}</div>
                  <h4 className="text-2xl font-bold mb-2 text-dark">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
