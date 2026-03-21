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
      "Professionel forretningsadresse i Hillerød — uden behov for et fysisk kontor. Reducer overhead-omkostninger og bevar et professionelt image med mulighed for at arbejde fleksibelt fra flere lokationer.",
    features: [
      "Professionel virksomhedsadresse",
      "Eget firmaskilt",
      "Dedikeret postadresse og postkasse",
      "Adgang til åbne faglige arrangementer på Nordstens Workspace",
      "Rabat på leje af mødelokaler og telefonrum",
      "Ingen fysisk arbejdsplads-adgang (udelukker tagterrasse, sociale arrangementer og daglige arbejdsarealer)",
      "1 måneds depositum",
      "Ingen binding – 3 måneders opsigelse",
    ],
  },
  {
    name: "Co-working Flexplads",
    price: "1.595",
    image: "/images/interior-a.jpg",
    description:
      "Er du freelancer, startup, iværksætter eller en mindre virksomhed? Få adgang til ligesindede fagfolk, netværksarrangementer og en fleksibel arbejdsplads — med struktur til at adskille arbejdsliv og privatliv.",
    features: [
      "Fleksibel, fuldt møbleret arbejdsplads i åbent kontormiljø",
      "Adgang 24/7",
      "Fleksibilitet til at skifte mellem møderum, lounges, åbne arbejdszoner, telefonbokse og stillerum",
      "Fri adgang til alle fællesarealer, tagterrasse, køkkener og lounges",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Netværksarrangementer i Nordstens Workspace",
      "Rabat på leje af mødelokaler og telefonrum",
      "Skaleringsmulig løsning",
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
      "Dedikeret personlig arbejdsstation med egen skærm, tastatur og mus — klar til dig hver dag. Kombiner det dynamiske co-working miljø med en stabil og personlig base.",
    features: [
      "Fast, personlig arbejdsstation med skærm, tastatur og mus",
      "Fuldt møbleret plads i åbent kontormiljø",
      "Adgang 24/7",
      "Fri adgang til alle fællesarealer, tagterrasse, køkkener og lounges",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Nøglefri adgang med mobilapp",
      "Virksomhedsadresse, postkasse og firmaskiltning",
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
      "Privat kontor til enkeltpersoner eller teams — skalerbart fra enkeltmandsvirksomhed til 15+ medarbejdere med over 100 m². Kan kombineres med co-working for hyppigt mobile eller fjernarbejdende medarbejdere.",
    features: [
      "Fuldt møbleret privat kontor",
      "Ergonomiske stole, hæve-sænkeborde, skabe og lamper",
      "Adgang 24/7",
      "Fri adgang til alle fællesarealer, tagterrasse, køkkener og lounges",
      "Fri og ubegrænset adgang til alle telefonrum",
      "Kaffe, te og vand ad libitum",
      "Hurtigt, sikkert og stabilt fibernet",
      "Daglig rengøring",
      "Nøglefri adgang med mobilapp",
      "Virksomhedsadresse, postkasse og firmaskiltning",
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
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
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
              <div className="relative h-72">
                <Image src={plan.image} alt={plan.name} fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                <p className="text-sm mb-4 leading-relaxed text-[#6b6b7a] min-h-[80px]">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light">{plan.price}</span>
                  <span className="text-sm ml-2 text-[#6b6b7a]">DKK/måned ekskl. moms</span>
                </div>
                <Link
                  href="/kontakt"
                  className="block text-center py-3.5 rounded font-medium transition-colors border border-[#8397a9]/20 text-[#8397a9] hover:border-[#9d2e1e] hover:text-[#9d2e1e] mb-8"
                >
                  Book nu
                </Link>
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
      </section>

      {/* Comparison table */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">Sammenlign</p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">Sammenlign vores løsninger</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#8397a9]/20">
                  <th className="text-left py-4 pr-6 text-[#8397a9] font-medium w-1/3"></th>
                  {["Flexplads", "Fast Plads", "Privat Kontor", "Virtuelt Kontor"].map((h) => (
                    <th key={h} className="text-center py-4 px-3 text-[#8397a9] font-semibold">{h}</th>
                  ))}
                </tr>
                <tr className="border-b border-[#8397a9]/20 bg-white/50">
                  <td className="py-3 pr-6 text-[#6b6b7a] font-medium">Pris/måned ekskl. moms</td>
                  {["1.595 DKK", "3.495 DKK", "6.500 DKK", "600 DKK"].map((p) => (
                    <td key={p} className="text-center py-3 px-3 text-[#8397a9] font-semibold">{p}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Fleksibel arbejdsplads i åbent miljø", vals: [true, true, true, false] },
                  { label: "Fast personlig arbejdsstation med skærm, tastatur og mus", vals: [false, true, true, false] },
                  { label: "Fuldt møbleret", vals: [true, true, true, false] },
                  { label: "Adgang 24/7", vals: [true, true, true, false] },
                  { label: "Nøglefri adgang med mobilapp", vals: [false, true, true, false] },
                  { label: "Fri adgang til fællesarealer, tagterrasse og lounges", vals: [true, true, true, false] },
                  { label: "Kaffe, te og vand ad libitum", vals: [true, true, true, false] },
                  { label: "Fibernet", vals: [true, true, true, false] },
                  { label: "Daglig rengøring", vals: [true, true, true, false] },
                  { label: "Telefonrum", vals: [false, false, true, false] },
                  { label: "Virksomhedsadresse og postkasse", vals: [false, true, true, true] },
                  { label: "Firmaskiltning", vals: [false, true, true, true] },
                  { label: "Netværksarrangementer", vals: [true, true, true, true] },
                  { label: "Rabat på mødelokaler og telefonrum", vals: [true, true, true, true] },
                  { label: "Inkl. el, vand og varme", vals: [true, true, true, false] },
                  { label: "Depositum", vals: ["3 mdr.", "3 mdr.", "3 mdr.", "1 md."] },
                  { label: "Opsigelse", vals: ["3 mdr.", "3 mdr.", "3 mdr.", "3 mdr."] },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-b border-[#8397a9]/10 ${i % 2 === 0 ? "" : "bg-white/50"}`}>
                    <td className="py-3 pr-6 text-[#6b6b7a]">{row.label}</td>
                    {row.vals.map((v, j) => (
                      <td key={j} className="text-center py-3 px-3">
                        {typeof v === "boolean" ? (
                          v ? <span className="text-[#9d2e1e] font-bold">✓</span>
                            : <span className="text-[#8397a9]/30">—</span>
                        ) : (
                          <span className="text-[#6b6b7a]">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
