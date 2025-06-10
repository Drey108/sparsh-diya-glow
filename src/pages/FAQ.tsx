
const FAQ = () => {
  const faqs = [
    {
      question: "What should I bring to my first yoga class?",
      answer: "Just bring yourself and a water bottle! We provide yoga mats, blocks, and other props. Wear comfortable, stretchy clothing that allows you to move freely."
    },
    {
      question: "Do I need any prior experience to join?",
      answer: "Not at all! Our classes welcome students of all levels, from complete beginners to advanced practitioners. Our instructors provide modifications for every pose."
    },
    {
      question: "What is the difference between Regular Batch and Weight Loss Batch?",
      answer: "The Weight Loss Batch focuses on dynamic movements and sequences designed to boost metabolism and burn calories, while Regular Batches offer a balanced mix of poses for overall wellness."
    },
    {
      question: "Can I attend classes if I have health conditions?",
      answer: "Our Yoga Therapy sessions are specifically designed for individuals with health concerns. Please consult with our instructors about your condition before starting any practice."
    },
    {
      question: "What are the benefits of online classes?",
      answer: "Online classes offer flexibility to practice from home while still receiving live instruction and guidance. You can join from anywhere with a good internet connection."
    },
    {
      question: "How do I book a class?",
      answer: "You can contact us through the 'Get in Touch' page to book your spot or schedule a free trial class. We'll help you find the perfect batch for your schedule and needs."
    },
    {
      question: "What if I miss a class?",
      answer: "We understand life happens! Please inform us in advance if you'll miss a class. We can help arrange makeup sessions or provide guidance for home practice."
    },
    {
      question: "Are there any age restrictions?",
      answer: "Our classes are suitable for adults of all ages. For children or seniors, we recommend discussing specific needs with our instructors to ensure the most appropriate practice."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Find answers to common questions about our yoga classes and studio.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-panel-warm rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Q: {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A: {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
