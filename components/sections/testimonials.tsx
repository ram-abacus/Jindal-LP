'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    designation: 'Plant Manager, Textile Mills',
    image: '/avc-systems/professional-man-headshot.png',
    review: 'Installed Jindal\'s AVC 2 years ago. Equipment failures dropped by 85%, and we\'re saving 12% on energy costs monthly. Best investment we\'ve made.',
    rating: 5
  },
  {
    name: 'Priya Singh',
    designation: 'Operations Lead, Pharma Unit',
    image: '/avc-systems/professional-woman-headshot.png',
    review: 'The voltage stability has been game-changing for our precision equipment. Zero downtime since installation. Highly recommend.',
    rating: 5
  },
  {
    name: 'Arjun Patel',
    designation: 'Director, Cold Storage Facility',
    image: '/avc-systems/professional-headshot-man-business.jpg',
    review: 'Payback happened in just 8 months. The 24/7 voltage protection means our products stay fresh, and customers notice the difference.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Customers Say</h2>
          <p className="text-lg text-muted-foreground">Real results from real industries</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.review}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.designation}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
