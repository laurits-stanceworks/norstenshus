import type { Metadata } from "next"
import { MapPin, Train, Car, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Hillerød — Nordstens Workspace",
  description: "Nordstens Workspace ligger centralt i Hillerød på Slotsgade 13-17. Let tilgængeligt med tog og bil.",
}

export default function HilleroedPage() {
  return (
    <>
      <section className="bg-[#262742] py-24 px-6 text-white text-center">
        <p className="text-[#CA9665] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Hillerød
        </p>
        <h1 className="text-5xl font-light mb-4">Find os i Hillerød</h1>
        <p className="text-white/60 max-w-xl mx-auto">
          Centralt beliggende i hjertet af Hillerød — let tilgængeligt med både tog og bil.
        </p>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[#262742] text-3xl font-light mb-8">Adresse & transport</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <MapPin size={20} className="text-[#CA9665] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#262742] mb-1">Adresse</p>
                  <p className="text-[#6b6b7a] text-sm">
                    Slotsgade 13-17<br />
                    3400 Hillerød
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Train size={20} className="text-[#CA9665] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#262742] mb-1">Med tog</p>
                  <p className="text-[#6b6b7a] text-sm">
                    5 minutters gang fra Hillerød Station (S-tog linje E og F samt Lokalbanen).
                    Direkte forbindelse fra København H på ca. 45 minutter.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Car size={20} className="text-[#CA9665] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#262742] mb-1">Med bil</p>
                  <p className="text-[#6b6b7a] text-sm">
                    Let tilgængeligt fra motorvejsnettet. Parkering tilgængeligt i nærheden.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={20} className="text-[#CA9665] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-[#262742] mb-1">Adgang</p>
                  <p className="text-[#6b6b7a] text-sm">
                    24/7 adgang med Salto mobil nøgle for alle medlemmer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden h-96 md:h-auto min-h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2224.0!2d12.3078!3d55.9356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524c7b7c9d6e5f%3A0x1234567890abcdef!2sSlotsgade%2013-17%2C%203400%20Hillerd!5e0!3m2!1sda!2sdk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nordstens Workspace på kortet"
            />
          </div>
        </div>
      </section>

      {/* About Hillerød */}
      <section className="py-16 px-6 bg-[#f5f4f0]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[#262742] text-3xl font-light mb-6">Om Hillerød</h2>
          <p className="text-[#6b6b7a] leading-relaxed">
            Hillerød er en levende by nord for København med Frederiksborg Slot som
            vartegn. Byen byder på et aktivt erhvervsliv, gode transportforbindelser
            og en stemning der kombinerer det historiske med det moderne — præcis som
            Nordstens Workspace.
          </p>
        </div>
      </section>
    </>
  )
}
