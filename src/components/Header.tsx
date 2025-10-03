import React, { useState } from 'react';
import { Menu, X, ArrowRight, LogOut } from 'lucide-react';
import logo from '../assets/webfino_golden.png';

interface HeaderProps {
  onApplyLoan: () => void;
  onLogin: () => void;
  onNavigate: (view: string) => void;
  user: any;
  onLogout: () => void;
}

const Header = ({ onApplyLoan, onLogin, onNavigate, user, onLogout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/20 backdrop-blur-xl border-b border-gray-700/30 shadow-2xl">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-between">
          
          {/* Logo and Title */}
          <div
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                <img src={logo} alt="WebFino Logo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">WebFino</span>
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Finance</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-300">
            {user?.isLoggedIn ? (
              <>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('home')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => onNavigate('partners')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">Partners</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => onNavigate('careers')}
                  className="relative px-4 py-2 rounded-lg hover:text-white transition-all duration-300 font-medium group hover:bg-gray-800/30 backdrop-blur-sm"
                >
                  <span className="relative z-10">Careers</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.isLoggedIn ? (
              <>
                <button
                  onClick={onApplyLoan}
                  className="relative px-6 py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25 border border-blue-500/30 group transform hover:scale-105"
                >
                  <span className="font-semibold">Apply for Loan</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={onLogout}
                  className="relative flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-800/30 backdrop-blur-sm group"
                >
                  <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-medium">Logout</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onLogin}
                  className="relative px-5 py-2 text-blue-400 hover:text-white transition-all duration-300 font-semibold rounded-lg hover:bg-gray-800/30 backdrop-blur-sm group border border-blue-500/30 hover:border-blue-400/50"
                >
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={onApplyLoan}
                  className="relative px-6 py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25 border border-blue-500/30 group transform hover:scale-105"
                >
                  <span className="font-semibold">Apply for Loan</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 border-t border-gray-700/30 pt-4 space-y-3 text-gray-300 bg-gray-900/20 backdrop-blur-xl rounded-b-xl">
            {user?.isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    onNavigate('dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('about');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('services');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('partners');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">Partners</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => {
                    onNavigate('careers');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:text-white transition-all duration-300 font-semibold hover:bg-gray-800/30 backdrop-blur-sm group relative"
                >
                  <span className="relative z-10">Careers</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            )}
            <div className="pt-4 space-y-3 border-t border-gray-700/30">
              {user?.isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      onApplyLoan();
                      setIsMenuOpen(false);
                    }}
                    className="relative w-full px-6 py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 border border-blue-500/30 group transform hover:scale-105"
                  >
                    <span className="font-semibold">Apply for Loan</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="relative flex items-center space-x-2 px-4 py-3 text-gray-400 hover:text-white transition-all duration-300 w-full text-left rounded-lg hover:bg-gray-800/30 backdrop-blur-sm group"
                  >
                    <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-medium">Logout</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      onLogin();
                      setIsMenuOpen(false);
                    }}
                    className="relative w-full text-left px-4 py-3 text-blue-400 hover:text-white transition-all duration-300 font-semibold rounded-lg hover:bg-gray-800/30 backdrop-blur-sm group border border-blue-500/30 hover:border-blue-400/50"
                  >
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => {
                      onApplyLoan();
                      setIsMenuOpen(false);
                    }}
                    className="relative w-full px-6 py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25 border border-blue-500/30 group transform hover:scale-105"
                  >
                    <span className="font-semibold">Apply for Loan</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
