'use client'

import { Factory, Utensils, Zap, Building2, Database, Hotel, Hammer, Package, Cpu, Heart, Shirt, Printer, Wind, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const industries = [
  // RED - Critical Industries
  { icon: Factory, name: 'Heavy Manufacturing', priority: 'critical' },
  { icon: Utensils, name: 'Food & Beverage', priority: 'critical' },
  { icon: Hammer, name: 'Machine Tools & Engineering', priority: 'critical' },
  { icon: Database, name: 'IT & Data Centers', priority: 'critical' },
  { icon: Heart, name: 'Healthcare & Medical', priority: 'critical' },
  { icon: Hotel, name: 'Hospitality & Commercial', priority: 'critical' },
  
  // GREEN - Important Sub-Categories
  { icon: Package, name: 'Steel & Metal Fabrication', priority: 'important' },
  { icon: Cpu, name: 'Chemical & Petrochemical', priority: 'important' },
  { icon: Zap, name: 'Power Plants', priority: 'important' },
  { icon: Shirt, name: 'Textile & Spinning Mills', priority: 'important' },
  { icon: Printer, name: 'Packaging & Printing', priority: 'important' },
  { icon: Wind, name: 'Renewable Energy', priority: 'important' },
  { icon: Radio, name: 'Telecom Infrastructure', priority: 'important' },
]

export function IndustriesServe() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="industries" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our voltage controllers protect critical operations across India's most demanding industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const isCritical = industry.priority === 'critical'
            
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center gap-3 p-6 rounded-lg border-2 transition ${ 
                  isCritical 
                    ? 'bg-primary/5 border-primary/50 hover:border-primary' 
                    : 'bg-background border-border hover:border-primary/30'
                }`}
              >
                <Icon className={`w-8 h-8 ${isCritical ? 'text-primary' : 'text-primary/60'}`} />
                <p className={`text-sm font-medium text-center ${isCritical ? 'font-semibold' : ''}`}>
                  {industry.name}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" onClick={scrollToForm}>
            Check Solution for Your Industry <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
