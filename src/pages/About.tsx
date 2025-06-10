
import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About Sparsh Yoga
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Located in the heart of JP Nagar, Bangalore, Sparsh Yoga is dedicated to 
            bringing ancient wisdom and modern wellness together in a warm, welcoming environment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-panel-warm rounded-3xl p-8 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <Heart className="w-20 h-20 text-primary" />
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Sparsh Yoga, we believe that yoga is more than just physical exercise. 
                It's a journey of self-discovery, healing, and transformation. Our mission 
                is to create a safe, nurturing space where students of all levels can 
                explore the profound benefits of yoga practice.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to making yoga accessible to everyone, regardless of 
                age, fitness level, or experience. Our small but growing community 
                reflects our dedication to personal attention and genuine care for 
                each student's wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Sparsh Yoga
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Compassion',
                description: 'We approach every student with kindness, understanding, and genuine care for their individual journey.'
              },
              {
                icon: Target,
                title: 'Authenticity',
                description: 'We stay true to traditional yoga principles while adapting to modern needs and lifestyles.'
              },
              {
                icon: Users,
                title: 'Community',
                description: 'We foster a supportive environment where students feel connected and encouraged.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We are committed to providing high-quality instruction and exceptional service.'
              }
            ].map((value, index) => (
              <div key={index} className="glass-panel-warm rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel-warm rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Visit Our Studio
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Located in the vibrant JP Nagar area of Bangalore, our studio offers 
              a peaceful sanctuary away from the city's hustle and bustle. Come 
              experience the warm, welcoming atmosphere that makes Sparsh Yoga special.
            </p>
            <div className="text-left max-w-md mx-auto space-y-2">
              <p className="text-foreground font-semibold">📍 JP Nagar, Bangalore</p>
              <p className="text-muted-foreground">Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
