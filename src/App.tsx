/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VideoTestimonialsSection } from './components/VideoTestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState<string | undefined>(undefined);

  const handleOpenEnquire = (courseName?: string) => {
    setSelectedCourseForEnquiry(courseName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquire = () => {
    setIsEnquiryOpen(false);
    setSelectedCourseForEnquiry(undefined);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#FF7800] selection:text-white font-['Sora',sans-serif]">
      {/* Top Sticky Header */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Main Content Sections: Exact 6 Approved Sections in Exact Sequence */}
      <main className="flex-grow">
        {/* 1. HOME */}
        <HeroSection
          onExploreCourses={() => scrollToSection('courses')}
          onContactClick={() => scrollToSection('contact')}
          onOpenEnquire={handleOpenEnquire}
        />

        {/* STATS / ACHIEVEMENTS */}
        <StatsSection />

        {/* 2. ABOUT */}
        <AboutSection />

        {/* 3. COURSES */}
        <CoursesSection onOpenEnquire={handleOpenEnquire} />

        {/* 4. WHY US */}
        <WhyChooseUs
          onExploreCourses={() => scrollToSection('courses')}
          onOpenEnquire={() => handleOpenEnquire('Career Consultation')}
        />

        {/* STUDENT VIDEO TESTIMONIALS */}
        <VideoTestimonialsSection />

        {/* 5. GALLERY (Read-Only) */}
        <GallerySection />

        {/* STUDENT REVIEWS */}
        <ReviewsSection />

        {/* 6. CONTACT */}
        <ContactSection onOpenEnquire={handleOpenEnquire} />
      </main>

      {/* FOOTER */}
      <Footer onOpenEnquire={handleOpenEnquire} />

      {/* Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquire}
        initialCourse={selectedCourseForEnquiry}
      />
    </div>
  );
}
