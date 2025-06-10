
import { Clock, Users, Heart, Video, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Classes = () => {
  const schedule = [
    { time: '6:30 AM - 7:30 AM', type: 'Weight Loss Batch', notes: 'Monday to Saturday', icon: Heart },
    { time: '7:30 AM - 8:30 AM', type: 'Regular Batch', notes: 'Monday to Friday', icon: Users },
    { time: '9:00 AM - 10:00 AM', type: 'Ladies Batch', notes: 'Monday to Friday', icon: Users },
    { time: '10:00 AM - 11:00 AM', type: 'Ladies Batch', notes: 'Monday to Friday', icon: Users },
    { time: '11:00 AM - 12:00 PM', type: 'Yoga Therapy', notes: 'Monday to Friday', icon: Heart },
    { time: '4:00 PM - 5:00 PM', type: 'Yoga Therapy', notes: 'Monday to Friday', icon: Heart },
    { time: '5:00 PM - 6:00 PM', type: 'Regular Batch', notes: 'Monday to Friday', icon: Users },
    { time: '6:00 PM - 7:00 PM', type: 'Regular Batch', notes: 'Monday to Friday', icon: Users },
    { time: '7:00 PM - 8:00 PM', type: 'Regular Batch', notes: 'Monday to Friday', icon: Users },
  ];

  const pricing = [
    {
      type: 'Weight Loss Batch (6:30 AM)',
      monthly: '₹2,300',
      threeMonths: '₹6,000',
      sixMonths: '₹11,000',
      twelveMonths: '₹18,000'
    },
    {
      type: 'Other Batches',
      monthly: '₹1,750',
      threeMonths: '₹4,500',
      sixMonths: '₹8,000',
      twelveMonths: '₹15,000'
    },
    {
      type: 'Online Classes (via Zoom)',
      monthly: '₹1,500',
      threeMonths: '—',
      sixMonths: '—',
      twelveMonths: '—'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Classes
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Choose from our diverse range of yoga classes designed to meet your unique needs and schedule.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Class Schedule
            </h2>
            <p className="text-lg text-muted-foreground">
              Most classes run Monday to Friday, Weight Loss Batch runs Monday to Saturday
            </p>
          </div>

          <div className="glass-panel-warm rounded-3xl p-8 shadow-xl overflow-x-auto">
            <div className="space-y-4">
              {schedule.map((class_, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/30 rounded-xl border border-white/20 hover:bg-white/40 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <class_.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {class_.type}
                      </h3>
                      <p className="text-muted-foreground">
                        {class_.time}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {class_.notes}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Pricing Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible pricing options to suit your commitment level
            </p>
          </div>

          <div className="glass-panel-warm rounded-3xl p-8 shadow-xl overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Batch Type</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Monthly</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">3 Months</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">6 Months</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">12 Months</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((plan, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/20 transition-colors">
                      <td className="py-4 px-4 font-medium text-foreground">{plan.type}</td>
                      <td className="py-4 px-4 text-center text-foreground">{plan.monthly}</td>
                      <td className="py-4 px-4 text-center text-foreground">{plan.threeMonths}</td>
                      <td className="py-4 px-4 text-center text-foreground">{plan.sixMonths}</td>
                      <td className="py-4 px-4 text-center text-foreground">{plan.twelveMonths}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="glass-panel-warm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Video className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Online Classes</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Join our online sessions via Zoom for classes at 6:30 AM, 5 PM, 6 PM, and 7 PM.
              </p>
              <p className="text-lg font-semibold text-primary">₹1,500/month</p>
            </div>

            <div className="glass-panel-warm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Personal Training</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Get personalized attention with one-on-one sessions tailored to your specific needs.
              </p>
              <p className="text-lg font-semibold text-primary">₹500 per session</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel-warm rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Join a Class?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to book your spot or schedule a free consultation to find 
              the perfect class for your needs.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
