import { motion } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';
import { KrspLogo } from './KrspLogo';

export function Footer() {
  const { navigateAndScroll } = useNavigation();
  const links = ['Home', 'About', 'Services', 'Sectors', 'Projects', 'Contact'];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t-[4px] border-red-600 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="lg:col-span-2">
               <div className="flex items-center gap-4 mb-4 cursor-pointer group" onClick={() => navigateAndScroll('home')}>
                 <div className="h-20 lg:h-28 w-auto">
                   <KrspLogo />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-none group-hover:text-red-500 transition-colors">
                     KRSP Engineering
                   </span>
                   <span className="text-sm lg:text-base font-medium text-slate-400 tracking-wider uppercase mt-2 leading-none">
                     Private Limited
                   </span>
                 </div>
               </div>
               <p className="text-red-500 font-medium text-sm tracking-widest uppercase mb-6">
                 Engineering | Procurement | Construction | Consultancy | Maintenance
               </p>
               <p className="text-slate-400 max-w-sm">
                 Delivering robust execution strategies and highly precise engineering solutions for complex infrastructure and industrial challenges.
               </p>
            </div>

            <div>
              <h5 className="font-semibold text-white text-lg mb-4">Quick Links</h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => navigateAndScroll(link.toLowerCase().replace(/ /g, '-'))} 
                      className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
               <h5 className="font-semibold text-white text-lg mb-4">Contact Info</h5>
               <ul className="space-y-3 text-slate-400">
                  <li>
                    <a href="tel:9234058001" className="hover:text-red-500 transition-colors">9234058001</a>
                  </li>
                  <li>
                    <a href="mailto:pro.krspengg@gmail.com" className="hover:text-red-500 transition-colors">pro.krspengg@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://maps.google.com/?q=krsp+engineering+dhanbad" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                      Near Radha Soami Arcade, Saraidhela, Dhanbad, Jharkhand – 828127
                    </a>
                  </li>
               </ul>
            </div>

         </div>
         
         <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-slate-500 text-sm">
             © {new Date().getFullYear()} <span className="text-red-500 font-semibold">KRSP Engineering Private Limited</span>. All rights reserved.
           </div>
           <div className="flex space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
         </div>
      </div>
    </footer>
  );
}
