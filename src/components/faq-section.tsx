"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Er arbejdspladserne møblerede?",
    a: "Ja, alle vores arbejdspladser er fuldt møblerede med ergonomiske stole og skriveborde. Fast pladser inkluderer desuden skærm og periferiudstyr.",
  },
  {
    q: "Hvad er inkluderet i prisen?",
    a: "Fibernet, daglig rengøring, el, vand og varme, kaffe og te, adgang til fællesområder, lounges og tagterrasse er inkluderet i alle abonnementer.",
  },
  {
    q: "Hvad er opsigelsesvilkårene?",
    a: "Alle vores løsninger har 3 måneders gensidig opsigelse. Flexplads kan dog opsiges med kortere varsel — kontakt os for detaljer.",
  },
  {
    q: "Kan jeg leje et mødelokale som ekstern?",
    a: "Ja, vores mødelokaler kan lejes af alle — også virksomheder der ikke har fast plads hos os. Kontakt os for pris og booking.",
  },
  {
    q: "Er der parkering?",
    a: "Der er parkering i nærheden af bygningen. Kontakt os for aktuelle parkeringsmuligheder og betingelser.",
  },
  {
    q: "Hvad er kulturen i Nordstens Workspace?",
    a: "Vi lægger stor vægt på fællesskab og netværk. Vores medlemmer er en bred blanding af freelancere, iværksættere og mindre virksomheder der sætter pris på professionelle omgivelser og et levende miljø.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[#decab1]">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-[#010f12] font-medium">{faq.q}</span>
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
