
import { Heart, Users, Clock, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, hsl(35 25% 98%) 0%, hsl(35 25% 94%) 100%)'
    }}>
      {/* Hero Section */}
      <section className="px-4 pb-20 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* INSERT SERVICES HERO IMAGE HERE - Route to appropriate image from /lovable-uploads/ */}
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            🧘‍♂️ Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Discover our range of specialized yoga programs designed to meet your unique wellness needs.
          </p>
        </div>
      </section>

      {/* Services in Diagonal Layout */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Service 1 - Yoga for Pregnancy */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* INSERT PREGNANCY YOGA IMAGE HERE - Route to appropriate image from /lovable-uploads/ */}
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🧘‍♀️</div>
                    <p className="font-medium">Prenatal Yoga</p>
                    <p className="text-sm">Safe practices for mothers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="section-title text-2xl md:text-3xl text-gray-900">🧘‍♀️ Yoga for Pregnancy</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Safe and gentle yoga practices designed specifically for expecting mothers. Our prenatal classes focus on 
                breathing techniques, gentle stretches, and poses that support both mother and baby throughout pregnancy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Safe poses for all trimesters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Certified prenatal instructors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - Yoga for Weight Loss */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* INSERT WEIGHT LOSS YOGA IMAGE HERE - Route to appropriate image from /lovable-uploads/ */}
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🔥</div>
                    <p className="font-medium">Weight Loss Yoga</p>
                    <p className="text-sm">Dynamic fitness focused</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="section-title text-2xl md:text-3xl text-gray-900">🔥 Yoga for Weight Loss</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Dynamic sequences and poses designed to boost metabolism and support healthy weight management. 
                Our specialized weight loss program combines traditional yoga with modern fitness principles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Metabolism boosting sequences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Proven results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Morning and evening batches</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 - Personalized Guidance for Physical Problems */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* INSERT THERAPEUTIC YOGA IMAGE HERE - Route to appropriate image from /lovable-uploads/ */}
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">🛡️</div>
                    <p className="font-medium">Therapeutic Yoga</p>
                    <p className="text-sm">Healing focused practice</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="section-title text-2xl md:text-3xl text-gray-900">🛡️ Personalized Guidance for Physical Problems</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Specialized support for back pain, stiffness, joint issues, and other physical concerns. 
                Our therapeutic approach combines traditional yoga therapy with modern understanding of anatomy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Individual assessment and planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Experienced therapeutic instructors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Targeted healing practices</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 - Yoga for Stress Management */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* INSERT STRESS MANAGEMENT YOGA IMAGE HERE - Route to appropriate image from /lovable-uploads/ */}
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">😌</div>
                    <p className="font-medium">Stress Relief Yoga</p>
                    <p className="text-sm">Mental wellness focused</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="section-title text-2xl md:text-3xl text-gray-900">😌 Yoga for Stress Management</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Calming practices designed to reduce stress, anxiety, and promote mental well-being. 
                Learn techniques for managing daily stress and finding inner peace through mindful movement and breathing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Mindfulness and meditation techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Stress relief breathing practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Mental wellness focused approach</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5 - Yoga for Anger Management */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden border border-orange-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* INSERT ANGER MANAGEMENT YOGA IMAGE HERE - Route to appropriate image from /lovable-uploads/ */}
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4">😠</div>
                    <p className="font-medium">Emotional Balance</p>
                    <p className="text-sm">Inner peace cultivation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="section-title text-2xl md:text-3xl text-gray-900">😠 Yoga for Anger Management</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Mindful techniques designed to help manage emotions and cultivate inner peace. 
                Learn to channel negative emotions constructively through specific yoga practices and breathing techniques.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Emotional regulation techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Supportive group environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Personal transformation focus</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel-warm rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us for a transformative experience that nurtures both body and mind. 
              Book your free trial class today and discover the perfect service for your wellness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <Link to="/contact">👉 Book a Free Trial Class</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium text-lg transition-all duration-300"
              >
                <Link to="/classes">View Class Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
