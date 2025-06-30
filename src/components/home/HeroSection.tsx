
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Clean Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/b951291c-1f2c-4704-9f2b-24adec83bffc.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30"></div>
      </div>

      {/* Minimal Hero Content - Just Text and CTAs */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 tracking-tight">
              Transform Your Life<br />
              <span className="text-orange-500">Through Yoga</span>
            </h1>
            <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light px-2">
              Professional instruction in the heart of JP Nagar, designed for your wellness journey
            </p>
          </div>
          
          {/* Clean CTAs with Orange Accents */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
            <Button 
              asChild 
              className="minimal-button w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto bg-orange-500 hover:bg-orange-600 active:bg-orange-700 border-2 border-orange-500 hover:border-orange-600"
              onClick={() => window.open('https://forms.gle/Vqn3QTrxrpJJVvPd6', '_blank')}
            >
              <a href="https://forms.gle/Vqn3QTrxrpJJVvPd6" target="_blank" rel="noopener noreferrer">
                Start Your Journey
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="orange-outline w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 h-auto text-base sm:text-lg bg-white/80 hover:bg-orange-50 active:bg-orange-100 text-gray-900 hover:text-orange-600"
            >
              <Link to="/classes">View Classes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
