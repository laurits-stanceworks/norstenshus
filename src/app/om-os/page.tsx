import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nordstens Hus — Nordstens Workspace",
  description:
    "Lær historien bag Nordstens Hus — en omhyggeligt restaureret bygning fra 1880'erne i hjertet af Hillerød.",
}

const timeline = [
  { year: "1877", text: "Peder Nielsen overtager Frederiksborg Jernstøberi og Maskinfabrik i Hillerød og grundlægger Nordstens med 12 mand." },
  { year: "1900", text: "Guldmedalje på verdensudstillingen i Paris og sølvmedalje i Reval. Fabrikken er vokset til Nordeuropas største producent af såmaskiner." },
  { year: "1910", text: "Grand Prix på verdensudstillingen i Bruxelles. Nordstens eksporterer tærskeværker og såmaskiner til hele verden." },
  { year: "1950'erne", text: "Produktionen ophører og fabriksvirksomheden afsluttes." },
  { year: "2020'erne", text: "Frederiksborg Gruppen restaurerer bygningen nænsomt i samarbejde med Nationalmuseet — genskabt som i slutningen af 1800-tallet." },
  { year: "I dag", text: "Nordstens Workspace åbner — et moderne kontorfællesskab i historiske rammer, der skriver sig ind i et nyt kapitel for Hillerød." },
]

const collaborators = [
  "Frederiksborg Gruppen",
  "Møgelhøj Arkitekter",
  "Aksel V. Jensen Rådgivende Ingeniører",
  "VVS Allan Kristiansen og Sønner",
  "CL Electric",
  "CL & CO",
  "MadsMaler",
  "Rubin Stuk & Søn",
  "Malerfag",
  "Nationalmuseet",
  "Spar Nord",
]

export default function OmOsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image
          src="/images/om-os-hero.jpg"
          alt="Nordstens Hus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Nordstens Hus
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Et hus lige fra hjertet
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            En bygning med sjæl. Opført i 1880'erne, restaureret med respekt — og nu rammen
            om et moderne arbejdsfællesskab.
          </p>
        </div>
      </section>

      {/* History + Timeline */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4">Historien</p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-6">
              Fra maskinfabrik til kontorfællesskab
            </h2>
            <div className="space-y-4 text-[#6b6b7a] leading-relaxed text-sm">
              <p>
                I Nordstens Hus har Hillerød fået et håndgribeligt bevis på fortidens helt unikke og
                gode håndværk. Slotsgade 15 var i mere end 100 år hovedsædet for Nordstens fabrik —
                Nordeuropas største producent af såmaskiner, der eksporterede til hele verden og
                modtog internationale medaljer.
              </p>
              <p>
                Hele huset er nænsomt restaureret og i stort omfang genskabt som det så ud i
                slutningen af 1800-tallet — i samarbejde med Nationalmuseet.
              </p>
              <p>
                Vores ambitiøse hus inviterer indenfor i et driftigt fællesskab, der bidrager til
                byen og dens borgere. Vi hylder idéen om, at vores hus er meget mere end mursten —
                det er et historisk og kulturelt anker, og et sted for alle.
              </p>
              <p>
                Mantraet fra Frederiksborg Gruppen er: <em>"Vi gør tingene ordentligt."</em> Intet
                bliver gjort halvt — det vil du opleve, når du er en del af Nordstens Workspace.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {timeline.map(({ year, text }) => (
              <div key={year} className="flex gap-6">
                <div className="shrink-0 w-20">
                  <span className="text-[#9d2e1e] font-semibold text-sm">{year}</span>
                </div>
                <div className="border-l border-[#e5e3dc] pl-6 pb-1">
                  <p className="text-[#6b6b7a] text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical photo grid */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4 text-center">Arkiv</p>
          <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light text-center mb-10">
            Nordstens fabrik — historiske billeder
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
            {[
              { src: "/images/history-828-91-133.jpg", alt: "Nordstens værksted med hvælvede buer" },
              { src: "/images/history-832-91-107.jpg", alt: "Arbejdere i fabrikshallen" },
              { src: "/images/history-833-91-108.jpg", alt: "Arbejdere ved arbejdsbænk" },
              { src: "/images/history-835-91-106.jpg", alt: "Produktionshallen" },
              { src: "/images/history-836-91-110.jpg", alt: "Værksted med buede vinduer" },
              { src: "/images/history-829-91-109.jpg", alt: "Nordstens landbrugsmaskine indendørs" },
              { src: "/images/history-10097---32-88-57-og-2697-nordsten-landbrugsmaskine.jpg", alt: "Nordstens maskine ved fabrikken" },
              { src: "/images/history-10101---36-88-61-og-24622-maskinhal.jpg", alt: "Maskinhal med cylindere" },
              { src: "/images/history-830-75-32.jpg", alt: "Nordstens fabrikskompleks fra gaden" },
              { src: "/images/history-979-nordsten-svendegilde-1960.jpg", alt: "Svendegilde 1960" },
              { src: "/images/history-980-nordsten-svendegilde-1960.jpg", alt: "Svendegilde 1960" },
              { src: "/images/history-981-nordsten-svendegilde-1960.jpg", alt: "Svendegilde 1960 — juletræ" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative aspect-square overflow-hidden bg-[#f5f4f0]">
                <Image src={src} alt={alt} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single historical photo */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4 text-center">Arkiv</p>
          <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light text-center mb-10">
            Grand Prix på verdensudstillingen i Bruxelles
          </h2>
          <div className="relative w-full overflow-hidden bg-[#f5f4f0]">
            <Image
              src="/images/history-985-nordsten-forside.jpg"
              alt="Nordstens forside til skrift"
              width={1200}
              height={900}
              className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-8">
            Bygget i samarbejde med
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[#8397a9] text-sm">
            {collaborators.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
