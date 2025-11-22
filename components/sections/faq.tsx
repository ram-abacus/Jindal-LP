'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What voltage fluctuations can the AVC handle?',
    answer: 'Jindal AVCs can handle input ranges from 300–500V (wider than most competitors at 350–450V) and deliver stable 400V (±1%) output, regardless of incoming variations.'
  },
  {
    question: 'How quickly does the AVC respond to voltage changes?',
    answer: 'The response time is less than 10 milliseconds—the fastest in the industry. This rapid correction protects sensitive equipment from transient voltage spikes and dips.'
  },
  {
    question: 'What is the typical payback period?',
    answer: 'Based on real-world installations, payback occurs in 6–18 months through a combination of energy savings (up to 30%) and avoided equipment replacement costs (up to 80% failure reduction).'
  },
  {
    question: 'Is the AVC maintenance-free?',
    answer: 'Yes. Jindal AVCs are engineered for 100% continuous duty with virtually zero maintenance. The oil-cooled design and quality components ensure 18–20 years of trouble-free operation.'
  },
  {
    question: 'Can the AVC handle unbalanced three-phase loads?',
    answer: 'Yes. We offer both balanced control (for balanced supplies) and individual phase control models for facilities with unbalanced input supplies or loads up to 40% unbalance.'
  },
  {
    question: 'What industries benefit most from Jindal AVCs?',
    answer: 'Industries with sensitive equipment and critical uptime requirements: pharma, food processing, textile mills, cold storage, hospitals, data centers, and manufacturing plants.'
  },
  {
    question: 'Do you offer customization for specific requirements?',
    answer: 'Absolutely. Beyond our standard models (30–5000 kVA), we design bespoke solutions tailored to specific customer requirements including custom voltage ranges and integration options.'
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about voltage stability</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="last:border-b-1 border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
