import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CareersPage from './components/CareersPage';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import PartnersPage from './components/PartnersPage';
import LoanApplication from './components/LoanApplication';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [user, setUser] = useState<any>(null);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  const handleLogin = (userData: any) => {
    setUser(userData);
    setCurrentView('home');
  };

  const handleSignup = (userData: any) => {
    setUser(userData);
    setCurrentView('home');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const handleApplyLoan = () => {
    if (!user?.isLoggedIn) {
      setCurrentView('auth');
      return;
    }
    setCurrentView('loan-application');
  };

  const handleLoginClick = () => {
    setAuthView('login');
    setCurrentView('auth');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return user?.isLoggedIn ? <Dashboard user={user} /> : <Login onLogin={handleLogin} onSwitchToSignup={() => setAuthView('signup')} />;
      case 'about':
        return <AboutPage />;
      case 'partners':
        return <PartnersPage />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage />;
      case 'terms':
        return <TermsConditions />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'loan-application':
        return user?.isLoggedIn ? <LoanApplication user={user} /> : <Login onLogin={handleLogin} onSwitchToSignup={() => setAuthView('signup')} />;
      case 'auth':
        return authView === 'login' ? 
          <Login onLogin={handleLogin} onSwitchToSignup={() => setAuthView('signup')} /> :
          <Signup onSignup={handleSignup} onSwitchToLogin={() => setAuthView('login')} />;
      default:
        return (
          <div className="min-h-screen bg-black relative overflow-hidden">
            {/* 3D Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>
            <div className="relative z-10">
            <Hero onApplyLoan={handleApplyLoan} />
            <Footer />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {currentView !== 'auth' && (
        <Header 
          onApplyLoan={handleApplyLoan}
          onLogin={handleLoginClick}
          onNavigate={setCurrentView}
          user={user}
          onLogout={handleLogout}
        />
      )}
      <div className={currentView !== 'auth' ? 'pt-20' : ''}>
        {renderCurrentView()}
      </div>
      
      {/* Back to Home Button */}
      {currentView !== 'home' && currentView !== 'auth' && (
        <div className="fixed bottom-6 left-6 z-40">
          <button
            onClick={() => setCurrentView('home')}
            className="px-1 py-1 bg-white text-gray-700 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-all"
          >
            ← Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;