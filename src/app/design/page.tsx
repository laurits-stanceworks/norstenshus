import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design — Nordstens Workspace",
  description:
    "Nordstens Workspace er indrettet med HAY møbler og Skandinavisk designæstetik i historiske rammer.",
}

export default function DesignPage() {
  return (
    <>
      <section className="bg-[#8397a9] py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-white text-center">
        <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Design
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
          Nordstens Workspace by HAY
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          At designe inkluderende og imødekommende rum — en ny æra for co-working.
        </p>
      </section>

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl space-y-12">

          <div>
            <p className="text-[#6b6b7a] leading-relaxed">
              Hos HAY har vi arbejdet ud fra en filosofi om inklusion for at skabe en sammenhængende
              og imødekommende kultur i hele bygningen — tro mod co-working-konceptets grundtanke.
              Vores design er skabt til at omfavne alle, der bruger rummet, uanset baggrund, behov
              eller arbejdsmæssigt fokus.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#9d2e1e] pl-6">
            <p className="text-[#8397a9] text-lg sm:text-xl font-light italic leading-relaxed mb-3">
              "I et traditionelt kontor opstår fællesskabet ofte gennem virksomhedens kultur. Men i
              et co-working-miljø er det anderledes. Her vælger folk selv, hvor meget de vil deltage
              i fællesskabet. Derfor var vores mål at skabe et miljø, der naturligt inviterer til
              interaktion, men som også tilbyder steder, hvor man kan trække sig tilbage for
              fordybelse og ro."
            </p>
            <cite className="text-[#6b6b7a] text-sm not-italic">
              — Rolf Hay, kreativ direktør, HAY Furniture og Lighting
            </cite>
          </blockquote>

          <div>
            <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-4">
              Køkkenet som hjertet i bygningen
            </h2>
            <p className="text-[#6b6b7a] leading-relaxed">
              Køkkenet er centralt placeret som bygningens samlingspunkt — et sted, hvor folk kan
              mødes og tale sammen, ligesom man ville i et moderne hjem. Selvom dette er et
              professionelt miljø, er HAY&apos;s designfilosofi altid at skabe rum, der føles varme
              og imødekommende.
            </p>
          </div>

          <blockquote className="border-l-2 border-[#9d2e1e] pl-6">
            <p className="text-[#8397a9] text-lg sm:text-xl font-light italic leading-relaxed mb-3">
              "Siden HAY&apos;s begyndelse for over 20 år siden har vi stræbt efter at designe møbler,
              der bygger bro mellem det professionelle og det hjemlige. Et co-working-rum behøver
              ikke at føles stramt og corporate. Vi lever i en tid, hvor arbejdspladser forandrer
              sig, og dette projekt er et tydeligt eksempel på den udvikling."
            </p>
            <cite className="text-[#6b6b7a] text-sm not-italic">— Rolf Hay</cite>
          </blockquote>

          <div>
            <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-4">
              Respekt for bygningens historie
            </h2>
            <p className="text-[#6b6b7a] leading-relaxed mb-4">
              Bygningen, der stammer fra 1886, bærer på en rig arkitektonisk historie og en
              nostalgisk charme. Vores mål var at ære denne historie og integrere den i designet,
              samtidig med at vi opfyldte kravene til et moderne co-working-miljø.
            </p>
            <blockquote className="border-l-2 border-[#9d2e1e] pl-6 mt-6">
              <p className="text-[#8397a9] text-base font-light italic leading-relaxed mb-3">
                "I bygninger uden stærk arkitektonisk karakter er det ofte nødvendigt at tilføre
                detaljer. Men her handlede det om at vise mådehold og lade arkitekturen tale for sig
                selv. Vi gjorde kun justeringer for at fremhæve det bedste af, hvad der allerede var
                til stede, og for at lade bygningens historie fortsætte i en moderne kontekst."
              </p>
              <cite className="text-[#6b6b7a] text-sm not-italic">
                — Susanne Furbo, Head of Interior Design, HAY
              </cite>
            </blockquote>
          </div>

          <div>
            <h2 className="text-[#8397a9] text-xl sm:text-2xl font-light mb-4">
              Et unikt samarbejde
            </h2>
            <p className="text-[#6b6b7a] leading-relaxed mb-4">
              Nordstens Workspace gav HAY fuldstændig frihed i dette projekt, hvilket har været en
              af de mest givende aspekter af samarbejdet. Deres klare vision og respekt for
              bygningens historie gav os plads til at udfolde vores kreativitet.
            </p>
            <p className="text-[#6b6b7a] leading-relaxed">
              HAY har brugt produkter fra hele deres sortiment af accessories, møbler og belysning
              — og resultatet er arbejdsmiljøer, der støtter nye måder at arbejde på, forvandler
              erhvervsejendomme og styrker fællesskaber.
            </p>
          </div>

        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#8397a9] text-white text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-6">
            Filosofi
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            "Vi har skabt et rum, hvor hjemlige og professionelle miljøer smelter sammen — præcis
            som vores produkter altid har gjort."
          </p>
          <p className="text-white/50 mt-4 text-sm">— Rolf Hay</p>
        </div>
      </section>
    </>
  )
}
