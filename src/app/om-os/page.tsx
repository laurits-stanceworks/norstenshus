import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nordstens Hus — Nordstens Workspace",
  description: "Lær historien bag Nordstens Hus — en omhyggeligt restaureret bygning fra 1880'erne i hjertet af Hillerød.",
}

const timeline = [
  { year: "1877", text: "Nordstens grundlægges som maskin- og redskabsfabrik i Hillerød." },
  { year: "1900", text: "International anerkendelse med medaljer fra Paris og Reval for produktudvikling." },
  { year: "1910", text: "Grand Prix i Bruxelles — Nordstens tærskemaskiner og såmaskiner sælges globalt." },
  { year: "1950'erne", text: "Produktionen ophører og fabriksvirksomheden afsluttes." },
  { year: "2020'erne", text: "Frederiksborg Gruppen restaurerer bygningen i samarbejde med Nationalmuseet." },
  { year: "I dag", text: "Nordstens Workspace åbner — et moderne kontorfællesskab i historiske rammer." },
]

export default function OmOsPage() {
  return (
    <>
      <section className="bg-[#262742] py-24 px-6 text-white text-center">
        <p className="text-[#CA9665] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Nordstens Hus
        </p>
        <h1 className="text-5xl font-light mb-4">Historien bag huset</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          En bygning med sjæl. Opført i 1880'erne, restaureret med respekt — og nu rammen
          om et moderne arbejdsfællesskab.
        </p>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-[#262742] text-3xl font-light leading-relaxed">
            "Det der skabes uden omhu inspirerer sjældent til stor begejstring"
          </blockquote>
          <p className="text-[#6b6b7a] mt-4 text-sm">— Frederiksborg Gruppen</p>
        </div>
      </section>

      {/* History */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-[#262742] text-3xl font-light mb-6">
              Fra maskinfabrik til kontorfællesskab
            </h2>
            <p className="text-[#6b6b7a] leading-relaxed mb-4">
              Nordstens Hus rummer en rig industrihistorie. Oprindeligt hjem for en af
              Hillerøds vigtigste fabrikker, producerede Nordstens verdenserkendte tærskemaskiner
              og såmaskiner fra 1877 til 1950'erne.
            </p>
            <p className="text-[#6b6b7a] leading-relaxed mb-4">
              Restaureringen er udført med Nationalmuseet som partner for at sikre, at
              bygningens historiske udtryk og autentiske detaljer bevares — mens det indre
              er transformeret til et tidssvarende kontormiljø.
            </p>
            <p className="text-[#6b6b7a] leading-relaxed">
              Resultatet er et sted der føles unikt: en bygning der fortæller en historie,
              og som danner rammen for nye historier om arbejde, fællesskab og vækst.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map(({ year, text }) => (
              <div key={year} className="flex gap-6">
                <div className="shrink-0">
                  <span className="text-[#CA9665] font-semibold text-sm">{year}</span>
                </div>
                <div className="border-l border-[#e5e3dc] pl-6 pb-2">
                  <p className="text-[#6b6b7a] text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-16 px-6 bg-[#262742] text-white text-center">
        <p className="text-[#CA9665] text-sm font-medium uppercase tracking-[0.2em] mb-6">
          Bygget i samarbejde med
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-white/50 text-sm max-w-3xl mx-auto">
          {[
            "Møgelhøj Arkitekter",
            "Nationalmuseet",
            "Frederiksborg Gruppen",
          ].map((name) => (
            <span key={name} className="hover:text-white/80 transition-colors">
              {name}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
