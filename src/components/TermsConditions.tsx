import React from 'react';
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const TermsConditions = () => {
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
            <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30 backdrop-blur-sm">
              <FileText className="w-4 h-4" />
              <span>Legal Document</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Terms &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
            <p className="text-sm text-gray-400 mt-4">Last updated: July 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Welcome to WebFino. These Terms and Conditions ("Terms") govern your use of our website, 
                    mobile application, and loan services. By accessing or using our services, you agree to 
                    be bound by these Terms. If you do not agree with any part of these terms, you may not 
                    use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Definitions */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">1. Definitions</h2>
              <div className="space-y-4">
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/50">
                  <h3 className="font-semibold text-white mb-2">"Company", "we", "us", "our"</h3>
                  <p className="text-gray-300">Refers to WebFino and its affiliates</p>
                </div>
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/50">
                  <h3 className="font-semibold text-white mb-2">"User", "you", "your"</h3>
                  <p className="text-gray-300">Refers to any individual or entity using our services</p>
                </div>
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700/50">
                  <h3 className="font-semibold text-white mb-2">"Services"</h3>
                  <p className="text-gray-300">Refers to all loan products, website, and related services provided by WebPay</p>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">2. Eligibility</h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  To use our services, you must:
                </p>
                <ul className="space-y-3">
                  {[
                    'Be at least 21 years of age and not more than 65 years',
                    'Be a resident of India with valid identity documents',
                    'Have a stable source of income',
                    'Provide accurate and complete information',
                    'Have a valid mobile number and email address'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Loan Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">3. Loan Terms and Conditions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3.1 Application Process</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All loan applications are subject to our credit assessment and approval process. 
                    We reserve the right to approve, reject, or modify any loan application at our discretion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3.2 Interest Rates</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Interest rates are determined based on your credit profile, loan amount, and tenure. 
                    Rates are subject to change and will be communicated before loan approval.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3.3 Repayment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    EMIs must be paid on the due date each month. Late payments may incur additional charges 
                    and affect your credit score.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy and Data */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">4. Privacy and Data Protection</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are committed to protecting your privacy and personal information. By using our services, 
                you consent to the collection, use, and sharing of your information as described in our 
                Privacy Policy.
              </p>
              <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
                <p className="text-yellow-300 text-sm">
                  <strong>Important:</strong> We may share your information with credit bureaus, 
                  regulatory authorities, and our business partners as required for loan processing and compliance.
                </p>
              </div>
            </div>

            {/* Prohibited Uses */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">5. Prohibited Uses</h2>
              <p className="text-gray-300 leading-relaxed mb-4">You agree not to:</p>
              <ul className="space-y-2">
                {[
                  'Provide false or misleading information',
                  'Use our services for illegal activities',
                  'Attempt to circumvent our security measures',
                  'Share your account credentials with others',
                  'Use automated systems to access our services'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                WebFino shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from your use of our services. Our total liability shall not exceed the amount of 
                fees paid by you in the 12 months preceding the claim.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">7. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting on our website. Your continued use of our services constitutes acceptance of the 
                modified Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">8. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> Shubhamsrivastava@webfino.com</p>
                <p><strong>Phone:</strong> +91 8583061237-LEGAL</p>
                <p><strong>Address:</strong> WebFino Legal Department, Kolkata West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default TermsConditions;