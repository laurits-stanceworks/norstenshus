import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Train, Car, Bus } from "lucide-react"

export const metadata: Metadata = {
  title: "Hillerød — Nordstens Workspace",
  description:
    "Nordstens Workspace ligger centralt i Hillerød på Slotsgade 13-17 — under 1 time fra København.",
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
                    Slotsgade 13-17<br />
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
              src="https://maps.google.com/maps?q=Slotsgade+13-17,+3400+Hillerød,+Denmark&output=embed&hl=da"
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

      {/* Helt tæt på det hele */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[#8397a9] text-xl sm:text-2xl md:text-3xl font-light mb-5">
            Helt tæt på det hele
          </h2>
          <p className="text-[#6b6b7a] leading-relaxed">
            Natur, historie og byliv. Du får det hele i Hillerød, som Nordstens Workspace ligger
            helt centralt i. Så der er masser af inspiration, velvære og shopping lige ude foran
            døren. Gå lige frem og tag 10 minutters pause med en kollega rundt om Slotssøen. Nyd
            Barokhaven og Frederiksborg Slot. Gå til venstre og lige om hjørnet ind i
            Slotsarkaderne. Eller til højre 100 skridt hen ad gaden og ind i Nordisk Films
            kommende superbiograf.
          </p>
        </div>
      </section>

      {/* Gastronomi */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[#8397a9] text-xl sm:text-2xl md:text-3xl font-light mb-5">
            Gastronomi og hygge lige ved hånden
          </h2>
          <p className="text-[#6b6b7a] leading-relaxed">
            Nordstens Workspace er omfavnet af et væld af gastronomiske oplevelser og hyggelige
            caféer. Uanset hvornår på døgnet du har brug for en pause, kan du altid finde en
            dejlig atmosfære og lækker mad og drikke — enten i vores gård eller lige uden for
            døren. Her er mulighederne mange, så du kan forkæle dig selv og nyde en velfortjent
            pause eller fyraften i hyggelige rammer.
          </p>
        </div>
      </section>

      {/* En erhvervsby med internationalt snit */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[#8397a9] text-xl sm:text-2xl md:text-3xl font-light mb-5">
            En erhvervsby med internationalt snit
          </h2>
          <p className="text-[#6b6b7a] leading-relaxed mb-4">
            Hillerød tiltrækker internationale virksomheder — særligt inden for medicinalindustrien
            — med sin stærke strategiske beliggenhed. Byens blomstrende teknologi- og sundhedssektor
            skaber optimale rammer for samarbejde og vækst.
          </p>
          <p className="text-[#6b6b7a] leading-relaxed mb-4">
            Hillerød er den førende vækstkommune i Hovedstadsregionen. Ifølge den seneste
            befolkningsprognose forventes byen at vokse med ca. 500 nye boliger årligt frem til
            2032. Virksomheder som Novo, Foss, Fuji-Film og El-lab investerer massivt i nye
            faciliteter for et tocifret milliardbeløb.
          </p>
          <p className="text-[#6b6b7a] leading-relaxed">
            Byens udvikling understøttes yderligere af opførelsen af det nye supersygehus,
            forlængelsen af motorvejen til Hillerød og en løbende udvidelse af
            uddannelsesmulighederne — Hillerød er en central vækstmotor i regionen.
          </p>
        </div>
      </section>
    </>
  )
}
