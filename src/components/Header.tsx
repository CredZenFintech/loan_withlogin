import React, { useState } from 'react';
import { Menu, X, ArrowRight, LogOut } from 'lucide-react';
import logo from '../assets/logo.jpg';
// adjust path as needed
// Adjust path if not using alias

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-3 py-1">
        <div className="flex items-center justify-between">
          
         {/* Logo and Title */}
<div
  className="flex items-center space-x-3 cursor-pointer"
  onClick={() => onNavigate('home')}
>
  <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 shadow-sm">
    <img src={logo} alt="WebFino Logo" className="w-full h-full object-cover" />
  </div>
  <span className="text-xl font-bold text-gray-800">WebFino</span>
</div>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {user?.isLoggedIn ? (
              <>
                <button onClick={() => onNavigate('dashboard')} className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</button>
                <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              </>
            ) : (
              <>
                <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
                <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => onNavigate('partners')} className="text-gray-700 hover:text-blue-600 transition-colors">Partners</button>
                <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
                <button onClick={() => onNavigate('careers')} className="text-gray-700 hover:text-blue-600 transition-colors">Careers</button>
              </>
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user?.isLoggedIn ? (
              <>
                <button 
                  onClick={onApplyLoan}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2"
                >
                  <span>Apply for Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={onLogout}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={onLogin}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Login
                </button>
                <button 
                  onClick={onApplyLoan}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2"
                >
                  <span>Apply for Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              {user?.isLoggedIn ? (
                <>
                  <button onClick={() => onNavigate('dashboard')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Dashboard</button>
                  <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Contact</button>
                </>
              ) : (
                <>
                  <button onClick={() => onNavigate('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Home</button>
                  <button onClick={() => onNavigate('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">About</button>
                  <button onClick={() => onNavigate('partners')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Partners</button>
                  <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Contact</button>
                  <button onClick={() => onNavigate('careers')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Careers</button>
                </>
              )}

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                {user?.isLoggedIn ? (
                  <>
                    <button 
                      onClick={onApplyLoan}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2"
                    >
                      <span>Apply for Loan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={onLogout}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-left flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={onLogin}
                      className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors text-left"
                    >
                      Login
                    </button>
                    <button 
                      onClick={onApplyLoan}
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center space-x-2"
                    >
                      <span>Apply for Loan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
