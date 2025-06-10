
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
            Ready to start your yoga journey? We'd love to hear from you. Contact us today to learn more about our classes.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel-warm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Visit Our Studio
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
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
                    <h3 className="font-semibold text-foreground text-lg mb-1">Phone & WhatsApp</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-muted-foreground">+91 87654 32109</p>
                      <Button 
                        variant="outline" 
                        className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
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

            {/* Book Free Trial Button */}
            <div className="mt-8 text-center">
              <Button 
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => {
                  // Google Form link will be added later
                  alert('Google Form link will be provided soon!');
                }}
              >
                Book a Free Trial
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Google Form link will be provided soon
              </p>
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
