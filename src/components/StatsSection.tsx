import React, { useEffect, useState, useRef } from 'react';
import { Users, Award, Star, Briefcase } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ target, suffix = '', duration = 1.6 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 'stat-students',
      type: 'counter',
      target: 500,
      suffix: '+',
      label: 'STUDENTS TRAINED',
      icon: Users
    },
    {
      id: 'stat-experience',
      type: 'counter',
      target: 5,
      suffix: '+',
      label: 'YEARS OF EXPERIENCE',
      icon: Award
    },
    {
      id: 'stat-rating',
      type: 'rating',
      value: '5★',
      label: 'GOOGLE RATING',
      icon: Star
    },
    {
      id: 'stat-placements',
      type: 'counter',
      target: 100,
      suffix: '%*',
      label: 'PLACEMENT ASSISTANCE',
      icon: Briefcase
    }
  ];

  return (
    <section id="stats" className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-[#F4F7FC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#082B6F]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-center group"
              >
                {/* Blue Line Icon Container */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F4F7FC] border border-slate-200/90 text-[#082B6F] flex items-center justify-center mb-3 group-hover:bg-[#082B6F] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                </div>

                {/* Number with Animation */}
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B6F] tracking-tight mb-1 leading-none">
                  {item.type === 'counter' && item.target !== undefined ? (
                    <CountUp target={item.target} suffix={item.suffix} />
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                      className="inline-block"
                    >
                      {item.value}
                    </motion.span>
                  )}
                </div>

                {/* Dark Gray Label */}
                <p className="text-[11px] sm:text-xs font-bold text-slate-600 tracking-wider uppercase mt-1">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
