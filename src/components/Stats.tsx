import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

// Simple counter component
function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
           setCount(Math.min(Math.floor(end * progress), end));
           requestAnimationFrame(animateCount);
        } else {
           setCount(end);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: 15, suffix: "+", label: "Engineering Service Areas" },
    { value: 10, suffix: "+", label: "Major Industrial Sectors" },
    { value: 360, suffix: "°", label: "Project Support" },
    { value: 100, suffix: "%", label: "Quality & Safety Focus" }
  ];

  return (
    <section className="py-20 bg-red-600 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-red-500/30">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-red-100 font-medium text-sm md:text-base uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
