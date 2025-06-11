
import { Clock, Users, Heart, Video, User } from 'lucide-react';
import { ScrollIndicator } from '@/components/ui/scroll-indicator';
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
    <div className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-b from-orange-50/50 via-transparent to-orange-50/30">
      {/* Hero Section */}
      <section className="px-4 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center relative px-2">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -z-10"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in relative">
            Our Classes
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"></div>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in mt-6 sm:mt-8 max-w-2xl mx-auto">
            Choose from our diverse range of yoga classes designed to meet your unique needs and schedule.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="px-4 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground title-underline">
              Class Schedule
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 sm:mt-8 max-w-2xl mx-auto px-2">
              Most classes run Monday to Friday, with our specialized Weight Loss Batch available Monday to Saturday
            </p>
          </div>

          <div className="glass-panel-warm rounded-xl sm:rounded-3xl p-4 sm:p-8 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <div className="relative">
                <ScrollIndicator direction="horizontal" />
                <table className="w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-left bg-orange-100/50 rounded-tl-xl sm:rounded-tl-2xl border-b-2 border-orange-200/30">
                      <div className="text-base sm:text-lg font-semibold text-orange-900">Time</div>
                    </th>
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-left bg-orange-100/50 border-b-2 border-orange-200/30">
                      <div className="text-base sm:text-lg font-semibold text-orange-900">Class Type</div>
                    </th>
                    <th className="py-4 sm:py-6 px-4 sm:px-6 text-left bg-orange-100/50 rounded-tr-xl sm:rounded-tr-2xl border-b-2 border-orange-200/30">
                      <div className="text-base sm:text-lg font-semibold text-orange-900">Schedule</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100/20">
                  {schedule.map((class_, index) => (
                    <tr
                      key={index}
                      className="group hover:bg-orange-50/50 active:bg-orange-100/50 transition-colors duration-200 touch-feedback"
                    >
                      <td className="py-4 sm:py-6 px-4 sm:px-6">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-orange-500" />
                          <span className="text-gray-900 font-medium whitespace-nowrap">{class_.time}</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-4 sm:px-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <class_.icon className="w-5 h-5 text-orange-500" />
                          </div>
                          <span className="text-gray-900 font-medium">{class_.type}</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-4 sm:px-6">
                        <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-700 group-hover:bg-orange-200 transition-colors duration-200">
                          {class_.notes}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 title-underline">
              Pricing Plans
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-2">
              Flexible pricing options to suit your commitment level
            </p>
          </div>

          <div className="glass-panel-warm rounded-xl sm:rounded-3xl p-4 sm:p-8 shadow-xl overflow-x-auto border border-orange-200/30 backdrop-blur-md">
            <div className="relative">
              <ScrollIndicator direction="horizontal" />
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-3 sm:px-4 font-semibold text-orange-900 text-sm sm:text-base">Batch Type</th>
                    <th className="text-center py-4 px-3 sm:px-4 font-semibold text-orange-900 text-sm sm:text-base">Monthly</th>
                    <th className="text-center py-4 px-3 sm:px-4 font-semibold text-orange-900 text-sm sm:text-base">3 Months</th>
                    <th className="text-center py-4 px-3 sm:px-4 font-semibold text-orange-900 text-sm sm:text-base">6 Months</th>
                    <th className="text-center py-4 px-3 sm:px-4 font-semibold text-orange-900 text-sm sm:text-base">12 Months</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((plan, index) => (
                    <tr
                      key={index}
                      className="border-b border-orange-100/20 hover:bg-orange-50/30 active:bg-orange-100/30 transition-all duration-300 touch-feedback"
                    >
                      <td className="py-4 px-3 sm:px-4 font-medium text-orange-900 text-sm sm:text-base">{plan.type}</td>
                      <td className="py-4 px-3 sm:px-4 text-center text-orange-800 text-sm sm:text-base">{plan.monthly}</td>
                      <td className="py-4 px-3 sm:px-4 text-center text-orange-800 text-sm sm:text-base">{plan.threeMonths}</td>
                      <td className="py-4 px-3 sm:px-4 text-center text-orange-800 text-sm sm:text-base">{plan.sixMonths}</td>
                      <td className="py-4 px-3 sm:px-4 text-center text-orange-800 text-sm sm:text-base">{plan.twelveMonths}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="clean-card p-6 interactive-touch" role="button" tabIndex={0}>
              <div className="flex items-center space-x-3 mb-4">
                <Video className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Online Classes</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Join our online sessions via Zoom for classes at 6:30 AM, 5 PM, 6 PM, and 7 PM.
              </p>
              <p className="text-lg font-semibold text-primary">₹1,500/month</p>
            </div>

            <div className="clean-card p-6 interactive-touch" role="button" tabIndex={0}>
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
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-xl sm:rounded-3xl blur-2xl"></div>
          <div className="glass-panel-warm rounded-xl sm:rounded-3xl p-8 sm:p-12 text-center relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Join a Class?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us to book your spot or schedule a free consultation to find 
              the perfect class for your needs.
            </p>
            <Button 
              asChild
              className="minimal-button text-base sm:text-lg w-full sm:w-auto"
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
