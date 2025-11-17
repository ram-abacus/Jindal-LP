'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X, ArrowRight } from 'lucide-react'

const features = [
  { feature: 'Input Voltage Range', jindal: '300–500V (wide range)', others: '350–450V (limited)' },
  { feature: 'Response Time', jindal: '<10ms (instant)', others: '50–100ms (slow)' },
  { feature: 'Efficiency', jindal: '99.5% (industry-leading)', others: '95–97%' },
  { feature: 'Voltage Accuracy', jindal: '±1% (precise)', others: '±3–5% (variable)' },
  { feature: 'Lifespan', jindal: '18–20 years', others: '8–12 years' },
  { feature: 'Maintenance', jindal: 'Zero required', others: 'Regular maintenance needed' },
]

export function ComparisonTable() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Jindal vs Others</h2>
          <p className="text-lg text-muted-foreground">See why we're the industry standard</p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 font-bold">Feature</th>
                <th className="text-center py-4 px-4 font-bold text-primary">Jindal Electric</th>
                <th className="text-center py-4 px-4 font-bold text-muted-foreground">Others</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition">
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span>{row.jindal}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" onClick={scrollToForm}>
            See How We Compare for Your Needs <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  )
}
