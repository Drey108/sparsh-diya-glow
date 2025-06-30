
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-0">
      {/* Minimalist glass footer */}
      <div className="glass-panel-warm border-t border-white/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-20">
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-16 mb-16">
            
            {/* Brand Section */}
            <div className="space-y-8">
              <Link to="/" className="inline-flex items-center space-x-3 group">
                <img 
                  src="/lovable-uploads/3bcb5bc0-6609-4a3b-bf82-a55a431e6ac7.png" 
                  alt="Sparsh Yoga Logo" 
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <span className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Sparsh
                  </span>
                  <span className="text-xl text-foreground/90 ml-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Yoga
                  </span>
                </div>
              </Link>
              <p className="text-foreground/70 leading-relaxed max-w-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Experience calm. Practice wellness. Join our community of mindful practitioners.
              </p>
            </div>

            {/* Navigation - Updated to match navigation bar */}
            <div className="space-y-8">
              <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
                Explore
              </h3>
              <nav className="space-y-4">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Classes', path: '/classes' },
                  { name: 'Services', path: '/services' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Yoga Instructor Course', path: '/YIC' }
                ].map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    className="block text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info - Removed CTA Button */}
            <div className="space-y-8">
              <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: 'Sora, sans-serif' }}>
                Connect
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary/80 mt-1 flex-shrink-0" />
                  <a 
                    href="https://maps.app.goo.gl/bjrKsDGyMDWYYm919" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    JP Nagar, Bangalore
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-primary/80 flex-shrink-0" />
                  <a 
                    href="https://wa.me/919740927213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    WhatsApp: +91 97409 27213
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary/80 flex-shrink-0" />
                  <a 
                    href="mailto:sparshmotivationcentre@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    sparshmotivationcentre@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-foreground/50 text-xs" style={{ fontFamily: 'Manrope, sans-serif' }}>
                © 2024 Sparsh Yoga. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link 
                  to="/privacy" 
                  className="text-foreground/50 hover:text-primary text-xs transition-colors duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Privacy
                </Link>
                <Link 
                  to="/terms" 
                  className="text-foreground/50 hover:text-primary text-xs transition-colors duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Terms
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
