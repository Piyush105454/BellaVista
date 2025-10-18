import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              <span className="text-white">Bella</span>
              <span className="text-amber-400">Vista</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience culinary excellence in the heart of the city. Where every dish tells a story of passion, tradition, and innovation.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
              <Facebook className="w-6 h-6 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="w-6 h-6 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
              <Youtube className="w-6 h-6 hover:text-amber-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-400">123 Culinary Street<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">info@bellavista.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Mon–Sun</span>
                <span className="text-white">10 AM – 11 PM</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-gray-400">Reservations recommended</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#menu" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Menu</a>
              <a href="#order" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Order</a>
              <a href="#contact" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Careers</a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Bella Vista Restaurant. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            Made with <Heart className="w-4 h-4 inline text-red-500" /> for food lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;