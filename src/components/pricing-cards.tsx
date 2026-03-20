import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Virtuelt Kontor",
    price: "600",
    description: "Professionel virksomhedsadresse i Hillerød — uden at du behøver et fysisk kontor.",
    features: [
      "Professionel virksomhedsadresse",
      "Egen postkasse",
      "Firmaskiltning",
      "Adgang til åbne faglige events",
      "Rabat på leje af mødelokaler",
      "1 måneds depositum",
      "Ingen binding – 3 mdr. opsigelse",
    ],
    cta: "Kom i gang",
    highlight: false,
  },
  {
    name: "Flexplads",
    price: "1.595",
    description: "Fleksibel arbejdsplads i åbent kontormiljø — ideel til freelancere og iværksættere.",
    features: [
      "Fuldt møbleret arbejdsplads",
      "Fibernet inkluderet",
      "24/7 adgang",
      "Daglig rengøring",
      "Kaffe, te og vand ad libitum",
      "Fri adgang til fællesområder, tagterrasse og lounges",
      "Netværksarrangementer",
      "Rabat på mødelokaler og telefonrum",
      "Inkl. el, vand og varme",
      "Ingen binding – 3 mdr. opsigelse",
    ],
    cta: "Vælg flexplads",
    highlight: false,
  },
  {
    name: "Fast Plads",
    price: "3.495",
    description: "Din egen faste, dedikerede arbejdsstation klar til dig hver dag.",
    features: [
      "Fast arbejdsstation med skærm, tastatur og mus",
      "Fuldt møbleret",
      "Fibernet inkluderet",
      "24/7 nøglefri adgang",
      "Daglig rengøring",
      "Kaffe, te og vand ad libitum",
      "Virksomhedsadresse og postkasse",
      "Firmaskiltning",
      "Fri adgang til fællesområder og tagterrasse",
      "Netværksarrangementer",
      "Inkl. el, vand og varme",
      "Ingen binding – 3 mdr. opsigelse",
    ],
    cta: "Vælg fast plads",
    highlight: true,
  },
  {
    name: "Privat Kontor",
    price: "6.500",
    description: "Eget lukket kontor til din virksomhed — kombiner privathed med fællesskabets fordele.",
    features: [
      "Fuldt møbleret privat kontor",
      "Ergonomiske stole og hæve-sænkeborde",
      "Fibernet inkluderet",
      "24/7 nøglefri adgang",
      "Daglig rengøring",
      "Fri adgang til alle telefonrum",
      "Kaffe, te og vand ad libitum",
      "Virksomhedsadresse og postkasse",
      "Firmaskiltning",
      "Fri adgang til fællesområder og tagterrasse",
      "Rabat på leje af mødelokaler",
      "Inkl. el, vand og varme",
      "Ingen binding – 3 mdr. opsigelse",
    ],
    cta: "Kontakt os",
    highlight: false,
  },
]

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg p-6 sm:p-8 flex flex-col ${
            plan.highlight
              ? "bg-[#8397a9] text-white ring-2 ring-[#9d2e1e]"
              : "bg-[#f5f4f0] text-[#8397a9]"
          }`}
        >
          {plan.highlight && (
            <span className="text-[#9d2e1e] text-xs font-semibold uppercase tracking-widest mb-3">
              Mest populær
            </span>
          )}
          <h3 className="text-lg sm:text-xl font-semibold mb-1">{plan.name}</h3>
          <p className={`text-sm mb-4 sm:mb-6 ${plan.highlight ? "text-white/60" : "text-[#6b6b7a]"}`}>
            {plan.description}
          </p>
          <div className="mb-4 sm:mb-6">
            <span className="text-3xl sm:text-4xl font-light">{plan.price}</span>
            <span className={`text-sm ml-1 ${plan.highlight ? "text-white/60" : "text-[#6b6b7a]"}`}>
              DKK/md.
            </span>
          </div>
          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check size={15} className="mt-0.5 shrink-0 text-[#9d2e1e]" />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/kontakt"
            className={`text-center py-2.5 sm:py-3 rounded text-sm font-medium transition-colors ${
              plan.highlight
                ? "bg-[#9d2e1e] text-white hover:bg-[#8b2518]"
                : "border border-[#8397a9]/20 text-[#8397a9] hover:border-[#9d2e1e] hover:text-[#9d2e1e]"
            }`}
          >
            {plan.cta}
          </Link>
        </div>
      ))}
    </div>
  )
}
