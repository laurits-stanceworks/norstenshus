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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="rounded-lg overflow-hidden bg-[#f5f4f0] text-[#8397a9]"
        >
          <div className="relative h-72">
            <Image src={plan.image} alt={plan.name} fill className="object-cover" />
          </div>
          <div className="p-6 sm:p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-light">{plan.price}</span>
              <span className="text-sm ml-2 text-[#6b6b7a]">DKK/måned ekskl. moms</span>
            </div>
            <Link
              href="/kontakt"
              className="block text-center py-3.5 rounded font-medium transition-colors border border-[#8397a9]/20 text-[#8397a9] hover:border-[#9d2e1e] hover:text-[#9d2e1e] mb-8"
            >
              {plan.cta}
            </Link>
            <p className="text-sm mb-6 leading-relaxed text-[#6b6b7a]">{plan.description}</p>
            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-[#9d2e1e] mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
