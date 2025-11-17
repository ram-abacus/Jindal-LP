'use client'

import Image from 'next/image'
import { icons, ImageDown } from "lucide-react"

export function ClientLogos() {
  const logoCount = 8
  const clients = {
    "/avc-systems/abb-logo.jpg": "ABB",
    "/avc-systems/BHEL-logo.jpg": "BHEL",
    "/avc-systems/Coca-Cola-logo.jpg": "Coca-Cola",
    "/avc-systems/HAL-logo.jpg": "HAL",
    "/avc-systems/Hero-logo.jpg": "Hero",
    "/avc-systems/Hindlaco-logo.jpg": "Hindlaco",
    "/avc-systems/HUL-logo.jpg": "HUL",
    "/avc-systems/HYATT-logo.jpg": "HYATT",
    // "/avc-systems/ITC-logo.jpg": "ITC",
    // "/avc-systems/lnt-logo.jpg": "L&T",
    // "/avc-systems/Pepsico-logo.jpg": "Pepsico",
    // "/avc-systems/TAJ-logo.jpg": "TAJ",
    // "/avc-systems/tata-logo.jpg": "Tata",
    // "/avc-systems/ultratech-logo.jpg": "Ultratech",
    // "/avc-systems/Yamaha-logo.jpg": "Yamaha",
  }
  const clientEntries = Object.entries(clients);

  return (
    <section className="w-full py-12 bg-gradient-to-r from-muted/30 to-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">
          Trusted by India's Leading Companies
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
          {clientEntries.map(([fileName, label], index) => (
            <div
              key={index}
              className="flex items-center justify-center w-30 h-24 bg-white border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors duration-200"
            >
              <Image
                width={100}
                height={48}
                src={`${fileName}`}
                alt={label}
                className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
              {/* <span className="text-xs text-muted-foreground font-medium">Logo {index + 1}</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
