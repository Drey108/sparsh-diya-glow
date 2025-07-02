
import { Heart, Target, Award, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
            🌿 About Us
          </h2>
          <p className="hero-subtitle text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Located in the heart of JP Nagar, Bangalore, Sparsh Yoga is your sanctuary for 
            wellness and spiritual growth. We believe in making yoga accessible to everyone.
          </p>
        </div>

        {/* Meet Our Instructors Section - Diagonal Layout */}
        <div className="space-y-12 sm:space-y-20 mb-12 sm:mb-20">
          <div className="text-center">
            <h3 className="section-title text-2xl md:text-3xl text-gray-900 mb-8">🧑‍🏫 Meet Our Instructors</h3>
            <p className="hero-subtitle text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified instructors bring years of experience and deep knowledge of traditional yoga practices.
            </p>
          </div>

          {/* Instructor 1 - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              {/* INSERT INSTRUCTOR 1 IMAGE HERE - Route to /lovable-uploads/biman.jpg */}
              <img 
                src="/lovable-uploads/c98416de-18ea-436f-8704-b5ad2efc2756.png" 
                alt="Biman - Yoga Instructor"
                className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
              />
            </div>
            
            <div className="space-y-6">
              <h4 className="section-title text-xl sm:text-2xl text-gray-900">Biman</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                [Brief bio and background will be added here. Specialization in Therapy Yoga, 
                with extensive experience in helping students overcome physical challenges through yoga.]
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Specialization: Therapy Yoga & Physical Rehabilitation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Experience: [Years] of dedicated teaching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Teaching Philosophy: [Philosophy will be added]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Instructor 2 - Text Left, Image Right (Diagonal Layout) */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h4 className="section-title text-xl sm:text-2xl text-gray-900">Saranga</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                [Brief bio and background will be added here. Specialization in Prenatal Yoga, 
                with expertise in guiding expecting mothers through safe and beneficial practices.]
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Specialization: Prenatal Yoga & Women's Wellness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Experience: [Years] of specialized training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Teaching Philosophy: [Philosophy will be added]</span>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              {/* INSERT INSTRUCTOR 2 IMAGE HERE - Route to /lovable-uploads/saranga.jpg */}
              <img 
                src="/lovable-uploads/93bd527d-87b5-4d41-9dcc-68344eaa5a60.png" 
                alt="Saranga - Yoga Instructor"
                className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
          <div className="space-y-6">
            <h3 className="section-title text-xl sm:text-2xl md:text-3xl text-gray-900">🌿 Our Story</h3>
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
          
          <div className="relative">
            {/* INSERT OUR STORY IMAGE HERE - Route to /lovable-uploads/ourstory.jpg */}
            <img 
              src="/lovable-uploads/7b4a3e79-b8c4-4d38-85d4-cba6d03539ba.png" 
              alt="Our Story - Yoga Community"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            {/* INSERT OUR MISSION IMAGE HERE - Route to /lovable-uploads/ourmission.jpg */}
            <img 
              src="/lovable-uploads/4f15f81c-8817-4c69-a1f4-da250edf056d.png" 
              alt="Our Mission - Wellness Journey"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="section-title text-2xl md:text-3xl text-gray-900">⭐ Our Mission</h3>
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
  );
};

export default AboutSection;
