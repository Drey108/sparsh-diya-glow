
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
import { useSwipe } from '@/hooks/use-swipe';
import { useState } from 'react';

import HeroSection from '@/components/home/HeroSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | undefined>();
  
  // Handle swipe for FAQ accordion
  const { handleTouchStart, handleTouchEnd } = useSwipe({
    onSwipeLeft: () => {
      if (!activeAccordion) {
        setActiveAccordion('item-1');
      }
    },
    onSwipeRight: () => {
      setActiveAccordion(undefined);
    }
  });

  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ScrollIndicator />
    </div>
  );
};

export default Home;
