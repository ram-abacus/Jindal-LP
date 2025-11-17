'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Zap, Award, CheckCircle } from 'lucide-react'

const certifications = [
  { icon: Shield, name: 'ISO 9001:2015', desc: 'Quality Management' },
  { icon: Zap, name: 'ISI Certified', desc: 'Indian Standards' },
  { icon: Award, name: 'CE Mark', desc: 'European Compliance' },
  { icon: CheckCircle, name: 'RoHS Compliant', desc: 'Environmental Safe' }
]

export function Certifications() {
  return (
    <section className="w-full py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Compliance</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <Card key={index} className="p-6 text-center">
                <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.desc}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
