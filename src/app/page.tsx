import Link from "next/link"
import Image from "next/image"
import { Marquee } from "@/components/marquee"
import { PricingCards } from "@/components/pricing-cards"
import { FacilitiesPreview } from "@/components/facilities-preview"
import { FaqSection } from "@/components/faq-section"
import { InstagramSection } from "@/components/instagram-section"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-[#8397a9] overflow-hidden">
        <Image
          src="/images/building.jpg"
          alt="Nordstens Workspace bygning"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
<h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 sm:mb-6">
            Kom indenfor i
            <br />
            <span className="font-semibold">Nordstens Workspace</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Et unikt og levende miljø lige midt i Hillerød. I det smukke Nordstens Hus fra 1887
            bliver fortidens håndværk forenet med nutidens komfort og design — altid med
            fleksibilitet og fællesskab i centrum.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/kontorloesninger"
              className="bg-[#9d2e1e] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-[#8b2518] transition-colors text-sm sm:text-base"
            >
              Se kontorløsninger
            </Link>
            <Link
              href="/kontakt"
              className="border border-white/30 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded hover:border-white/60 transition-colors text-sm sm:text-base"
            >
              Book en rundvisning
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Kontorløsninger
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Find den løsning der passer dig
            </h2>
          </div>
          <PricingCards />
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/kontorloesninger"
              className="text-[#8397a9] border-b border-[#9d2e1e] pb-0.5 text-sm font-medium hover:text-[#9d2e1e] transition-colors"
            >
              Se alle detaljer →
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <InstagramSection />

      {/* Facilities preview */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Faciliteter
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Alt hvad du behøver — inkluderet
            </h2>
          </div>
          <FacilitiesPreview />
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/faciliteter"
              className="text-[#8397a9] border-b border-[#9d2e1e] pb-0.5 text-sm font-medium hover:text-[#9d2e1e] transition-colors"
            >
              Se alle faciliteter →
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#8397a9] text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-4 sm:mb-6">
            Nordstens Hus
          </p>
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6 sm:mb-8">
            "Hvad der er skabt uden omtanke vækker sjældent stor begejstring"
          </blockquote>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            I Nordstens Hus har Hillerød fået et håndgribeligt bevis på fortidens helt unikke håndværk.
            Hele huset er nænsomt restaureret og i stort omfang genskabt som det så ud i slutningen af
            1800-tallet — bl.a. med hjælp fra Nationalmuseet.
          </p>
          <Link
            href="/om-os"
            className="text-white border-b border-[#9d2e1e] pb-0.5 text-sm font-medium hover:text-[#9d2e1e] transition-colors"
          >
            Læs mere om huset →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Spørgsmål & svar
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Ofte stillede spørgsmål
            </h2>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#9d2e1e]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4">
            Klar til at se det selv?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
            Book en gratis rundvisning og mærk stemningen i Nordstens Workspace.
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-[#9d2e1e] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-white/90 transition-colors inline-block text-sm sm:text-base"
          >
            Kontakt os
          </Link>
        </div>
      </section>
    </>
  )
}
