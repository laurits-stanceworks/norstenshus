"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faq = [
  {
    q: "Hvad er inkluderet i en møbleret arbejdsplads?",
    a: "Hæve-sænkeborde, skrivebordslampe, ergonomiske stole og aflåselige reoler.",
  },
  {
    q: "Hvad er inkluderet i huslejen?",
    a: "Hurtigt internet, telefonbokse til private samtaler, fuldt udstyrede fælleskøkkener med gratis kaffe og te samt adgang til bookbare mødelokaler.",
  },
  {
    q: "Er der bindingsperiode?",
    a: "Nej, vi har ingen lange bindingsperioder. Du kan opsige dit lejemål med 3 måneders varsel.",
  },
  {
    q: "Hvad er ånden i Nordstens Workspace?",
    a: "Nordstens Workspace er bygget på fællesskab, innovation og ambition. Vi afholder løbende netværksarrangementer og huser en blanding af startups og etablerede virksomheder.",
  },
  {
    q: "Kan jeg besøge lokalerne?",
    a: "Ja, vi tilbyder fremvisninger efter aftale. Kontakt os, og vi finder et tidspunkt der passer dig.",
  },
  {
    q: "Hvilket AV-udstyr er der i mødelokalerne?",
    a: "Alle mødelokaler er udstyret med højtopløselige skærme og videokonferencesystemer, trådløs præsentation og brugervenlig opsætning.",
  },
]

export function LejevilkaarFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[#e5e3dc]">
      {faq.map(({ q, a }, i) => (
        <div key={q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left gap-4"
          >
            <span className="text-[#8397a9] font-semibold">{q}</span>
            <ChevronDown
              size={18}
              className={`text-[#9d2e1e] shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <p className="text-[#6b6b7a] text-sm leading-relaxed pb-6">{a}</p>
          )}
        </div>
      ))}
    </div>
  )
}
