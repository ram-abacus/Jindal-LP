import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Script from 'next/script'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Automatic Voltage Controller | Jindal Electric - Industrial Protection & Energy Savings",
  description: "India's leading Automatic Voltage Controller manufacturer. 80% equipment failure reduction, 30% energy savings, 6-18 month payback. 35+ countries, 5 continents.",
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/avc-systems/favicon.gif',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/avc-systems/favicon.gif',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/avc-systems/favicon.gif',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17732096688"
        />

        <Script id="google-gtag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17732096688');
          `}
        </Script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
