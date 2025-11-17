'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, PhoneCall, CheckCircle, ArrowRight, Contact } from 'lucide-react'
import { useState } from 'react'
import ContactForm from './form'

export function CallbackGuarantee() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    issues: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', company: '', phone: '', issues: '' })
  }

  return (
    <section id="contact-form" className="w-full py-20 md:py-28 bg-gradient-to-br from-primary to-primary/95 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8" />
                <span className="text-xl font-bold">30-Minute Callback Guarantee</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Eliminate Voltage Problems?
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Speak directly with our technical experts within 30 minutes. We'll assess your specific voltage challenges and recommend the perfect solution for your facility.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Free On-Site Voltage Analysis</p>
                  <p className="text-sm text-primary-foreground/80">We assess your current voltage patterns at no cost</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Customized ROI Projections</p>
                  <p className="text-sm text-primary-foreground/80">See exact payback period & savings specific to your operation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold">No Obligation Consultation</p>
                  <p className="text-sm text-primary-foreground/80">Understand your options without pressure</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-primary-foreground text-foreground">
            <h3 className="text-2xl font-bold mb-6">Quick Contact Form</h3>

            <ContactForm targetId="hubspot-form-callback" />

            {/* <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Current Voltage Issues</label>
                <textarea
                  name="issues"
                  value={formData.issues}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
                  placeholder="Describe your voltage challenges"
                  rows={3}
                />
              </div>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Get Callback in 30 Minutes <ArrowRight size={18} />
              </Button>
              <p className="text-xs text-muted-foreground text-center">We respect your privacy. Your info is secure.</p>
            </form> */}
          </Card>
        </div>
      </div>
    </section>
  )
}
