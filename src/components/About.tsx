import { motion } from 'motion/react';
import { Target, HardHat, ShieldCheck } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: Target,
      title: "Engineering Expertise",
      description: "Delivering precise engineering solutions with deep technical accuracy and innovative approaches."
    },
    {
      icon: HardHat,
      title: "Turnkey Project Execution",
      description: "End-to-end EPC execution from initial planning and design to testing and commissioning phase."
    },
    {
      icon: ShieldCheck,
      title: "Quality & Safety Focus",
      description: "Adhering rigidly to global standards, ensuring zero-compromise safety on all construction sites."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase mb-3">About The Company</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              About <span className="text-red-600">KRSP</span>
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              <span className="font-semibold text-red-600">KRSP</span> is a professional engineering and project execution company offering end-to-end engineering solutions including design, supply, procurement, construction, installation, testing, commissioning, consultancy, maintenance and retrofit works.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The company works across multiple sectors with a focus on quality, safety, technical accuracy, timely execution and client satisfaction. We provide integrated EPC solutions for complex infrastructure and industrial deployments.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="grid gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all flex gap-5 overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-32 h-32 bg-red-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-100 transition-colors" />
                
                <div className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <card.icon className="w-7 h-7" />
                </div>
                <div className="relative">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
