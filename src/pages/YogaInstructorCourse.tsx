import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Download, Users, Globe, BookOpen, Heart } from 'lucide-react';

const YogaInstructorCourse = () => {
  const uniqueFeatures = [
    { icon: <Globe className="w-6 h-6" />, text: 'International Certification (recognized globally)' },
    { icon: <BookOpen className="w-6 h-6" />, text: 'VYASA University Affiliation' },
    { icon: <Users className="w-6 h-6" />, text: 'Flexible Learning (Theory online, Practical both online & offline)' },
    { icon: <Heart className="w-6 h-6" />, text: 'Career-Ready Curriculum' }
  ];

  const additionalTopics = [
    'Foundations of Yoga Philosophy (Ashtanga Yoga, Bhagavad Gita)',
    'Basics of Ayurveda & Yogic Nutrition',
    'Teaching Methodology',
    'Anatomy & Physiology for Yoga',
    'Stress Management Tools',
    'Personality Development & Communication Skills'
  ];

  const testimonials = [
    {
      quote: "YIC with SparshYoga changed my life. I started as a beginner and now I teach at a studio in Dubai.",
      author: "Anjali D., YIC Graduate"
    },
    {
      quote: "Highly recommended for anyone serious about yoga. Teachers are very knowledgeable and friendly.",
      author: "Ravi K., 2024 Batch"
    }
  ];

  const faqData = [
    {
      question: "Can I pursue the YIC course while working or studying?",
      answer: "Yes, the course is designed with flexibility in mind. You can access recorded lectures anytime and attend live sessions scheduled conveniently on weekends."
    },
    {
      question: "Is there an age requirement to enroll in the course?",
      answer: "Yes, applicants must be at least 18 years old to join this certification program."
    },
    {
      question: "Do I need prior experience or knowledge of yoga to join?",
      answer: "No prior yoga experience is required. The course is structured to guide both beginners and seasoned practitioners through foundational to advanced yogic practices."
    },
    {
      question: "What topics are covered in the course curriculum?",
      answer: "The comprehensive curriculum includes: Asanas (Postures), Pranayama (Breathing Techniques), Sat Kriyas (Cleansing Techniques), Meditation Practices, Teaching Methodology, and Studio Management (Running online/offline yoga businesses). Additionally, expert guest lectures provide deeper insights into yoga philosophy and professional practice."
    },
    {
      question: "How valid is the certification I will receive?",
      answer: "Your certification is accredited by S-VYASA University and SparshYoga, recognized both nationally and internationally, and is valid indefinitely."
    },
    {
      question: "Will the course support me in starting my own yoga studio?",
      answer: "Yes. As a graduate, you will gain access to a network of 1000+ yoga centers and receive guidance through bonus content and additional modules on setting up and managing your own yoga studio—both online and offline."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/22ee7464-da5e-4405-9c81-f4766e33485d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Yoga Instructor Course
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-orange-300 mt-2">(YIC)</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-white/90 mb-4 font-light">
              Transform Your Passion Into Purpose – Enroll in YIC Today
            </p>
            <p className="text-lg sm:text-xl text-white/80 mb-12 leading-relaxed">
              Master the science of traditional yoga with structured, authentic education from VYASA Bangalore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="minimal-button w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 h-auto bg-orange-500 hover:bg-orange-600"
              >
                <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                  👉 Join the Next YIC Batch
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="orange-outline w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 h-auto text-base sm:text-lg bg-white/80 hover:bg-orange-50 text-gray-900 hover:text-orange-600"
              >
                <a href="https://docs.google.com/document/d/1c1LsKir2O85NLzI8XccnufKJWZtMmT3dzzn_p7DrWkE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  📄 Download Brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="section-title text-4xl sm:text-5xl text-gray-900 mb-8">
                📚 About the Yoga Instructor Course
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>200-hour certified course, affiliated with VYASA University, Bangalore</p>
                <p>Ideal for yoga enthusiasts, aspiring teachers, wellness professionals & spiritual seekers</p>
                <p>Taught by experienced faculty with structured guidance</p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <Card className="orange-accent-card">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">200-Hour Yoga Instructor Course</h3>
                  <p className="text-orange-600 font-medium">VYASA University Certified</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
            🎓 What Makes This Course Unique?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <Card key={index} className="orange-accent-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center text-orange-600">
                    {feature.icon}
                  </div>
                  <p className="text-gray-900 font-medium">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum Overview Redesigned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
            🧠 Course Curriculum Overview
          </h2>

          {/* Theoretical Curriculum Section */}
          <div className="mb-20">
            <h3 className="section-title text-3xl sm:text-4xl text-center text-gray-900 mb-12">
              🧠 Theoretical Curriculum
            </h3>
            
            <div className="space-y-16">
              {/* Introduction to Yoga & Its Streams */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/faf437a9-3634-488b-920c-09e1e7e16b5b.png" 
                    alt="Philosophy"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="section-title text-xl sm:text-2xl text-gray-900">🌿 Introduction to Yoga & Its Streams</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Explore the meaning, purpose, and philosophical roots of yoga, including Jnana, Raja, 
                    Bhakti, and Karma Yoga streams. Understand the deeper significance of yoga beyond 
                    physical practice.
                  </p>
                </div>
              </div>

              {/* Indian Culture & Yogic Lifestyle */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="/lovable-uploads/bcd7fec8-7fcb-4d47-873d-b6eedd795048.png" 
                    alt="Culture"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
                  />
                </div>
                
                <div className="space-y-4 order-1 lg:order-2">
                  <h4 className="section-title text-xl sm:text-2xl text-gray-900">🇮🇳 Indian Culture & Yogic Lifestyle</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Understanding the holistic way of life rooted in Indian traditions, values, and spiritual teachings. 
                    Learn how ancient wisdom applies to modern living for complete well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practical Curriculum Section */}
          <div className="mb-16">
            <h3 className="section-title text-3xl sm:text-4xl text-center text-gray-900 mb-12">
              🧘 Practical Curriculum
            </h3>
            
            <div className="space-y-16">
              {/* Asana (Postures) */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/96bcaecd-3ecb-44cb-8433-ef37456d4e6f.png" 
                    alt="Asana"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="section-title text-xl sm:text-2xl text-gray-900">🧘 Asana (Postures)</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Learn foundational standing, sitting, supine, and prone poses with proper alignment, 
                    variations, and therapeutic aspects. Master the art of safe and effective posture practice.
                  </p>
                </div>
              </div>

              {/* Pranayama (Breathwork) */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="/lovable-uploads/25ff2aae-b5c5-4a7f-ab54-26c901b5ac6f.png" 
                    alt="Pranayama"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
                  />
                </div>
                
                <div className="space-y-4 order-1 lg:order-2">
                  <h4 className="section-title text-xl sm:text-2xl text-gray-900">🌬️ Pranayama (Breathwork)</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Master yogic breathing techniques for vitality, focus, and inner calmness. 
                    Learn various pranayama practices that enhance physical and mental well-being.
                  </p>
                </div>
              </div>

              {/* Kriya (Cleansing Techniques) */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/84a12f17-5b85-41fe-9029-fdde7934bee0.png" 
                    alt="Kriya"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="section-title text-xl sm:text-2xl text-gray-900">💧 Kriya (Cleansing Techniques)</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Detoxify the body-mind system using traditional kriyas such as Jalaneti, Kapalabhati, 
                    and more. Learn ancient purification methods for optimal health and clarity.
                  </p>
                </div>
              </div>

              {/* Meditation & Cyclic Meditation */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src="/lovable-uploads/bcd7fec8-7fcb-4d47-873d-b6eedd795048.png" 
                    alt="Meditation"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border border-orange-200 shadow-sm"
                  />
                </div>
                
                <div className="space-y-4 order-1 lg:order-2">
                  <h4 className="section-title text-xl sm:text-2xl text-gray-900">🧘‍♂️ Meditation & Cyclic Meditation</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Build concentration and deep inner stillness using guided and self-led meditation practices. 
                    Experience the transformative power of meditative awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="orange-accent-card">
            <CardHeader>
              <CardTitle className="text-2xl">💡 Additional Learning Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalTopics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-900">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Details Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
            🕰️ Course Details
          </h2>
          <Card className="orange-accent-card">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-lg font-semibold">Detail</TableHead>
                    <TableHead className="text-lg font-semibold">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Duration</TableCell>
                    <TableCell>200 Hours</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mode</TableCell>
                    <TableCell>Online / Offline (Hybrid Available)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Certifications</TableCell>
                    <TableCell>From VYASA University; International Recognition</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Eligibility</TableCell>
                    <TableCell>Anyone aged 18+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Language</TableCell>
                    <TableCell>English / Hindi</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="minimal-button px-12 py-4 text-lg bg-orange-500 hover:bg-orange-600"
            >
              <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                🎓 Enroll Now – Limited Seats Only
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Learn with SparshYoga */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
            🧑‍🏫 Why Learn with SparshYoga?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '250+ students trained across India',
              'Faculty trained by VYASA',
              'Personal mentorship for every student',
              'Lifetime access to community groups (WhatsApp/Telegram)',
              'Career support: Teaching gigs, workshops, referrals for higher studies'
            ].map((point, index) => (
              <Card key={index} className="orange-accent-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-900 font-medium">{point}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
            📍 Where Can You Learn?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="orange-accent-card">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🌐</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Online</h3>
                <p className="text-gray-600">Live/Recorded classes from anywhere in the world</p>
              </CardContent>
            </Card>
            <Card className="orange-accent-card">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🧘</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Offline</h3>
                <p className="text-gray-600">At SparshYoga Center, JP Nagar 6th Phase, Bangalore</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
            💬 Student Testimonials
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-gray-900 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="text-gray-600 font-medium">
                    – {testimonial.author}
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
            ✨ Frequently Asked Questions (FAQ)
          </h2>
          <Card className="orange-accent-card">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-4xl sm:text-5xl text-gray-900 mb-12">
            🚀 Ready to Begin Your Yoga Journey?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Button 
              asChild 
              size="lg" 
              className="minimal-button px-8 py-4 text-lg bg-orange-500 hover:bg-orange-600"
            >
              <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                🌼 Apply Now
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="orange-outline px-8 py-4 text-lg bg-white/80 hover:bg-orange-50 text-gray-900 hover:text-orange-600"
            >
              <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                💌 Talk to an Advisor
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="orange-outline px-8 py-4 text-lg bg-white/80 hover:bg-orange-50 text-gray-900 hover:text-orange-600"
            >
              <a href="https://docs.google.com/document/d/1c1LsKir2O85NLzI8XccnufKJWZtMmT3dzzn_p7DrWkE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                📄 Download Full Syllabus
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaInstructorCourse;
