import React from 'react';
import { Building2, CheckCircle2, MapPin, Clock, Laptop, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ACADEMY_BUSINESS_DETAILS } from '../data/testimonialsData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#082B6F] uppercase tracking-wider bg-[#F4F7FC] border border-[#082B6F]/15 px-3.5 py-1.5 rounded-full">
              <Building2 className="w-4 h-4 text-[#082B6F]" />
              <span>Institute Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#082B6F] tracking-tight leading-tight">
              About Ayan Academy
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {"Ayan Academy is an Accounting Training & Placement Institute Located in Lal Darwaja, Ahmedabad. Our Methodology is simple 'Real Business with Practical Knowledge. We focus on providing hands - on practical education that prepares students for real workplace demands."}
            </p>

            {/* Core Pillars / Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-xl bg-[#F4F7FC] border border-slate-200 hover:border-[#082B6F]/30 hover:shadow-xs transition-all duration-200">
                <Laptop className="w-5 h-5 text-[#FF7800] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#082B6F]">Hands-on Computer Practice</div>
                  <div className="text-xs text-slate-600 mt-0.5">Individual computer workstation for every student.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-xl bg-[#F4F7FC] border border-slate-200 hover:border-[#082B6F]/30 hover:shadow-xs transition-all duration-200">
                <Users className="w-5 h-5 text-[#FF7800] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#082B6F]">Step-by-Step Guidance</div>
                  <div className="text-xs text-slate-600 mt-0.5">Clear explanations from basic concepts to practical workflows.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-xl bg-[#F4F7FC] border border-slate-200 hover:border-[#082B6F]/30 hover:shadow-xs transition-all duration-200">
                <Clock className="w-5 h-5 text-[#FF7800] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#082B6F]">Flexible Batch Timings</div>
                  <div className="text-xs text-slate-600 mt-0.5">Morning, afternoon, and evening batches from 8:00 AM to 9:30 PM.</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-xl bg-[#F4F7FC] border border-slate-200 hover:border-[#082B6F]/30 hover:shadow-xs transition-all duration-200">
                <MapPin className="w-5 h-5 text-[#FF7800] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#082B6F]">Central Location</div>
                  <div className="text-xs text-slate-600 mt-0.5">Easily accessible at Samet-2, Opp. Sardar Baug, Lal Darwaja.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Academy Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-[#082B6F] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl space-y-6">
              <div className="border-b border-white/15 pb-5">
                <div className="text-xs text-[#FF7800] font-bold uppercase tracking-wider">Institute Motto</div>
                <h3 className="text-2xl font-bold mt-1 text-white">"We Make Accountants"</h3>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                  Dedicated to making practical accounting and computer education clear, accessible, and applicable.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0 mt-0.5" />
                  <span>Practical curriculum focusing on job-ready skills</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0 mt-0.5" />
                  <span>Personal doubt resolution during lab sessions</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0 mt-0.5" />
                  <span>Open Monday to Saturday (8:00 AM – 9:30 PM)</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 border border-white/10 text-xs text-slate-200 leading-relaxed flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7800] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Address: </span>
                  59, 2nd Floor, Samet-2, Opp. Sardar Baug, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
