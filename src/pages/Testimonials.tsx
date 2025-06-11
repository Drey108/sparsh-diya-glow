
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      batch: 'Ladies Batch',
      text: 'Sparsh Yoga has been a life-changing experience for me. The instructors are incredibly knowledgeable and create such a warm, welcoming environment. I feel stronger and more balanced than ever before.',
      duration: '6 months'
    },
    {
      name: 'Rajesh Kumar',
      batch: 'Weight Loss Batch',
      text: 'I started the 6:30 AM weight loss batch 8 months ago and have lost 15 kgs! The combination of yoga poses and breathing techniques has transformed my body and mind. Highly recommended!',
      duration: '8 months'
    },
    {
      name: 'Anitha Reddy',
      batch: 'Yoga Therapy',
      text: 'After suffering from chronic back pain, the yoga therapy sessions have been a blessing. The personalized attention and therapeutic approach have significantly improved my quality of life.',
      duration: '1 year'
    },
    {
      name: 'Vikram Singh',
      batch: 'Regular Batch',
      text: 'The evening regular batch fits perfectly with my work schedule. The studio has a peaceful atmosphere, and I always leave feeling refreshed and stress-free. Great value for money!',
      duration: '4 months'
    },
    {
      name: 'Deepa Nair',
      batch: 'Online Classes',
      text: 'The online Zoom classes are fantastic! Even from home, I feel connected to the instructor and other students. The quality of instruction is excellent, and the timings are very convenient.',
      duration: '3 months'
    },
    {
      name: 'Suresh Patel',
      batch: 'Personal Training',
      text: 'The personal training sessions have been incredibly valuable. Having one-on-one attention helped me correct my postures and advance my practice much faster than I expected.',
      duration: '2 months'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            What Our Students Say
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Hear from our wonderful community of yoga practitioners about their transformative journeys at Sparsh Yoga.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-panel-warm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-end mb-6">
                  <Quote className="w-8 h-8 text-orange-400" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-white/20 pt-4">
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-primary font-medium">
                      {testimonial.batch}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.duration}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel-warm rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Happy Students</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5 Years</div>
                <p className="text-muted-foreground">Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">9</div>
                <p className="text-muted-foreground">Daily Batches</p>
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
              Join Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same transformation as our students. Start your yoga journey 
              with us today and become part of our growing wellness community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                Start Your Journey
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-medium text-lg transition-all duration-300">
                Visit Our Studio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
