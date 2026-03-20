import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontorløsninger — Nordstens Workspace",
  description:
    "Vælg mellem flexplads, fast plads, privat kontor eller virtuelt kontor i Hillerød.",
}

const plans = [
  {
    name: "Virtuelt Kontor",
    price: "600",
    description:
      "Perfekt til dig der har brug for en professionel erhvervsadresse i Hillerød, men arbejder hjemmefra eller er meget på farten.",
    features: [
      "Erhvervsadresse i Hillerød",
      "Postkasse og postmodtagelse",
      "Skiltning i bygningen",
      "3 måneders gensidig opsigelse",
    ],
  },
  {
    name: "Flexplads",
    price: "1.595",
    description:
      "Ideel til freelancere og selvstændige der ønsker fleksibilitet og professionelle omgivelser uden fast commitment.",
    features: [
      "Arbejdsplads i åbent kontormiljø",
      "Fuldt møbleret",
      "Fibernet inkluderet",
      "24/7 adgang med mobil nøgle",
      "Daglig rengøring",
      "Kaffe, te og køkkenadgang",
      "Adgang til fællesområder og lounge",
      "Deltagelse i netværksarrangementer",
      "Ingen binding",
    ],
    highlight: true,
  },
  {
    name: "Fast Plads",
    price: "3.495",
    description:
      "Din egen dedikerede arbejdsplads med alt udstyr klar til dig hver dag. Oplagt til dig der er på kontoret fast.",
    features: [
      "Dedikeret skrivebord — dit eget",
      "Skærm og periferiudstyr",
      "Erhvervsadresse og postkasse",
      "Fibernet inkluderet",
      "24/7 adgang",
      "Daglig rengøring",
      "Kaffe, te og køkkenadgang",
      "Adgang til lounge og tagterrasse",
      "3 måneders gensidig opsigelse",
    ],
  },
  {
    name: "Privat Kontor",
    price: "6.500",
    description:
      "Eget afskærmet kontor til din virksomhed. Kombiner privathed med alle fordelene ved et levende kontorfællesskab.",
    features: [
      "Privat, lukket kontor",
      "Fuldt møbleret",
      "Fri adgang til mødelokaler",
      "6 telefonbokse inkluderet",
      "Erhvervsadresse og postkasse",
      "Fibernet inkluderet",
      "24/7 adgang",
      "Daglig rengøring",
      "3 måneders gensidig opsigelse",
    ],
  },
]

export default function KontorloesningerPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#8397a9] py-24 px-6 text-white text-center">
        <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Kontorløsninger
        </p>
        <h1 className="text-5xl font-light mb-4">Find din løsning</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Fra virtuel adresse til privat kontor — vi har en løsning der passer til
          præcis dit behov og din hverdag.
        </p>
      </section>

      {/* Plans */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-10 ${
                plan.highlight
                  ? "bg-[#8397a9] text-white ring-2 ring-[#9d2e1e]"
                  : "bg-[#fffdeb] text-[#8397a9]"
              }`}
            >
              {plan.highlight && (
                <span className="text-[#9d2e1e] text-xs font-semibold uppercase tracking-widest block mb-3">
                  Mest populær
                </span>
              )}
              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  plan.highlight ? "text-white/60" : "text-[#6b6b7a]"
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-light">{plan.price}</span>
                <span
                  className={`text-sm ml-2 ${
                    plan.highlight ? "text-white/60" : "text-[#6b6b7a]"
                  }`}
                >
                  DKK/måned ekskl. moms
                </span>
              </div>
              <ul className="space-y-3 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-[#9d2e1e] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className={`block text-center py-3.5 rounded font-medium transition-colors ${
                  plan.highlight
                    ? "bg-[#9d2e1e] text-white hover:bg-[#8b2518]"
                    : "border border-[#8397a9]/20 text-[#8397a9] hover:border-[#9d2e1e] hover:text-[#9d2e1e]"
                }`}
              >
                Kom i gang
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* All plans include */}
      <section className="py-16 px-6 bg-[#fffdeb]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[#8397a9] text-2xl font-light mb-8">
            Alle løsninger inkluderer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-[#6b6b7a]">
            {[
              "Fibernet",
              "Daglig rengøring",
              "El, vand & varme",
              "Kaffe & te",
              "Fællesarealer",
              "Netværksarrangementer",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 justify-center">
                <Check size={14} className="text-[#9d2e1e]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
