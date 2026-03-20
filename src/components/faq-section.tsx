"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Hvad indeholder en møbleret arbejdsplads?",
    a: "En møbleret arbejdsplads i Nordstens Workspace sikrer maksimal komfort og produktivitet. Alle pladser har moderne hæve-sænkeborde, bordlampe, ergonomiske kontorstole og aflåselige reoler. Et godt arbejdsmiljø starter med den rette indretning — vores kontorer er ikke blot funktionelle, men også æstetisk indbydende. Uanset om du har brug for en fast plads eller en mere fleksibel løsning, er vi klar til at understøtte din arbejdsdag fra dag ét.",
  },
  {
    q: "Hvad er inkluderet i lejen?",
    a: "I Nordstens Workspace tror vi på gennemsigtighed og bekvemmelighed. Når du lejer en plads eller et kontor hos os, er alt inkluderet i prisen — du behøver ikke bekymre dig om ekstra omkostninger til forbrug, rengøring, møbler eller it-infrastruktur. Du får adgang til hurtigt internet, telefonbokse til private samtaler og fuldt udstyrede fælleskøkkener med fri kaffe og te.",
  },
  {
    q: "Er der nogen binding?",
    a: "Fleksibilitet er vigtigt i en verden, hvor man ikke altid kender fremtiden. Derfor er der ingen lange bindingsperioder. Du kan opsige din aftale med tre måneders varsel, hvilket giver dig fuld frihed til at tilpasse dine behov uden at være låst fast i en lang kontrakt.",
  },
  {
    q: "Hvordan er ånden hos Nordstens Workspace?",
    a: "Ånden i Nordstens Workspace bygger på fællesskab, innovation og ambition. Vi har skabt et miljø, hvor virksomheder både kan vokse, finde inspiration og skabe forbindelser med andre ligesindede. Vores lejere spænder bredt fra dynamiske startups til veletablerede virksomheder. Vi afholder regelmæssige netværksarrangementer og lægger stor vægt på, at alle skal føle sig som en del af et dynamisk og støttende fællesskab.",
  },
  {
    q: "Kan jeg komme forbi og se lokalerne?",
    a: "Absolut! Vi viser dig meget gerne rundt, så du får en klar fornemmelse af, hvad Nordstens Workspace tilbyder. Lokalerne er åbne for fremvisninger, så du kan se vores smukt designede kontorpladser, mødelokaler, de afslappende loungeområder og vores unikke tagterrasse og gårdmiljø. Tag fat i os, så finder vi en tid der passer dig.",
  },
  {
    q: "Hvilke slags AV-udstyr er til rådighed i mødelokalerne?",
    a: "Hvert mødelokale er udstyret med det nyeste inden for AV-teknologi, herunder højopløselige skærme og systemer til videoopkald, så du kan præsentere alt dit indhold trådløst, klart og effektivt. Det brugervenlige opsætningssystem sikrer, at teknikken fungerer fra start, så du kan fokusere på dit møde uden forstyrrelser.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[#e5e3dc]">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-[#8397a9] font-medium">{faq.q}</span>
            {open === i ? (
              <Minus size={18} className="text-[#9d2e1e] shrink-0" />
            ) : (
              <Plus size={18} className="text-[#9d2e1e] shrink-0" />
            )}
          </button>
          {open === i && (
            <p className="pb-5 text-[#6b6b7a] leading-relaxed text-sm">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
