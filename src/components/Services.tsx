import React from 'react';
import { CreditCard, Globe, Shield, BarChart3, Code, Smartphone, Cloud, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: 'Digital Banking',
      description: 'Comprehensive digital banking solutions with real-time transactions, multi-currency support, and advanced security protocols.',
      features: ['Real-time payments', 'Multi-currency', 'API integration', 'Fraud detection']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Full-stack web applications built with modern technologies, optimized for performance and scalability.',
      features: ['React/Next.js', 'Node.js backends', 'Cloud deployment', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Bank-grade security infrastructure with end-to-end encryption, compliance monitoring, and threat detection.',
      features: ['End-to-end encryption', 'Compliance monitoring', 'Threat detection', '24/7 security']
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Advanced analytics and business intelligence tools to drive data-driven decisions and insights.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization']
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless API development and integration services connecting your systems with third-party platforms.',
      features: ['RESTful APIs', 'GraphQL', 'Webhooks', 'Documentation']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications with offline capabilities and push notifications.',
      features: ['iOS & Android', 'Cross-platform', 'Offline support', 'Push notifications']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with auto-scaling, load balancing, and disaster recovery capabilities.',
      features: ['Auto-scaling', 'Load balancing', 'Disaster recovery', 'Multi-region']
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Expert consultation for digital transformation, technology strategy, and business process optimization.',
      features: ['Digital transformation', 'Technology strategy', 'Process optimization', 'Training']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From financial services to web development, we provide end-to-end solutions 
            that power your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;