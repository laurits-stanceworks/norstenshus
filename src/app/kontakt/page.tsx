import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt — Nordstens Workspace",
  description: "Kontakt Nordstens Workspace — book en rundvisning eller stil os et spørgsmål.",
}

export default function KontaktPage() {
  return (
    <>
      <section className="bg-[#8397a9] py-24 px-6 text-white text-center">
        <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Kontakt
        </p>
        <h1 className="text-5xl font-light mb-4">Lad os tage en snak</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Book en gratis rundvisning, stil os et spørgsmål eller fortæl os hvad du har
          brug for. Vi vender tilbage hurtigst muligt.
        </p>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-[#8397a9] text-2xl font-light mb-8">Send os en besked</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-[#8397a9] text-2xl font-light mb-8">Find os</h2>
            <div className="space-y-6 mb-10">
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
                <Phone size={20} className="text-[#9d2e1e] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#8397a9] mb-1">Telefon</p>
                  <a
                    href="tel:+4582303234"
                    className="text-[#6b6b7a] text-sm hover:text-[#9d2e1e] transition-colors"
                  >
                    82 30 32 34
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-[#9d2e1e] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#8397a9] mb-1">Email</p>
                  <a
                    href="mailto:info@nordstens.dk"
                    className="text-[#6b6b7a] text-sm hover:text-[#9d2e1e] transition-colors"
                  >
                    info@nordstens.dk
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f4f0] rounded-lg p-8">
              <p className="text-[#8397a9] font-medium mb-2">Åbningstider</p>
              <p className="text-[#6b6b7a] text-sm">
                Kontoret er bemandet mandag–fredag 9:00–17:00.<br />
                Medlemmer har 24/7 adgang til bygningen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
