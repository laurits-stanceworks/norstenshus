import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { LejevilkaarFaq } from "@/components/lejevilkaar-faq"

export const metadata: Metadata = {
  title: "Lejevilkår — Fleksible Kontrakter uden Binding",
  description: "Fleksible lejevilkår hos Nordstens Workspace: 3 måneders opsigelse, månedlig betaling, ingen lange bindingsperioder. Alt inkluderet — el, vand, varme, internet og rengøring.",
  alternates: { canonical: "https://nordstens.dk/lejevilkaar" },
  openGraph: {
    title: "Lejevilkår — Fleksible Kontrakter uden Binding",
    description: "3 måneders opsigelse, månedlig betaling, ingen binding. Alt inkluderet — el, vand, varme, internet og rengøring.",
    images: [{ url: "/images/lejevilkaar.jpg", width: 1800, height: 1200, alt: "Nordstens Workspace lejevilkår" }],
  },
}


const stats = [
  { value: "3 mdr.", label: "Ingen lange bindingsperioder" },
  { value: "1 md.", label: "Månedlig betaling forud" },
  { value: "Professionel adresse", label: "Slotsgade 13-15, Hillerød" },
  { value: "Fællesskab", label: "Adgang til netværksarrangementer" },
]

const benefits = [
  "Ingen lange bindingsperioder – fleksibilitet med 3 mdrs. opsigelse",
  "Mulighed for dag-til-dag skalering af kontorstørrelse og antal arbejdspladser",
  "Alt inklusive – el, vand, varme, internet, alarm og alle øvrige driftsudgifter",
  "Med i prisen – kaffe og te ad libitum, møbler, unikke fællesfaciliteter m.m.",
  "Vedligehold klarer vi – vi har handymænd der klarer de løbende opgaver",
  "Månedlig betaling – du betaler kun en måned forud",
  "Daglig rengøring – inkluderet i huslejen",
]

const included = [
  "Fibernet og IT-infrastruktur",
  "El, vand og varme",
  "Daglig rengøring af fællesarealer",
  "Kaffe og te ad libitum",
  "Adgang til fællesarealer, lounge og tagterrasse",
  "Alarm og videoovervågning",
]

const terms = [
  {
    heading: "Opsigelse",
    body: "Alle lejemål hos Nordstens Workspace har 3 måneders gensidig opsigelse, medmindre andet fremgår af din individuelle aftale. Virtuelt kontor har 1 måneds depositum og 3 måneders opsigelse.",
  },
  {
    heading: "Betaling",
    body: "Leje opkræves månedligt forud. Depositum svarer til 3 måneders leje og forfalder ved indgåelse af aftalen.",
  },
  {
    heading: "Adgang",
    body: "Alle medlemmer har 24/7 adgang til bygningen via Salto briklåsesystem med nøglefri adgang og mobiladgang. Adgang tildeles ved indgåelse af lejeaftale.",
  },
  {
    heading: "Husorden",
    body: "Vi beder alle medlemmer om at respektere fællesskabet og de øvrige lejere. Det indebærer hensynsfuld brug af fællesarealer, stillerum og mødelokaler.",
  },
  {
    heading: "Ændringer",
    body: "Nordstens Workspace forbeholder sig retten til at ændre priser og vilkår med 3 måneders varsel.",
  },
]

export default function LejevilkaarPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image src="/images/lejevilkaar.jpg" alt="Nordstens Workspace" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Vilkår
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Fleksible og attraktive lejevilkår
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Skræddersyet til nutidens behov — nemt, trygt og fleksibelt.
          </p>
        </div>
      </section>

      {/* Stat strip */}
      <section className="bg-[#8397a9]">
        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-8 px-6 text-center text-white">
              <p className="text-xl sm:text-2xl md:text-3xl font-light mb-1">{value}</p>
              <p className="text-white/60 text-xs sm:text-sm uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

{/* Intro + benefits */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Hvorfor vælge os
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-6">
              Vilkår der passer til din hverdag
            </h2>
            <p className="text-[#6b6b7a] leading-relaxed">
              Hos Nordstens Workspace lægger vi stor vægt på fleksibilitet og gennemsigtighed.
              Med korte bindingsperioder og frihed til at op- eller nedskalere er du sikret
              en ramme, der passer til både din virksomheds nuværende situation og fremtidige mål.
            </p>
          </div>
          <ul className="space-y-4 pt-1">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#6b6b7a]">
                <Check size={16} className="text-[#9d2e1e] mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Included services */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Alt inkluderet
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Det får du med fra dag ét
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div key={item} className="bg-white rounded-lg p-6 flex items-start gap-3">
                <Check size={16} className="text-[#9d2e1e] mt-0.5 shrink-0" />
                <span className="text-[#6b6b7a] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Spørgsmål & svar
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Ofte stillede spørgsmål
            </h2>
          </div>
          <LejevilkaarFaq />
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-10">
            Vilkår i detaljer
          </h2>
          <div className="divide-y divide-[#e5e3dc]">
            {terms.map(({ heading, body }) => (
              <div key={heading} className="py-6">
                <h3 className="text-[#8397a9] font-semibold mb-2">{heading}</h3>
                <p className="text-[#6b6b7a] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
            <div className="py-6">
              <h3 className="text-[#8397a9] font-semibold mb-2">Kontakt</h3>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">
                Spørgsmål til lejevilkår kan rettes til{" "}
                <a href="mailto:info@nordstens.dk" className="text-[#9d2e1e] hover:underline">
                  info@nordstens.dk
                </a>{" "}
                eller på telefon{" "}
                <a href="tel:+4582303234" className="text-[#9d2e1e] hover:underline">
                  82 30 32 34
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
