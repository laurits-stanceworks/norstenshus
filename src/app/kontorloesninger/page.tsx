import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Lej Kontorplads i Hillerød — Flexplads, Fast Plads & Privat Kontor",
  description:
    "Lej kontorplads i Hillerød fra 1.595 kr./md. Vælg mellem flexplads, fast plads, privat kontor eller virtuelt kontor — alt inkluderet, ingen binding. Nordstens Workspace på Slotsgade 13-15.",
  alternates: { canonical: "https://nordstens.dk/kontorloesninger" },
  openGraph: {
    title: "Lej Kontorplads i Hillerød — Flexplads, Fast Plads & Privat Kontor",
    description: "Lej kontorplads fra 1.595 kr./md. Flexplads, fast plads og privat kontor i Hillerød. Alt inkluderet — ingen binding.",
    images: [{ url: "/images/kontorloesninger-hero.jpg", width: 1800, height: 1200, alt: "Kontorløsninger hos Nordstens Workspace Hillerød" }],
  },
}

const plans = [
  {
    name: "Virtuelt Kontor",
    price: "600",
    image: "/images/building-facade.jpg",
    description:
      "Har du ikke behov for et fysisk kontor, men stadig gerne vil have en professionel adresse i Hillerød til din virksomhed, kan Nordstens Workspace tilbyde dig en professionel tilstedeværelse med en virtuel virksomhedsadresse. Vores virtuelle kontorløsning giver dig adgang til professionel virksomhedsadresse, samt mulighed for at leje mødelokaler efter behov. Du har adgang til Nordstens Workspace åbne faglige events, men du har ikke adgang til at sidde og arbejde i huset, tagterrassen, eller de sociale events. Virtuelle kontorer er ideelle for virksomheder der ønsker at reducere omkostningerne samtidigt med at de opretholder et professionelt image og fleksibilitet til at arbejde hvor som helst.",
    subheading: "Virtuel virksomhedsadresse der skaber professionelle rammer for din virksomhed",
    features: [
      "En professionel adresse med eget firmaskilt, egen postadresse og postkasse",
      "Fri adgang til Nordstens Workspace åbne faglige events",
      "Rabat på leje af mødelokaler og telefonrum til private samtaler og mindre møder",
      "1 måneds depositum, ingen binding – 3 måneders opsigelse",
    ],
  },
  {
    name: "Flexplads",
    price: "1.595",
    image: "/images/interior-b.jpg",
    description:
      "Er du freelancer, startup, iværksætter eller en mindre virksomhed? Så kan du få en fleksibel arbejdsplads med stærke netværksmuligheder, så du kan tage virksomheden til næste niveau. En co-working flexplads giver dig en perfekt balance mellem fællesskab og individualitet. Benyt vores co-working hvor du vil finde en gruppe af ligesindede, som deler de samme værdier og mindset, eller sæt dig i en af vores mange stille zoner hvor du kan fordybe dig. Co-working flexplads kombinerer det bedste fra begge verdener, og er ideel til dig som søger et professionelt arbejdsmiljø uden lange forpligtelser og store omkostninger.",
    subheading: "Fleksibilitet og fællesskab – når det passer dig",
    features: [
      "Hold arbejde og privatliv adskilt, og få en stærk struktur i hverdagen",
      "Tilhør et fællesskab, udveksl ideer, mød mennesker og øg produktivitet",
      "Start roligt op, lej en enkelt plads og få nemt mere plads, når forretningen vokser",
      "Fri adgang på kontoret 24/7",
      "Deltag i netværksarrangementer, få inspiration og udvid netværket",
      "Fri adgang til tagterrasse, køkken, fællesområder og lounges",
      "Arbejd effektivt med hurtigt, sikkert og stabilt fibernet",
      "Nyd kaffe, te og vand ad libitum",
      "Rabat på leje af mødelokaler og telefonrum til private samtaler og mindre møder",
      "Få en god hverdag på en fuldt møbleret arbejdsplads i et åbent rum – med daglig rengøring",
      "3 måneders depositum, ingen binding – 3 måneders opsigelse – inkl. alle driftsudgifter, el, varme og vand",
    ],
    highlight: true,
  },
  {
    name: "Fast Plads",
    price: "3.495",
    image: "/images/interior-c.jpg",
    description:
      "Med en co-working fast plads får du din egen faste arbejdsstation i Nordstens Workspace co-working, som du har adgang til 24/7. Perfekt til dig, der ønsker at kombinere det dynamiske co-working miljø med en stabil base. Du får en dedikeret plads, og adgang til alle vores faciliteter, lige fra loungeområder til moderne mødelokaler og fælleskøkkener.",
    subheading: "Din egen plads – klar til dig, døgnet rundt",
    features: [
      "Få din helt personlige og faste arbejdsstation med egen skærm, tastatur og mus",
      "Deltag i netværksarrangementer, få inspiration og udvid netværket",
      "Få adgang til kontoret hele døgnet rundt",
      "Fri adgang til tagterrasse, køkken, fællesområder og lounges",
      "Nyd kaffe, te og vand ad libitum",
      "Arbejd effektivt med hurtigt, sikkert og stabilt fibernet",
      "Få firmaskilt, egen adresse, postkasse og nøglefri adgang, inkl. mobiladgang",
      "Rabat på leje af mødelokaler og telefonrum til private samtaler og mindre møder",
      "Daglig rengøring gør omgivelserne optimale at være i",
      "3 måneds depositum, ingen binding – 3 måneders opsigelse – inkl. alle driftsudgifter, el, varme og vand",
    ],
  },
  {
    name: "Privat Kontor",
    price: "6.500",
    image: "/images/interior-privat.jpg",
    description:
      "Med et privat kontor i Nordstens Workspace får du og din virksomhed sit eget lukkede kontor i eksklusive omgivelser, der kombinerer funktionalitet og æstetik. Her kan du skabe en arbejdsplads præcis, som du ønsker det, med frihed til at tilpasse efter din virksomheds behov og værdier. Uanset om du arbejder alene eller leder et team, kan vores private kontorer tilpasses og vokse med dig. Her er plads til alt fra enkeltmandsvirksomheder til virksomheder med +15 medarbejdere, der bruger +100 m². Løsningen kan fx kombineres med co-working arbejdspladser efter behov til ofte udkørende medarbejdere, eller medarbejdere der har et stort antal hjemmearbejdsdage. Med et privat kontor i Nordstens Workspace får din virksomhed en unik adresse i eksklusive rammer, der huser andre dynamiske virksomheder og dygtige mennesker.\n\nØg jeres effektivitet og forbedre arbejdsmiljøet ved at flytte fra store kontormiljøer til Nordstens Workspace, hvor du kan sammensætte dit nye setup som en kombination af mindre storrumskontorer og co-working arbejdspladser.",
    subheading: "Dit helt eget kontor – skræddersyet til din virksomhed",
    features: [
      "Arbejd effektivt med hurtigt, sikkert og stabilt fibernet",
      "Få adgang til kontoret hele døgnet rundt",
      "Fuldt møbleret privat kontor; ergonomiske stole, hæve-sænke-borde, skabe og lamper",
      "Deltag i netværksarrangementer, få inspiration og udvid netværket",
      "Fri adgang til tagterrasse, køkken, fællesområder og lounges",
      "Telefonrum og stillerum til private samtaler og mindre møder",
      "Fri adgang til bad og kaffe, te og vand ad libitum",
      "Få firmaskilt, egen adresse, postkasse og nøglefri adgang, inkl. mobiladgang",
      "Daglig rengøring gør omgivelserne optimale at være i",
      "Få mulighed for at leje mødelokaler efter behov",
      "3 måneds depositum, ingen binding – inkl. alle driftsudgifter, el, varme og vand",
    ],
  },
]

export default function KontorloesningerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image src="/images/kontorloesninger-hero.jpg" alt="Kontorløsninger" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
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
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                <div className="mb-4">
                  {plan.name === "Privat Kontor" && <span className="text-sm mr-1 text-[#6b6b7a]">fra</span>}
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light">{plan.price}</span>
                  <span className="text-sm ml-2 text-[#6b6b7a]">DKK/måned ekskl. moms</span>
                </div>
                <Link
                  href="/kontakt"
                  className="block text-center py-3.5 rounded font-medium transition-colors border border-[#8397a9]/20 text-[#8397a9] hover:border-[#9d2e1e] hover:text-[#9d2e1e] mb-8"
                >
                  Book nu
                </Link>
                <p className="text-sm mb-6 leading-relaxed text-[#6b6b7a] whitespace-pre-line">
                  {plan.description}
                </p>
                {plan.subheading && (
                  <h3 className="text-base font-semibold text-[#8397a9] mb-4">{plan.subheading}</h3>
                )}
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
                  {["Virtuelt Kontor", "Flexplads", "Fast Plads", "Privat Kontor"].map((h) => (
                    <th key={h} className="text-center py-4 px-3 text-[#8397a9] font-semibold">{h}</th>
                  ))}
                </tr>
                <tr className="border-b border-[#8397a9]/20 bg-white/50">
                  <td className="py-3 pr-6 text-[#6b6b7a] font-medium">Pris/måned ekskl. moms</td>
                  {["600 DKK", "1.595 DKK", "3.495 DKK", "6.500 DKK"].map((p) => (
                    <td key={p} className="text-center py-3 px-3 text-[#8397a9] font-semibold">{p}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Fleksibel arbejdsplads i åbent miljø", vals: [false, true, true, true] },
                  { label: "Fast personlig arbejdsstation med skærm, tastatur og mus", vals: [false, false, true, true] },
                  { label: "Fuldt møbleret", vals: [false, true, true, true] },
                  { label: "Adgang 24/7", vals: [false, true, true, true] },
                  { label: "Nøglefri adgang med mobilapp", vals: [false, false, true, true] },
                  { label: "Fri adgang til fællesarealer, tagterrasse og lounges", vals: [false, true, true, true] },
                  { label: "Kaffe, te og vand ad libitum", vals: [false, true, true, true] },
                  { label: "Fibernet", vals: [false, true, true, true] },
                  { label: "Daglig rengøring", vals: [false, true, true, true] },
                  { label: "Telefonrum", vals: [false, false, true, true] },
                  { label: "Virksomhedsadresse og postkasse", vals: [true, false, true, true] },
                  { label: "Firmaskiltning", vals: [true, false, true, true] },
                  { label: "Netværksarrangementer", vals: [true, true, true, true] },
                  { label: "Rabat på mødelokaler og telefonrum", vals: [true, true, true, true] },
                  { label: "Inkl. el, vand og varme", vals: [false, true, true, true] },
                  { label: "Depositum", vals: ["1 md.", "3 mdr.", "3 mdr.", "3 mdr."] },
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
