import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ChevronLeft, UploadCloud } from 'lucide-react';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  company: z.string().optional(),
  
  projectType: z.string().min(1, 'Project type is required'),
  service: z.string().min(1, 'Service is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  postcode: z.string().min(5, 'Postcode is required'),
  
  budget: z.string().min(1, 'Budget estimation is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  
  description: z.string().min(10, 'Please provide more details'),
  specialReqs: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const GetQuote = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: JSON.parse(localStorage.getItem('quoteDraft') || '{}')
  });

  const formValues = watch();

  useEffect(() => {
    localStorage.setItem('quoteDraft', JSON.stringify(formValues));
  }, [formValues]);

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];
    if (step === 2) fieldsToValidate = ['projectType', 'service', 'address', 'city', 'postcode'];
    if (step === 3) fieldsToValidate = ['budget', 'timeline'];
    
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send('service_dyurp5d', 'template_djqa7f6', {
        from_name: `${data.firstName} ${data.lastName}`,
        reply_to: data.email,
        message: `Phone: ${data.phone}\nProject: ${data.projectType} - ${data.service}\nLocation: ${data.address}, ${data.city}, ${data.postcode}\nBudget: ${data.budget}\nTimeline: ${data.timeline}\nDescription: ${data.description}`
      }, {
        publicKey: 'rYQOd6rMeMaCLqe63'
      });
      
      setIsSuccess(true);
      localStorage.removeItem('quoteDraft');
    } catch (error) {
      console.error("Failed to send quote request:", error);
      alert("Failed to submit request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-xl text-center max-w-lg">
          <CheckCircle2 className="w-24 h-24 text-accent-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-dark">Quote Requested!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">We have received your request (Ref: KVRK-{Math.floor(Math.random()*10000)}). Our estimators will review your requirements and contact you shortly.</p>
          <button onClick={() => window.location.reload()} className="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold w-full hover:bg-secondary-500 transition-colors">
            Request Another Quote
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-4">Enterprise Quotation</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Complete the multi-step process below for a highly accurate estimation.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between mb-12 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:h-1 before:w-full before:bg-gray-200 before:z-0">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${step >= s ? 'bg-secondary-500 text-white shadow-lg shadow-orange-500/30' : 'bg-gray-200 text-gray-500'}`}>
              {s}
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold mb-6 text-dark">1. Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">First Name</label>
                      <input {...register('firstName')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" />
                      {errors.firstName && <span className="text-red-500 text-sm mt-1">{errors.firstName.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Last Name</label>
                      <input {...register('lastName')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email Address</label>
                      <input {...register('email')} type="email" className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" />
                      {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Phone Number</label>
                      <input {...register('phone')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold mb-6 text-dark">2. Project Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Project Type</label>
                      <select {...register('projectType')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none">
                        <option value="">Select type...</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Service Required</label>
                      <select {...register('service')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none">
                        <option value="">Select service...</option>
                        <option value="Construction">New Construction</option>
                        <option value="Renovation">Renovation</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Project Address</label>
                      <input {...register('address')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">City</label>
                      <input {...register('city')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Postcode</label>
                      <input {...register('postcode')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold mb-6 text-dark">3. Budget & Timeline</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Estimated Budget</label>
                      <select {...register('budget')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none">
                        <option value="">Select budget range...</option>
                        <option value="10k-50k">£10,000 - £50,000</option>
                        <option value="50k-150k">£50,000 - £150,000</option>
                        <option value="150k+">£150,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Timeline Expectations</label>
                      <select {...register('timeline')} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none">
                        <option value="">Select timeline...</option>
                        <option value="ASAP">As soon as possible</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold mb-6 text-dark">4. Project Details</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Detailed Description</label>
                      <textarea {...register('description')} rows={5} className="w-full bg-background border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none" placeholder="Describe your vision..."></textarea>
                      {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-bold mb-6 text-dark">5. Summary & Uploads</h2>
                  <div className="mb-8 p-6 bg-background rounded-2xl border border-dashed border-gray-300 text-center">
                    <UploadCloud className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Drag & drop plans, photos, or PDFs here</p>
                    <p className="text-sm text-gray-400 mt-2">Max 50MB total</p>
                    <input type="file" multiple className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="mt-4 inline-block px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 dark:bg-gray-900">Browse Files</label>
                  </div>
                  
                  <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                    <h3 className="font-bold text-lg mb-4 text-primary-500">Submission Confirmation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">By clicking submit, you confirm that the details provided are accurate. Our enterprise team will review your specifications and prepare a tailored consultation.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-between">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(s => s - 1)} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 font-bold transition-colors">
                  <ChevronLeft className="w-5 h-5 mr-1" /> Back
                </button>
              ) : <div></div>}

              {step < 5 ? (
                <button type="button" onClick={nextStep} className="flex items-center bg-primary-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary-500 transition-all">
                  Next Step <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              ) : (
                <button type="submit" disabled={isSubmitting} className="flex items-center bg-secondary-500 text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  {isSubmitting ? 'Processing...' : 'Submit Final Quote Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
