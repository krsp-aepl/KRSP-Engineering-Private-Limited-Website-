import { motion } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';

export function Projects() {
  const { navigate } = useNavigation();

  const projects = [
    { id: "pipeline", title: "Pipeline Installation & Maintenance", image: "/pipeline-installation.jpg" },
    { id: "cng-cgd", title: "CNG / CGD Infrastructure Works", image: "/cng-cgd-infrastructure-indian.jpg" },
    { id: "electrical", title: "Electrical & Power Distribution Works", image: "/electrical-distribution-indian.jpg" },
    { id: "civil-mechanical", title: "Civil & Mechanical Construction", image: "/civil-mechanical.jpg" },
    { id: "solar", title: "Solar & Energy Projects", image: "/solar-energy.jpg" },
    { id: "interior-exterior", title: "Interior, Exterior & Façade Works", image: "/interior-works.jpg" },
    { id: "welding", title: "Welding & Fabrication Works", image: "/welding-fabrication.jpg" },
    { id: "automation", title: "Industrial Automation Support", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-red-600 tracking-wider uppercase mb-3"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6"
          >
            Project Experience & Work Areas
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
             <motion.div
               key={project.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               whileHover={{ y: -5 }}
               whileTap={{ scale: 0.98 }}
               onClick={() => navigate({ type: 'project', id: project.id })}
               className="group relative h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-transparent hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all"
             >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h4 className="text-white font-bold text-lg leading-tight group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="w-8 h-1 bg-red-500 mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="mt-2 text-red-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
