import { motion } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Home, Info, Briefcase, Factory, FolderCheck, ShieldCheck } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { KrspLogo } from './KrspLogo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const { navigateAndScroll } = useNavigation();

  const handleNavClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveLink(link);
    navigateAndScroll(link.toLowerCase().replace(/ /g, '-'));
  };

  const menuItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: Info },
    { name: 'Services', icon: Briefcase },
    { name: 'Sectors', icon: Factory },
    { name: 'Projects', icon: FolderCheck },
    { name: 'Why Choose Us', icon: ShieldCheck },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0f172a] text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm font-medium tracking-wide">
            <div className="flex items-center space-x-8">
              <span className="flex items-center gap-2 hover:text-red-400 transition-colors cursor-pointer"><Phone className="w-4 h-4 text-red-500" /> 9234058001</span>
              <span className="flex items-center gap-2 hover:text-red-400 transition-colors cursor-pointer"><Mail className="w-4 h-4 text-red-500" /> pro.krspengg@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-red-500" /> Near Radha Soami Arcade, Saraidhela, Dhanbad, Jharkhand – 828127
            </div>
          </div>
        </div>
      </div>
      
      <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          <div className="flex-shrink-0 flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={(e) => handleNavClick('Home', e as any)}
            >
              <div className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105">
                <KrspLogo />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors duration-300">
                  KRSP Engineering
                </span>
                <span className="text-xs lg:text-sm font-medium text-slate-600 tracking-widest uppercase mt-1 leading-none">
                  Private Limited
                </span>
              </div>
            </motion.div>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-1.5 items-center">
            {menuItems.map((item, i) => {
              const Icon = item.icon;
              const isActive = activeLink === item.name;
              return (
              <motion.button
                key={item.name}
                onClick={(e) => handleNavClick(item.name, e as any)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center justify-center gap-1.5 px-4 h-10 text-[13px] font-bold rounded-full border transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive 
                  ? 'bg-red-600 text-white shadow-[0_4px_15px_rgba(220,38,38,0.3)] border-red-500' 
                  : 'bg-white text-slate-800 border-slate-200 shadow-sm hover:border-red-300 hover:text-red-600 hover:bg-red-50 hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(220,38,38,0.15)]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-red-500'}`} />
                {item.name}
              </motion.button>
            )})}
          </nav>

          <div className="hidden xl:flex items-center ml-3 pl-3 border-l border-slate-200">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavClick('Contact', e as any)}
              className="flex items-center justify-center gap-2 px-5 h-10 bg-red-600 text-white text-[13px] font-bold rounded-full border border-red-500 shadow-[0_4px_15px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Get In Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-red-600 focus:outline-none p-2 bg-slate-100 rounded-md"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="xl:hidden bg-white border-b border-slate-200 shadow-xl"
        >
          <div className="px-4 py-6 space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeLink === item.name;
              return (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(item.name, e as any)}
                className={`flex items-center gap-3 w-full text-left px-5 h-14 rounded-full text-lg font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive ? 'bg-red-50 text-red-600 border border-red-200' : 'text-slate-700 bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-red-200 hover:text-red-500'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-red-500' : 'text-slate-400 group-hover:text-red-500'}`} />
                {item.name}
              </button>
            )})}
            <button
              onClick={(e) => handleNavClick('Contact', e as any)}
              className="flex items-center justify-center gap-2 w-full mt-6 px-6 h-14 bg-red-600 text-white text-lg font-bold rounded-full border border-red-500 shadow-[0_4px_15px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] transition-all cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              Get In Touch
            </button>
          </div>
        </motion.div>
      )}
    </header>
    </>
  );
}
