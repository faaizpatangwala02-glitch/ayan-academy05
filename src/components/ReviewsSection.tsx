import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import {
  REVIEWS_DATA,
  ACADEMY_BUSINESS_DETAILS,
} from '../data/testimonialsData';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-[#F4F7FC] border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#082B6F] uppercase tracking-wider bg-[#E9F0FD] px-3.5 py-1.5 rounded-full border border-[#082B6F]/15">
            <MessageSquare className="w-3.5 h-3.5 text-[#FF7800]" />
            <span>STUDENT REVIEWS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082B6F] tracking-tight">
            What Our Students Say
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Real experiences shared by students of Ayan Academy.
          </p>

          {/* Google Rating Summary */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5 bg-white px-5 sm:px-7 py-3 rounded-2xl border border-slate-200 shadow-xs">

              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#082B6F] leading-none">
                  5.0
                </span>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              <div className="h-5 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <span className="font-bold text-[#082B6F]">
                  Google Rating
                </span>

                <span className="text-slate-400">•</span>

                {/* Updated Google Review Count */}
                <span className="font-semibold text-slate-600">
                  234 Reviews
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {REVIEWS_DATA.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#082B6F]/25 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >

              <div className="space-y-3.5">

                {/* Stars + Google Review Badge */}
                <div className="flex items-center justify-between gap-2">

                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-[#F4F7FC] px-2.5 py-1 rounded-full border border-slate-200/80">

                    {/* Google Logo */}
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                      />

                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />

                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />

                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>

                    <span>Google Review</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-full bg-[#E9F0FD] text-[#082B6F] flex items-center justify-center font-bold text-xs border border-[#082B6F]/15">
                    {rev.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-[#082B6F]">
                      {rev.name}
                    </h4>

                    {rev.courseTaken && (
                      <p className="text-[11px] text-slate-500 font-medium">
                        {rev.courseTaken}
                      </p>
                    )}
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="text-center pt-2">
          <a
            href={ACADEMY_BUSINESS_DETAILS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F4F7FC] text-[#082B6F] border border-slate-300 hover:border-[#082B6F] px-6 sm:px-8 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View All Reviews</span>

            <ExternalLink className="w-3.5 h-3.5 text-[#FF7800]" />
          </a>
        </div>

      </div>
    </section>
  );
};
