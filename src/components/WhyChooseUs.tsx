import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    "Multi-sector Engineering Expertise",
    "Strong Project Execution Capability",
    "Quality Workmanship",
    "Safety & Compliance Focus",
    "Timely Delivery",
    "Transparent Coordination",
    "Technical Documentation Support",
    "Reliable Maintenance Support"
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase mb-3">Distinction</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Why Clients Trust <br/> <span className="text-red-600">KRSP</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              We stand apart through our commitment to precise engineering, transparency, and a relentless focus on safety. Our turnkey approach reduces vendor friction and accelerates project timelines.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-600 hover:shadow-sm border border-transparent hover:border-red-500 transition-all group"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-500 group-hover:text-white shrink-0 mt-0.5 transition-colors" />
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-white transition-colors">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
             
             <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
               <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center p-2">
                   <div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                     ISO
                   </div>
                 </div>
                 <div>
                   <div className="text-white font-bold text-xl">Certified Quality</div>
                   <div className="text-slate-200 text-sm">Adhering to strict international safety and engineering standards.</div>
                 </div>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
