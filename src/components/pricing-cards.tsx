import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Virtuelt Kontor",
    price: "600",
    image: "/images/building-facade.jpg",
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
    image: "/images/interior-a.jpg",
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
    image: "/images/interior-b.jpg",
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
    image: "/images/interior-c.jpg",
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
          className={`rounded-lg overflow-hidden flex flex-col bg-[#8397a9] text-white ${plan.highlight ? "ring-2 ring-[#9d2e1e]" : ""}`}
        >
          <div className="relative h-40 shrink-0">
            <Image src={plan.image} alt={plan.name} fill className="object-cover" />
            {plan.highlight && (
              <span className="absolute top-3 left-3 bg-[#9d2e1e] text-white text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded">
                Mest populær
              </span>
            )}
          </div>
          <div className="p-6 sm:p-8 flex flex-col flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-sm mb-4 sm:mb-6 text-white/60">
              {plan.description}
            </p>
            <div className="mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl font-light">{plan.price}</span>
              <span className="text-sm ml-1 text-white/60">DKK/md.</span>
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
              className="text-center py-2.5 sm:py-3 rounded text-sm font-medium transition-colors bg-[#9d2e1e] text-white hover:bg-[#8b2518]"
            >
              {plan.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
