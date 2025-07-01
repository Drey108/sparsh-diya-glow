
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: 'What types of yoga classes do you offer?',
      answer: 'We offer a variety of classes including Weight Loss Batch, Regular Batch, Ladies Batch, Yoga Therapy sessions, Pregnancy Yoga, and specialized programs for stress and anger management.'
    },
    {
      question: 'Do I need prior yoga experience to join?',
      answer: 'No prior experience is needed. Our classes accommodate all levels, from beginners to advanced practitioners. Our instructors provide modifications and guidance suitable for your level.'
    },
    {
      question: 'What should I bring to class?',
      answer: 'We recommend bringing a yoga mat, comfortable clothing, and a water bottle. If you don\'t have a mat, we have some available for use at the studio.'
    },
    {
      question: 'How often should I practice yoga?',
      answer: 'For beginners, we recommend 2-3 classes per week. As you build strength and flexibility, you can increase frequency. Listen to your body and practice at a pace that feels right for you.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes, we offer online classes via Zoom for several of our regular batches. These classes provide the same quality instruction as our in-studio sessions.'
    },
    {
      question: 'Is yoga safe during pregnancy?',
      answer: 'Yes! We offer specialized prenatal yoga classes designed specifically for expecting mothers. These classes focus on safe poses and breathing techniques that support both mother and baby.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-4xl sm:text-5xl text-center text-gray-900 mb-16">
          ❓ Frequently Asked Questions
        </h2>
        <Card className="orange-accent-card">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
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
  );
};

export default FAQSection;
