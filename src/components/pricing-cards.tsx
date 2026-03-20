import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Virtuelt Kontor",
    price: "600",
    description: "Professionel adresse uden fast plads.",
    features: [
      "Erhvervsadresse i Hillerød",
      "Postkasse og postmodtagelse",
      "Skiltning i bygningen",
      "3 måneders opsigelse",
    ],
    cta: "Kom i gang",
    highlight: false,
  },
  {
    name: "Flexplads",
    price: "1.595",
    description: "Fleksibelt kontor i åbent kontormiljø.",
    features: [
      "Møbleret arbejdsplads",
      "Fibernet inkluderet",
      "24/7 adgang",
      "Daglig rengøring",
      "Kaffe & te",
      "Ingen binding",
    ],
    cta: "Vælg flexplads",
    highlight: false,
  },
  {
    name: "Fast Plads",
    price: "3.495",
    description: "Din egen faste, dedikerede arbejdsplads.",
    features: [
      "Dedikeret skrivebord",
      "Skærm og periferiudstyr",
      "Erhvervsadresse",
      "Postkasse",
      "Fibernet & rengøring",
      "3 måneders opsigelse",
    ],
    cta: "Vælg fast plads",
    highlight: true,
  },
  {
    name: "Privat Kontor",
    price: "6.500",
    description: "Eget lukket kontor til din virksomhed.",
    features: [
      "Privat møbleret kontor",
      "Fri adgang til mødelokaler",
      "Telefonbokse inkluderet",
      "Erhvervsadresse",
      "Fibernet & rengøring",
      "3 måneders opsigelse",
    ],
    cta: "Kontakt os",
    highlight: false,
  },
]

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg p-8 flex flex-col ${
            plan.highlight
              ? "bg-[#262742] text-white ring-2 ring-[#CA9665]"
              : "bg-[#f5f4f0] text-[#262742]"
          }`}
        >
          {plan.highlight && (
            <span className="text-[#CA9665] text-xs font-semibold uppercase tracking-widest mb-3">
              Mest populær
            </span>
          )}
          <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
          <p
            className={`text-sm mb-6 ${
              plan.highlight ? "text-white/60" : "text-[#6b6b7a]"
            }`}
          >
            {plan.description}
          </p>
          <div className="mb-6">
            <span className="text-4xl font-light">{plan.price}</span>
            <span
              className={`text-sm ml-1 ${
                plan.highlight ? "text-white/60" : "text-[#6b6b7a]"
              }`}
            >
              DKK/md.
            </span>
          </div>
          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check
                  size={16}
                  className={`mt-0.5 shrink-0 ${
                    plan.highlight ? "text-[#CA9665]" : "text-[#CA9665]"
                  }`}
                />
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/kontakt"
            className={`text-center py-3 rounded text-sm font-medium transition-colors ${
              plan.highlight
                ? "bg-[#CA9665] text-white hover:bg-[#b8855a]"
                : "border border-[#262742]/20 text-[#262742] hover:border-[#CA9665] hover:text-[#CA9665]"
            }`}
          >
            {plan.cta}
          </Link>
        </div>
      ))}
    </div>
  )
}
