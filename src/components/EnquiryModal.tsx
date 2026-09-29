import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ACADEMY_BUSINESS_DETAILS } from '../data/testimonialsData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourse?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialCourse
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: initialCourse || 'Diploma in Financial Accounting with Tally Prime',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, course: initialCourse }));
    }
  }, [initialCourse]);

  const handleResetAndClose = () => {
    setErrorMessage('');
    setFormData({
      name: '',
      phone: '',
      course: initialCourse || 'Diploma in Financial Accounting with Tally Prime',
      message: ''
    });
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();

    // 1. Validate required fields
    if (!trimmedName) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!trimmedPhone) {
      setErrorMessage('Please enter your mobile number.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.course) {
      setErrorMessage('Please select a course.');
      return;
    }

    // 2. Format WhatsApp enquiry message
    const trimmedMessage = formData.message.trim();
    const userMessage = trimmedMessage || '-';

    const whatsappMessage = `Hello Ayan Academy,

I would like to make an enquiry.

Name: ${trimmedName}
Mobile Number: ${trimmedPhone}
Course: ${formData.course}
Message: ${userMessage}

Please contact me regarding admission and course details.

Thank you.`;

    const whatsappUrl = `https://wa.me/919825893639?text=${encodeURIComponent(whatsappMessage)}`;

    // 3. Open WhatsApp with pre-filled message (works on desktop and mobile)
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      const link = document.createElement('a');
      link.href = whatsappUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // 4. Close modal and reset form
    handleResetAndClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleResetAndClose}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative border border-slate-100 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              {/* Modal Heading & Subtitle */}
              <div className="pr-6">
                <h3 className="text-2xl font-bold text-[#082B6F] tracking-tight">
                  Enquire Now
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in your details to chat directly with Ayan Academy on WhatsApp.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#FF7800] focus:ring-1 focus:ring-[#FF7800] transition-colors"
                  />
                </div>

                {/* 2. Mobile Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#FF7800] focus:ring-1 focus:ring-[#FF7800] transition-colors"
                  />
                </div>

                {/* 3. Select Course */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Course *
                  </label>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => {
                      setFormData({ ...formData, course: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#FF7800] focus:ring-1 focus:ring-[#FF7800] transition-colors"
                  >
                    <option value="Diploma in Financial Accounting with Tally Prime">
                      Diploma in Financial Accounting with Tally Prime
                    </option>
                    <option value="Live GST Return Filing">
                      Live GST Return Filing
                    </option>
                    <option value="DCSF - Diploma in Computer Skills and Fundamentals">
                      DCSF - Diploma in Computer Skills and Fundamentals
                    </option>
                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                </div>

                {/* 4. Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#FF7800] focus:ring-1 focus:ring-[#FF7800] transition-colors"
                  />
                </div>

                {/* Validation Error Message */}
                {errorMessage && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Primary Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full bg-[#FF7800] hover:bg-[#e06900] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>
                </div>

                {/* Small Call Link Below Button */}
                <div className="text-center pt-1.5">
                  <span className="text-xs text-slate-500">
                    Or call us directly at{' '}
                    <a
                      href={`tel:${ACADEMY_BUSINESS_DETAILS.phoneRaw}`}
                      className="font-bold text-[#082B6F] hover:text-[#FF7800] hover:underline transition-colors"
                    >
                      {ACADEMY_BUSINESS_DETAILS.phone}
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
