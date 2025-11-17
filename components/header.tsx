'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="jindal-logo.webp"
            alt="Jindal's Electric"
            className="h-18 w-auto"
          />
          {/* <span className="font-bold text-lg hidden sm:inline text-foreground">Jindal Electric</span> */}
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#why-choose" className="text-sm hover:text-primary transition">Features</a>
          <a href="#industries" className="text-sm hover:text-primary transition">Industries</a>
          <a href="#benchmarks" className="text-sm hover:text-primary transition">Performance</a>
          <a href="#faq" className="text-sm hover:text-primary transition">FAQs</a>
        </nav>

        <div className="hidden md:flex gap-3">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={scrollToForm}>Get Analysis</Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              <a href="#why-choose" className="text-sm hover:text-primary">Features</a>
              <a href="#industries" className="text-sm hover:text-primary">Industries</a>
              <a href="#benchmarks" className="text-sm hover:text-primary">Performance</a>
              <a href="#faq" className="text-sm hover:text-primary">FAQs</a>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={scrollToForm}>Get Analysis</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
