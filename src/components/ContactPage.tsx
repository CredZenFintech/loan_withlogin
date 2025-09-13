import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, HeadphonesIcon, CreditCard } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our loan specialists',
      details: ['+91 8583061237 -Complain', '+91 9002004313-HELP'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your queries anytime',
      details: ['support@webfino.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our team',
      details: ['Available 24/7', 'Average response: 2 minutes'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      description: 'Meet us in person for personalized service',
      details: ['WebFino Finance ,RDB Boulevard''5th Floor,Sector -V Salt lake ''Kolkata,West Bengal India'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'How long does loan approval take?',
      answer: 'Most loans are approved within 5 minutes of application submission.'
    },
    {
      question: 'What documents do I need?',
      answer: 'You need PAN card, Aadhaar card, salary slips, and bank statements.'
    },
    {
      question: 'What is the minimum loan amount?',
      answer: 'The minimum loan amount is ₹1,00,000 and maximum is ₹50,00,000.'
    },
    {
      question: 'Can I prepay my loan?',
      answer: 'Yes, you can prepay your loan anytime without any prepayment charges.'
    }
  ];

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
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30 backdrop-blur-sm">
              <HeadphonesIcon className="w-4 h-4" />
              <span>24/7 Customer Support</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Get in Touch with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                WebFino
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about our loan services or need assistance with your application? 
              Our dedicated team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-300">Choose the method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{method.description}</p>
                <div className="space-y-1">
                  {method.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-gray-200 font-medium">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">Send us a Message</h3>
                <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+91 0123456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="personal-loan">Personal Loan Inquiry</option>
                      <option value="business-loan">Business Loan Inquiry</option>
                      <option value="loan-status">Loan Status Check</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="complaint">Complaint/Feedback</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-800/50 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span className="font-medium">Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-500/30">
                    <p className="text-sm text-blue-300">
                      <strong>Emergency Support:</strong> Available 24/7 for existing customers
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <h4 className="font-medium text-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-gray-800/50 text-gray-200 rounded-lg border border-gray-600 hover:border-blue-500 transition-all flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                    <span>Check Loan Status</span>
                  </button>
                  <button className="w-full px-4 py-3 bg-gray-800/50 text-gray-200 rounded-lg border border-gray-600 hover:border-green-500 transition-all flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                    <span>Start Live Chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default ContactPage;
