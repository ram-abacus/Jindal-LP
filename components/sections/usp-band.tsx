'use client'

import { Shield, Zap, Clock, Wrench } from 'lucide-react'

const usps = [
  {
    icon: Shield,
    title: 'Complete Protection',
    description: '99% voltage problem resolution'
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Up to 30% energy savings'
  },
  {
    icon: Clock,
    title: 'Instant Response',
    description: 'Less than 10ms correction time'
  },
  {
    icon: Wrench,
    title: 'Zero Maintenance',
    description: '18–20 year maintenance-free operation'
  }
]

export function USPBand() {
  return (
    <section className="w-full py-12 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => {
            const Icon = usp.icon
            return (
              <div key={index} className="flex items-start gap-4 p-4">
                <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-sm">{usp.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{usp.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
