import { motion } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';

export function Expertise() {
  const { navigate } = useNavigation();

  const expertiseAreas = [
    { id: "lmc", title: "LMC Pipeline Works", image: "/lmc-connectivity.jpg" },
    { id: "cng", title: "CNG Works", image: "/cng_works.jpg" },
    { id: "cgd", title: "CGD Works", image: "/cgd_works.jpg" },
    { id: "interior", title: "Interior Works", image: "/interior-works.jpg" },
    { id: "facade", title: "Façade Works", image: "/facade_works.jpg" },
    { id: "retrofit", title: "Retrofit / Renovation Works", image: "/civil-mechanical.jpg" },
    { id: "exterior", title: "Exterior Development", image: "/exterior_development.jpg" },
    { id: "welding", title: "Welding & Fabrication", image: "/welding-fabrication.jpg" },
    { id: "om", title: "Operation & Maintenance", image: "/operation_maintenance.jpg" },
    { id: "petroleum", title: "Petroleum Sector Works", image: "/petroleum_sector.jpg" },
    { id: "oil", title: "Oil & Gas Projects", image: "/pipeline-installation.jpg" },
    { id: "energy", title: "Energy Projects", image: "/energy_projects.jpg" },
    { id: "power", title: "Power Distribution", image: "/electrical-distribution-indian.jpg" },
    { id: "solar", title: "Solar Power Works", image: "/solar-energy.jpg" },
    { id: "automation", title: "Industrial Automation", image: "/industrial_automation.jpg" },
    { id: "transmission", title: "Generation & Transmission Support", image: "/transmission_support.jpg" }
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-red-500 tracking-wider uppercase mb-3"
          >
            Domains
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold mb-6"
          >
            Our Areas of Expertise
          </motion.h3>
          <p className="text-slate-400">
            Broad technical capabilities serving multi-disciplinary engineering domains with specialized execution teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate({ type: 'expertise', id: area.id })}
              className="group relative overflow-hidden rounded-xl border border-slate-700/50 min-h-[220px] flex items-end p-6 bg-slate-800 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-500 cursor-pointer"
            >
              {/* Background Image with Zoom */}
              <img 
                src={area.image} 
                alt={area.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Navy/Black Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 w-full">
                <h4 className="text-white font-bold text-xl leading-tight group-hover:text-red-400 transition-colors">
                  {area.title}
                </h4>
                {/* Red Animated Underline */}
                <div className="w-8 h-1 bg-red-600 mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="mt-2 text-red-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
