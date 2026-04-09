import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Check, Users, Briefcase, Music, Network, PartyPopper } from "lucide-react"

export const metadata: Metadata = {
  title: "rå15 — Lej eventlokale i Hillerød",
  description:
    "rå15 er et fleksibelt møde- og eventlokale med plads til op mod 50 personer. Perfekt til forretningsmøder, workshops, firmafester og private arrangementer i Hillerød.",
}

const useCases = [
  {
    icon: Briefcase,
    title: "Forretningsmøder",
    description: "Fuldt AV-udstyret lokale med videokonference til større teams og præsentationer.",
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Whiteboards, flip over og fleksibelt møblement — klar til kreative processer.",
  },
  {
    icon: Network,
    title: "Netværksevents",
    description: "Rum nok til at samle dit netværk. Tilføj forplejning og gør det til en oplevelse.",
  },
  {
    icon: Briefcase,
    title: "Konferencer",
    description: "Plads til op mod 50 deltagere med professionelt setup og mødepakker.",
  },
  {
    icon: Music,
    title: "Firmafester",
    description: "Fejr jeres succeser i unikke industrielle omgivelser med karakter.",
  },
  {
    icon: PartyPopper,
    title: "Private fejringer",
    description: "Fødselsdage, jubilæer og andre private arrangementer i autentiske rammer.",
  },
]

const gallery = [
  "/images/moederum-dl-Ny_raa_0005_raa15-01.jpg",
  "/images/moederum-dl-Ny_raa_0003_raa15-36.jpg",
  "/images/moederum-dl-Ny_raa_0002_raa15-24.jpg",
  "/images/moederum-dl-Ny_raa_0004_raa15-22.jpg",
  "/images/moederum-dl-Ny_raa_0000_raa15-12.jpg",
  "/images/moederum-dl-Ny_raa_0008_raa-100.jpg",
  "/images/moederum-dl-Ny_raa_0007_raa-110.jpg",
  "/images/moederum-IMG_5246.jpg",
  "/images/moederum-IMG_6126.jpg",
]

export default function Raa15Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image
          src="/images/moederum-dl-Ny_raa_0006_raa-116.jpg"
          alt="rå15 eventlokale"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Event &amp; mødelokale
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            rå15
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Et fleksibelt lokale med karakter — til møder, events og fejringer
            for op til 50 personer.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
            Om lokalet
          </p>
          <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light mb-6">
            Industriel charme midt i Hillerød
          </h2>
          <p className="text-[#6b6b7a] leading-relaxed mb-4">
            rå15 er et nyt og alsidigt møde- og eventlokale i Nordstens Hus med
            plads til op mod 50 personer. Lokalet bærer præg af bygningens
            industrielle historie — råt betongulv, høje lofter og autentiske
            detaljer — og danner en unik ramme om alt fra skarpe
            forretningsmøder til uforglemmelige firmafester.
          </p>
          <p className="text-[#6b6b7a] leading-relaxed">
            Lokalet er fuldt udstyret med AV-teknik, videokonference, whiteboards
            og flip over. Møblementet er fleksibelt og kan indrettes efter jeres
            behov. Forplejning kan tilkøbes direkte — fra morgenmødepakke til
            aftensmåltid.
          </p>
        </div>

        {/* Key specs */}
        <div className="mx-auto max-w-3xl mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: "50", label: "maks. deltagere" },
            { value: "AV", label: "fuldt udstyret" },
            { value: "08–17", label: "standardleje" },
            { value: "Fleksibelt", label: "møblement" },
          ].map((s) => (
            <div key={s.label} className="bg-[#f5f4f0] rounded-lg p-5">
              <div className="text-2xl font-light text-[#8397a9] mb-1">{s.value}</div>
              <div className="text-xs text-[#6b6b7a] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Galleri
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light">
              Se lokalet
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 rounded-lg overflow-hidden">
            {gallery.map((src, i) => (
              <div key={i} className="relative h-48 sm:h-64 overflow-hidden">
                <Image src={src} alt={`rå15 ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Anvendelse
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Brug det til
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="bg-[#f5f4f0] rounded-lg p-6 sm:p-8">
                <u.icon size={22} className="text-[#9d2e1e] mb-4" />
                <h3 className="text-[#8397a9] font-semibold mb-2">{u.title}</h3>
                <p className="text-[#6b6b7a] text-sm leading-relaxed">{u.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gården */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/om-os-courtyard.jpg"
                alt="Gårdhaven ved Nordstens Hus"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Udendørs
              </p>
              <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-4">
                Gården — tag festen udenfor
              </h2>
              <p className="text-[#6b6b7a] leading-relaxed mb-4">
                Til større arrangementer kan rå15 kombineres med vores smukke
                gårdhave. Med lyskæder, markiser og plads til at brede ud, er
                gården oplagt til receptioner, sommerfester og netværksevents
                under åben himmel.
              </p>
              <p className="text-[#6b6b7a] leading-relaxed">
                Gården og rå15 fungerer naturligt som ét samlet venue —
                gæsterne kan bevæge sig frit mellem indendørs og udendørs,
                og det skaber en afslappet og levende stemning til ethvert
                arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining — rømers */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Full dining experience
              </p>
              <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-4">
                Større events med menu — i samarbejde med rømers
              </h2>
              <p className="text-[#6b6b7a] leading-relaxed mb-4">
                Har I brug for en hel middagsoplevelse til jeres event? Vi
                samarbejder med rømers om at skabe en fuld dining experience
                direkte i rå15. Fra velkomstdrink til menu — alt koordineres
                og leveres, så I kan fokusere på jeres gæster.
              </p>
              <p className="text-[#6b6b7a] leading-relaxed mb-8">
                Kontakt os, så finder vi sammen den rigtige løsning til jeres
                arrangement.
              </p>
              <Link
                href="/kontakt"
                className="bg-[#9d2e1e] text-white font-medium px-8 py-3.5 rounded hover:bg-[#8b2518] transition-colors inline-block"
              >
                Hør mere om dining
              </Link>
            </div>
            <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="/images/moederum-dl-Ny_raa_0006_raa-116.jpg"
                alt="Dining i rå15 med rømers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Priser
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light">
              Leje af rå15
            </h2>
          </div>

          <div className="bg-white rounded-lg overflow-hidden mb-6">
            <div className="p-6 sm:p-8 space-y-4 text-sm text-[#6b6b7a]">
              <div className="flex justify-between items-center border-b border-[#e5e3dc] pb-4">
                <div>
                  <div className="font-medium text-[#8397a9] mb-0.5">Heldagsmøde</div>
                  <div className="text-xs">kl. 08.00 – 17.30</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-light text-[#8397a9]">4.000 kr.</div>
                  <div className="text-xs">ekskl. moms</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-[#8397a9] mb-0.5">Halvdagsmøde</div>
                  <div className="text-xs">op til 5 timer</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-light text-[#8397a9]">2.000 kr.</div>
                  <div className="text-xs">ekskl. moms</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#8397a9] text-white rounded-lg p-6 sm:p-8 mb-8">
            <h3 className="font-semibold mb-3">Inkluderet i lejen</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "Fuldt AV-udstyr og videokonference",
                "Whiteboards og flip over",
                "Fleksibelt møblement",
                "Hurtigt fibernet",
                "Adgang til fælleskøkken og kaffe",
                "Professionel rengøring",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <Check size={14} className="text-white shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/kontakt"
              className="bg-[#9d2e1e] text-white font-medium px-8 py-3.5 rounded hover:bg-[#8b2518] transition-colors inline-block"
            >
              Book rå15
            </Link>
          </div>
        </div>
      </section>

      {/* Catering crosslink */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-3">
            Forplejning
          </p>
          <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-6">
            Mødepakker og forplejning
          </h2>
          <p className="text-[#6b6b7a] leading-relaxed mb-8">
            Vi tilbyder skræddersyet forplejning til jeres arrangement — fra
            morgenmødepakke ved ankomst til frokost og eftermiddagskaffe. Se
            alle pakker og priser på vores møderumsside.
          </p>
          <Link
            href="/moederum"
            className="border border-[#8397a9] text-[#8397a9] font-medium px-8 py-3.5 rounded hover:bg-[#8397a9] hover:text-white transition-colors inline-block"
          >
            Se mødepakker og forplejning
          </Link>
        </div>
      </section>
    </>
  )
}
