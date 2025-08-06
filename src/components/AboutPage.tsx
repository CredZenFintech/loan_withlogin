import React from 'react';
import { Award, Users, Globe, TrendingUp, Target, Lightbulb, Heart, Shield, Zap, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      icon: Users,
      value: '10K+',
      label: 'Happy Clients',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      value: '500+',
      label: 'Loans Approved',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Cities Served',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Success Rate',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize financial services through innovative technology solutions that make banking and lending accessible to everyone.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To be the leading fintech company that bridges the gap between traditional finance and modern digital experiences.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Transparency, innovation, customer-centricity, and security form the foundation of everything we do.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get loan approval in just 5 minutes with our AI-powered processing system.'
    },
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Your data is protected with 256-bit encryption and multi-layer security protocols.'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Process',
      description: 'No hidden fees, clear terms, and real-time updates throughout your loan journey.'
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
              <Award className="w-4 h-4" />
              <span>Trusted Financial Partner</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                WebFino
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing the lending landscape by combining advanced technology 
              with deep financial expertise to make loans accessible, transparent, and efficient.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Empowering Financial Dreams
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Through Innovation
                  </span>
                </h2>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  WebFino was founded with a simple belief: everyone deserves access to fair, 
                  transparent, and efficient financial services. We've built a platform that 
                  streamlines the loan application process while maintaining the highest 
                  standards of security and compliance.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Our team of financial experts and technology innovators work tirelessly 
                  to create solutions that not only meet today's needs but anticipate 
                  tomorrow's challenges in the rapidly evolving fintech landscape.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600/20 to-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-blue-500/30">
                      <feature.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Industry Recognition</h3>
                    <p className="text-gray-300">Awarded "Best Fintech Innovation" by Financial Times 2024</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/30 p-4 rounded-lg text-center border border-gray-700/50">
                      <div className="text-2xl font-bold text-blue-400">5 Min</div>
                      <div className="text-sm text-gray-300">Avg. Approval Time</div>
                    </div>
                    <div className="bg-gray-800/30 p-4 rounded-lg text-center border border-gray-700/50">
                      <div className="text-2xl font-bold text-green-400">24/7</div>
                      <div className="text-sm text-gray-300">Customer Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and innovation guides every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* 3D Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the visionaries behind Webfino's success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Saawan Saah', role: 'Head of Operations' , photo: '/sawan.jpg'  },
              { name: 'Shubham Srivastava', role: 'Director',  photo: '/shubham.jpg' },
              { name: 'Ayush Tiwari', role: 'CO-Founder', photo: '/ayush.jpg' },
              { name: 'Rohit Sharma', role: 'Founder', photo: '/rohit.png' },
            ].map((member, index) => (
              <div key={index} className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center hover:bg-gray-900/40 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative mb-6 mx-auto w-32 h-32 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;