import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export function Services() {
  const { navigate } = useNavigation();

  const services = [
    {
      id: "epc-services",
      title: "EPC Services",
      image: "/epc_services.jpg",
      description: "Complete Engineering, Procurement and Construction solutions for infrastructure, energy and industrial projects.",
    },
    {
      id: "engineering-enterprise",
      title: "Engineering Services Enterprise",
      image: "/engineering_enterprise.jpg",
      description: "Technical engineering support, design coordination, project planning, documentation and execution assistance.",
    },
    {
      id: "dealership-supply",
      title: "Dealership & Supply",
      image: "/dealership_supply.jpg",
      description: "Supply of engineering materials, industrial products, project components, fittings, equipment and technical items.",
    },
    {
      id: "engineering-design",
      title: "Engineering Design",
      image: "/engineering_design.jpg",
      description: "Project design, layout planning, technical drawings, BOQ support, site planning and design coordination.",
    },
    {
      id: "procurement",
      title: "Procurement Services",
      image: "/procurement_services.jpg",
      description: "Vendor coordination, material sourcing, technical specification review and procurement support.",
    },
    {
      id: "construction-works",
      title: "Construction Works",
      image: "/construction_works.jpg",
      description: "Civil, mechanical, electrical and industrial construction execution with site-based project management.",
    },
    {
      id: "engineering-consultancy",
      title: "Engineering Consultancy",
      image: "/engineering_consultancy.jpg",
      description: "Technical consultancy for project planning, execution strategy, compliance, documentation and quality control.",
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-red-500 tracking-wider uppercase mb-3"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white mb-6"
          >
            Our Core Engineering Services
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              onClick={() => navigate({ type: 'service', id: service.id })}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px] flex flex-col justify-end shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.2)] hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-red-500/30"
            >
              {/* Background Image with animated slow zoom on hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out group-hover:scale-110" 
                style={{ backgroundImage: `url(${service.image})` }} 
              />
              
              {/* Overlays for readability and style */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Light Sweep effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white w-full h-full -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Content Box */}
              <div className="relative z-10 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {/* Red Glow Accent on top border conceptually */}
                <div className="w-10 h-1 bg-red-600 mb-6 shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-500 group-hover:w-20" />
                
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-slate-300 line-clamp-3 mb-6 transition-colors duration-300 group-hover:text-slate-200">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
