"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faq = [
  {
    q: "Er der IT-udstyr og AV-teknik klar til mødet?",
    a: "Hos Nordstens Workspace har vi altid moderne teknisk udstyr, så dit møde forløber uden tekniske problemer. Vi tester alt udstyr på forhånd, så det står klart, når du ankommer.",
  },
  {
    q: "Er der mulighed for forplejning?",
    a: "Ja, vi sørger for frisk og velsmagende forplejning til alle mødedeltagere lavet af de bedste råvarer fra Café rømers her i Hillerød. I bestemmer selv, hvor meget forplejning og hvornår I ønsker det.",
  },
  {
    q: "Kan Nordstens Workspace hjælpe med at arrangere mødet?",
    a: "Ja, vi tilbyder rådgivning og hjælp til planlægning af jeres møde eller event. Vores team hjælper dig hele vejen fra de første idéer til den endelige afvikling.",
  },
  {
    q: "Hvad er jeres annulleringsbetingelser?",
    a: "Nordstens Workspace har fleksible og gennemsigtige annulleringsbetingelser. Afbestilling skal altid ske skriftligt. Kontakt os for at høre mere om gældende frister og betingelser.",
  },
  {
    q: "Er der mulighed for at parkere som mødegæst?",
    a: "Ja, der er mange parkeringsmuligheder tæt på vores lokation i p-husene ved Slotskaderne eller i Gallerierne. Du kan betale direkte ved p-pladserne eller via EasyPark.",
  },
]

export function MoederumFaq() {
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
