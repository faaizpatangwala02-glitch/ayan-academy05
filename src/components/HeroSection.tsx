import React, { useState, useEffect } from 'react';
import { ArrowRight, PhoneCall, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { HERO_SLIDES } from '../data/heroSlidesData';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onContactClick: () => void;
  onOpenEnquire?: (courseName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
  onContactClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Shared single timer keeping headline text and right-side hero photo perfectly synchronized
  useEffect(() => {
    // 4.8s still display + 0.8s smooth transition = 5.6s total cycle per headline/photo
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5600);

    return () => clearInterval(timer);
  }, []);

  // Preload all 4 hero photos upfront to ensure instant, smooth crossfades with zero flash
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.imageSrc;
    });
  }, []);

  return (
    <section id="home" className="relative pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Badge Pill */}
          <motion.div
            id="hero-badge"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-[#F4F7FC] px-4 py-1.5 rounded-full border border-[#082B6F]/15"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF7800]" />
            <span className="font-bold text-xs text-[#082B6F] uppercase tracking-wider">
              Ayan Academy • Lal Darwaja, Ahmedabad
            </span>
          </motion.div>

          {/* Main Animated Changing Headline */}
          <motion.h1
            id="hero-animated-heading"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="text-[23px] min-[360px]:text-[26px] min-[400px]:text-[29px] sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight leading-[1.14]"
          >
            <div className="relative">
              {/* Invisible layout anchor reserving exact fixed height and width - guarantees zero layout shift */}
              <div className="invisible select-none pointer-events-none" aria-hidden="true">
                <span className="block whitespace-nowrap">BUILD YOUR CAREER</span>
                <span className="block whitespace-nowrap">WITH AYAN ACADEMY</span>
              </div>

              {/* Animated Rotating Headline */}
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 18
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : -18
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="absolute top-0 left-0 w-full"
                >
                  <span className="block text-[#082B6F] whitespace-nowrap">
                    {HERO_SLIDES[currentIndex].line1}
                  </span>
                  <span className="block text-[#FF7800] whitespace-nowrap">
                    {HERO_SLIDES[currentIndex].line2}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.h1>

          {/* Short Professional Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
            className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed"
          >
            Master practical accounting and computer skills with expert guidance. Gain hands-on experience in Tally Prime, GST Return Filing, and Microsoft Excel—essential skills for today’s accounting and corporate industries. Learn through practical training, real-world applications, and expert guidance to build job-ready skills for a successful career.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            className="pt-2 flex flex-wrap gap-4 items-center"
          >
            <motion.button
              id="hero-explore-btn"
              onClick={onExploreCourses}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="bg-[#082B6F] hover:bg-[#062054] text-white px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer inline-flex items-center gap-2 group"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              id="hero-contact-btn"
              onClick={onContactClick}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-[#082B6F] border-2 border-[#082B6F] px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-[#F4F7FC] transition-colors duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#FF7800]" />
              <span>Contact Us</span>
            </motion.button>
          </motion.div>

          {/* Key Academy Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4, ease: 'easeOut' }}
            className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-semibold text-slate-700"
          >
            <div className="flex items-center gap-2.5 bg-[#F4F7FC] p-3.5 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0" />
              <span>100% Practical Hands-on Lab</span>
            </div>
            <div className="flex items-center gap-2.5 bg-[#F4F7FC] p-3.5 rounded-xl border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0" />
              <span>Individual Workstation Practice</span>
            </div>
          </motion.div>
        </div>

        {/* Right Hero Image Synchronized Slider */}
        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[540px] h-[360px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={slide.id}
                  id={`hero-slide-wrapper-${index + 1}`}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 w-full h-full will-change-[opacity]"
                  style={{
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <img
                    id={`hero-slide-image-${index + 1}`}
                    src={slide.imageSrc}
                    alt={slide.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: slide.objectPosition || 'center center',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
