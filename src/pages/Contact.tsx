
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Ready to start your yoga journey? We'd love to hear from you. Contact us today to learn more about our classes or schedule a visit.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel-warm rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Visit Our Studio
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        JP Nagar, Bangalore<br />
                        Karnataka, India
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open('https://maps.google.com/?q=JP+Nagar+Bangalore', '_blank')}
                      >
                        View on Google Maps
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +91 98765 43210<br />
                        +91 87654 32109
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@sparshyoga.com<br />
                        sparshyogajpnagar@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-1">Studio Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 6:30 AM - 8:00 PM<br />
                        Saturday: 6:30 AM - 7:30 AM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel-warm rounded-3xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-8">
                <MessageCircle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interested in
                  </label>
                  <select className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                    <option>Select a class type</option>
                    <option>Weight Loss Batch</option>
                    <option>Regular Batch</option>
                    <option>Ladies Batch</option>
                    <option>Yoga Therapy</option>
                    <option>Online Classes</option>
                    <option>Personal Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your yoga goals or any questions you have..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-primary-foreground py-3 rounded-xl font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel-warm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Find Us in JP Nagar
            </h2>
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  Interactive map coming soon
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Click the "View on Google Maps" button above for directions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
