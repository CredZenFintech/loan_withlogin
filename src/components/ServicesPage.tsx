import React from 'react';
import { 
  CreditCard, 
  Wallet, 
  Building2, 
  PiggyBank, 
  Smartphone, 
  Banknote, 
  Receipt, 
  Zap, 
  TrendingUp,
  DollarSign,
  Coins,
  Landmark,
  Target,
  Gift
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
  gradient: string;
  delay: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const ServicesPage = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "ACCOUNTS",
      services: [
        {
          icon: PiggyBank,
          title: "Savings Account",
          description: "High-yield savings with competitive interest rates and flexible access to your funds.",
          items: ["High interest rates", "No minimum balance", "Free ATM access", "Mobile banking"],
          gradient: "from-blue-500 to-cyan-500",
          delay: "0s"
        },
        {
          icon: Wallet,
          title: "Salary Account",
          description: "Designed for working professionals with exclusive benefits and zero balance requirements.",
          items: ["Zero balance", "Salary credits", "Overdraft facility", "Exclusive offers"],
          gradient: "from-green-500 to-emerald-500",
          delay: "0.1s"
        },
        {
          icon: Building2,
          title: "Corporate Salary Account",
          description: "Premium banking solutions for corporate employees with enhanced features.",
          items: ["Corporate benefits", "Priority banking", "Investment options", "Insurance coverage"],
          gradient: "from-purple-500 to-violet-500",
          delay: "0.2s"
        },
        {
          icon: Target,
          title: "Pots",
          description: "Smart savings pots to help you save for specific goals with automated features.",
          items: ["Goal-based saving", "Auto-save rules", "Round-up savings", "Progress tracking"],
          gradient: "from-orange-500 to-red-500",
          delay: "0.3s"
        }
      ]
    },
    {
      title: "PAYMENTS",
      services: [
        {
          icon: Smartphone,
          title: "Payments",
          description: "Seamless digital payments with instant transfers and secure transactions.",
          items: ["Instant transfers", "QR payments", "Contact payments", "Payment history"],
          gradient: "from-blue-600 to-indigo-600",
          delay: "0s"
        },
        {
          icon: Receipt,
          title: "Bills & Recharges",
          description: "Pay all your bills and recharge services in one place with automated reminders.",
          items: ["Utility bills", "Mobile recharge", "DTH payments", "Bill reminders"],
          gradient: "from-teal-500 to-cyan-500",
          delay: "0.1s"
        },
        {
          icon: Zap,
          title: "Pay via UPI",
          description: "Lightning-fast UPI payments with enhanced security and 24/7 availability.",
          items: ["Instant UPI", "QR scanning", "Voice payments", "Offline payments"],
          gradient: "from-yellow-500 to-orange-500",
          delay: "0.2s"
        },
        {
          icon: Gift,
          title: "Magic Spends",
          description: "Smart spending insights with rewards and cashback on every transaction.",
          items: ["Cashback rewards", "Spending insights", "Category tracking", "Budget alerts"],
          gradient: "from-pink-500 to-rose-500",
          delay: "0.3s"
        }
      ]
    },
    {
      title: "CREDIT CARD",
      services: [
        {
          icon: CreditCard,
          title: "Edge+ CSB Bank RuPay",
          description: "Premium RuPay credit card with exclusive benefits and rewards program.",
          items: ["Premium benefits", "Reward points", "Travel insurance", "Concierge service"],
          gradient: "from-indigo-600 to-purple-600",
          delay: "0s"
        },
        {
          icon: CreditCard,
          title: "Edge CSB Bank RuPay",
          description: "Feature-rich RuPay credit card for everyday spending with great rewards.",
          items: ["Everyday rewards", "Fuel surcharge waiver", "EMI conversion", "Online security"],
          gradient: "from-blue-500 to-purple-500",
          delay: "0.1s"
        },
        {
          icon: CreditCard,
          title: "Edge Federal Bank VISA",
          description: "International VISA credit card with global acceptance and premium features.",
          items: ["Global acceptance", "Travel benefits", "Airport lounge", "International insurance"],
          gradient: "from-emerald-500 to-teal-500",
          delay: "0.2s"
        }
      ]
    },
    {
      title: "LOANS",
      services: [
        {
          icon: Banknote,
          title: "Personal Loans",
          description: "Quick and hassle-free personal loans with competitive interest rates.",
          items: ["Quick approval", "Competitive rates", "Flexible tenure", "Minimal documentation"],
          gradient: "from-green-600 to-emerald-600",
          delay: "0s"
        },
        {
          icon: TrendingUp,
          title: "Loan Against Mutual Funds",
          description: "Leverage your mutual fund investments for instant liquidity without selling.",
          items: ["Instant liquidity", "No selling required", "Low interest rates", "Flexible repayment"],
          gradient: "from-blue-600 to-cyan-600",
          delay: "0.1s"
        }
      ]
    },
    {
      title: "INVEST",
      services: [
        {
          icon: TrendingUp,
          title: "Investments",
          description: "Comprehensive investment platform with expert guidance and portfolio management.",
          items: ["Expert guidance", "Portfolio tracking", "Risk assessment", "Goal planning"],
          gradient: "from-purple-600 to-pink-600",
          delay: "0s"
        },
        {
          icon: DollarSign,
          title: "Mutual Funds",
          description: "Wide range of mutual funds with SIP options and professional fund management.",
          items: ["SIP investments", "Fund comparison", "Performance tracking", "Tax benefits"],
          gradient: "from-indigo-500 to-blue-500",
          delay: "0.1s"
        },
        {
          icon: Coins,
          title: "DigiGold",
          description: "Digital gold investment with real-time pricing and secure storage options.",
          items: ["Real-time pricing", "Secure storage", "Easy liquidity", "Small investments"],
          gradient: "from-yellow-600 to-orange-600",
          delay: "0.2s"
        },
        {
          icon: Landmark,
          title: "Fixed Deposits",
          description: "Secure fixed deposits with attractive interest rates and flexible tenure options.",
          items: ["Attractive rates", "Flexible tenure", "Auto-renewal", "Premature withdrawal"],
          gradient: "from-teal-600 to-green-600",
          delay: "0.3s"
        },
        {
          icon: Target,
          title: "Recurring Deposits",
          description: "Systematic savings with recurring deposits and compounding benefits.",
          items: ["Systematic saving", "Compounding benefits", "Flexible amounts", "Goal achievement"],
          gradient: "from-rose-500 to-pink-500",
          delay: "0.4s"
        }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-black pt-20 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm mb-6">
            <Landmark className="w-4 h-4" />
            <span>Financial Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Banking
            </span>
            Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of financial services designed to meet all your banking, 
            payment, investment, and lending needs in one unified platform.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="">
              {/* Category Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4 tracking-wider">
                  {category.title}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 flex flex-col h-full"
                    style={{ 
                      animation: `fadeInUp 0.8s ease-out ${service.delay} both`,
                    }}
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow space-y-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                              <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                              <span className="group-hover:text-white transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 mt-auto">
                        <button className={`w-full py-3 px-4 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105`}>
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust WebFino for their financial needs. 
              Experience the future of banking today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl">
                Open Account
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-medium">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesPage;