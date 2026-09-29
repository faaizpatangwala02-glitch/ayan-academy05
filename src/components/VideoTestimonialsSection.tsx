import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VIDEO_TESTIMONIALS, VideoTestimonial } from '../data/videoTestimonialsData';

export const VideoTestimonialsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  const handleOpenVideo = (item: VideoTestimonial) => {
    if (!item.videoSrc || item.isComingSoon) return;
    setActiveVideo(item);
  };

  const handleCloseModal = () => {
    if (videoPlayerRef.current) {
      try {
        videoPlayerRef.current.pause();
        videoPlayerRef.current.currentTime = 0;
      } catch {
        // Safe fail-silent if video is in an unseekable state
      }
    }
    setActiveVideo(null);
  };

  // Call video.load() when activeVideo changes to ensure immediate metadata readiness on Safari/iOS
  useEffect(() => {
    if (activeVideo && videoPlayerRef.current) {
      try {
        videoPlayerRef.current.load();
      } catch {
        // Safe fail-silent
      }
    }
  }, [activeVideo]);

  // Prevent background scrolling when modal is open and handle Escape key
  useEffect(() => {
    if (!activeVideo) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <section
      id="video-testimonials"
      className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14"
        >
          {/* Small Orange Label */}
          <div className="text-xs sm:text-sm font-bold text-[#FF7800] uppercase tracking-wider mb-2">
            STUDENT SUCCESS STORIES
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082B6F] tracking-tight mb-3 sm:mb-4">
            Hear From Our Students
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See what our students have to say about their learning experience at Ayan Academy.
          </p>
        </motion.div>

        {/* Exactly 3 Testimonial Cards: 3 in one row on desktop/tablet, stacked vertically on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-center">
          {VIDEO_TESTIMONIALS.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                id={`video-testimonial-card-${idx + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-3.5 shadow-xs hover:border-[#082B6F]/30 hover:shadow-lg transition-all duration-300 w-full max-w-sm mx-auto"
              >
                {/* Video Poster Preview with Centered Play Button Overlay */}
                <button
                  type="button"
                  onClick={() => handleOpenVideo(item)}
                  id={`card-video-thumb-${idx + 1}`}
                  aria-label={`Watch testimonial video ${idx + 1}`}
                  className="group relative w-full aspect-[9/16] rounded-xl overflow-hidden bg-slate-950 border border-slate-200/80 flex items-center justify-center shadow-xs cursor-pointer block p-0 text-left focus:outline-none focus:ring-2 focus:ring-[#FF7800] focus:ring-offset-2"
                >
                  <img
                    src={item.posterSrc}
                    alt={`Student Testimonial ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                      filter: 'contrast(1.02) brightness(1.01)',
                      imageRendering: '-webkit-optimize-contrast' as any
                    }}
                  />

                  {/* Subtle Dark Gradient Overlay for visual contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 group-hover:from-black/55 transition-colors duration-200 pointer-events-none" />

                  {/* Centered Circular Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF7800] group-hover:bg-[#e66c00] text-white flex items-center justify-center shadow-lg shadow-black/40 transition-all duration-200 group-hover:scale-110 group-active:scale-95">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Video Modal / Lightbox Popup - Only renders single video when active */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseModal}
            className="video-overlay"
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 0, 0, 0.85)',
              padding: 'max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left))',
              zIndex: 9999
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Student Video Testimonial"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="video-popup"
              style={{
                position: 'relative',
                width: 'min(90vw, 464px)',
                maxWidth: '464px',
                maxHeight: 'min(88dvh, 88vh)',
                background: '#000000',
                borderRadius: '16px',
                padding: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
                overflow: 'visible'
              }}
            >
              {/* Close Button: positioned at the top-right corner of the modal */}
              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close video popup"
                className="close-button"
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  zIndex: 30
                }}
              >
                <span className="w-8 h-8 rounded-full bg-black/90 hover:bg-black text-white border border-white/40 shadow-xl flex items-center justify-center transition-transform active:scale-95 cursor-pointer text-xl font-bold leading-none select-none">
                  ×
                </span>
              </button>

              {/* Single active modal video element */}
              <video
                ref={videoPlayerRef}
                key={activeVideo.videoSrc}
                src={activeVideo.videoSrc}
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload"
                style={{
                  width: '100%',
                  maxWidth: '464px',
                  height: 'auto',
                  maxHeight: 'min(88dvh, 88vh)',
                  aspectRatio: '464 / 832',
                  objectFit: 'contain',
                  display: 'block',
                  backgroundColor: '#000',
                  borderRadius: '16px',
                  pointerEvents: 'auto',
                  filter: 'contrast(1.04) brightness(1.01)',
                  imageRendering: '-webkit-optimize-contrast' as any,
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform, filter'
                }}
              >
                Your browser does not support HTML5 video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

