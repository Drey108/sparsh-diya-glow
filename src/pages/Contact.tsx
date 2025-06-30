
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
                      onClick={() => window.open('https://maps.app.goo.gl/bjrKsDGyMDWYYm919', '_blank')}
                    >
                      View on Google Maps
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">WhatsApp</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">+91 97409 27213</p>
                      <Button 
                        variant="outline" 
                        className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                        onClick={() => window.open('https://wa.me/919740927213', '_blank')}
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
                      sparshmotivationcentre@gmail.com
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

            {/* Book Free Trial Button - Updated with new form link */}
            <div className="mt-8 text-center">
              <Button 
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                onClick={() => window.open('https://forms.gle/Vqn3QTrxrpJJVvPd6', '_blank')}
              >
                Book a Free Trial
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Fill out our quick form to get started
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel-warm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Find Us in JP Nagar
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8666534968745!2d77.5946026!3d12.9141417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjkiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1645123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sparsh Yoga Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://maps.app.goo.gl/bjrKsDGyMDWYYm919', '_blank')}
              >
                Open in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
