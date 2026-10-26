import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Activity, Settings, Maximize, Phone } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { KrspLogo } from './KrspLogo';

export function Hero() {
  const { navigateAndScroll } = useNavigation();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0a1128] border-b border-slate-800">
      {/* Animated Flow Graphics Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        {/* Pipeline & Particles */}
        <motion.div 
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:32px_32px]"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border-[1.5px] border-dashed border-slate-500 rounded-full flex items-center justify-center"
          >
            <div className="w-[600px] h-[600px] border border-slate-600 rounded-full border-t-red-500" />
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md mb-8 shadow-lg shadow-black/20"
            >
              <KrspLogo className="h-5 w-5" />
              <div className="w-px h-4 bg-slate-600"></div>
              <span className="text-base font-semibold tracking-wide text-slate-200 uppercase">Trusted EPC Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Engineering <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Excellence</span> <br/>
              Across Power, EPC & Oil & Gas Sectors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl font-medium"
            >
              <span className="text-red-400 font-bold">KRSP Engineering Private Limited</span> delivers reliable engineering, procurement, construction, consultancy, and project execution with a commitment to quality, safety, and timely delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            >
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => navigateAndScroll('services')} className="cursor-pointer px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded-xl shadow-[0_8px_20px_rgba(220,38,38,0.3)] hover:shadow-[0_8px_25px_rgba(220,38,38,0.4)] transition-all flex items-center gap-3 group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => navigateAndScroll('contact')} className="cursor-pointer px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-xl font-bold rounded-xl border border-white/20 hover:border-white/40 transition-all flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-300" />
                Contact Us
              </motion.button>
            </motion.div>
          </div>

          <div className="relative h-[450px] lg:h-[650px] w-full mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute inset-0 grid grid-cols-[1.5fr_1fr] grid-rows-2 gap-4 lg:gap-6 lg:p-2"
            >
              <div className="relative rounded-2xl overflow-hidden group col-span-1 row-span-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] border border-slate-700/60 bg-slate-800">
                 <div className="absolute inset-0 bg-[url('/sp_home.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="w-12 h-1.5 bg-red-600 mb-4 shadow-[0_0_15px_rgba(239,68,68,0.8)] rounded-full" />
                    <h3 className="text-white font-extrabold text-3xl tracking-tight leading-none mb-2">Solar & Power</h3>
                    <p className="text-slate-300 font-medium text-sm lg:text-base opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">Renewable energy and distribution solutions</p>
                 </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden group shadow-[0_15px_30px_-12px_rgba(0,0,0,0.8)] border border-slate-700/60 bg-slate-800">
                 <div className="absolute inset-0 bg-[url('/iep_home.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-10 h-1.5 bg-red-600 mb-3 shadow-[0_0_15px_rgba(239,68,68,0.8)] rounded-full" />
                    <h3 className="text-white font-bold text-2xl tracking-tight leading-none">Industrial EPC</h3>
                 </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden group shadow-[0_15px_30px_-12px_rgba(0,0,0,0.8)] border border-slate-700/60 bg-slate-800">
                 <div className="absolute inset-0 bg-[url('/og_home.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-10 h-1.5 bg-red-600 mb-3 shadow-[0_0_15px_rgba(239,68,68,0.8)] rounded-full" />
                    <h3 className="text-white font-bold text-2xl tracking-tight leading-none">Oil & Gas / CGD</h3>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
