import { Header } from '@/components/header'
import { HeroSection } from '@/components/sections/hero'
import { ClientLogos } from '@/components/sections/client-logos'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { IndustriesServe } from '@/components/sections/industries'
import { ComparisonTable } from '@/components/sections/comparison'
import { Testimonials } from '@/components/sections/testimonials'
import { TechnicalBenchmarks } from '@/components/sections/technical-benchmarks'
import { Certifications } from '@/components/sections/certifications'
import { ProductShowcase } from '@/components/sections/product-showcase'
import { CaseStudies } from '@/components/sections/case-studies'
import { FAQSection } from '@/components/sections/faq'
import { CallbackGuarantee } from '@/components/sections/callback-guarantee'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <HeroSection />
      <ClientLogos />
      <WhyChooseUs />
      <IndustriesServe />
      <ComparisonTable />
      <TechnicalBenchmarks />
      <Testimonials />
      <CaseStudies />
      <ProductShowcase />
      <FAQSection />
      <CallbackGuarantee />
      {/* <Footer /> */}
    </main>
  )
}
