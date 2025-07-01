
import { Heart, Users, Clock, Target } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
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
  ];

  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
            ⭐ Why Choose Sparsh Yoga?
          </h2>
          <p className="hero-subtitle text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Experience the transformative power of yoga in our warm, welcoming space
            designed for your wellness journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
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
  );
};

export default WhyChooseSection;
