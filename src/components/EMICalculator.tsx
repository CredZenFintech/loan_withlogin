import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12.5);
  const [tenure, setTenure] = useState(24);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100);
    const months = tenure;

    if (monthlyRate === 0) {
      const calculatedEmi = principal / months;
      setEmi(calculatedEmi);
      setTotalAmount(principal);
      setTotalInterest(0);
    } else {
      const calculatedEmi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                           (Math.pow(1 + monthlyRate, months) - 1);
      const calculatedTotalAmount = calculatedEmi * months;
      const calculatedTotalInterest = calculatedTotalAmount - principal;

      setEmi(calculatedEmi);
      setTotalAmount(calculatedTotalAmount);
      setTotalInterest(calculatedTotalInterest);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-blue-400" />
            <span>EMI Calculator</span>
          </h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Loan Amount</label>
            <div className="space-y-2">
              <input
                type="range"
                min="100000"
                max="5000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-500/30">
                <div className="text-2xl font-bold text-blue-400">₹{loanAmount.toLocaleString()}</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Interest Rate (%)</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="8"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 p-3 rounded-lg text-center border border-purple-500/30">
                  <div className="text-lg font-bold text-purple-400">{interestRate}%</div>
                  <div className="text-xs text-purple-300">Per Annum</div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Tenure (Months)</label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="12"
                  max="60"
                  step="6"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-green-200 to-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 p-3 rounded-lg text-center border border-green-500/30">
                  <div className="text-lg font-bold text-green-400">{tenure}</div>
                  <div className="text-xs text-green-300">Months</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-4 rounded-lg border border-orange-500/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-400">₹{Math.round(emi).toLocaleString()}</div>
                <div className="text-sm text-orange-300">Monthly EMI</div>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 p-4 rounded-lg border border-blue-500/30">
              <div className="text-lg font-bold text-blue-400">₹{Math.round(totalAmount).toLocaleString()}</div>
              <div className="text-sm text-blue-300">Total Amount</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 p-4 rounded-lg border border-red-500/30">
              <div className="text-lg font-bold text-red-400">₹{Math.round(totalInterest).toLocaleString()}</div>
              <div className="text-sm text-red-300">Total Interest</div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={calculateEMI}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 border border-blue-500/30"
        >
          <Calculator className="w-4 h-4" />
          <span>Recalculate EMI</span>
        </button>
      </div>
    </div>
  );
};

export default EMICalculator;