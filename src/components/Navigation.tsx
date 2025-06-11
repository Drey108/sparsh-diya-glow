import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Classes',
    path: '/classes'
  }, {
    name: 'Testimonials',
    path: '/testimonials'
  }, {
    name: 'FAQ',
    path: '/faq'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <nav className="max-w-7xl mx-auto glass-panel-warm rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
                  src="/lovable-uploads/3bcb5bc0-6609-4a3b-bf82-a55a431e6ac7.png" 
                  alt="Sparsh Yoga Logo" 
                  className="w-12 h-12 object-contain"
                />
            <span className="text-foreground text-xl font-bold">Sparsh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`transition-colors duration-200 font-medium ${isActive(item.path) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Get in Touch Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.name} to={item.path} className={`transition-colors duration-200 font-medium ${isActive(item.path) ? 'text-primary' : 'text-foreground hover:text-primary'}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <Button asChild className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded-full font-medium w-fit">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Navigation;