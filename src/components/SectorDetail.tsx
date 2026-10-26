import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone } from 'lucide-react';

interface SectorDetailProps {
  sectorId: string;
  onBack: () => void;
}

const sectorData: Record<string, any> = {
  "petroleum-oil": {
    title: "Petroleum & Oil Sector",
    image: "https://images.unsplash.com/photo-1605335043537-8fecaf173d10?q=80&w=2070&auto=format&fit=crop",
    intro: "Comprehensive engineering and construction solutions for petroleum and oil infrastructure.",
    description: "KRSP Engineering Private Limited provides specialized engineering, construction, maintenance, retrofit and project support services for petroleum and oil sector infrastructure. We bring rigorous technical standards and precise execution capabilities to highly demanding operational environments.",
    scope: [
      "Terminal Works",
      "Pipeline Support",
      "Mechanical Works",
      "Civil Works Setup",
      "Fabrication & Erection",
      "Electrical Support",
      "Site Execution Assistance"
    ],
    benefits: ["Strict safety compliance", "Optimized execution schedules", "Robust infrastructure quality"]
  },
  "gas-pipeline": {
    title: "Gas Pipeline & CGD Sector",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    intro: "Expert execution of City Gas Distribution and high-pressure pipeline networks.",
    description: "KRSP Engineering supports City Gas Distribution and gas pipeline related projects including pipeline laying support, installation coordination, testing assistance, maintenance, welding, fabrication, civil support and project documentation.",
    scope: [
      "Pipeline Laying Support",
      "Installation Coordination",
      "Testing Assistance",
      "Maintenance & Repair",
      "Welding & Fabrication",
      "Civil Support",
      "Project Documentation"
    ],
    benefits: ["Leak-proof engineering", "Seamless city distribution", "Long-term reliability"]
  },
  "cng-infrastructure": {
    title: "CNG Infrastructure",
    image: "https://images.unsplash.com/photo-1533282960533-51328aa2660a?q=80&w=2070&auto=format&fit=crop",
    intro: "Turnkey support and structural execution for modern CNG stations and infrastructure.",
    description: "KRSP Engineering delivers comprehensive support for CNG infrastructure projects, coordinating all essential engineering phases from station development to mechanical installation.",
    scope: [
      "Station Development",
      "Pipeline Connection Support",
      "Mechanical Installation",
      "Electrical Support",
      "Equipment Foundation",
      "Safety Coordination",
      "Maintenance Services"
    ],
    benefits: ["Rapid deployment", "Scalable station designs", "Adherence to safety codes"]
  },
  "power-electrical": {
    title: "Power & Electrical Distribution",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    intro: "Robust electrical engineering and high-voltage power distribution setups.",
    description: "KRSP Engineering provides electrical distribution and power infrastructure services to ensure consistent, safe, and efficient power management across industrial and commercial facilities.",
    scope: [
      "Panel Installation",
      "Cable Laying",
      "Earthing Solutions",
      "Lighting Works",
      "Electrical Maintenance",
      "Distribution Support",
      "Power System Execution"
    ],
    benefits: ["Energy efficient systems", "Minimal power loss", "Fault-tolerant designs"]
  },
  "solar-renewable": {
    title: "Solar & Renewable Energy",
    image: "https://images.unsplash.com/photo-1509391366348-26159623e164?q=80&w=2070&auto=format&fit=crop",
    intro: "Executing sustainable power initiatives with high-efficiency solar installations.",
    description: "KRSP Engineering supports solar and renewable energy projects by providing the physical and technical foundation required for successful solar power generation.",
    scope: [
      "Solar Power Installation Support",
      "Mounting Structure Works",
      "Cabling & Integration",
      "Electrical Connection",
      "Site Execution",
      "Maintenance",
      "Project Coordination"
    ],
    benefits: ["Maximized yield", "Durable structures", "Green energy optimization"]
  },
  "industrial-automation": {
    title: "Industrial Automation",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
    intro: "Modernizing operational facilities with advanced automation and control panels.",
    description: "KRSP Engineering provides industrial automation support to streamline operations, enhance precision, and reduce manual intervention in complex industrial processes.",
    scope: [
      "Control Panels Assembly",
      "PLC Coordination",
      "Instrumentation Support",
      "System Integration Assistance",
      "Maintenance",
      "Control Room Support"
    ],
    benefits: ["Increased precision", "Reduced downtime", "Seamless process control"]
  },
  "civil-infrastructure": {
    title: "Civil & Infrastructure",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
    intro: "Laying strong foundations for large-scale industrial and commercial builds.",
    description: "KRSP Engineering executes varied civil and infrastructure works, delivering structures engineered for durability and exact operational alignment.",
    scope: [
      "Building Works",
      "Foundation Laying",
      "Structural Support",
      "Road & Flooring",
      "Site Development",
      "RCC Work",
      "Repair & Renovation"
    ],
    benefits: ["Structural integrity", "Weather resilience", "Long-lasting construction"]
  },
  "interior-exterior": {
    title: "Interior, Exterior & Façade",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    intro: "Premium architectural finishes and robust exterior improvements.",
    description: "KRSP Engineering provides interior, exterior, and façade development services, transforming ordinary spaces into highly functional, aesthetically professional environments.",
    scope: [
      "Commercial Interior Works",
      "Office Setup",
      "Façade Improvement",
      "Exterior Finishing",
      "Renovation",
      "Design Coordination",
      "Execution"
    ],
    benefits: ["Modern aesthetics", "Branded environments", "Durable exterior defenses"]
  },
  "maintenance-retrofit": {
    title: "Maintenance & Retrofit Projects",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    intro: "Ensuring longevity and upgrading legacy systems for modern demands.",
    description: "KRSP Engineering provides operation, maintenance, retrofit, and renovation services to keep industrial, commercial, and infrastructure projects running at peak performance.",
    scope: [
      "Repair Works",
      "Replacement Support",
      "System Upgrades",
      "Preventive Maintenance",
      "Site-based Technical Support",
      "Operational Audits"
    ],
    benefits: ["Extended asset lifecycle", "Cost-effective upgrades", "Minimized operational disruptions"]
  }
};

export function SectorDetail({ sectorId, onBack }: SectorDetailProps) {
  const data = sectorData[sectorId];

  // If somehow invalid, fallback to return
  if (!data) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Sector not found</h2>
        <button onClick={onBack} className="mt-4 text-red-600 underline">Go Back</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white min-h-screen"
    >
      {/* Hero Banner */}
      <div className="relative h-[400px] lg:h-[500px] w-full bg-slate-900 border-b-4 border-red-600">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="absolute bottom-0 w-full pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-red-400 text-sm font-bold tracking-widest uppercase mb-4 space-x-2">
              <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer text-slate-300">
                Home
              </button>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <button onClick={onBack} className="hover:text-white transition-colors cursor-pointer text-slate-300">
                Sectors
              </button>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-red-500">{data.title}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
              {data.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl font-medium">
              {data.intro}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sector Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.description}
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 inline-block rounded"></span>
                Scope of Work & Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.scope.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-red-200 hover:shadow-sm transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 inline-block rounded"></span>
                Key Capabilities
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-slate-600 text-lg">
                {data.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="pl-2">{benefit}</li>
                ))}
              </ul>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 border-l-0 lg:border-l border-slate-200 lg:pl-12 space-y-8">
            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
              <div className="absolute inset-0 bg-red-600/10" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Start Your Project</h4>
                <p className="text-slate-400 mb-8">Discuss your specific engineering and construction requirements with our experts.</p>
                <a 
                  href="#contact" 
                  onClick={() => {
                    onBack();
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us for this Service
                </a>
              </div>
            </div>

            <div>
              <button 
                onClick={onBack} 
                className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold transition-colors mt-8"
              >
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                Back to Major Sectors
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
