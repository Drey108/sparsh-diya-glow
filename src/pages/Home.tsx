
import { ArrowRight, Heart, Users, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-primary font-medium text-lg">Health to everyone</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Explore the wonders of{' '}
                  <span className="text-primary">inner peace</span> of mind.
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Through a combination of physical postures, breath control, and
                  meditation, yoga helps to harmonize the body and mind,
                  fostering overall well-being.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <Link to="/classes">Enroll now</Link>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium text-lg transition-all duration-300"
                >
                  <Link to="/contact">Schedule a free call</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-panel-warm rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/b951291c-1f2c-4704-9f2b-24adec83bffc.png"
                  alt="Yoga practice by the ocean"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Sparsh Yoga?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the transformative power of yoga in our warm, welcoming space
              designed for your wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                icon: Star,
                title: 'Proven Results',
                description: 'Trusted by hundreds of satisfied students'
              }
            ].map((feature, index) => (
              <div key={index} className="glass-panel-warm rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel-warm rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Yoga Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of wellness enthusiasts in JP Nagar, Bangalore. 
              Experience the perfect blend of traditional yoga and modern comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Link to="/classes">
                  View Classes <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium text-lg transition-all duration-300"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
