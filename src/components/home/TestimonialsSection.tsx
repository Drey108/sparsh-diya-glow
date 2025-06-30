
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-6">
            💬 What Our Students Say
          </h2>
          <p className="hero-subtitle text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Hear from our wonderful community of yoga practitioners about their transformative journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Testimonial 1 */}
          <Card className="orange-accent-card">
            <CardContent className="p-8">
              <div className="flex justify-end mb-6">
                <Quote className="w-8 h-8 text-orange-400" />
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 italic text-lg">
                "Sparsh Yoga has been a life-changing experience for me. The instructors are incredibly knowledgeable and create such a warm, welcoming environment. I feel stronger and more balanced than ever before."
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 text-lg">
                  Priya Sharma
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-orange-600 font-medium">
                    Ladies Batch
                  </p>
                  <p className="text-sm text-gray-500">
                    6 months
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="orange-accent-card">
            <CardContent className="p-8">
              <div className="flex justify-end mb-6">
                <Quote className="w-8 h-8 text-orange-400" />
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 italic text-lg">
                "I started the 6:30 AM weight loss batch 8 months ago and have lost 15 kgs! The combination of yoga poses and breathing techniques has transformed my body and mind. Highly recommended!"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 text-lg">
                  Rajesh Kumar
                </h4>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-orange-600 font-medium">
                    Weight Loss Batch
                  </p>
                  <p className="text-sm text-gray-500">
                    8 months
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            className="minimal-button text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto bg-orange-500 hover:bg-orange-600"
            onClick={() => window.open('https://forms.gle/Vqn3QTrxrpJJVvPd6', '_blank')}
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
