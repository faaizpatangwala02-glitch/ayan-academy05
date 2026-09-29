import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';

interface CourseFinderQuizProps {
  onSelectCourse: (courseName: string) => void;
}

export const CourseFinderQuiz: React.FC<CourseFinderQuizProps> = ({ onSelectCourse }) => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{
    background?: string;
    goal?: string;
    timeline?: string;
  }>({});
  const [result, setResult] = useState<{
    recommendedCourse: string;
    reason: string;
    duration: string;
  } | null>(null);

  const questions = [
    {
      key: 'background',
      title: '1. What is your current educational or work background?',
      options: [
        { label: 'Commerce Student or Graduate (B.Com / M.Com / BBA)', val: 'commerce' },
        { label: 'Non-Commerce Student (Arts / Science / 12th Standard)', val: 'non-commerce' },
        { label: 'Working Professional wanting to learn accounting software', val: 'working-prof' },
        { label: 'Business Owner managing GST, billing and business accounts', val: 'business-owner' }
      ]
    },
    {
      key: 'goal',
      title: '2. What is your primary learning goal?',
      options: [
        { label: 'Master Tally Prime with GST & TDS voucher entries', val: 'tally-gst' },
        { label: 'Learn Advanced Microsoft Excel, formulas & MIS reports', val: 'excel-mis' },
        { label: 'Learn GST rules, invoicing and return filing preparation', val: 'gst-tax' },
        { label: 'Learn Basic Computer skills (MS Word, Excel, Internet)', val: 'basic-computer' }
      ]
    },
    {
      key: 'timeline',
      title: '3. What batch schedule works best for you?',
      options: [
        { label: 'Morning Batches (8:00 AM – 11:00 AM)', val: 'morning' },
        { label: 'Afternoon Batches (12:00 PM – 3:00 PM)', val: 'afternoon' },
        { label: 'Evening / Night Batches (5:00 PM – 9:30 PM)', val: 'evening' }
      ]
    }
  ];

  const handleSelectOption = (value: string) => {
    const currentQ = questions[step];
    const newAnswers = { ...answers, [currentQ.key]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateRecommendation(newAnswers);
    }
  };

  const calculateRecommendation = (ans: typeof answers) => {
    if (ans.goal === 'gst-tax') {
      setResult({
        recommendedCourse: 'Live GST Return Filing',
        reason: 'Hands-on practical live GST return filing, invoicing, and tax portal procedures.',
        duration: '15 Days'
      });
    } else if (ans.goal === 'basic-computer' || ans.background === 'non-commerce') {
      setResult({
        recommendedCourse: 'DCSF - Diploma in Computer Skills and Fundamentals',
        reason: 'Foundational diploma covering essential computer operations, MS Office, and workplace digital tools.',
        duration: '1 Month'
      });
    } else {
      setResult({
        recommendedCourse: 'Diploma in Financial Accounting with Tally Prime',
        reason: 'Master comprehensive accounting vouchers, inventory, GST compliance, and Tally Prime bookkeeping.',
        duration: '2 Months'
      });
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#fd761a]/15 text-[#fd761a] flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#00236f]">Course Recommender Guide</h3>
          <p className="text-xs text-slate-500">Answer 3 quick questions to discover the right practical training track at Ayan Academy.</p>
        </div>
      </div>

      {!result ? (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#fd761a] h-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Question {step + 1} of {questions.length}
          </div>

          <h4 className="text-base sm:text-lg font-bold text-[#00236f]">
            {questions[step].title}
          </h4>

          <div className="grid gap-3">
            {questions[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.val)}
                className="p-4 text-left border border-slate-200 hover:border-[#00236f] hover:bg-[#dce1ff]/20 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer"
              >
                <span className="text-sm font-semibold text-slate-800 group-hover:text-[#00236f]">
                  {opt.label}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00236f] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="p-6 bg-gradient-to-br from-[#00236f]/5 to-[#fd761a]/10 rounded-2xl border border-orange-200">
            <div className="inline-block bg-[#fd761a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3">
              Recommended Track
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#00236f] mb-2">
              {result.recommendedCourse}
            </h4>
            <p className="text-sm text-slate-700 mb-3">
              {result.reason}
            </p>
            <div className="text-xs font-bold text-[#00236f] bg-white/80 inline-block px-3 py-1.5 rounded-lg border border-slate-200">
              Duration: {result.duration}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onSelectCourse(result.recommendedCourse)}
              className="flex-1 bg-[#fd761a] hover:bg-[#e06310] text-white font-bold py-3 px-6 rounded-xl text-sm transition-all text-center cursor-pointer shadow-md"
            >
              Inquire About This Course
            </button>
            <button
              onClick={handleReset}
              className="px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Guide</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
