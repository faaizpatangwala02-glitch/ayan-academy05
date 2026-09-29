import React from 'react';
import { Laptop, Users, Briefcase, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  onExploreCourses?: () => void;
  onOpenEnquire?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = () => {
  const benefits = [
    {
      id: 'benefit-practical-learning',
      title: 'Practical Learning',
      description: 'Hands-on practice on computer workstations with real business bills, accounting vouchers, and practical exercises.',
      icon: Laptop
    },
    {
      id: 'benefit-expert-guidance',
      title: 'Expert Guidance',
      description: 'Step-by-step guidance from experienced faculty covering fundamental concepts to advanced practical workflows.',
      icon: Users
    },
    {
      id: 'benefit-career-focused',
      title: 'Career-Focused Training',
      description: 'Job-ready skills in Tally Prime, GST compliance, and essential workplace computer tools to start your career.',
      icon: Briefcase
    },
    {
      id: 'benefit-affordable-courses',
      title: 'Affordable Courses',
      description: 'High-quality coaching with transparent and affordable fee structures suited for students and job seekers.',
      icon: CreditCard
    }
  ];

  return (
    <section id="why-us" className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
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
            Why Choose Ayan Academy?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Dedicated practical coaching designed to give you confidence in accounting and computer skills.
          </p>
        </motion.div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -5 }}
                className="bg-[#F4F7FC] p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-[#082B6F]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-start group"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#082B6F] flex items-center justify-center mb-5 group-hover:bg-[#082B6F] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#082B6F] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
