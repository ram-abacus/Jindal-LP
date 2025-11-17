'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    name: 'Compact Series',
    capacity: '30–100 kVA',
    image: '/avc-systems/compact-voltage-controller.jpg',
    features: ['Balanced control', 'Oil-cooled', 'Space-efficient'],
    use: 'Small to medium facilities'
  },
  {
    name: 'Industrial Series',
    capacity: '100–1000 kVA',
    image: '/avc-systems/industrial-voltage-stabilizer.jpg',
    features: ['Unbalanced option', 'Dual cooling', 'High efficiency'],
    use: 'Manufacturing plants',
    featured: true
  },
  {
    name: 'Enterprise Series',
    capacity: '1000–5000 kVA',
    image: '/avc-systems/enterprise-voltage-controller.jpg',
    features: ['Three-phase balancing', 'Custom integration', 'Extended warranty'],
    use: 'Large industrial complexes'
  }
]

export function ProductShowcase() {
  return (
    <section className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Range</h2>
          <p className="text-lg text-muted-foreground">Find the perfect capacity for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden hover:shadow-xl hover:ring-2 hover:ring-primary transition-shadow p-0`}
            >
              {product.featured && (
                <div className="absolute top-0 left-0 w-full bg-primary text-primary-foreground py-2 px-4 text-center font-bold text-sm">
                  Most Popular
                </div>
              )}
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-lg text-primary font-bold mb-4">{product.capacity}</p>
                <div className="space-y-3 mb-4">
                  <p className="text-sm text-muted-foreground">{product.use}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
