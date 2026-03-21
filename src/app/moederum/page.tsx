import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Møderum — Nordstens Workspace",
  description:
    "Book et af vores moderne mødelokaler i Hillerød. Udstyret med AV-teknik, videomødesystem og mulighed for forplejning.",
}

const rooms = [
  {
    name: "CERES",
    capacity: "2–4 personer",
    features: ["AV-udstyr", "Videokonference", "Whiteboard"],
  },
  {
    name: "VULCAN",
    capacity: "2–6 personer",
    features: ["AV-udstyr", "Videokonference", "Whiteboard"],
  },
  {
    name: "PARIS",
    capacity: "2–4 personer",
    features: ["AV-udstyr", "Videokonference"],
  },
  {
    name: "RÅ15",
    capacity: "2–20 personer",
    features: ["AV-udstyr", "Videokonference", "Whiteboards", "Flip over"],
  },
  {
    name: "RÅ15 Event",
    capacity: "2–50 personer",
    features: ["AV-udstyr", "Videokonference", "Whiteboards", "Flip over"],
  },
]

const packages = [
  {
    name: "Heldagspakke",
    price: "352",
    hours: "kl. 08.00 – 17.00",
    includes: ["Morgenmødepakke ved ankomst", "Frokostmødepakke midt på dagen", "Eftermiddagsmødepakke som afslutning"],
  },
  {
    name: "Halvdagspakke – Morgen",
    price: "260",
    hours: "kl. 08.00 – 13.30",
    includes: ["Morgenmødepakke ved ankomst", "Frokostmødepakke midt på dagen"],
  },
  {
    name: "Halvdagspakke – Eftermiddag",
    price: "274",
    hours: "kl. 12.00 – 17.00",
    includes: ["Frokostmødepakke midt på dagen", "Eftermiddagspakke sidst på dagen"],
  },
]

const catering = [
  {
    name: "Morgenmødepakke",
    price: "79",
    time: "kl. 08.00 – 10.00",
    image: "/images/interior-a.jpg",
    includes: ["Friskbagt surdejsbrød med smør og ost", "Croissant", "Filterkaffe og te", "Vand"],
  },
  {
    name: "Frokostmødepakke",
    price: "182",
    time: "kl. 11.30 – 13.30",
    image: "/images/catering-lunch.jpg",
    includes: [
      "Let tapas: skinke, pølse, to slags oste, oliven og mandler",
      "Brød: rugbrød og surdejsbrød",
      "Filterkaffe og te",
      "Vand",
    ],
  },
  {
    name: "Eftermiddagsmødepakke",
    price: "54",
    time: "kl. 14.00 – 17.00",
    image: "/images/catering-afternoon.jpg",
    includes: ["Filterkaffe og te", "Vand", "Kage"],
  },
]

const faq = [
  {
    q: "Er der IT-udstyr og AV-teknik klar til mødet?",
    a: "Hos Nordstens Workspace har vi altid moderne teknisk udstyr, så dit møde forløber uden tekniske problemer. Vi tester alt udstyr på forhånd, så det står klart, når du ankommer.",
  },
  {
    q: "Er der mulighed for forplejning?",
    a: "Ja, vi sørger for frisk og velsmagende forplejning til alle mødedeltagere lavet af de bedste råvarer fra Café Rømers her i Hillerød. I bestemmer selv, hvor meget forplejning og hvornår I ønsker det.",
  },
  {
    q: "Kan Nordstens Workspace hjælpe med at arrangere mødet?",
    a: "Ja, vi tilbyder rådgivning og hjælp til planlægning af jeres møde eller event. Vores team hjælper dig hele vejen fra de første idéer til den endelige afvikling.",
  },
  {
    q: "Hvad er jeres annulleringsbetingelser?",
    a: "Nordstens Workspace har fleksible og gennemsigtige annulleringsbetingelser. Afbestilling skal altid ske skriftligt. Kontakt os for at høre mere om gældende frister og betingelser.",
  },
  {
    q: "Er der mulighed for at parkere som mødegæst?",
    a: "Ja, der er mange parkeringsmuligheder tæt på vores lokation i p-husene ved Slotskaderne eller i Gallerierne. Du kan betale direkte ved p-pladserne eller via EasyPark.",
  },
]

export default function MoederumPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image src="/images/moederum-hero.jpg" alt="Mødelokale" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Møderum
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Mød hinanden i de bedste rammer
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Moderne mødelokaler med fuldt udstyrede videokonferencefaciliteter og mulighed for
            skræddersyet forplejning. Uanset om I er 2, 5 eller +20 deltagere.
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Lokaler
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Vores mødelokaler
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div key={room.name} className="bg-[#f5f4f0] rounded-lg p-6 sm:p-8">
                <h3 className="text-[#8397a9] text-xl font-semibold mb-1">{room.name}</h3>
                <p className="text-[#9d2e1e] text-sm font-medium mb-4">{room.capacity}</p>
                <ul className="space-y-2">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[#6b6b7a]">
                      <Check size={14} className="text-[#9d2e1e] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Room photo gallery */}
          <div className="grid grid-cols-3 gap-2 mt-10 rounded-lg overflow-hidden">
            {[
              "/images/moederum-dl-C9A8012.jpg",
              "/images/moederum-dl-C9A8027.jpg",
              "/images/moederum-dl-IMG_7372.jpg",
              "/images/moederum-dl-IMG_7554.jpg",
              "/images/moederum-dl-IMG_7561.jpg",
              "/images/moederum-dl-IMG_7589.jpg",
            ].map((src) => (
              <div key={src} className="relative h-64 overflow-hidden">
                <Image src={src} alt="Mødelokale" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#8397a9] text-white rounded-lg p-6 sm:p-8">
            <h3 className="text-lg font-semibold mb-3">Unikke fordele</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Central beliggenhed i Hillerød med nem transport",
                "Moderne tv-skærme, videokonference og hurtigt internet",
                "Lounges og tagterrasse til pauser og netværk",
                "Adgang til fælleskøkken med kaffe ad libitum",
                "Skræddersyet forplejning fra lokale leverandører",
                "100 m til Slotssøen — ideel til walk-and-talk",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <Check size={14} className="text-[#9d2e1e] shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RÅ15 event */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
            Event lokale
          </p>
          <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light mb-6">
            RÅ15 — et fleksibelt lokale til møder, events og selskaber
          </h2>
          <p className="text-[#6b6b7a] leading-relaxed mb-8">
            RÅ15 er et nyt og alsidigt møde- og eventlokale med plads til op mod 50 personer.
            Lokalet egner sig perfekt til forretningsmøder, workshops, firmafester, netværksevents
            og private fejringer.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 rounded-lg overflow-hidden text-left">
            {[
              "/images/moederum-dl-Ny_raa_0003_raa15-36.jpg",
              "/images/moederum-dl-Ny_raa_0008_raa-100.jpg",
              "/images/moederum-dl-Ny_raa_0005_raa15-01.jpg",
              "/images/moederum-dl-Ny_raa_0002_raa15-24.jpg",
              "/images/moederum-dl-Ny_raa_0007_raa-110.jpg",
              "/images/moederum-dl-Ny_raa_0006_raa-116.jpg",
              "/images/moederum-dl-Ny_raa_0000_raa15-12.jpg",
              "/images/moederum-dl-Ny_raa_0004_raa15-22.jpg",
            ].map((src) => (
              <div key={src} className="relative h-40 overflow-hidden">
                <Image src={src} alt="RÅ15" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-6 sm:p-8 text-left mb-6">
            <h3 className="text-[#8397a9] font-semibold mb-4">Leje af RÅ15</h3>
            <div className="space-y-3 text-sm text-[#6b6b7a]">
              <div className="flex justify-between border-b border-[#e5e3dc] pb-3">
                <span>Heldagsmøde (kl. 08.00–17.30)</span>
                <span className="font-medium text-[#8397a9]">4.000 kr. ekskl. moms</span>
              </div>
              <div className="flex justify-between">
                <span>Halvdagsmøde (op til 5 timer)</span>
                <span className="font-medium text-[#8397a9]">2.000 kr. ekskl. moms</span>
              </div>
            </div>
          </div>
          <Link
            href="/kontakt"
            className="bg-[#9d2e1e] text-white font-medium px-8 py-3.5 rounded hover:bg-[#8b2518] transition-colors inline-block"
          >
            Book mødelokale
          </Link>
        </div>
      </section>

      {/* Meeting packages */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Forplejning
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Mødepakker i Nordstens Hus
            </h2>
            <p className="text-[#6b6b7a] mt-4 max-w-xl mx-auto">
              Vælg fleksibelt mellem halv- eller heldagsløsninger med velsmagende forplejning —
              så I kan fokusere fuldt ud på mødet.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {packages.map((pkg) => (
              <div key={pkg.name} className="bg-[#f5f4f0] rounded-lg p-6 sm:p-8">
                <h3 className="text-[#8397a9] font-semibold mb-1">{pkg.name}</h3>
                <p className="text-[#6b6b7a] text-xs mb-4">{pkg.hours}</p>
                <div className="mb-4">
                  <span className="text-3xl font-light text-[#8397a9]">{pkg.price}</span>
                  <span className="text-sm text-[#6b6b7a] ml-1">kr./pers. ekskl. moms</span>
                </div>
                <ul className="space-y-2">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#6b6b7a]">
                      <Check size={14} className="text-[#9d2e1e] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-8 text-center">
            Mødeforplejning à la carte
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {catering.map((item) => (
              <div key={item.name} className="bg-[#f5f4f0] rounded-lg overflow-hidden">
                <div className="relative h-44">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-[#8397a9] font-semibold mb-1">{item.name}</h3>
                  <p className="text-[#6b6b7a] text-xs mb-4">{item.time}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-light text-[#8397a9]">{item.price}</span>
                    <span className="text-sm text-[#6b6b7a] ml-1">kr./pers. ekskl. moms</span>
                  </div>
                  <ul className="space-y-2">
                    {item.includes.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#6b6b7a]">
                        <Check size={14} className="text-[#9d2e1e] shrink-0 mt-0.5" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6b6b7a] text-sm mt-6">
            Minimumsantal 2 personer. Vi er også behjælpelig med et aftensmåltid.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-10 text-center">
            Spørgsmål og svar
          </h2>
          <div className="space-y-6">
            {faq.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-lg p-6 sm:p-8">
                <h3 className="text-[#8397a9] font-semibold mb-3">{q}</h3>
                <p className="text-[#6b6b7a] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
