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

      {/* Instagram */}
      <InstagramSection />

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#8397a9] text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Hvad siger vores lejere
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
              Stemmer fra fællesskabet
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Nordstens Workspace har givet vores lille virksomhed de professionelle rammer, vi aldrig selv ville have råd til at skabe. Det er ikke bare et kontor — det er et fællesskab.",
                name: "Sarah M.",
                title: "Freelance konsulent",
                initials: "SM",
                photo: null,
                logo: null,
              },
              {
                quote: "Vi skiftede fra et traditionelt kontorlejemål til Nordstens, og det var den bedste beslutning vi har truffet. Alt er inkluderet, og fleksibiliteten er uvurderlig for en startup som os.",
                name: "Mikkel H.",
                title: "Medstifter, tech-startup",
                initials: "MH",
                photo: null,
                logo: null,
              },
              {
                quote: "Bygningen er noget helt særligt. Kombinationen af historiske omgivelser og moderne faciliteter skaber en arbejdsatmosfære, der simpelthen inspirerer — hver eneste dag.",
                name: "Louise B.",
                title: "Kreativ direktør",
                initials: "LB",
                photo: null,
                logo: null,
              },
            ].map(({ quote, name, title, initials, photo, logo }) => (
              <div key={name} className="bg-white/10 rounded-lg p-6 sm:p-8 flex flex-col">
                {/* Avatar */}
                <div className="mb-6">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">{initials}</span>
                    </div>
                  )}
                </div>

                <p className="text-white/80 leading-relaxed mb-8 text-sm sm:text-base flex-1">
                  &ldquo;{quote}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-white/50 text-xs mt-0.5">{title}</p>
                  </div>
                  {logo && (
                    <Image
                      src={logo}
                      alt={`${name} logo`}
                      width={64}
                      height={28}
                      className="object-contain opacity-60"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
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
