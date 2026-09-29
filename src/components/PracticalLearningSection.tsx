import React from 'react';
import { Layers, FileSpreadsheet, CheckCircle2, MonitorCheck, BookOpen, ShieldAlert, Cpu } from 'lucide-react';
import { GstCalculatorTool } from './GstCalculatorTool';
import { CourseFinderQuiz } from './CourseFinderQuiz';

interface PracticalLearningSectionProps {
  onOpenEnquire: (courseName?: string) => void;
}

export const PracticalLearningSection: React.FC<PracticalLearningSectionProps> = ({ onOpenEnquire }) => {
  const steps = [
    {
      step: '01',
      title: 'Raw Business Documents',
      desc: 'Work on actual commercial tax invoices, purchase challans, bills of exchange, and multi-bank statements.'
    },
    {
      step: '02',
      title: 'Live Software Voucher Entry',
      desc: 'Perform Sales, Purchase, Payment, Receipt, and Journal vouchers in Tally Prime 4.0 with exact HSN & GST codes.'
    },
    {
      step: '03',
      title: 'Statutory Portal Filing',
      desc: 'Hands-on practice on government mock portals for GSTR-1, GSTR-3B, TDS Form 26Q, and Annual Returns.'
    },
    {
      step: '04',
      title: 'Finalization & Audit Prep',
      desc: 'Draft final Balance Sheets, Profit & Loss accounts, and generate MIS dashboards for company management.'
    }
  ];

  return (
    <section id="tools" className="py-20 md:py-28 px-4 sm:px-8 lg:px-12 bg-[#f8f9fa] border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00236f] uppercase tracking-wider bg-[#dce1ff] px-3.5 py-1 rounded-full">
            <MonitorCheck className="w-4 h-4 text-[#00236f]" />
            <span>Interactive Learning Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00236f] tracking-tight">
            How Ayan Academy Turns Students Into Working Accountants
          </h2>
          <p className="text-base text-[#444651]">
            We bridge the gap between classroom theory and real corporate accounting with a 4-step practical training cycle.
          </p>
        </div>

        {/* 4 Steps Workflow */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all relative overflow-hidden group"
            >
              <div className="text-4xl font-black text-[#00236f]/10 group-hover:text-[#fd761a]/20 transition-colors mb-3">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-[#00236f] mb-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-[#444651] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Tools Dual Grid (Calculator & Quiz) */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-4">
          <GstCalculatorTool />
          <CourseFinderQuiz onSelectCourse={(courseName) => onOpenEnquire(courseName)} />
        </div>
      </div>
    </section>
  );
};
