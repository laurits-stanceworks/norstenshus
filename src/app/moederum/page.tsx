import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Monitor, Wifi, Users, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Møderum — Nordstens Workspace",
  description: "Book et af vores moderne mødelokaler i Hillerød. Udstyret med AV-teknik og videomødesystem.",
}

const features = [
  { icon: Monitor, label: "Skærm og AV-udstyr" },
  { icon: Wifi, label: "Fibernet" },
  { icon: Users, label: "Kapacitet 4–12 personer" },
  { icon: Phone, label: "Videomødesystem" },
]

export default function MoederumPage() {
  return (
    <>
      <section className="bg-[#262742] py-24 px-6 text-white text-center">
        <p className="text-[#CA9665] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Møderum
        </p>
        <h1 className="text-5xl font-light mb-4">Professionelle mødelokaler</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Moderne og velfungerende mødelokaler med det udstyr du har brug for —
          tilgængelige for både medlemmer og externe.
        </p>
      </section>

      <div className="relative h-80 w-full overflow-hidden">
        <Image src="/images/meeting.png" alt="Mødelokale" fill className="object-cover" />
      </div>

      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#262742] text-3xl font-light mb-6">
              Alt klar til dit møde
            </h2>
            <p className="text-[#6b6b7a] leading-relaxed mb-8">
              Vores mødelokaler er designet til at holde dine møder professionelle og
              effektive. Fra bestyrelsesmøder til workshops og præsentationer —
              rammerne er altid i orden.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-[#262742]">
                  <Icon size={18} className="text-[#CA9665]" strokeWidth={1.5} />
                  {label}
                </div>
              ))}
            </div>
            <Link
              href="/kontakt"
              className="bg-[#CA9665] text-white font-medium px-8 py-3.5 rounded hover:bg-[#b8855a] transition-colors inline-block"
            >
              Book mødelokale
            </Link>
          </div>

          <div className="bg-[#f5f4f0] rounded-lg p-10">
            <h3 className="text-[#262742] font-semibold mb-6">Inkluderet for medlemmer</h3>
            <p className="text-[#6b6b7a] text-sm leading-relaxed mb-6">
              Har du et privat kontor hos os, er adgang til mødelokalerne inkluderet i dit
              abonnement. Flexplads og fast plads-medlemmer kan booke til favorable priser.
            </p>
            <h3 className="text-[#262742] font-semibold mb-3">Externe bookinger</h3>
            <p className="text-[#6b6b7a] text-sm leading-relaxed">
              Mødelokalerne kan lejes af alle — også virksomheder uden fast tilknytning til
              Nordstens Workspace. Kontakt os for priser og ledige tider.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
