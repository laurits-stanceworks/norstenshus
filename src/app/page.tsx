import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Marquee } from "@/components/marquee"

export const metadata: Metadata = {
  title: "Kontorfællesskab & Kontorplads i Hillerød — Nordstens Workspace",
  description: "Lej flexplads, fast plads eller privat kontor i Hillerød fra 1.595 kr./md. Nordstens Workspace er et unikt kontorfællesskab i historiske rammer på Slotsgade 13-15 — under 1 time fra København.",
  alternates: { canonical: "https://nordstens.dk" },
  openGraph: {
    title: "Nordstens Workspace — Kontorfællesskab i Hillerød",
    description: "Lej flexplads, fast plads eller privat kontor fra 1.595 kr./md. i Hillerød.",
    images: [{ url: "/images/hero-main.jpg", width: 1800, height: 1200, alt: "Nordstens Workspace Hillerød" }],
  },
}
import { PricingCards } from "@/components/pricing-cards"
import { FacilitiesPreview } from "@/components/facilities-preview"
import { FaqSection } from "@/components/faq-section"
import { InstagramSection } from "@/components/instagram-section"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvad indeholder en møbleret arbejdsplads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En møbleret arbejdsplads i Nordstens Workspace sikrer maksimal komfort og produktivitet. Alle pladser har moderne hæve-sænkeborde, bordlampe, ergonomiske kontorstole og aflåselige reoler.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad er inkluderet i lejen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alt er inkluderet i prisen — internet, rengøring, møbler, it-infrastruktur, kaffe, te, adgang til telefonbokse og fuldt udstyrede fælleskøkkener.",
      },
    },
    {
      "@type": "Question",
      name: "Er der nogen binding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej, der er ingen lange bindingsperioder. Du kan opsige din aftale med tre måneders varsel.",
      },
    },
    {
      "@type": "Question",
      name: "Hvordan er ånden hos Nordstens Workspace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ånden bygger på fællesskab, innovation og ambition. Vi afholder regelmæssige netværksarrangementer og lægger vægt på, at alle føler sig som en del af et dynamisk og støttende fællesskab.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jeg komme forbi og se lokalerne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolut! Vi viser dig meget gerne rundt. Tag fat i os, så finder vi en tid der passer dig.",
      },
    },
    {
      "@type": "Question",
      name: "Hvilke slags AV-udstyr er til rådighed i mødelokalerne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hvert mødelokale er udstyret med højopløselige skærme og systemer til videoopkald, så du kan præsentere alt dit indhold trådløst, klart og effektivt.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-[#8397a9] overflow-hidden">
        <Image
          src="/images/hero-main.jpg"
          alt="Nordstens Workspace bygning"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
<h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 sm:mb-6">
            Kom indenfor i
            <br />
            <span className="font-semibold">Nordstens Workspace</span>
          </h1>

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

      {/* Gården */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative h-72 sm:h-96 md:h-[500px] rounded-lg overflow-hidden">
            <Image src="/images/courtyard.jpg" alt="Gården i Nordstens Workspace" fill className="object-cover" />
          </div>
          <div>
            <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Gården
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light mb-6">
              Vi ses i gården!
            </h2>
            <p className="text-[#6b6b7a] leading-relaxed mb-6">
              En eksklusiv fordel ved Nordstens Workspace er, at du kan nyde Hillerøds hyggeligste gårdmiljø. Her samles lejere og gæster til uformelle møder, netværk og en pause fra hverdagen.
            </p>
            <p className="text-[#6b6b7a] leading-relaxed">
              Gården byder på en unik stemning med cafe, øl og vin og butik — alt hvad du behøver til en god pause eller en hyggelig eftermiddag i selskab med naboerne.
            </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                quote: ["Lisa: Det er fantastisk at have kontor på Nordstens Hus! Tænk, at vi er så heldige at have vores arbejdsgang i denne smukke bygning. Jeg bliver glad hver morgen, når jeg går ind ad den smukke, gamle træhoveddør, og jeg er vild med måden, det hele er blevet restaureret og indrettet på. Jeg synes, at stemningen er rar. Det er hyggeligt, at man kan spise frokost sammen med andre og lige udveksle et \"hej\" ved kaffemaskinen.", "Daniel: Det har givet en ny arbejdsglæde at kunne møde ind i flotte, professionelle og hyggelige omgivelser hver dag."],
                name: "Daniel og Lisa Jacobsen",
                title: "Mer Revision",
                initials: "DJ",
                logo: "/images/logo-mer-revision.svg",
                logoFilter: false,
              },
              {
                quote: ["Vi skiftede fra et traditionelt kontorlejemål til Nordstens, og det var den bedste beslutning vi har truffet. Alt er inkluderet, og fleksibiliteten er uvurderlig for en startup som os."],
                name: "Andre Clement",
                title: "Co-Founder, Ratios",
                initials: "AC",
                logo: "/images/logo-ratios.svg",
                logoFilter: false,
              },
              {
                quote: ["Jeg arbejder bedst med ro til fordybelse, tæt kontakt til mine stakeholders og et dynamisk kollegaskab. Kollegerne i Hillerød trives i Nordstens Hus, især på grund af de rolige omgivelser og gode faciliteter."],
                name: "Bastian Meijer Carlsen",
                title: "Pharma Engineering Director, Eltronic",
                initials: "BMC",
                logo: "/images/logo-eltronic.png",
                logoFilter: true,
              },
              {
                quote: ["Nordstens Hus har en helt særlig stemning. Der er både liv og ro på samme tid, og det giver en god balance mellem inspiration og koncentration. Det føles professionelt, men også uformelt – og det kan jeg rigtig godt lide.", "Det har givet mere struktur og bedre skelnen mellem arbejde og fritid. Samtidig er det inspirerende at være omgivet af andre selvstændige og virksomheder, hvilket ofte fører til nye idéer og perspektiver."],
                name: "Alexander Lynge Hybschmann",
                title: "Hybschmann & Co",
                initials: "ALH",
                logo: "/images/logo-hybschmann.png",
                logoFilter: true,
              },
            ].map(({ quote, name, title, initials, logo, logoFilter }) => (
              <div key={name} className="bg-white/10 rounded-lg overflow-hidden flex flex-col">
                {/* Logo — top area of card */}
                <div className="h-56 bg-white/10 flex items-center justify-center p-8">
                  <Image
                    src={logo}
                    alt={name}
                    width={200}
                    height={100}
                    className={`object-contain max-h-28 w-auto ${logoFilter ? "brightness-0 invert" : ""}`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base flex-1 flex flex-col gap-3">
                    {(Array.isArray(quote) ? quote : [quote]).map((p, i) => (
                      <p key={i}>{i === 0 && <>&ldquo;</>}{p}{i === (Array.isArray(quote) ? quote.length : 1) - 1 && <>&rdquo;</>}</p>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-white/50 text-xs mt-0.5">{title}</p>
                  </div>
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
      <section className="py-5 px-4 sm:px-6 bg-[#9d2e1e]">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-white text-xl sm:text-2xl font-light">
              Klar til at se det selv?
            </h2>
            <p className="text-white/70 text-sm mt-1">
              Book en gratis rundvisning og mærk stemningen i Nordstens Workspace.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 bg-white text-[#9d2e1e] font-semibold px-6 py-2.5 rounded hover:bg-white/90 transition-colors text-sm"
          >
            Kontakt os
          </Link>
        </div>
      </section>
    </>
  )
}
