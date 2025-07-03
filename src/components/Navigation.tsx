
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Classes',
      path: '/classes'
    },
    {
      name: 'Services',
      path: '/services'
    },
    {
      name: 'Gallery',
      path: '/Gallery',
      shortName: 'gallery'
    },
    {
      name: 'Yoga Instructor Course',
      path: '/YIC',
      shortName: 'YIC'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
      <nav className="max-w-7xl mx-auto backdrop-blur-md bg-white/60 border border-white/20 shadow-lg rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3bcb5bc0-6609-4a3b-bf82-a55a431e6ac7.png" 
              alt="Sparsh Yoga Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm"
            />
            <div className="drop-shadow-sm">
              <span className="text-foreground text-xl font-bold">Sparsh</span>
              <span className="text-foreground text-xl font-normal ml-1">Yoga</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`transition-colors duration-200 font-medium drop-shadow-sm ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                <span className="hidden lg:inline">{item.name}</span>
                <span className="lg:hidden">{item.shortName || item.name}</span>
              </Link>
            ))}
          </div>

          {/* Get in Touch Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-accent text-primary-foreground px-6 py-2 rounded-full font-medium shadow-lg transition-all duration-300 hover:shadow-xl drop-shadow-sm">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-black/5 active:bg-black/10 rounded-lg transition-colors drop-shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-6">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors duration-200 font-medium text-lg py-2 drop-shadow-sm ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary active:text-primary/80'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary hover:bg-accent active:bg-accent/90 text-primary-foreground
                         px-6 py-3 rounded-full font-medium w-full sm:w-fit text-lg drop-shadow-sm"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
