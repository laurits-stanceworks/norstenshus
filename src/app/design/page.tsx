import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Design — Nordstens Workspace",
  description:
    "Nordstens Workspace er indrettet med HAY møbler og Skandinavisk designæstetik i historiske rammer.",
}

const sections = [
  {
    image: "/images/design-14NylTAh5nTOHkD3h0cDuweDV8.jpg",
    heading: "Inklusion som designfilosofi",
    body: "Hos HAY har vi arbejdet ud fra en filosofi om inklusion for at skabe en sammenhængende og imødekommende kultur i hele bygningen — tro mod co-working-konceptets grundtanke. Vores design er skabt til at omfavne alle, der bruger rummet, uanset baggrund, behov eller arbejdsmæssigt fokus.",
    quote: "I et traditionelt kontor opstår fællesskabet ofte gennem virksomhedens kultur. Men i et co-working-miljø er det anderledes. Her vælger folk selv, hvor meget de vil deltage i fællesskabet. Derfor var vores mål at skabe et miljø, der naturligt inviterer til interaktion, men som også tilbyder steder, hvor man kan trække sig tilbage for fordybelse og ro.",
    cite: "— Rolf Hay, kreativ direktør, HAY Furniture og Lighting",
    reverse: false,
  },
  {
    image: "/images/design-t5ssC02p1KvT0UknpzBy2c6XZ4I.jpg",
    heading: "Køkkenet som hjertet i bygningen",
    body: "Køkkenet er centralt placeret som bygningens samlingspunkt — et sted, hvor folk kan mødes og tale sammen, ligesom man ville i et moderne hjem. HAY's designfilosofi er altid at skabe rum, der føles varme og imødekommende — synligt i valget af møbler og produkter i hele bygningen.",
    quote: "Siden HAY's begyndelse for over 20 år siden har vi stræbt efter at designe møbler, der bygger bro mellem det professionelle og det hjemlige. Et co-working-rum behøver ikke at føles stramt og corporate. Vi lever i en tid, hvor arbejdspladser forandrer sig, og dette projekt er et tydeligt eksempel på den udvikling.",
    cite: "— Rolf Hay, kreativ direktør, HAY Furniture og Lighting",
    reverse: true,
  },
  {
    image: "/images/design-8fqCDEMjowULhosiTWyPMHctk-2.jpg",
    heading: "Respekt for bygningens historie",
    body: "Bygningen, der stammer fra 1886, bærer på en rig arkitektonisk historie og en nostalgisk charme. Målet var at ære denne historie og integrere den i designet, samtidig med at vi opfyldte kravene til et moderne co-working-miljø.",
    quote: "I bygninger uden stærk arkitektonisk karakter er det ofte nødvendigt at tilføre detaljer. Men her handlede det om at vise mådehold og lade arkitekturen tale for sig selv. Vi gjorde kun justeringer for at fremhæve det bedste af, hvad der allerede var til stede, og for at lade bygningens historie fortsætte i en moderne kontekst.",
    cite: "— Susanne Furbo, Head of Interior Design, HAY",
    reverse: false,
  },
  {
    image: "/images/interior-b.jpg",
    heading: "En kreativ udfordring",
    body: "Bygningen var ikke oprindeligt designet til co-working, men det at omdefinere dens formål viste sig at være en af de mest givende dele af projektet.",
    quote: "Jeg håber, at det behagelige miljø, vi har skabt, og HAY's møbler vil blive værdsat i mange år fremover. Mette Hay og jeg har altid troet på, at produkter bør fungere lige så godt hjemme som på kontoret. Dette projekt viser på perfekt vis, hvordan disse verdener kan smelte problemfrit sammen.",
    cite: "— Rolf Hay, kreativ direktør, HAY Furniture og Lighting",
    reverse: true,
  },
]

export default function DesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-white text-center overflow-hidden">
        <Image
          src="/images/design-HsumnEomPqemxrWzgxWmCBXqj6M-1.jpg"
          alt="Nordstens Workspace by HAY"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto">
          <p className="text-white/60 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            Design
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">
            Nordstens Workspace by HAY
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            At designe inkluderende og imødekommende rum — en ny æra for co-working.
          </p>
        </div>
      </section>

      {/* Alternating image-text sections */}
      <div>
        {sections.map(({ image, heading, body, quote, cite, reverse }, i) => (
          <div
            key={heading}
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} ${
              i % 2 === 0 ? "bg-[#f5f4f0]" : "bg-white"
            }`}
          >
            <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[500px] shrink-0">
              <Image src={image} alt={heading} fill className="object-cover" />
            </div>
            <div className="flex-1 flex items-center px-8 sm:px-12 md:px-16 py-10 md:py-16">
              <div className="max-w-lg">
                <h2 className="text-[#8397a9] text-xl sm:text-2xl md:text-3xl font-light mb-5">
                  {heading}
                </h2>
                <p className="text-[#6b6b7a] leading-relaxed mb-6">{body}</p>
                <blockquote className="border-l-2 border-[#9d2e1e] pl-5">
                  <p className="text-[#8397a9] text-sm font-light italic leading-relaxed mb-2">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <cite className="text-[#6b6b7a] text-xs not-italic">{cite}</cite>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Et unikt samarbejde */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
              Samarbejde
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light">
              Et unikt samarbejde
            </h2>
          </div>
          <div className="space-y-4 text-[#6b6b7a] leading-relaxed">
            <p>
              HAY har sat nye standarder for moderne arbejdspladser ved at levere løsninger til
              organisationer, der ønsker at forny støtten til medarbejdere og processer. Erfarne
              arkitekter og designere har kombineret innovativt design med praktisk funktionalitet
              og skabt arbejdsmiljøer, der støtter nye måder at arbejde på, forvandler
              erhvervsejendomme og styrker fællesskaber.
            </p>
            <p>
              Nordstens Workspace gav HAY fuldstændig frihed i dette projekt, hvilket har været
              en af de mest givende aspekter af samarbejdet. Deres klare vision og respekt for
              bygningens historie gav os plads til at udfolde vores kreativitet.
            </p>
            <p>
              HAY har brugt produkter fra hele deres sortiment af accessories, møbler og
              belysning — og resultatet er arbejdsmiljøer, der støtter nye måder at arbejde på,
              forvandler erhvervsejendomme og styrker fællesskaber.
            </p>
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#8397a9] text-white text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-6">
            Filosofi
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
            &ldquo;Vi har skabt et rum, hvor hjemlige og professionelle miljøer smelter sammen —
            præcis som vores produkter altid har gjort.&rdquo;
          </p>
          <p className="text-white/50 mt-4 text-sm">— Rolf Hay, kreativ direktør, HAY Furniture og Lighting</p>
        </div>
      </section>
    </>
  )
}
