import React from 'react';
import {
  Building2, Globe, Award, CheckCircle,
  Smartphone, CreditCard, Layers3
} from 'lucide-react';

const PartnersPage = () => {
  const partner = {
    name: 'BankNBox',
    logo: '/assets/banknbox_logo.jpg', // ✅ public folder path
    description: 'BankNBox is a Cairo-based fintech platform offering cloud-native digital banking, card processing, and acquiring services to banks and fintechs worldwide.',
    website: 'https://www.banknbox.com',
    since: '2006',
    partnership: 'Digital Fintech Infrastructure Partner',
  };

  const cards = [
    {
      icon: Smartphone,
      title: 'Digital Banking Suite',
      description: 'Core banking, digital onboarding, mobile wallets and customer lifecycle tools — all built cloud-native and scalable.'
    },
    {
      icon: CreditCard,
      title: 'Card Issuing + SoftPOS',
      description: 'Issue physical and virtual cards, integrate SoftPOS and support EMV acquiring through a unified interface.'
    },
    {
      icon: Layers3,
      title: 'End‑to‑End Payments',
      description: 'Acquiring, issuing, fraud detection, 3D Secure, loyalty, tokenization and scheme integration in one platform.'
    }
  ];

  const certs = [
    "PCI‑DSS Certified Platform",
    "Visa / Mastercard / AMEX Integrated",
    "Secure Tokenization & PIN Services",
    "AI‑Powered Fraud Prevention"
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Technology Partner</h1>
        <p className="text-gray-400 text-lg">
          Powering our fintech infrastructure with world-class digital banking and payment solutions.
        </p>
      </div>

      {/* Partner Section */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-white/10 p-4 rounded-xl border border-white/10">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{partner.name}</h2>
              <p className="text-sm text-gray-400">{partner.partnership} — since {partner.since}</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">{partner.description}</p>

          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-white rounded-lg hover:from-blue-600/50 hover:to-purple-600/50 transition border border-blue-500/30"
          >
            <Globe className="w-4 h-4" />
            <span>Visit Website</span>
          </a>
        </div>

      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-24">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:bg-white/10"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-900/30 rounded-full">
              <card.icon className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-400 text-sm">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
        <div className="flex items-center space-x-3 mb-4">
          <Award className="w-6 h-6 text-green-400" />
          <h4 className="text-xl font-semibold">Certifications & Compliance</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {certs.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
