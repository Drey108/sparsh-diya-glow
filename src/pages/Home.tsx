import { Heart, Users, Clock, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
import { useSwipe } from '@/hooks/use-swipe';
import { useState } from 'react';

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
      {/* Minimal Hero Section - Just Text and CTAs */}
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
              <Button asChild className="minimal-button w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto bg-orange-500 hover:bg-orange-600 active:bg-orange-700 border-2 border-orange-500 hover:border-orange-600">
                <Link to="/contact">Start Your Journey</Link>
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

      {/* Why Choose Sparsh Yoga - Moved to directly after hero */}
      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
              Why Choose Sparsh Yoga?
            </h2>
            <p className="hero-subtitle text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Experience the transformative power of yoga in our warm, welcoming space
              designed for your wellness journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: 'Holistic Wellness',
                description: 'Comprehensive approach to physical and mental health'
              },
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Certified professionals with years of experience'
              },
              {
                icon: Clock,
                title: 'Flexible Timings',
                description: 'Multiple batches throughout the day to fit your schedule'
              },
              {
                icon: Target,
                title: 'Proven Results',
                description: 'Trusted by hundreds of satisfied students'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="orange-accent-card p-6 sm:p-8 text-center touch-manipulation"
                role="button"
                tabIndex={0}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 border-2 border-orange-200">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="section-title text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improved About Section */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
              About Sparsh Yoga
            </h2>
            <p className="hero-subtitle text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Located in the heart of JP Nagar, Bangalore, Sparsh Yoga is your sanctuary for 
              wellness and spiritual growth. We believe in making yoga accessible to everyone.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
            <div className="space-y-6">
              <h3 className="section-title text-xl sm:text-2xl md:text-3xl text-gray-900">Our Story</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Founded with the vision of bringing authentic yoga practices to the modern world, 
                Sparsh Yoga has been serving the JP Nagar community with dedication and passion. 
                Our name "Sparsh" means "touch" in Sanskrit, representing our commitment to touching 
                lives through the transformative power of yoga.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                We combine traditional yoga wisdom with contemporary teaching methods to create 
                a holistic experience that nurtures both body and mind.
              </p>
            </div>
            
            {/* Improved image layout */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-orange-500" />
                    </div>
                    <p className="font-medium">Studio Interior</p>
                    <p className="text-sm">Peaceful yoga practice space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Improved image layout for mission */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-orange-500" />
                    </div>
                    <p className="font-medium">Our Team</p>
                    <p className="text-sm">Certified yoga instructors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="section-title text-2xl md:text-3xl text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To create a community where individuals can discover their inner strength, 
                achieve physical wellness, and find mental peace through the ancient practice of yoga.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Target className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Authentic yoga practices rooted in tradition</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Heart className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Personalized attention for every student</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">Certified instructors with years of experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="hero-subtitle text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Find answers to common questions about our yoga classes and practices
            </p>
          </div>

          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-4"
              value={activeAccordion}
              onValueChange={setActiveAccordion}
            >
            <AccordionItem value="item-1" className="glass-panel-warm rounded-xl overflow-hidden border-none">
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-base sm:text-lg font-medium text-gray-900 hover:text-orange-600 hover:no-underline active:bg-black/5">
                What types of yoga classes do you offer?
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-sm sm:text-base text-gray-600">
                We offer a variety of classes including Weight Loss Batch, Regular Batch, Ladies Batch,
                and Yoga Therapy sessions. Each class is designed to cater to different needs and experience levels.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="glass-panel-warm rounded-xl overflow-hidden border-none">
              <AccordionTrigger className="px-6 text-lg font-medium text-gray-900 hover:text-orange-600 hover:no-underline">
                Do I need prior yoga experience to join?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                No prior experience is needed. Our classes accommodate all levels, from beginners to advanced practitioners.
                Our instructors provide modifications and guidance suitable for your level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="glass-panel-warm rounded-xl overflow-hidden border-none">
              <AccordionTrigger className="px-6 text-lg font-medium text-gray-900 hover:text-orange-600 hover:no-underline">
                What should I bring to class?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                We recommend bringing a yoga mat, comfortable clothing, and a water bottle. If you don't have a mat,
                we have some available for use at the studio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="glass-panel-warm rounded-xl overflow-hidden border-none">
              <AccordionTrigger className="px-6 text-lg font-medium text-gray-900 hover:text-orange-600 hover:no-underline">
                How often should I practice yoga?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                For beginners, we recommend 2-3 classes per week. As you build strength and flexibility,
                you can increase frequency. Listen to your body and practice at a pace that feels right for you.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="glass-panel-warm rounded-xl overflow-hidden border-none">
              <AccordionTrigger className="px-6 text-lg font-medium text-gray-900 hover:text-orange-600 hover:no-underline">
                Do you offer online classes?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600">
                Yes, we offer online classes via Zoom for several of our regular batches.
                These classes provide the same quality instruction as our in-studio sessions.
              </AccordionContent>
            </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

export default Home;