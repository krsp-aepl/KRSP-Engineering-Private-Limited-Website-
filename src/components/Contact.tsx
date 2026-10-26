import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'PASTE_YOUR_SERVICE_ID_HERE',
        'PASTE_YOUR_TEMPLATE_ID_HERE',
        form.current,
        'PASTE_YOUR_PUBLIC_KEY_HERE'
      );
      
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase mb-3">Contact Us</h2>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Let’s Build Reliable Engineering Solutions Together
            </h3>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Have a project in mind? Reach out to our technical team for expert engineering consultancy, EPC queries, or turnkey execution proposals.
            </p>

            <div className="space-y-6">
              <a href="tel:9234058001" className="flex items-start gap-4 hover:bg-slate-100 p-2 -ml-2 rounded-lg transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-red-500 shrink-0 shadow-sm group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1">Phone Number</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">9234058001</div>
                </div>
              </a>
              
              <a href="mailto:pro.krspengg@gmail.com" className="flex items-start gap-4 hover:bg-slate-100 p-2 -ml-2 rounded-lg transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-red-500 shrink-0 shadow-sm group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1">Email Address</div>
                  <div className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">pro.krspengg@gmail.com</div>
                </div>
              </a>
              
              <a href="https://maps.google.com/?q=krsp+engineering+dhanbad" target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:bg-slate-100 p-2 -ml-2 rounded-lg transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-red-500 shrink-0 shadow-sm group-hover:bg-red-50 group-hover:border-red-200 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1">Office Location</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">Near Radha Soami Arcade, Saraidhela, Dhanbad, Jharkhand – 828127</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h4>
                  <p className="text-slate-600">Your enquiry has been submitted successfully. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-8 px-6 py-2 border border-slate-200 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
              <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="service">Service Requirement</label>
                  <select 
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="">Select a Service...</option>
                    <option value="Mechanical & Civil Infrastructure">Mechanical & Civil Infrastructure</option>
                    <option value="Electrical & Power Systems">Electrical & Power Systems</option>
                    <option value="Construction & Structural Fabrication">Construction & Structural Fabrication</option>
                    <option value="Pipeline & CGD Operations">Pipeline & CGD Operations</option>
                    <option value="Operation, Maintenance & Retrofits">Operation, Maintenance & Retrofits</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Project Requirement / Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Describe your engineering requirement..."
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 text-red-600 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <motion.button 
                  whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </>
                  )}
                </motion.button>
              </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
