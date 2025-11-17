'use client'

import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary font-bold text-sm">JE</span>
              </div>
              <span className="font-bold">Jindal Electric</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Protecting industries worldwide with premium voltage stability solutions since 1995.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground/70">Compact Series</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70">Industrial Series</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70">Enterprise Series</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70">Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-foreground/70">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground/70">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@jindal.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Faridabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2025 Jindal Electric. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground/70"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-primary-foreground/70"><Twitter size={18} /></a>
            <a href="#" className="hover:text-primary-foreground/70"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
