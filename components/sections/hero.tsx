'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Form from './form'
import ContactForm from './form'

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Integrate with backend/email service
    setFormData({ name: '', email: '', phone: '', company: '' })
  }

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                <Zap size={16} />
                <span className="text-sm font-medium">Industry-Trusted Solution</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Protect Your Equipment. Reduce Energy Loss.
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Our high-efficiency AVC systems deliver precise voltage regulation, safeguarding motors, HVAC systems, lifts, and sensitive machinery from fluctuations.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-primary-foreground/80 font-semibold">
                ✓ 99% voltage problem resolution • ✓ 18–20 year lifespan • ✓ Maintenance-free
              </p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-primary-foreground/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Free Consultation</h3>
            <p className="text-muted-foreground mb-6 text-sm">Fill out the form below. Our experts will contact you within 30 minutes.</p>
            <ContactForm targetId="hubspot-form-hero" />
            
            {/* <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                  placeholder="Your company"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mt-2"
              >
                Get Free Consultation <ArrowRight size={18} />
              </button>

              <p className="text-xs text-center text-muted-foreground">
                We'll contact you within 30 minutes. No spam, just solutions.
              </p>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  )
}
