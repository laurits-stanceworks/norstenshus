import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Train, Car, Bus } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontorfællesskab i Hillerød Centrum — Nordstens Hus",
  description:
    "Nordstens Workspace ligger centralt i Hillerød på Slotsgade 13-15 — under 1 time fra København.",
}

const distances = [
  { label: "Fitness og fysio", distance: "1 km" },
  { label: "Café", distance: "0 m" },
  { label: "Restaurant", distance: "0 m" },
  { label: "Apotek", distance: "75 m" },
  { label: "Padel", distance: "1,3 km" },
  { label: "Hotel", distance: "200 m" },
  { label: "Golfbane", distance: "2,5 km" },
  { label: "Frederiksborg Slot", distance: "700 m" },
  { label: "Barokhaven", distance: "1,1 km" },
  { label: "Kongernes Nationalpark", distance: "4 km" },
  { label: "Royal Stage", distance: "1,1 km" },
  { label: "Kulturhus", distance: "200 m" },
  { label: "Bibliotek", distance: "400 m" },
  { label: "Biograf", distance: "150 m" },
]

export default function HilleroedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image
          src="/images/hilleroed-hero.jpg"
          alt="Hillerød set fra luften"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Hillerød
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Hillerød — den perfekte hjemmebane til din virksomhed
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Nordstens Workspace ligger lige midt i Hillerød, som er en dynamisk by omgivet af den smukkeste natur — og under 1 time fra København i bil og 35 minutter med S-tog.
          </p>
        </div>
      </section>

      {/* Address & map */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-[#8397a9] text-xl sm:text-2xl md:text-3xl font-light mb-8">
              Adresse & transport
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-[#9d2e1e] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#8397a9] mb-1">Adresse</p>
                  <p className="text-[#6b6b7a] text-sm">
                    Slotsgade 13-15<br />
                    3400 Hillerød
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Train size={20} className="text-[#9d2e1e] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#8397a9] mb-1">Med tog</p>
                  <p className="text-[#6b6b7a] text-sm">
                    800 meter fra Hillerød Station (S-tog og Lokalbanen).
                    35 minutter fra København med S-tog.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Car size={20} className="text-[#9d2e1e] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#8397a9] mb-1">Med bil</p>
                  <p className="text-[#6b6b7a] text-sm">
                    Motorvejen kun 3 minutter væk. 4 parkeringshuse blot 100 meter fra døren.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Bus size={20} className="text-[#9d2e1e] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#8397a9] mb-1">Med bus</p>
                  <p className="text-[#6b6b7a] text-sm">
                    Busstoppested kun 150 meter fra bygningen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden h-96 md:h-auto min-h-80">
            <iframe
              src="https://maps.google.com/maps?q=Slotsgade+13-15,+3400+Hillerød,+Denmark&output=embed&hl=da"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nordstens Workspace på kortet"
            />
          </div>
        </div>
      </section>

      {/* Distances */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-8 text-center">
            I hjertet af Hillerød — afstand til
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {distances.map(({ label, distance }) => (
              <div key={label} className="bg-white rounded-lg p-4 text-center w-[calc(50%-8px)] sm:w-[calc(33.33%-11px)] md:w-[calc(25%-12px)]">
                <p className="text-[#9d2e1e] font-semibold text-sm">{distance}</p>
                <p className="text-[#6b6b7a] text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location highlights */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-[#e8e6e0]">

            <div className="md:pr-12 pb-12 md:pb-0 border-b md:border-b-0 border-[#e8e6e0]">
              <span className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4 block">01</span>
              <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-4">
                Helt tæt på det hele
              </h2>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">
                Natur, historie og byliv. Du får det hele i Hillerød, som Nordstens Workspace ligger
                helt centralt i. Gå en tur rundt om Slotssøen, nyd Barokhaven og Frederiksborg Slot,
                eller stik ind i Slotsarkaderne — alt er inden for 10 minutters gang.
              </p>
            </div>

            <div className="md:px-12 py-12 md:py-0 border-b md:border-b-0 border-[#e8e6e0]">
              <span className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4 block">02</span>
              <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-4">
                Gastronomi og hygge
              </h2>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">
                Nordstens Workspace er omfavnet af gastronomiske oplevelser og hyggelige caféer.
                Uanset hvornår på døgnet du har brug for en pause, finder du altid en dejlig
                atmosfære og lækker mad og drikke — enten i vores gård eller lige uden for døren.
              </p>
            </div>

            <div className="md:pl-12 pt-12 md:pt-0">
              <span className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4 block">03</span>
              <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-4">
                En erhvervsby med internationalt snit
              </h2>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">
                Hillerød er den førende vækstkommune i Hovedstadsregionen og tiltrækker
                internationale virksomheder inden for teknologi, sundhed og forskning. Novo, Foss,
                Fuji-Film og El-lab investerer massivt i nye faciliteter i byen.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
