import type { Metadata } from "next"
import Image from "next/image"
import {
  Wifi, Coffee, Sun, Users, Phone, Lock, Monitor, Zap,
  Wind, Car, Shield, Lightbulb, Droplets, Volume2, Key,
  Star, Heart, Globe, Tv, Package,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Faciliteter — Nordstens Workspace",
  description: "Se alle faciliteter inkluderet i dit medlemskab hos Nordstens Workspace i Hillerød.",
}

const facilities = [
  {
    icon: Wifi,
    title: "Højhastigheds fibernet",
    description: "Sikker og hurtig internetforbindelse med CAT6 kabling i hele bygningen.",
  },
  {
    icon: Users,
    title: "Mødelokaler med AV",
    description: "Moderne mødelokaler udstyret med skærme og videomødeudstyr.",
  },
  {
    icon: Phone,
    title: "Telefonbokse",
    description: "6 dedikerede telefonbokse til fortrolige samtaler og fokuseret arbejde.",
  },
  {
    icon: Sun,
    title: "Tagterrasse",
    description: "Unik tagterrasse med udsigt — til møder, pauser eller networking udendørs.",
  },
  {
    icon: Wind,
    title: "Gårdhave",
    description: "Smuk gårdhave omgivet af den historiske bygnings arkitektur.",
  },
  {
    icon: Coffee,
    title: "Køkkener & kaffe",
    description: "Delte køkkener med gratis kaffe, te og drikkevarer inkluderet.",
  },
  {
    icon: Lock,
    title: "24/7 adgang",
    description: "Salto mobil nøglesystem giver dig adgang til bygningen hele døgnet.",
  },
  {
    icon: Zap,
    title: "Daglig rengøring",
    description: "Professionel rengøring af alle fællesområder og dit kontor hver dag.",
  },
  {
    icon: Lightbulb,
    title: "Loungeområder",
    description: "Indbydende lounges til uformel networking, læsning eller pauser.",
  },
  {
    icon: Monitor,
    title: "Ergonomisk indretning",
    description: "HAY møbler og ergonomiske løsninger gennemgående i hele bygningen.",
  },
  {
    icon: Shield,
    title: "Sikkerhed",
    description: "Overvågningssystem og adgangskontrol sikrer tryghed for dig og din virksomhed.",
  },
  {
    icon: Volume2,
    title: "Akustik & belysning",
    description: "Optimal akustik og belysning designet til koncentration og velvære.",
  },
  {
    icon: Droplets,
    title: "Brusefaciliteter",
    description: "Brusere til dig der cykler til arbejde eller træner i løbet af dagen.",
  },
  {
    icon: Globe,
    title: "Netværksarrangementer",
    description: "Regelmæssige events og arrangementer der bringer fællesskabet sammen.",
  },
  {
    icon: Key,
    title: "Mobil nøgleadgang",
    description: "Åbn alle døre med din telefon via Salto systemet — ingen fysiske nøgler.",
  },
  {
    icon: Heart,
    title: "Hjemlig atmosfære",
    description: "Et varmt og imødekommende miljø der føles som et hjem uden for hjemmet.",
  },
  {
    icon: Car,
    title: "Parkering",
    description: "Parkeringsmuligheder i nærheden af bygningen.",
  },
  {
    icon: Tv,
    title: "Stille zoner",
    description: "Afskærmede områder til dybdegående koncentrationsarbejde.",
  },
  {
    icon: Package,
    title: "Postmodtagelse",
    description: "Vi modtager din post og pakker, så du aldrig går glip af en levering.",
  },
  {
    icon: Star,
    title: "Erhvervsadresse",
    description: "Brug Slotsgade 13-17, Hillerød som din officielle virksomhedsadresse.",
  },
]

export default function FaciliteterPage() {
  return (
    <>
      <section className="bg-[#8397a9] py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-white text-center">
        <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Faciliteter
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
          Faciliteter der løfter din arbejdsdag
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Meget mere end traditionel kontorleasing. Alt hvad du behøver er inkluderet
          — fra dag ét.
        </p>
      </section>

      {/* Photo strip */}
      <div className="grid grid-cols-3 gap-1 h-64">
        <div className="relative overflow-hidden">
          <Image src="/images/interior-3.png" alt="Lounge" fill className="object-cover" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/rooftop.jpg" alt="Tagterrasse" fill className="object-cover" />
        </div>
        <div className="relative overflow-hidden">
          <Image src="/images/interior-1.png" alt="Kontor" fill className="object-cover" />
        </div>
      </div>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 sm:p-8 bg-[#f5f4f0] rounded-lg hover:shadow-md transition-shadow"
            >
              <Icon size={28} className="text-[#9d2e1e] mb-4" strokeWidth={1.5} />
              <h3 className="text-[#8397a9] font-semibold mb-2">{title}</h3>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
