import React from 'react';
import { Phone, MapPin, ExternalLink, Navigation, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';
import { ACADEMY_BUSINESS_DETAILS } from '../data/testimonialsData';

interface FooterProps {
  onOpenEnquire?: (courseName?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="main-footer" className="bg-[#082B6F] text-white w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 sm:pb-10 border-b border-white/10 items-start">
          {/* Institute Info */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ayan Academy
            </div>
            <p className="text-xs text-[#FF7800] font-bold tracking-wider uppercase">
              ACCOUNTING TRAINING &amp; PLACEMENT INSTITUTE
            </p>

            {/* Address & Phone */}
            <div className="pt-2 space-y-2 text-xs text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7800] shrink-0 mt-0.5" />
                <span className="leading-relaxed">59, Second Floor, Samet-2, Opposite Sardar Baug, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#FF7800] shrink-0" />
                <a
                  href={`tel:${ACADEMY_BUSINESS_DETAILS.phoneRaw}`}
                  className="font-bold text-white hover:text-[#FF7800] transition-colors"
                >
                  {ACADEMY_BUSINESS_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7800]">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs font-medium text-slate-200">
              <li>
                <a href="#home" className="hover:text-[#FF7800] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF7800] transition-colors">
                  About Ayan Academy
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-[#FF7800] transition-colors">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#FF7800] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FF7800] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FF7800] transition-colors">
                  Student Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF7800] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Actions */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF7800]">
              Batch &amp; Academy Hours
            </div>
            <div className="text-xs text-slate-200 leading-relaxed space-y-1">
              <div className="font-semibold text-white">Monday – Saturday</div>
              <div className="text-sm font-bold text-[#FF7800]">8:00 AM – 9:30 PM</div>
              <div className="text-slate-300 text-[11px]">Sunday: Closed</div>
            </div>
            <div className="pt-2">
              <a
                href={ACADEMY_BUSINESS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#FF7800] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#FF7800]" />
                <span>Get Directions on Map</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Social Media Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} Ayan Academy. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-social-instagram"
              href="https://www.instagram.com/ayan_academy?igsi=MWJhOGczc2NveTk4ag=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ayan Academy Instagram"
              className="text-slate-300 hover:text-[#FF7800] transition-all duration-300 ease-out hover:-translate-y-[2px] p-1.5 rounded-lg hover:bg-white/10"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="footer-social-youtube"
              href="https://youtube.com/@ayanacademy5080?si=FNRCqTeJKKjadvgy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ayan Academy YouTube"
              className="text-slate-300 hover:text-[#FF7800] transition-all duration-300 ease-out hover:-translate-y-[2px] p-1.5 rounded-lg hover:bg-white/10"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              id="footer-social-facebook"
              href="https://www.facebook.com/share/19K8yCs1Vn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ayan Academy Facebook"
              className="text-slate-300 hover:text-[#FF7800] transition-all duration-300 ease-out hover:-translate-y-[2px] p-1.5 rounded-lg hover:bg-white/10"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              id="footer-social-linkedin"
              href="https://www.linkedin.com/in/ayan-academy-54b22424a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ayan Academy LinkedIn"
              className="text-slate-300 hover:text-[#FF7800] transition-all duration-300 ease-out hover:-translate-y-[2px] p-1.5 rounded-lg hover:bg-white/10"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div>
            Lal Darwaja, Ahmedabad, Gujarat
          </div>
        </div>
      </div>
    </footer>
  );
};
