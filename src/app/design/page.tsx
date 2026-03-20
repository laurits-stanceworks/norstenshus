import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design — Nordstens Workspace",
  description: "Nordstens Workspace er indrettet med HAY møbler og Skandinavisk designæstetik i historiske rammer.",
}

const designPrinciples = [
  {
    title: "HAY møbler",
    description:
      "Hele bygningen er møbleret med møbler fra danske HAY — et af verdens førende designmærker. Ergonomi og æstetik går hånd i hånd.",
  },
  {
    title: "Historiske detaljer",
    description:
      "Originale bygningsdetaljer er bevaret og restaureret. Murstensværk, bjælker og industrivinduerne fra fabriksepoken skaber en unik atmosfære.",
  },
  {
    title: "Lys og akustik",
    description:
      "Lysindfald og akustik er nøje planlagt af professionelle rådgivere for at skabe optimale arbejdsbetingelser.",
  },
  {
    title: "Skandinavisk minimalisme",
    description:
      "Rene linjer, neutrale farver og naturlige materialer. Designet er tidløst og roligt — for et miljø der fremmer koncentration.",
  },
]

export default function DesignPage() {
  return (
    <>
      <section className="bg-[#010f12] py-24 px-6 text-white text-center">
        <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Design
        </p>
        <h1 className="text-5xl font-light mb-4">Indrettet med omhu</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Hvert hjørne af Nordstens Workspace er designet med æstetik og funktion i
          balance — for at gøre din arbejdsdag bedre.
        </p>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {designPrinciples.map(({ title, description }) => (
              <div key={title} className="p-10 bg-[#fffdeb] rounded-lg">
                <div className="w-8 h-px bg-[#9d2e1e] mb-6" />
                <h3 className="text-[#010f12] text-xl font-semibold mb-3">{title}</h3>
                <p className="text-[#6b6b7a] leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#010f12] text-white text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-6">
            Filosofi
          </p>
          <p className="text-2xl font-light leading-relaxed">
            Vi tror på at smukke og gennemtænkte omgivelser påvirker kvaliteten af
            det arbejde der udføres i dem.
          </p>
        </div>
      </section>
    </>
  )
}
