import React from 'react';
import { Building2, Briefcase, ShoppingCart, GraduationCap, HeartHandshake, Banknote } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise platforms with advanced financial management and web integration capabilities.',
      features: ['Custom ERP systems', 'Financial dashboards', 'API integrations', 'Cloud infrastructure'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'SME Solutions',
      description: 'Tailored solutions for small and medium enterprises focusing on growth and operational efficiency.',
      features: ['Business automation', 'Payment processing', 'CRM integration', 'Analytics tools'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platforms',
      description: 'Complete e-commerce solutions with integrated payment gateways and inventory management.',
      features: ['Multi-vendor support', 'Payment gateways', 'Inventory management', 'Mobile apps'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: 'EdTech Solutions',
      description: 'Educational technology platforms with integrated payment systems and learning management.',
      features: ['LMS platforms', 'Student portals', 'Payment processing', 'Progress tracking'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: HeartHandshake,
      title: 'Healthcare Systems',
      description: 'HIPAA-compliant healthcare solutions with secure patient data management and billing.',
      features: ['Patient management', 'Billing systems', 'Telemedicine', 'Compliance tools'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Banknote,
      title: 'FinTech Solutions',
      description: 'Next-generation financial technology solutions including digital wallets and trading platforms.',
      features: ['Digital wallets', 'Trading platforms', 'Blockchain integration', 'Risk management'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized solutions designed for various industries, combining financial services 
            with powerful web technologies to meet unique business requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
            >
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className={`w-2 h-2 bg-gradient-to-br ${solution.color} rounded-full mr-3`}></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;