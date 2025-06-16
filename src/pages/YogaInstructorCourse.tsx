
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Download, Users, Globe, BookOpen, Heart } from 'lucide-react';

const YogaInstructorCourse = () => {
  const curriculumModules = [
    { icon: '🧘', title: 'Asana', description: 'Postures, alignment & variations' },
    { icon: '🌬️', title: 'Pranayama', description: 'Breathwork & control' },
    { icon: '💧', title: 'Kriya', description: 'Cleansing & detox techniques' },
    { icon: '🧘‍♂️', title: 'Meditation', description: 'Concentration to deep silence' }
  ];

  const additionalTopics = [
    'Foundations of Yoga Philosophy (Ashtanga Yoga, Bhagavad Gita)',
    'Basics of Ayurveda & Yogic Nutrition',
    'Teaching Methodology',
    'Anatomy & Physiology for Yoga',
    'Stress Management Tools',
    'Personality Development & Communication Skills'
  ];

  const uniqueFeatures = [
    { icon: <Globe className="w-6 h-6" />, text: 'International Certification (recognized globally)' },
    { icon: <BookOpen className="w-6 h-6" />, text: 'VYASA University Affiliation' },
    { icon: <Users className="w-6 h-6" />, text: 'Flexible Learning (Theory online, Practical both online & offline)' },
    { icon: <Heart className="w-6 h-6" />, text: 'Career-Ready Curriculum' }
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80')`,
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
                className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                  👉 Join the Next YIC Batch
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full shadow-xl backdrop-blur-sm"
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
      <section className="py-20 bg-gradient-to-b from-warm-cream to-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="section-title text-4xl sm:text-5xl text-foreground mb-8">
                📚 About the Yoga Instructor Course
              </h2>
              <div className="space-y-6 text-lg text-text-secondary">
                <p>200-hour certified course, affiliated with VYASA University, Bangalore</p>
                <p>Ideal for yoga enthusiasts, aspiring teachers, wellness professionals & spiritual seekers</p>
                <p>Taught by experienced faculty with structured guidance</p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <Card className="clean-card">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-foreground mb-16">
            🎓 What Makes This Course Unique?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <Card key={index} className="clean-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center text-orange-600">
                    {feature.icon}
                  </div>
                  <p className="text-foreground font-medium">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gradient-to-b from-soft-gray to-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-foreground mb-16">
            🧠 Course Curriculum Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {curriculumModules.map((module, index) => (
              <Card key={index} className="clean-card text-center">
                <CardContent className="p-8">
                  <div className="text-6xl mb-4">{module.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-text-secondary">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="clean-card">
            <CardHeader>
              <CardTitle className="text-2xl">💡 Additional Learning Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalTopics.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Details Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-foreground mb-16">
            🕰️ Course Details
          </h2>
          <Card className="clean-card">
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
              className="bg-primary hover:bg-accent text-primary-foreground px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                🎓 Enroll Now – Limited Seats Only
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Learn with SparshYoga */}
      <section className="py-20 bg-gradient-to-b from-warm-cream to-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-foreground mb-16">
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
              <Card key={index} className="clean-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-foreground mb-16">
            📍 Where Can You Learn?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="clean-card">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🌐</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Online</h3>
                <p className="text-text-secondary">Live/Recorded classes from anywhere in the world</p>
              </CardContent>
            </Card>
            <Card className="clean-card">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🧘</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Offline</h3>
                <p className="text-text-secondary">At SparshYoga Center, JP Nagar 6th Phase, Bangalore</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-soft-gray to-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-4xl sm:text-5xl text-center text-foreground mb-16">
            💬 Student Testimonials
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-foreground mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer className="text-text-secondary font-medium">
                    – {testimonial.author}
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-4xl sm:text-5xl text-foreground mb-12">
            🚀 Ready to Begin Your Yoga Journey?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                🌼 Apply Now
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg rounded-full shadow-lg"
            >
              <a href="https://forms.gle/xEGi4UTWiQqTXGgb8" target="_blank" rel="noopener noreferrer">
                💌 Talk to an Advisor
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg rounded-full shadow-lg"
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
