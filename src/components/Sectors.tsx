import { motion } from 'motion/react';
import { Factory, Wind, Zap, Sun, Cable, Building2, PaintBucket, Wrench, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Sectors() {
  const { navigate } = useNavigation();

  const sectors = [
    { id: "petroleum-oil", title: "Petroleum & Oil Sector", icon: Factory },
    { id: "gas-pipeline", title: "Gas Pipeline & CGD Sector", icon: Wind },
    { id: "cng-infrastructure", title: "CNG Infrastructure", icon: Wind },
    { id: "power-electrical", title: "Power & Electrical Distribution", icon: Zap },
    { id: "solar-renewable", title: "Solar & Renewable Energy", icon: Sun },
    { id: "industrial-automation", title: "Industrial Automation", icon: Cable },
    { id: "civil-infrastructure", title: "Civil & Infrastructure", icon: Building2 },
    { id: "interior-exterior", title: "Interior, Exterior & Façade", icon: PaintBucket },
    { id: "maintenance-retrofit", title: "Maintenance & Retrofit Projects", icon: Wrench },
  ];

  return (
    <section id="sectors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-red-600 tracking-wider uppercase mb-3"
          >
            Industries
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6"
          >
            Major Sectors We Serve
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate({ type: 'sector', id: sector.id })}
              className="flex items-center justify-between p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-900 hover:border-red-600 shadow-sm hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-colors shadow-sm">
                  <sector.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-slate-800 group-hover:text-white text-lg transition-colors">{sector.title}</h4>
              </div>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0">
                <span className="text-red-500 text-sm font-semibold tracking-wide">View Details</span>
                <ArrowRight className="w-5 h-5 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
