import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Lejevilkår — Nordstens Workspace",
  description: "Fleksible og attraktive lejevilkår skræddersyet til nutidens behov.",
}

const benefits = [
  "Ingen lange bindingsperioder – fleksibilitet med 1–3 mdrs. opsigelse",
  "Mulighed for dag-til-dag skalering af kontorstørrelse og antal arbejdspladser",
  "Alt inklusive – el, vand, varme, internet, alarm og alle øvrige driftsudgifter",
  "Med i prisen – kaffe og te ad libitum, møbler, unikke fællesfaciliteter m.m.",
  "Vedligehold klarer vi – vi har handymænd der klarer de løbende opgaver",
  "Månedlig betaling – du betaler kun en måned forud",
  "Daglig rengøring – inkluderet i huslejen",
]

const terms = [
  {
    heading: "Opsigelse",
    body: "Alle lejemål hos Nordstens Workspace har 3 måneders gensidig opsigelse, medmindre andet fremgår af din individuelle aftale. Virtuelt kontor har 1 måneds depositum og 3 måneders opsigelse.",
  },
  {
    heading: "Betaling",
    body: "Leje opkræves månedligt forud. Depositum svarer til 1–3 måneders leje afhængigt af løsningstype og forfalder ved indgåelse af aftalen.",
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

const included = [
  "Fibernet og IT-infrastruktur",
  "El, vand og varme",
  "Daglig rengøring af fællesarealer",
  "Kaffe og te ad libitum",
  "Adgang til fællesarealer, lounge og tagterrasse",
  "Alarm og videoovervågning",
]

export default function LejevilkaarPage() {
  return (
    <>
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
            Skræddersyet til nutidens behov. Det skal være nemt, trygt og fleksibelt — så du kan
            fokusere på det, der betyder mest.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-[#6b6b7a] leading-relaxed mb-12">
            Hos Nordstens Workspace lægger vi stor vægt på fleksibilitet og gennemsigtighed i alle
            vores lejevilkår. Med korte bindingsperioder på kun 1–3 måneder og frihed til at op-
            eller nedskalere er du sikret en fleksibel ramme, der passer til både din virksomheds
            nuværende situation og fremtidige mål.
          </p>

          <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-6">
            Fordele ved vores lejevilkår
          </h2>
          <ul className="space-y-4 mb-16">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#6b6b7a]">
                <Check size={16} className="text-[#9d2e1e] mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-6">
            Inkluderede ydelser
          </h2>
          <ul className="space-y-4 mb-16">
            {included.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[#6b6b7a]">
                <Check size={16} className="text-[#9d2e1e] mt-0.5 shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="divide-y divide-[#e5e3dc]">
            {terms.map(({ heading, body }) => (
              <div key={heading} className="py-6">
                <h3 className="text-[#8397a9] font-semibold mb-3">{heading}</h3>
                <p className="text-[#6b6b7a] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
            <div className="py-6">
              <h3 className="text-[#8397a9] font-semibold mb-3">Kontakt</h3>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">
                Spørgsmål til lejevilkår kan rettes til{" "}
                <a href="mailto:info@nordstens.dk" className="text-[#9d2e1e] hover:underline">
                  info@nordstens.dk
                </a>{" "}
                eller på telefon{" "}
                <a href="tel:+4582303234" className="text-[#9d2e1e] hover:underline">
                  82 30 32 34
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
