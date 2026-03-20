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
    deposit: "1 måneds depositum",
    description:
      "Har du ikke behov for et fysisk kontor, men gerne vil have en professionel adresse i Hillerød? Vores virtuelle kontorløsning giver dig en professionel tilstedeværelse og mulighed for at leje mødelokaler efter behov.",
    features: [
      "Professionel virksomhedsadresse",
      "Eget firmaskilt og postkasse",
      "Adgang til åbne faglige events",
      "Rabat på leje af mødelokaler og telefonrum",
      "1 måneds depositum",
      "Ingen binding – 3 måneders opsigelse",
    ],
  },
  {
    name: "Co-working Flexplads",
    price: "1.595",
    deposit: "3 måneders depositum",
    description:
      "Er du freelancer, startup, iværksætter eller en mindre virksomhed? En co-working flexplads giver dig en perfekt balance mellem fællesskab og individualitet — kombinér det bedste fra begge verdener.",
    features: [
      "Fleksibel plads i åbent kontormiljø",
      "Fuld møbleret plads",
      "Fri adgang til alle fællesområder, tagterrasse, køkkener og lounges",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Adgang 24/7",
      "Netværksarrangementer i Nordstens Workspace",
      "Rabat på leje af mødelokaler og telefonrum",
      "3 måneders depositum – ingen binding – 3 mdr. opsigelse",
      "Inklusiv alle driftsudgifter, el, vand og varme",
    ],
    highlight: true,
  },
  {
    name: "Co-working Fast Plads",
    price: "3.495",
    deposit: "3 måneders depositum",
    description:
      "Med en fast plads får du din egen dedikerede arbejdsstation med adgang 24/7. Perfekt til dig, der ønsker at kombinere det dynamiske co-working miljø med en stabil base.",
    features: [
      "Fast, personlig arbejdsstation med skærm, tastatur og mus",
      "Fuld møbleret plads",
      "Fri adgang til alle fællesområder, tagterrasse, køkkener og lounges",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Adgang 24/7",
      "Briklåsesystem med nøglefri adgang og mobiladgang",
      "Virksomhedsadresse og eigen postkasse",
      "Firmaskiltning",
      "Netværksarrangementer i Nordstens Workspace",
      "Rabat på leje af mødelokaler og telefonrum",
      "3 måneders depositum – ingen binding – 3 mdr. opsigelse",
      "Inklusiv alle driftsudgifter, el, vand og varme",
    ],
  },
  {
    name: "Privat Kontor",
    price: "6.500",
    deposit: "3 måneders depositum",
    description:
      "Med et privat kontor i Nordstens Workspace får du og din virksomhed sit eget lukkede kontor i eksklusive omgivelser. Her er plads til alt fra enkeltmandsvirksomheder til virksomheder med +15 medarbejdere.",
    features: [
      "Fuld møbleret privat kontor",
      "Ergonomiske stole, hæve-sænkeborde, skabe og lamper",
      "Fri adgang til alle fællesområder, tagterrasse, køkkener og lounges",
      "Fri adgang til alle telefonrum",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Adgang 24/7",
      "Briklåsesystem med nøglefri adgang og mobiladgang",
      "Virksomhedsadresse og postkasse",
      "Firmaskiltning",
      "Netværksarrangementer i Nordstens Workspace",
      "Mulighed for leje af mødelokaler",
      "3 måneders depositum – ingen binding – 3 mdr. opsigelse",
      "Inklusiv alle driftsudgifter, el, vand og varme",
    ],
  },
]

export default function KontorloesningerPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#8397a9] py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-white text-center">
        <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Kontorløsninger
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
          Fleksible kontorløsninger uden lange bindinger
        </h1>
        <p className="text-white/60 max-w-2xl mx-auto">
          I Nordstens Workspace kan I skifte mellem forskellige rum og miljøer for øget fokus og
          effektivitet. Uanset dine behov er vi her for at imødekomme dem.
        </p>
      </section>

      {/* Plans */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-6 sm:p-8 md:p-10 ${
                plan.highlight
                  ? "bg-[#8397a9] text-white ring-2 ring-[#9d2e1e]"
                  : "bg-[#f5f4f0] text-[#8397a9]"
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
                <span className="text-3xl sm:text-4xl md:text-5xl font-light">{plan.price}</span>
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
                Book nu
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* All plans include */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[#8397a9] text-lg sm:text-xl md:text-2xl font-light mb-8">
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
