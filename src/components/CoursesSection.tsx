import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Receipt, 
  Monitor, 
  Clock, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  X,
  Info,
  Check
} from 'lucide-react';

interface CoursesSectionProps {
  onOpenEnquire?: (courseName?: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const getCourseIcon = (iconType: string) => {
    switch (iconType) {
      case 'accounting':
        return <Calculator className="w-6 h-6 text-[#082B6F]" />;
      case 'gst':
        return <Receipt className="w-6 h-6 text-[#082B6F]" />;
      case 'computer':
        return <Monitor className="w-6 h-6 text-[#082B6F]" />;
      default:
        return <Calculator className="w-6 h-6 text-[#082B6F]" />;
    }
  };

  return (
    <section id="courses" className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082B6F] tracking-tight mb-3 sm:mb-4">
            Our Courses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical accounting and computer courses designed to build job-ready skills.
          </p>
        </motion.div>

        {/* 3 Courses Grid (1 col mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {COURSES_DATA.map((course, idx) => (
            <motion.div
              key={course.id}
              id={`course-card-${course.id}`}
              onClick={() => setSelectedCourse(course)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-200 hover:border-[#FF7800]/60 shadow-xs hover:shadow-lg transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between h-full cursor-pointer group"
            >
              {/* Top and Middle Content */}
              <div className="flex flex-col flex-grow">
                {/* Icon & Duration Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F4F7FC] border border-slate-100 flex items-center justify-center group-hover:bg-[#EBF3FF] group-hover:scale-105 transition-all duration-300">
                    {getCourseIcon(course.iconType)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-[#EBF3FF] text-[#082B6F] text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#2563E8]" />
                    <span>Duration: {course.duration}</span>
                  </span>
                </div>

                {/* Course Name - Consistent Height Container for 1 or 2 lines */}
                <div className="min-h-[56px] sm:min-h-[60px] flex items-start">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#082B6F] leading-snug group-hover:text-[#082B6F] transition-colors">
                    {course.name}
                  </h3>
                </div>

                {/* Short Course Highlight */}
                <div className="mt-2.5 mb-3.5">
                  <p className="text-xs sm:text-[13px] font-semibold text-[#082B6F] tracking-tight">
                    {course.highlight}
                  </p>
                </div>

                {/* Benefit Points */}
                <div className="space-y-2 mb-4">
                  {course.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#FF7800] shrink-0 stroke-[2.5]" />
                      <span className="font-normal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button - Anchored at the bottom */}
              <div className="pt-4 mt-auto">
                <button
                  type="button"
                  id={`view-details-${course.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCourse(course);
                  }}
                  className="w-full bg-white group-hover:bg-[#082B6F] text-[#082B6F] group-hover:text-white border border-[#082B6F] font-semibold py-2.5 px-4 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>View Course Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dedicated Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-6 sm:p-8 my-8 shadow-2xl relative border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close Course Details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Header Icon + Course Name */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FF] border border-[#2563E8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    {getCourseIcon(selectedCourse.iconType)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2563E8] uppercase tracking-wider mb-1">
                      Course Information
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#082B6F] leading-snug">
                      {selectedCourse.name}
                    </h3>
                  </div>
                </div>

                {/* Key Details Card */}
                <div className="bg-[#F4F7FC] p-4 sm:p-5 rounded-xl border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                      <Clock className="w-4 h-4 text-[#082B6F]" />
                      <span>Course Duration</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#082B6F]">
                      {selectedCourse.duration}
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-[#EBF3FF] text-[#082B6F] px-3 py-1.5 rounded-full">
                    Practical Training
                  </span>
                </div>

                {/* Helper Notice */}
                <div className="flex items-start gap-2.5 text-xs text-slate-600 bg-amber-50/70 border border-amber-200/70 rounded-xl p-3.5">
                  <Info className="w-4 h-4 text-[#FF7800] shrink-0 mt-0.5" />
                  <p>
                    Contact Ayan Academy for batch timings, admission and more course information.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  {/* Primary Button: Contact Now */}
                  <a
                    href="tel:+919825893639"
                    className="w-full bg-[#FF7800] hover:bg-[#e06900] text-white font-semibold py-3 px-5 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs hover:shadow-md text-center"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contact Now (+91 98258 93639)</span>
                  </a>

                  {/* Secondary Button: WhatsApp Us */}
                  <a
                    href={`https://wa.me/919825893639?text=${encodeURIComponent(
                      `Hello Ayan Academy, I would like to get more information and admission details for ${selectedCourse.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white hover:bg-slate-50 text-[#082B6F] hover:text-[#082B6F] border-2 border-[#082B6F] font-semibold py-3 px-5 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-[#2563E8]" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
