import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formData = new FormData(form.current);
    const templateParams = {
      from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      reply_to: formData.get('email'),
      message: `Service Required: ${formData.get('service')}\n\nProject Details:\n${formData.get('description')}`
    };

    emailjs.send('service_dyurp5d', 'template_djqa7f6', templateParams, {
      publicKey: 'rYQOd6rMeMaCLqe63'
    })
      .then((result) => {
          console.log("Success!", result.text);
          setSubmitStatus('success');
          form.current?.reset();
      }, (error) => {
          console.error("Failed!", error);
          setSubmitStatus('error');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="pt-20 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-primary-500 mb-6"
        >
          Let's Build Together
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Contact our team of experts today for a consultation or to get a detailed quote for your project.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info Cards */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-secondary-500 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">4 Lansdowne Road,<br/>Purley, CR8 2PA,<br/>United Kingdom</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-secondary-500 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">07405559769</p>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri from 8am to 6pm</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-secondary-500 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg break-all">kvrkconstructionltd@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">We aim to reply within 24 hours</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-secondary-500 shrink-0">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Business Hours</h3>
              <div className="space-y-1 text-gray-600 dark:text-gray-300">
                <p className="flex justify-between gap-4"><span className="font-medium">Monday - Friday:</span> 09:00 - 18:00 (GMT)</p>
                <p className="flex justify-between gap-4"><span className="font-medium">Saturday - Sunday:</span> 10:00 - 16:00 (GMT)</p>
                <p className="flex justify-between gap-4 mt-2 text-primary-500 font-bold"><span>Support:</span> 24/7/365</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
          <h3 className="text-3xl font-bold mb-8 text-dark">Request a Quote</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">First Name</label>
                <input type="text" name="firstName" required className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Last Name</label>
                <input type="text" name="lastName" required className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email Address</label>
              <input type="email" name="email" required className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Service Required</label>
              <select name="service" required className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none text-gray-600 dark:text-gray-300">
                <option value="Domestic Construction">Domestic Construction</option>
                <option value="Renovation">Renovation</option>
                <option value="Interior Finishing">Interior Finishing</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Project Details</label>
              <textarea name="description" required rows={4} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" placeholder="Tell us about your project..."></textarea>
            </div>
            
            {submitStatus === 'success' && <p className="text-green-500 font-medium">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="text-red-500 font-medium">Failed to send message. Please try again.</p>}
            
            <button type="submit" disabled={isSubmitting} className="w-full bg-primary-500 text-white font-bold text-lg py-5 rounded-xl hover:bg-secondary-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>

      {/* Google Maps Integration */}
      <div className="mt-20 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 h-[500px]">
        <iframe
          title="KVRK Construction Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.1672322472624!2d-0.12028612347911467!3d51.3396659717904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875fe3344b58eb7%3A0xc3c9f285e2b02cd4!2s4%20Lansdowne%20Rd%2C%20Purley%20CR8%202PA%2C%20UK!5e0!3m2!1sen!2sus!4v1705600000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
