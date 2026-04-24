import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { MoederumFaq } from "@/components/moederum-faq"

export const metadata: Metadata = {
  title: "Lej Mødelokale i Hillerød — Book Online",
  description:
    "Lej mødelokale i Hillerød til 2–20 personer. Fuldt udstyret med AV-teknik og videokonference. Mødepakker fra 99 kr./pers. inkl. forplejning. Book online — Nordstens Workspace, Slotsgade 13-15.",
  keywords: [
    "lej mødelokale Hillerød", "mødelokale med AV Hillerød", "book mødelokale Hillerød",
    "konferencelokale Hillerød", "møderum Hillerød", "videokonference Hillerød",
    "mødelokale forplejning Hillerød", "mødelokale Nordsjælland", "mødelokale til 20 personer",
    "mødepakke Hillerød", "møderum leje pris",
  ],
  alternates: { canonical: "https://nordstens.dk/moederum" },
  openGraph: {
    title: "Lej Mødelokale i Hillerød — Book Online",
    description: "Mødelokaler til 2–20 personer med AV-teknik og videokonference. Mødepakker fra 99 kr./pers. inkl. forplejning.",
    images: [{ url: "/images/moederum-hero.jpg", width: 1800, height: 1200, alt: "Mødelokale hos Nordstens Workspace Hillerød" }],
  },
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
    name: "rå15",
    capacity: "2–20 personer",
    features: ["AV-udstyr", "Videokonference", "Whiteboards", "Flip over"],
  },
  {
    name: "rå15 Event",
    capacity: "2–50 personer",
    features: ["AV-udstyr", "Videokonference", "Whiteboards", "Flip over"],
  },
]

const packages = [
  {
    name: "Heldagspakke",
    price: "372",
    hours: "kl. 08.00 – 17.00",
    includes: ["Morgenmødepakke ved ankomst", "Frokostmødepakke midt på dagen", "Eftermiddagsmødepakke som afslutning"],
  },
  {
    name: "Halvdagspakke – Morgen",
    price: "280",
    hours: "kl. 08.00 – 13.30",
    includes: ["Morgenmødepakke ved ankomst", "Frokostmødepakke midt på dagen"],
  },
  {
    name: "Halvdagspakke – Eftermiddag",
    price: "294",
    hours: "kl. 12.00 – 17.00",
    includes: ["Frokostmødepakke midt på dagen", "Eftermiddagspakke sidst på dagen"],
  },
]

const catering = [
  {
    name: "Morgenmødepakke",
    price: "99",
    time: "kl. 08.00 – 10.00",
    image: "/images/faciliteter-coffee.jpg",
    includes: ["Friskbagt surdejsbrød med smør og ost", "Croissant", "Filterkaffe og te", "Vand"],
  },
  {
    name: "Frokostmødepakke",
    price: "202",
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
    price: "74",
    time: "kl. 14.00 – 17.00",
    image: "/images/catering-afternoon.jpg",
    includes: ["Filterkaffe og te", "Vand", "Kage"],
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
          <div className="grid sm:grid-cols-3 gap-6">
            {rooms.slice(0, 3).map((room) => (
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
          <div className="grid sm:grid-cols-2 gap-6 mt-6 sm:max-w-2xl sm:mx-auto">
            {rooms.slice(3).map((room) => (
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

      {/* rå15 teaser */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
              {[
                "/images/moederum-dl-Ny_raa_0005_raa15-01.jpg",
                "/images/moederum-dl-Ny_raa_0003_raa15-36.jpg",
                "/images/moederum-dl-Ny_raa_0008_raa-100.jpg",
                "/images/moederum-dl-Ny_raa_0002_raa15-24.jpg",
              ].map((src) => (
                <div key={src} className="relative h-44 overflow-hidden">
                  <Image src={src} alt="rå15" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Event lokale
              </p>
              <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-4">
                rå15
              </h2>
              <p className="text-[#6b6b7a] leading-relaxed mb-6">
                Et fleksibelt møde- og eventlokale med plads til op mod 50 personer —
                perfekt til forretningsmøder, workshops, firmafester og private fejringer.
                Industriel charme midt i Hillerød.
              </p>
              <div className="text-sm text-[#6b6b7a] space-y-1 mb-8">
                <div className="flex justify-between border-b border-[#e5e3dc] pb-2">
                  <span>Heldagsmøde (kl. 08.00–17.30)</span>
                  <span className="font-medium text-[#8397a9]">fra 4.000 kr.</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Halvdagsmøde (op til 5 timer)</span>
                  <span className="font-medium text-[#8397a9]">fra 2.000 kr.</span>
                </div>
              </div>
              <Link
                href="/raa15"
                className="bg-[#9d2e1e] text-white font-medium px-8 py-3.5 rounded hover:bg-[#8b2518] transition-colors inline-block"
              >
                Se rå15
              </Link>
            </div>
          </div>
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
          <MoederumFaq />
        </div>
      </section>
    </>
  )
}
