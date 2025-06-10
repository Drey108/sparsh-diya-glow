
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 logo-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Sparsh Yoga</span>
            </Link>
            <p className="text-background/80 leading-relaxed">
              Your sanctuary for wellness and spiritual growth in JP Nagar, Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-background/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/classes" className="block text-background/80 hover:text-primary transition-colors">
                Classes
              </Link>
              <Link to="/testimonials" className="block text-background/80 hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link to="/faq" className="block text-background/80 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/gallery" className="block text-background/80 hover:text-primary transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  JP Nagar, Bangalore, Karnataka
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">info@sparshyoga.com</span>
              </div>
            </div>
          </div>

          {/* Class Timings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Class Timings</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p className="font-medium">Morning</p>
                  <p className="text-sm">6:30 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p className="font-medium">Evening</p>
                  <p className="text-sm">4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Sparsh Yoga. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
