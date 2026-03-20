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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#8397a9] overflow-hidden">
        <Image
          src="/images/building.jpg"
          alt="Nordstens Workspace bygning"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-6">
            Hillerød · Siden 1877
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mb-6">
            Kom indenfor i
            <br />
            <span className="font-semibold">Nordstens Workspace</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Et moderne kontorfællesskab i historiske omgivelser. Vælg mellem flexplads,
            fast plads, privat kontor eller virtuelt kontor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontorloesninger"
              className="bg-[#9d2e1e] text-white font-medium px-8 py-4 rounded hover:bg-[#8b2518] transition-colors"
            >
              Se kontorløsninger
            </Link>
            <Link
              href="/kontakt"
              className="border border-white/30 text-white font-medium px-8 py-4 rounded hover:border-white/60 transition-colors"
            >
              Book en rundvisning
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Instagram */}
      <InstagramSection />

      {/* Pricing */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Kontorløsninger
            </p>
            <h2 className="text-[#8397a9] text-4xl font-light">
              Find den løsning der passer dig
            </h2>
          </div>
          <PricingCards />
          <div className="text-center mt-12">
            <Link
              href="/kontorloesninger"
              className="text-[#8397a9] border-b border-[#9d2e1e] pb-0.5 text-sm font-medium hover:text-[#9d2e1e] transition-colors"
            >
              Se alle detaljer →
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="py-24 px-6 bg-[#fffdeb]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Faciliteter
            </p>
            <h2 className="text-[#8397a9] text-4xl font-light">
              Alt hvad du behøver — inkluderet
            </h2>
          </div>
          <FacilitiesPreview />
          <div className="text-center mt-12">
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
      <section className="py-24 px-6 bg-[#8397a9] text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-6">
            Nordstens Hus
          </p>
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
            "Det der skabes uden omhu inspirerer sjældent til stor begejstring"
          </blockquote>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Nordstens Hus er en omhyggeligt restaureret bygning fra 1880'erne i Hillerød.
            Restaureringen skete i samarbejde med Nationalmuseet og har skabt rammerne
            for et unikt kontorfællesskab, der forener historisk arkitektur med moderne arbejdsliv.
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
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Spørgsmål & svar
            </p>
            <h2 className="text-[#8397a9] text-4xl font-light">
              Ofte stillede spørgsmål
            </h2>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#9d2e1e]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-white text-4xl font-light mb-4">
            Klar til at se det selv?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book en gratis rundvisning og mærk stemningen i Nordstens Workspace.
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-[#9d2e1e] font-semibold px-8 py-4 rounded hover:bg-white/90 transition-colors inline-block"
          >
            Kontakt os
          </Link>
        </div>
      </section>
    </>
  )
}
