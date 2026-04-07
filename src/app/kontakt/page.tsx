import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt & Book Rundvisning — Nordstens Hus Hillerød",
  description: "Kontakt Nordstens Workspace — book en rundvisning eller stil os et spørgsmål.",
}

export default function KontaktPage() {
  return (
    <>
      {/* Form + Info */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Form */}
          <div>
            <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4">Skriv til os</p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-8">Send os en besked</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div>
            <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4">Find os</p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl font-light mb-8">Kontaktoplysninger</h2>

<div className="space-y-5 mb-10">
              <div className="flex gap-4">
                <MapPin size={18} className="text-[#9d2e1e] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-medium text-[#8397a9] uppercase tracking-wide mb-0.5">Adresse</p>
                  <p className="text-[#6b6b7a] text-sm">Slotsgade 13-15, 3400 Hillerød</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={18} className="text-[#9d2e1e] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-medium text-[#8397a9] uppercase tracking-wide mb-0.5">Telefon</p>
                  <a href="tel:+4582303234" className="text-[#6b6b7a] text-sm hover:text-[#9d2e1e] transition-colors">
                    82 30 32 34
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={18} className="text-[#9d2e1e] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-medium text-[#8397a9] uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:info@nordstens.dk" className="text-[#6b6b7a] text-sm hover:text-[#9d2e1e] transition-colors">
                    info@nordstens.dk
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={18} className="text-[#9d2e1e] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-medium text-[#8397a9] uppercase tracking-wide mb-0.5">Telefontider</p>
                  <p className="text-[#6b6b7a] text-sm">Mandag–fredag kl. 09:00–17:00</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e5e3dc] pt-6">
              <p className="text-xs font-medium text-[#8397a9] uppercase tracking-wide mb-2">Akut skade</p>
              <p className="text-[#6b6b7a] text-sm leading-relaxed">
                Vand, brand, strøm eller bygningsskade — kontakt vores administration på{" "}
                <a href="tel:+4572228200" className="text-[#9d2e1e] hover:underline">72 22 82 00</a>.
                Uden for åbningstid:{" "}
                <a href="tel:+4540200090" className="text-[#9d2e1e] hover:underline">40 20 00 90</a>.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
