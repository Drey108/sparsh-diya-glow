
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Glass effect footer */}
      <div className="glass-panel-warm border-t border-white/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Left Section - Logo & Tagline */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/3bcb5bc0-6609-4a3b-bf82-a55a431e6ac7.png" 
                  alt="Sparsh Yoga Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <span className="text-2xl font-serif font-bold text-foreground">Sparsh</span>
                  <span className="text-xl font-sans text-foreground ml-1">Yoga</span>
                </div>
              </Link>
              <p className="text-foreground/80 font-serif italic leading-relaxed">
                "Experience Calm. Practice Wellness."
              </p>
            </div>

            {/* Middle Section 1 - Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-3">
                <Link 
                  to="/" 
                  className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-sans"
                >
                  Home
                </Link>
                <Link 
                  to="/classes" 
                  className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-sans"
                >
                  Classes
                </Link>
                <Link 
                  to="/testimonials" 
                  className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-sans"
                >
                  Testimonials
                </Link>
                <Link 
                  to="/faq" 
                  className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-sans"
                >
                  FAQ
                </Link>
                <Link 
                  to="/gallery" 
                  className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-sans"
                >
                  Gallery
                </Link>
              </div>
            </div>

            {/* Middle Section 2 - Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-semibold text-foreground">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 font-sans">
                    JP Nagar, Bangalore, Karnataka
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 font-sans"
                  >
                    WhatsApp Us
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 font-sans">info@sparshyoga.com</span>
                </div>
              </div>
            </div>

            {/* Right Section - CTA */}
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-semibold text-foreground">Ready to Start?</h3>
              <div className="space-y-4">
                <p className="text-foreground/80 font-sans text-sm">
                  Join our welcoming community and begin your yoga journey today.
                </p>
                <Button 
                  asChild
                  className="w-full glass-panel-warm border border-white/30 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 font-sans"
                >
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center"
                  >
                    Book Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-foreground/60 text-sm font-sans">
                © 2024 Sparsh Yoga. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <Link 
                  to="/contact" 
                  className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300 font-sans"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/contact" 
                  className="text-foreground/60 hover:text-primary text-sm transition-colors duration-300 font-sans"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
