import React from 'react';
import { ArrowRight, Play, TrendingUp, Shield, Zap, CreditCard, DollarSign, Building2, Clock, CheckCircle, Users, Percent } from 'lucide-react';
import EMICalculator from './EMICalculator';

interface HeroProps {
  onApplyLoan: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyLoan }) => {
  return (
    <section id="home" className="relative min-h-screen bg-black pt-20">
      {/* 3D Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
                <CreditCard className="w-4 h-4" />
                <span>Smart Lending Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
               Your Financial
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                 Dreams
                </span>
                 Our Reality
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience the future of lending with WebFino. Quick approvals, competitive rates, 
                and seamless digital experience. Your financial goals are just a click away.
              </p>
            </div>

            {/* Product Cards Section - Enhanced */}
            <div className="grid md:grid-cols-2 gap-6 my-12">
              {/* Advance Salary Card - Enhanced */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm border-2 border-blue-400/40 rounded-2xl p-6 hover:from-blue-800/60 hover:to-blue-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-300/60">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Advance Salary</h3>
                        <p className="text-sm text-blue-200 font-medium">Get paid early</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-200 font-medium">Up to</div>
                      <div className="text-2xl font-bold text-white">75%</div>
                      <div className="text-xs text-blue-300">of salary</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="font-medium">Instant approval in 2 minutes</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Percent className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="font-medium">Competitive interest rates</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <Shield className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="font-medium">100% secure & paperless</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-yellow-400" />
                      </div>
                      <span className="font-medium">Same-day disbursement</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={onApplyLoan}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    <span>Apply for Advance Salary</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Working Capital Card - Enhanced */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm border-2 border-purple-400/40 rounded-2xl p-6 hover:from-purple-800/60 hover:to-purple-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-300/60">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Working Capital</h3>
                        <p className="text-sm text-purple-200 font-medium">Business growth</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-purple-200 font-medium">Up to</div>
                      <div className="text-2xl font-bold text-white">₹50L</div>
                      <div className="text-xs text-purple-300">for business</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="font-medium">Flexible repayment options</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-purple-400" />
                      </div>
                      <span className="font-medium">Competitive interest rates</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-yellow-500/20 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-yellow-400" />
                      </div>
                      <span className="font-medium">Quick approval process</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="font-medium">Dedicated relationship manager</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={onApplyLoan}
                    className="w-full py-3.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    <span>Apply for Working Capital</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onApplyLoan}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span className="font-medium">Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span className="font-medium">How It Works</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-300">2 Min Approval</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-300">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-300">Same Day Disbursal</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative z-10">
              <EMICalculator />
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
