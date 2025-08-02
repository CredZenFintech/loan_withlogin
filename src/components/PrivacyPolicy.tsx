import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
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
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30 backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span>Privacy Protected</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-green-900/20 p-8 rounded-xl border border-green-500/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/30">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Privacy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    At WebFino, we are committed to protecting your privacy and ensuring the security of your 
                    personal information. This Privacy Policy explains how we collect, use, disclose, and 
                    safeguard your information when you use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3 text-blue-400" />
                1. Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.1 Personal Information</h3>
                  <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/50">
                    <ul className="space-y-2">
                      {[
                        'Full name and contact details',
                        'Date of birth and age',
                        'PAN card and Aadhaar details',
                        'Employment and income information',
                        'Bank account details',
                        'Credit history and score'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.2 Technical Information</h3>
                  <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/50">
                    <ul className="space-y-2">
                      {[
                        'IP address and device information',
                        'Browser type and version',
                        'Usage patterns and preferences',
                        'Location data (with consent)',
                        'Cookies and tracking technologies'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-green-400" />
                2. How We Use Your Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Loan Processing',
                    items: ['Credit assessment', 'Identity verification', 'Risk evaluation', 'Approval decisions']
                  },
                  {
                    title: 'Service Delivery',
                    items: ['Account management', 'Customer support', 'Transaction processing', 'Communication']
                  },
                  {
                    title: 'Legal Compliance',
                    items: ['KYC requirements', 'Anti-money laundering', 'Regulatory reporting', 'Audit purposes']
                  },
                  {
                    title: 'Business Operations',
                    items: ['Service improvement', 'Analytics and insights', 'Marketing (with consent)', 'Fraud prevention']
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <UserCheck className="w-6 h-6 mr-3 text-orange-400" />
                3. Information Sharing
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We may share your information with the following parties under specific circumstances:
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      title: 'Credit Bureaus',
                      description: 'For credit reporting and assessment purposes'
                    },
                    {
                      title: 'Regulatory Authorities',
                      description: 'As required by law and regulatory compliance'
                    },
                    {
                      title: 'Service Providers',
                      description: 'Third-party vendors who assist in service delivery'
                    },
                    {
                      title: 'Business Partners',
                      description: 'With your consent for specific services or offers'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30">
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-red-400" />
                4. Data Security
              </h2>
              
              <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30 mb-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-300 mb-2">Security Measures</h3>
                    <p className="text-red-300 text-sm">
                      We implement industry-standard security measures to protect your information, 
                      but no method of transmission over the internet is 100% secure.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'SSL/TLS Encryption',
                  'Secure Data Centers',
                  'Access Controls',
                  'Regular Security Audits',
                  'Employee Training',
                  'Incident Response Plan'
                ].map((measure, index) => (
                  <div key={index} className="bg-gray-900/30 p-4 rounded-lg text-center border border-gray-700/50">
                    <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-red-500/30">
                      <Lock className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-sm font-medium text-white">{measure}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Access your personal data',
                    'Correct inaccurate information',
                    'Request data deletion',
                    'Withdraw consent',
                    'Data portability',
                    'Lodge complaints'
                  ].map((right, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                      <div className="w-6 h-6 bg-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-300 font-medium">{right}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">6. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, 
                please contact our Data Protection Officer:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> privacy@webpay.com</p>
                <p><strong>Phone:</strong> +91 1800-123-PRIVACY</p>
                <p><strong>Address:</strong> WebPay Privacy Office, Mumbai, Maharashtra 400001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;