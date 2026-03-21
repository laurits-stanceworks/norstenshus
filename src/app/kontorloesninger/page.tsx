import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
    image: "/images/building-facade.jpg",
    description:
      "Professionel forretningsadresse i Hillerød — uden behov for et fysisk kontor. Bevar et professionelt image, reducer omkostninger og arbejd fleksibelt fra hvor som helst.",
    features: [
      "Professionel virksomhedsadresse",
      "Dedikeret postkasse og postadresse",
      "Eget firmaskilt",
      "Adgang til åbne faglige arrangementer",
      "Rabat på leje af mødelokaler og telefonrum",
      "1 måneds depositum",
      "Ingen binding – 3 måneders opsigelse",
    ],
  },
  {
    name: "Co-working Flexplads",
    price: "1.595",
    image: "/images/interior-a.jpg",
    description:
      "Er du freelancer, startup, iværksætter eller en mindre virksomhed? En co-working flexplads giver dig en perfekt balance mellem fællesskab og individualitet — med struktur til at adskille arbejdsliv og privatliv.",
    features: [
      "Fleksibel plads i åbent kontormiljø",
      "Fuldt møbleret arbejdsplads",
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
    image: "/images/interior-b.jpg",
    description:
      "Med en fast plads får du din egen dedikerede arbejdsstation, der er klar til dig hver dag. Kombiner det dynamiske co-working miljø med en stabil og personlig base.",
    features: [
      "Fast, personlig arbejdsstation med skærm, tastatur og mus",
      "Fuldt møbleret plads",
      "Fri adgang til alle fællesområder, tagterrasse, køkkener og lounges",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Adgang 24/7",
      "Nøglefri adgang med mobilapp",
      "Virksomhedsadresse og egen postkasse",
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
    image: "/images/interior-c.jpg",
    description:
      "Eksklusivt privat kontor med funktionalitet og æstetik. Skalerbart fra enkeltmandsvirksomhed til 15+ medarbejdere med over 100 m². Kan kombineres med co-working for fleksibel bemanding.",
    features: [
      "Fuldt møbleret privat kontor",
      "Ergonomiske stole, hæve-sænkeborde, skabe og lamper",
      "Fri adgang til alle fællesområder, tagterrasse, køkkener og lounges",
      "Fri adgang til alle telefonrum",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Adgang 24/7",
      "Nøglefri adgang med mobilapp",
      "Virksomhedsadresse og postkasse",
      "Firmaskiltning",
      "Netværksarrangementer i Nordstens Workspace",
      "Rabat på leje af mødelokaler",
      "3 måneders depositum – ingen binding – 3 mdr. opsigelse",
      "Inklusiv alle driftsudgifter, el, vand og varme",
    ],
  },
]

export default function KontorloesningerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image src="/images/kontorloesninger-hero.jpg" alt="Kontorløsninger" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#8397a9]/70" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-[#f4a89a] text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Kontorløsninger
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Fleksible kontorløsninger uden lange bindinger
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Nordstens Workspace tilbyder fleksibilitet til at skifte mellem forskellige rum og omgivelser for øget fokus og produktivitet. Vi har møderum, lounges, åbne arbejdszoner, telefonbokse, stillerum og tagterrasse — uanset dine behov er vi her for at imødekomme dem.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-lg overflow-hidden bg-[#f5f4f0] text-[#8397a9]"
            >
              <div className="relative h-52">
                <Image src={plan.image} alt={plan.name} fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-sm mb-6 leading-relaxed text-[#6b6b7a]">
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light">{plan.price}</span>
                  <span className="text-sm ml-2 text-[#6b6b7a]">DKK/måned ekskl. moms</span>
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
                  className="block text-center py-3.5 rounded font-medium transition-colors border border-[#8397a9]/20 text-[#8397a9] hover:border-[#9d2e1e] hover:text-[#9d2e1e]"
                >
                  Book nu
                </Link>
              </div>
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
