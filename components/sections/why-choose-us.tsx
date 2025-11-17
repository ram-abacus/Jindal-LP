'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, TrendingUp, Settings, Target, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    title: 'Proven Reliability',
    description: 'Trusted across 35+ countries and 5 continents for mission-critical operations'
  },
  {
    icon: TrendingUp,
    title: 'Measurable ROI',
    description: '6-18 month payback period with continuous energy & equipment savings'
  },
  {
    icon: Settings,
    title: 'Easy Installation',
    description: 'Seamless integration with existing systems, indoor/outdoor mounting options'
  },
  {
    icon: Target,
    title: 'Precision Control',
    description: 'Microprocessor-based regulation with ±1% output voltage accuracy'
  }
]

export function WhyChooseUs() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="why-choose" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Jindal Electric</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backed by decades of expertise, our Automatic Voltage Controllers deliver unmatched performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" onClick={scrollToForm}>
            Get Your Personalized Assessment <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
