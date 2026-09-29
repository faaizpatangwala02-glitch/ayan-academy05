import React, { useState } from 'react';
import { Calculator, Percent, Receipt, RefreshCw, FileText, CheckCircle } from 'lucide-react';

export const GstCalculatorTool: React.FC = () => {
  const [amount, setAmount] = useState<number>(50000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [taxType, setTaxType] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [supplyType, setSupplyType] = useState<'intra' | 'inter'>('intra'); // intra = CGST+SGST, inter = IGST

  // Calculations
  let baseAmount = 0;
  let gstAmount = 0;
  let totalAmount = 0;

  if (taxType === 'exclusive') {
    baseAmount = amount;
    gstAmount = (amount * gstRate) / 100;
    totalAmount = baseAmount + gstAmount;
  } else {
    totalAmount = amount;
    baseAmount = (amount * 100) / (100 + gstRate);
    gstAmount = totalAmount - baseAmount;
  }

  const cgst = supplyType === 'intra' ? gstAmount / 2 : 0;
  const sgst = supplyType === 'intra' ? gstAmount / 2 : 0;
  const igst = supplyType === 'inter' ? gstAmount : 0;

  const gstSlabs = [5, 12, 18, 28];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#dce1ff] text-[#00236f] flex items-center justify-center">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#00236f]">Interactive GST &amp; Tax Invoice Calculator</h3>
          <p className="text-xs text-slate-500">Practice real-world invoicing calculations as taught in our Tally &amp; GST labs.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Form Controls */}
        <div className="space-y-5">
          {/* Amount Input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Invoice Amount (₹ INR)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">₹</span>
              <input
                type="number"
                min="100"
                step="500"
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                className="w-full pl-8 pr-4 py-3 bg-[#f8f9fa] border border-slate-200 rounded-xl font-semibold text-slate-800 focus:outline-hidden focus:border-[#00236f] focus:bg-white text-base"
                placeholder="50000"
              />
            </div>
          </div>

          {/* GST Slabs */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Select GST Slab Rate (%)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {gstSlabs.map((slab) => (
                <button
                  key={slab}
                  type="button"
                  onClick={() => setGstRate(slab)}
                  className={`py-2.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                    gstRate === slab
                      ? 'bg-[#00236f] text-white shadow-sm scale-102'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {slab}%
                </button>
              ))}
            </div>
          </div>

          {/* Tax Inclusion Toggle */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Price Type
            </label>
            <div className="grid grid-cols-2 gap-2 bg-[#f8f9fa] p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setTaxType('exclusive')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  taxType === 'exclusive' ? 'bg-white text-[#00236f] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                GST Exclusive (Add Tax)
              </button>
              <button
                type="button"
                onClick={() => setTaxType('inclusive')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  taxType === 'inclusive' ? 'bg-white text-[#00236f] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                GST Inclusive (Extract Tax)
              </button>
            </div>
          </div>

          {/* Supply Type Toggle (Intra vs Inter) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Supply Location (GST Nature)
            </label>
            <div className="grid grid-cols-2 gap-2 bg-[#f8f9fa] p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setSupplyType('intra')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  supplyType === 'intra' ? 'bg-white text-[#00236f] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Intra-State (CGST + SGST)
              </button>
              <button
                type="button"
                onClick={() => setSupplyType('inter')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  supplyType === 'inter' ? 'bg-white text-[#00236f] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Inter-State (IGST)
              </button>
            </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Accounting Voucher Breakdown</span>
            <span className="text-[11px] font-semibold text-[#fd761a] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
              Live Preview
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm text-slate-600">
              <span>Taxable Value (Base Price):</span>
              <span className="font-bold text-slate-900">₹{baseAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>

            {supplyType === 'intra' ? (
              <>
                <div className="flex justify-between items-center text-sm text-slate-600">
                  <span>CGST ({gstRate / 2}%):</span>
                  <span className="font-semibold text-slate-800">+ ₹{cgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-slate-600">
                  <span>SGST / UTGST ({gstRate / 2}%):</span>
                  <span className="font-semibold text-slate-800">+ ₹{sgst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
                </div>
              </>
            ) : (
              <div className="flex justify-between items-center text-sm text-slate-600">
                <span>IGST ({gstRate}%):</span>
                <span className="font-semibold text-slate-800">+ ₹{igst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
              </div>
            )}

            <div className="flex justify-between items-center text-sm text-[#fd761a] font-semibold">
              <span>Total GST Tax Liability:</span>
              <span>₹{gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span>
            </div>

            <div className="pt-3 border-t-2 border-slate-300 flex justify-between items-center">
              <div>
                <span className="text-xs font-bold uppercase text-slate-500 block">Total Invoice Bill Value</span>
                <span className="text-2xl font-extrabold text-[#00236f]">
                  ₹{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                </span>
              </div>
              <span className="text-xs bg-[#dce1ff] text-[#00236f] font-bold px-3 py-1.5 rounded-lg">
                Compliant HSN Invoice
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 space-y-1">
            <div className="font-bold text-slate-700 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tally Prime Journal Entry Equivalent:</span>
            </div>
            <p className="font-mono text-[11px] text-slate-600">
              Dr. Customer A/c ₹{totalAmount.toFixed(0)} <br />
              &nbsp;&nbsp;Cr. Sales A/c ₹{baseAmount.toFixed(0)} <br />
              &nbsp;&nbsp;Cr. GST Output A/c ₹{gstAmount.toFixed(0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
