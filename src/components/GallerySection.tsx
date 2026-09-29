import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/galleryData';

export const GallerySection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Touch gesture refs for mobile swipe in lightbox
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const photos: GalleryPhoto[] = GALLERY_PHOTOS;
  const totalPhotos = photos.length;

  const goToNext = useCallback(() => {
    setActiveLightboxIndex((prev) => (prev === null || totalPhotos === 0 ? null : (prev + 1) % totalPhotos));
  }, [totalPhotos]);

  const goToPrev = useCallback(() => {
    setActiveLightboxIndex((prev) =>
      prev === null || totalPhotos === 0 ? null : (prev - 1 + totalPhotos) % totalPhotos
    );
  }, [totalPhotos]);

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, goToNext, goToPrev]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeLightboxIndex]);

  // Mobile swipe handling in lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Detect horizontal swipe if deltaX > threshold and predominantly horizontal
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="gallery"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082B6F] tracking-tight mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-base text-slate-500">
            Moments from Ayan Academy classroom training and certification ceremonies.
          </p>
        </motion.div>

        {/* Gallery Content: Exactly 4 fixed photos: Desktop 2x2, Tablet 2x2, Mobile 1 col (1x4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id || idx}
              id={`gallery-photo-item-${idx + 1}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.4,
                delay: idx * 0.08,
                ease: 'easeOut'
              }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F4F7FC] border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer select-none"
              onClick={() => setActiveLightboxIndex(idx)}
            >
              <img
                src={photo.src}
                alt={photo.alt || `Ayan Academy photo ${idx + 1}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-350 ease-out group-hover:scale-[1.04]"
              />
              {/* Subtle hover overlay to indicate clickable photo */}
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/15 transition-colors duration-300 flex items-center justify-center pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Read-Only Preview) */}
      <AnimatePresence>
        {activeLightboxIndex !== null && photos[activeLightboxIndex] && (
          <motion.div
            id="gallery-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xs p-4 sm:p-6 select-none"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar with Counter & Close Button */}
            <div
              className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium">
                {activeLightboxIndex + 1} / {totalPhotos}
              </div>

              <button
                type="button"
                id="lightbox-close-btn"
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Previous Photo Button (only if multiple photos) */}
            {totalPhotos > 1 && (
              <button
                type="button"
                id="lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/35 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}

            {/* Next Photo Button (only if multiple photos) */}
            {totalPhotos > 1 && (
              <button
                type="button"
                id="lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/35 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            )}

            {/* Active Image Container */}
            <motion.div
              key={activeLightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative max-w-5xl max-h-[82vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[activeLightboxIndex].src}
                alt={photos[activeLightboxIndex].alt || `Ayan Academy photo ${activeLightboxIndex + 1}`}
                className="max-h-[82vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
