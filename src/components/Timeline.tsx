import { motion } from 'motion/react';

export function Timeline() {
  const steps = [
    "Concept", "Design", "Procurement", "Supply", 
    "Construction", "Installation", "Testing", 
    "Commissioning", "Maintenance"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-red-500 tracking-wider uppercase mb-3"
          >
            Lifecycle Management
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold mb-6"
          >
            Complete Project Capability
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 leading-relaxed text-lg"
          >
            From initial planning to final commissioning and after-service maintenance, <span className="text-red-500 font-semibold">KRSP Engineering Private Limited</span> delivers reliable project execution with proper coordination, technical supervision and quality control.
          </motion.p>
        </div>

        <div className="relative mt-20 pb-10 overflow-x-auto scrollbar-hide">
          <div className="min-w-[1000px] flex justify-between relative px-10">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-10 right-10 h-1 hidden sm:block -translate-y-1/2 bg-slate-800">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-red-500 via-rose-500 to-blue-500"
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col items-center group w-24"
              >
                {/* Node */}
                <div className="w-6 h-6 rounded-full border-4 border-slate-900 bg-slate-400 group-hover:bg-red-500 group-hover:scale-125 transition-all z-10 shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.8)]" />
                
                {/* Text below */}
                <div className="mt-4 text-center">
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
                    {step}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
