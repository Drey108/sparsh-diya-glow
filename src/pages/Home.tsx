
import { Heart, Users, Clock, Star, Target, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Full Background */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/b951291c-1f2c-4704-9f2b-24adec83bffc.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        </div>

        {/* Hero Content - Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <div className="glass-panel-warm rounded-3xl p-8 lg:p-12 animate-fade-in">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-primary font-medium text-lg">Health to everyone</p>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    Explore the wonders of{' '}
                    <span className="text-primary">inner peace</span> of mind.
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through a combination of physical postures, breath control, and
                    meditation, yoga helps to harmonize the body and mind,
                    fostering overall well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Sparsh Yoga
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of JP Nagar, Bangalore, Sparsh Yoga is your sanctuary for 
              wellness and spiritual growth. We believe in making yoga accessible to everyone, 
              regardless of their experience level or physical capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with the vision of bringing authentic yoga practices to the modern world, 
                Sparsh Yoga has been serving the JP Nagar community with dedication and passion. 
                Our name "Sparsh" means "touch" in Sanskrit, representing our commitment to touching 
                lives through the transformative power of yoga.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine traditional yoga wisdom with contemporary teaching methods to create 
                a holistic experience that nurtures both body and mind. Our studio is a welcoming 
                space where students can explore their practice in a supportive environment.
              </p>
            </div>
            <div className="glass-panel-warm rounded-3xl p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  [Placeholder for Studio Photo]<br />
                  Interior view of our peaceful yoga studio
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass-panel-warm rounded-3xl p-8 shadow-xl order-2 lg:order-1">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  [Placeholder for Team Photo]<br />
                  Meet our certified yoga instructors
                </p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a community where individuals can discover their inner strength, 
                achieve physical wellness, and find mental peace through the ancient practice of yoga. 
                We are committed to providing authentic, accessible, and transformative yoga experiences.
              </p>
              <div className="flex items-center space-x-3">
                <Target className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Authentic yoga practices rooted in tradition</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Personalized attention for every student</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-foreground font-medium">Certified instructors with years of experience</span>
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
    </div>
  );
};

export default Home;
