import React from 'react';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/webfino_golden.png'; // ✅ Make sure this is correct


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-6 relative">
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-12">
        {/* Brand & About */}
        <div>
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <img src={logo} alt="WebFino Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-bold"> Web<span className="text-white">Fino</span></span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Bridging finance and technology to create innovative solutions that empower businesses and
            drive digital transformation across industries.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Digital Banking</li>
            <li>Web Development</li>
            <li>Security Solutions</li>
            <li>Analytics & BI</li>
            <li>API Integration</li>
            <li>Mobile Solutions</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Solutions</h4>
          <ul className="space-y-3 text-sm">
            <li>Enterprise Solutions</li>
            <li>SME Solutions</li>
            <li>E-commerce Platforms</li>
            <li>EdTech Solutions</li>
            <li>Healthcare Systems</li>
            <li>FinTech Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p>support@webfino.com</p>
                {/* <p>shubhamsrivastava@webfino.com</p> */}
              </div>
            </div>
            {/* <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p>+918583061237</p>
                <p>+919002004313</p>
              </div>
            </div> */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p>Salt Lake Sector V</p>
                <p>Kolkata , West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">© {currentYear} WebFino Solutions Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="privacy" className="hover:text-white text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-white text-gray-400">Terms of Service</a>
          <a href="#" className="hover:text-white text-gray-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
