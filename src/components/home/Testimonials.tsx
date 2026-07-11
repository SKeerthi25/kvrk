import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner, Surrey",
    text: "KVRK Construction completely transformed our outdated kitchen and living space. Their attention to detail and professionalism were unmatched. The team was respectful, clean, and finished ahead of schedule.",
    rating: 5
  },
  {
    name: "David & Emma Thompson",
    role: "Property Developers",
    text: "We've used several contractors over the years, but KVRK is on another level. Their enterprise-grade project management meant we were always in the loop, and the final structural finish was flawless.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Residential Client",
    text: "From the initial consultation to the final brick laid, the experience was premium. They took our vision for a two-story extension and executed it with precision and luxury. Highly recommended.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-800 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-dark mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Don't just take our word for it. Discover how we've helped homeowners across the UK achieve their dream properties with zero stress.
            </p>
            <div className="flex gap-2 text-accent-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              ))}
            </div>
            <p className="font-bold text-dark">5.0 Average Rating</p>
          </motion.div>
        </div>
        
        <div className="md:w-2/3 w-full">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testi, i) => (
              <SwiperSlide key={i}>
                <div className="bg-background p-10 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg relative">
                  <svg className="absolute top-8 right-10 w-16 h-16 text-primary-500 opacity-10" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic leading-relaxed mb-8 relative z-10">
                    "{testi.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-primary-500 text-xl">{testi.name}</h4>
                    <p className="text-gray-500">{testi.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
