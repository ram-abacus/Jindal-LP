'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Textile Manufacturing',
    challenge: 'Frequent motor failures due to voltage fluctuations (340–470V)',
    solution: 'Installed 250 kVA Jindal AVC with balanced control',
    impact: '85% reduction in equipment failures, 12% energy savings, 8-month payback',
    metric: '₹45 Lakhs saved in first year'
  },
  {
    industry: 'Pharmaceutical Facility',
    challenge: 'Sensitive equipment requiring strict voltage tolerance (±1%)',
    solution: 'Enterprise Series 500 kVA with precision regulation',
    impact: 'Zero production downtime, 100% voltage stability, improved product quality',
    metric: '₹28 Lakhs prevented losses'
  },
  {
    industry: 'Cold Storage Chain',
    challenge: 'Voltage spikes damaging compressors and freezing cycles',
    solution: 'Compact Series 60 kVA with over-voltage protection',
    impact: 'Equipment lifespan extended by 5+ years, 15% energy optimization',
    metric: '₹22 Lakhs in avoided replacements'
  }
]

export function CaseStudies() {
  return (
    <section className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">See the impact across industries</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">{study.industry}</h3>
                </div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Challenge</p>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Solution</p>
                  <p>{study.solution}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">Impact</p>
                  <p className="text-green-600 font-semibold">{study.impact}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-primary font-bold text-base">{study.metric}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
