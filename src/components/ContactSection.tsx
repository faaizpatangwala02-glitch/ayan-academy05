import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ACADEMY_BUSINESS_DETAILS } from '../data/testimonialsData';

interface ContactSectionProps {
  onOpenEnquire?: (course?: string) => void;
}

const COURSE_BATCH_OPTIONS: Record<string, string[]> = {
  'Diploma in Financial Accounting with Tally Prime (2 Months)': [
    '8:30 AM – 10:00 AM',
    '10:00 AM – 11:30 AM',
    '7:30 PM – 9:00 PM'
  ],
  'Live GST Return Filing (15 Days)': [
    '8:30 AM – 10:00 AM',
    '10:00 AM – 11:30 AM',
    '7:30 PM – 9:00 PM'
  ],
  'DCSF - Diploma in Computer Skills and Fundamentals (1 Month)': [
    '3:00 PM – 4:00 PM'
  ]
};

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Diploma in Financial Accounting with Tally Prime (2 Months)',
    batchTiming: '8:30 AM – 10:00 AM',
    message: ''
  });

  const handleCourseChange = (selectedCourse: string) => {
    const batches = COURSE_BATCH_OPTIONS[selectedCourse] || [];
    setFormData((prev) => ({
      ...prev,
      course: selectedCourse,
      // Automatically reset previously selected Preferred Batch to clear invalid timings
      batchTiming: batches[0] || ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    if (!trimmedName || !trimmedPhone) return;

    const emailVal = formData.email.trim() || '-';
    const messageVal = formData.message.trim() || '-';

    const whatsappMessage = `Hello Ayan Academy,

I would like to submit an admission inquiry.

Name: ${trimmedName}
Phone Number: ${trimmedPhone}
Email: ${emailVal}
Course Program: ${formData.course}
Preferred Batch: ${formData.batchTiming}
Message: ${messageVal}

Thank you.`;

    const whatsappUrl = `https://wa.me/919825893639?text=${encodeURIComponent(whatsappMessage)}`;

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
  };

  return (
    <section id="contact" className="py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7FC] border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#082B6F] tracking-tight mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about course admissions, syllabus, or batch schedules? Get in touch with us.
          </p>
        </motion.div>

        {/* 4 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* 1. Phone / Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#082B6F]/30 hover:shadow-md transition-all duration-300 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4F7FC] text-[#082B6F] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6 text-[#082B6F]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082B6F]">Phone Number</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct phone line for course inquiries and admissions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={`tel:${ACADEMY_BUSINESS_DETAILS.phoneRaw}`}
                className="w-full bg-[#082B6F] hover:bg-[#062054] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 98258 93639</span>
              </a>
            </div>
          </motion.div>

          {/* 2. WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#082B6F]/30 hover:shadow-md transition-all duration-300 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4F7FC] text-[#2563E8] flex items-center justify-center group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6 text-[#2563E8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082B6F]">WhatsApp</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Quick chat for syllabus questions and batch timings.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${ACADEMY_BUSINESS_DETAILS.phoneRaw.replace(/\+/g, '')}?text=${encodeURIComponent('Hello Ayan Academy, I would like to inquire about course admissions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-[#F4F7FC] text-[#082B6F] border-2 border-[#082B6F] text-xs font-bold py-2 px-3 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-1.5 shadow-xs hover:shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#2563E8]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* 3. Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#082B6F]/30 hover:shadow-md transition-all duration-300 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4F7FC] text-[#FF7800] flex items-center justify-center group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-[#FF7800]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082B6F]">Address</h3>
              <div className="text-xs text-slate-600 leading-relaxed">
                <div>59, Second Floor, Samet-2,</div>
                <div>Opposite Sardar Baug, Old City,</div>
                <div className="font-semibold text-slate-800">Lal Darwaja, Ahmedabad 380001</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href="#location-map"
                className="text-xs font-bold text-[#082B6F] hover:text-[#FF7800] transition-colors inline-flex items-center gap-1 group/link"
              >
                <span>View On Map</span>
                <Navigation className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          {/* 4. Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#082B6F]/30 hover:shadow-md transition-all duration-300 group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4F7FC] text-[#082B6F] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6 text-[#082B6F]" />
              </div>
              <h3 className="text-lg font-semibold text-[#082B6F]">Business Hours</h3>
              <div className="text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-800">Monday – Saturday</div>
                <div className="text-sm font-extrabold text-[#FF7800]">8:00 AM – 9:30 PM</div>
                <div className="text-slate-400 text-[11px]">Sunday: Closed</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Open Monday to Saturday</span>
            </div>
          </motion.div>
        </div>

        {/* Contact Form and Summary Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Institute Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 bg-[#082B6F] text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="text-xs font-bold text-[#FF7800] uppercase tracking-wider">
                Ayan Academy Admissions
              </div>
              <h3 className="text-2xl font-bold">
                Visit our Practical Training Academy
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Contact our team or visit us at Lal Darwaja, Ahmedabad for batch enrollment, computer lab demonstration, and course guidance.
              </p>
            </div>

            <div className="space-y-3 bg-white/10 p-4 rounded-xl border border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0" />
                <span>100% Practical Computer Lab Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0" />
                <span>Step-by-Step Personalized Faculty Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF7800] shrink-0" />
                <span>Flexible Morning, Afternoon &amp; Evening Batches</span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={`tel:${ACADEMY_BUSINESS_DETAILS.phoneRaw}`}
                className="w-full bg-[#FF7800] hover:bg-[#e06900] text-white py-3 rounded-xl text-xs font-semibold text-center inline-flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Now (+91 98258 93639)</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#082B6F] mb-1">
              Send an Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below and we will get in touch with you regarding batch schedules.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F4F7FC] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#082B6F] focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98258 93639"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F4F7FC] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#082B6F] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F4F7FC] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#082B6F] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Course Program
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => handleCourseChange(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#F4F7FC] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#082B6F] focus:bg-white transition-colors"
                    >
                      <option value="Diploma in Financial Accounting with Tally Prime (2 Months)">Diploma in Financial Accounting with Tally Prime (2 Months)</option>
                      <option value="Live GST Return Filing (15 Days)">Live GST Return Filing (15 Days)</option>
                      <option value="DCSF - Diploma in Computer Skills and Fundamentals (1 Month)">DCSF - Diploma in Computer Skills and Fundamentals (1 Month)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Batch
                    </label>
                    <select
                      value={formData.batchTiming}
                      onChange={(e) => setFormData({ ...formData, batchTiming: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F4F7FC] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#082B6F] focus:bg-white transition-colors"
                    >
                      {(COURSE_BATCH_OPTIONS[formData.course] || COURSE_BATCH_OPTIONS['Diploma in Financial Accounting with Tally Prime (2 Months)']).map((batch) => (
                        <option key={batch} value={batch}>
                          {batch}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ask any questions regarding course details or admission..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-[#F4F7FC] border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-[#082B6F] focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF7800] hover:bg-[#e06900] text-white py-3 rounded-xl font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          id="location-map"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pt-2"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#082B6F] tracking-tight">
                  Get Directions to Ayan Academy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  59, Second Floor, Samet-2, Opposite Sardar Baug, Old City, Lal Darwaja, Ahmedabad, Gujarat 380001
                </p>
              </div>

              <a
                href={ACADEMY_BUSINESS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#082B6F] hover:bg-[#062054] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 inline-flex items-center gap-2 shadow-xs hover:shadow-md self-start sm:self-auto cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-[#FF7800]" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 h-[340px] sm:h-[400px] w-full relative bg-slate-100">
              <iframe
                title="Ayan Academy Location Map"
                src="https://maps.google.com/maps?q=59%20Second%20Floor%20Samet-2%20Opposite%20Sardar%20Baug%20Lal%20Darwaja%20Ahmedabad%20Gujarat%20380001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
