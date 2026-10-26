import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone, LayoutGrid, Settings, FileText, MoveRight, HardHat, TrendingUp } from 'lucide-react';
import { detailData } from '../data/details';
import { ViewState, useNavigation } from '../context/NavigationContext';
import { KrspLogo } from './KrspLogo';

interface DeepDetailProps {
  view: Extract<ViewState, { id: string }>;
}

export function DeepDetail({ view }: DeepDetailProps) {
  const { navigateAndScroll } = useNavigation();
  const category = view.type;
  const data = detailData[category]?.[view.id];

  if (!data) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Details not found</h2>
        <button onClick={() => navigateAndScroll(category === 'sector' ? 'sectors' : category === 'service' ? 'services' : category === 'project' ? 'projects' : 'expertise')} className="mt-4 text-red-600 underline">Go Back</button>
      </div>
    );
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1) + 's';
  const sectionId = category === 'sector' ? 'sectors' : category === 'service' ? 'services' : category === 'project' ? 'projects' : 'expertise';

  // Specific themes to render different pages dynamically
  const isBlueprintTheme = data.layoutTheme === 'blueprint';
  const isSplitTheme = data.layoutTheme === 'split';
  const isTimelineTheme = data.layoutTheme === 'timeline';
  const isGridTheme = data.layoutTheme === 'grid';
  const isBeforeAfter = data.layoutTheme === 'before-after';
  const isDashboard = data.layoutTheme === 'dashboard';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className={`min-h-screen ${isBlueprintTheme ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}
    >
      {/* Hero Banner with animated effects */}
      <div className={`relative h-[450px] lg:h-[550px] w-full overflow-hidden border-b-4 border-red-600 group`}>
        <motion.div
           className="absolute inset-0 w-full h-full"
           initial={{ scale: 1.05 }}
           animate={{ scale: 1.15 }}
           transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <img 
            src={data.image} 
            alt={data.title}
            className={`w-full h-full object-cover max-h-[550px] ${isBlueprintTheme ? 'opacity-40 mix-blend-screen' : 'opacity-60 mix-blend-multiply'}`}
          />
        </motion.div>
        
        {/* Dynamic Dark / Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-t ${isBlueprintTheme ? 'from-slate-950 via-slate-950/80 to-slate-900/40' : 'from-slate-900 via-slate-900/80 to-transparent'}`} />
        <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply" />
        
        {/* Animated Light Sweep Effect */}
        <motion.div 
           initial={{ x: '-100%', opacity: 0 }}
           animate={{ x: '200%', opacity: 0.15 }}
           transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
           className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/2 h-full -skew-x-12"
        />

        {/* Floating Technical Grid Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" 
        />
        
        <div className="absolute bottom-0 w-full pb-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="flex flex-wrap items-center text-red-500 text-sm font-bold tracking-widest uppercase mb-6 gap-3"
            >
              <KrspLogo className="h-6 w-6" />
              <button onClick={() => navigateAndScroll('home')} className="hover:text-white transition-colors cursor-pointer text-slate-400">
                Home
              </button>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <button onClick={() => navigateAndScroll(sectionId)} className="hover:text-white transition-colors cursor-pointer text-slate-400">
                {categoryName}
              </button>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-white bg-red-600/20 shadow-[0_0_15px_rgba(220,38,38,0.3)] border border-red-500/30 px-3 py-1 rounded-full whitespace-nowrap">{data.title}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight"
            >
              {data.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-red-600 mb-6 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl lg:text-2xl text-slate-300 max-w-3xl font-medium"
            >
              {data.intro}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>{data.wording?.approach || 'Overview'}</h2>
              <p className={`text-lg leading-relaxed ${isBlueprintTheme ? 'text-slate-400' : 'text-slate-600'}`}>
                {data.description}
              </p>
            </motion.section>

            {/* Split layout Specific */}
            {isSplitTheme && (
               <motion.section 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
               >
                 <div className="w-full md:w-1/3">
                    <img src={data.image} alt="detail" className="w-full h-full object-cover rounded-xl" />
                 </div>
                 <div className="w-full md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <Settings className="text-red-500" /> Value Driven Execution
                    </h3>
                    <p className="text-slate-600">We align our technical resources and expertise directly with project demands, minimizing delays and maximizing structural/operational integrity throughout the lifecycle.</p>
                 </div>
               </motion.section>
            )}

            {/* Timeline Theme Specific */}
            {isTimelineTheme && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className={`text-2xl font-bold mb-8 ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>Execution Phasing</h3>
                <div className="border-l-2 border-red-500 ml-4 space-y-8 pl-8 relative">
                   <div className="absolute w-4 h-4 rounded-full bg-red-600 -left-[9px] top-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                   <div className="absolute w-4 h-4 rounded-full bg-red-600 -left-[9px] top-1/2 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                   <div className="absolute w-4 h-4 rounded-full bg-red-600 -left-[9px] bottom-0 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                   
                   <div>
                      <h4 className={`font-bold text-xl mb-2 ${isBlueprintTheme ? 'text-white' : 'text-slate-800'}`}>1. Pre-Execution Planning</h4>
                      <p className={`${isBlueprintTheme ? 'text-slate-400' : 'text-slate-600'}`}>Site auditing, requirement structuring, and design coordination.</p>
                   </div>
                   <div>
                      <h4 className={`font-bold text-xl mb-2 ${isBlueprintTheme ? 'text-white' : 'text-slate-800'}`}>2. Core Implementation</h4>
                      <p className={`${isBlueprintTheme ? 'text-slate-400' : 'text-slate-600'}`}>Strict adherence to HSE norms while executing civil/mechanical works.</p>
                   </div>
                   <div>
                      <h4 className={`font-bold text-xl mb-2 ${isBlueprintTheme ? 'text-white' : 'text-slate-800'}`}>3. Handover & Post-Care</h4>
                      <p className={`${isBlueprintTheme ? 'text-slate-400' : 'text-slate-600'}`}>Quality validation, documentation, and continuous maintenance availability.</p>
                   </div>
                </div>
              </motion.section>
            )}

            {/* Grid Layout Theme */}
            {isGridTheme && (
               <motion.section
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
               >
                  <div className="bg-slate-900 rounded-2xl overflow-hidden h-64 sm:h-80 relative group shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-red-500/50">
                    <img 
                      src={data.gridImages?.[0] || "/facade_inspection.jpg"} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110" 
                      alt="Grid visual 1" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="bg-slate-900 rounded-2xl overflow-hidden h-64 sm:h-80 relative group shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-red-500/50">
                     <img 
                       src={data.gridImages?.[1] || "/office_blueprint_planning.jpg"} 
                       className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110" 
                       alt="Grid visual 2"
                     />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-50 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
               </motion.section>
            )}

            {/* Before After Theme */}
            {isBeforeAfter && (
               <motion.section
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col sm:flex-row gap-6"
               >
                  <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-bl-lg z-10">Current</div>
                     <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop" className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform" />
                     <h4 className="font-bold text-slate-800">Legacy Architecture</h4>
                  </div>
                  <div className="flex items-center justify-center p-2 text-slate-400">
                     <MoveRight className="w-8 h-8" />
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-sm font-bold rounded-bl-lg z-10">Target</div>
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" className="w-full h-40 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform" />
                     <h4 className="font-bold text-slate-800">Modern Aesthetic & Integrity</h4>
                  </div>
               </motion.section>
            )}

            {/* Scope / Deliverables */}
            <motion.section 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>
                <span className="w-8 h-1 bg-red-600 inline-block rounded shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                Key Scope Parameters
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.scope.map((item: string, index: number) => (
                  <div key={index} className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                    isBlueprintTheme 
                      ? 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.2)]' 
                      : 'bg-white border-slate-200 hover:border-red-300 hover:shadow-lg'
                  }`}>
                    <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                    </div>
                    <span className={`font-semibold ${isBlueprintTheme ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>
            
            {/* Dashboard format additions */}
            {isDashboard && (
               <motion.section
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="grid grid-cols-2 md:grid-cols-3 gap-6"
               >
                  <div className={`p-6 rounded-2xl border ${isBlueprintTheme ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'} flex flex-col items-center justify-center text-center`}>
                    <HardHat className="w-8 h-8 text-red-500 mb-3" />
                    <div className={`text-2xl font-black ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>100%</div>
                    <div className="text-sm text-slate-500 font-medium">Safety Met</div>
                  </div>
                  <div className={`p-6 rounded-2xl border ${isBlueprintTheme ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'} flex flex-col items-center justify-center text-center`}>
                    <TrendingUp className="w-8 h-8 text-red-500 mb-3" />
                    <div className={`text-2xl font-black ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>A+</div>
                    <div className="text-sm text-slate-500 font-medium">Execution Quality</div>
                  </div>
                  <div className={`p-6 rounded-2xl border ${isBlueprintTheme ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'} flex flex-col items-center justify-center text-center col-span-2 md:col-span-1`}>
                    <LayoutGrid className="w-8 h-8 text-red-500 mb-3" />
                    <div className={`text-2xl font-black ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>Turnkey</div>
                    <div className="text-sm text-slate-500 font-medium">Delivery Mode</div>
                  </div>
               </motion.section>
            )}

            {/* Benefits */}
            <motion.section
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>
                <span className="w-8 h-1 bg-red-600 inline-block rounded shadow-[0_0_10px_rgba(220,38,38,0.5)]"></span>
                Value Addition
              </h3>
              <ul className="space-y-4">
                {data.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className={`flex items-center gap-3 ${isBlueprintTheme ? 'text-slate-300' : 'text-slate-600'} text-lg`}>
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>
          
          {/* Sidebar Area */}
          <div className={`lg:col-span-1 border-l-0 lg:border-l ${isBlueprintTheme ? 'border-slate-800' : 'border-slate-200'} lg:pl-12 space-y-8`}>
            
            {/* CTA Box */}
            <motion.div 
               whileHover={{ y: -5 }}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="bg-[#0f172a] rounded-2xl p-8 text-white relative overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] group hover:shadow-[0_20px_50px_-10px_rgba(220,38,38,0.2)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent group-hover:from-red-600/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:border-red-500/50 group-hover:bg-red-600/20 transition-all duration-300">
                   <Phone className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-bold mb-3">Discuss Your Requirement</h4>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">Reach out to our technical team to plan the right execution strategy for your project.</p>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateAndScroll('contact')}
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all shadow-[0_8px_20px_rgba(220,38,38,0.2)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.4)] cursor-pointer"
                >
                  Contact Us Now
                </motion.button>
              </div>
            </motion.div>

            {/* Info Box */}
            <div className={`p-6 rounded-2xl ${isBlueprintTheme ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
               <FileText className="w-8 h-8 text-slate-400 mb-4" />
               <h5 className={`font-bold mb-2 ${isBlueprintTheme ? 'text-white' : 'text-slate-900'}`}>Technical Documentation</h5>
               <p className={isBlueprintTheme ? 'text-slate-400 text-sm' : 'text-slate-600 text-sm'}>
                 All project phases are executed with rigorous compliance reporting, technical drawing availability, and phase-wise quality clearance gating.
               </p>
            </div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => navigateAndScroll(sectionId)} 
                className={`group flex items-center gap-3 font-semibold transition-colors mt-8 cursor-pointer ${isBlueprintTheme ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
                  isBlueprintTheme 
                    ? 'border-slate-700 group-hover:bg-slate-800' 
                    : 'border-slate-200 group-hover:bg-slate-100'
                }`}>
                  <ArrowLeft className={`w-5 h-5 ${isBlueprintTheme ? 'group-hover:text-red-500' : ''}`} />
                </div>
                Back to {categoryName}
              </motion.button>
            </motion.div>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
