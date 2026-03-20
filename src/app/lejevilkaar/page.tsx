import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lejevilkår — Nordstens Workspace",
  description: "Læs lejevilkårene for Nordstens Workspace i Hillerød.",
}

export default function LejevilkaarPage() {
  return (
    <>
      <section className="bg-[#010f12] py-24 px-6 text-white text-center">
        <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-4">
          Vilkår
        </p>
        <h1 className="text-5xl font-light mb-4">Lejevilkår</h1>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-3xl prose prose-slate">
          <h2>Opsigelse</h2>
          <p>
            Alle lejemål hos Nordstens Workspace har 3 måneders gensidig opsigelse,
            medmindre andet fremgår af din individuelle aftale. Flexplads tilbydes
            uden binding — kontakt os for detaljer.
          </p>

          <h2>Betaling</h2>
          <p>
            Leje opkræves månedligt forud. Første måneds leje og et depositum svarende
            til én måneds leje forfalder ved indflytning.
          </p>

          <h2>Inkluderede ydelser</h2>
          <p>Følgende er inkluderet i alle abonnementer:</p>
          <ul>
            <li>Fibernet og IT-infrastruktur</li>
            <li>El, vand og varme</li>
            <li>Daglig rengøring af fællesarealer</li>
            <li>Kaffe og te</li>
            <li>Adgang til fællesarealer, lounge og tagterrasse</li>
          </ul>

          <h2>Adgang</h2>
          <p>
            Alle medlemmer har 24/7 adgang til bygningen via Salto mobil nøglesystemet.
            Adgang tildeles ved indgåelse af lejeaftale.
          </p>

          <h2>Husorden</h2>
          <p>
            Vi beder alle medlemmer om at respektere fællesskabet og de øvrige lejere.
            Det indebærer hensynsfuld brug af fællesarealer, stillerum og mødelokaler.
          </p>

          <h2>Ændringer</h2>
          <p>
            Nordstens Workspace forbeholder sig retten til at ændre priser og vilkår
            med 3 måneders varsel.
          </p>

          <h2>Kontakt</h2>
          <p>
            Spørgsmål til lejevilkår kan rettes til{" "}
            <a href="mailto:info@nordstens.dk" className="text-[#9d2e1e] hover:underline">
              info@nordstens.dk
            </a>{" "}
            eller på telefon{" "}
            <a href="tel:+4582303234" className="text-[#9d2e1e] hover:underline">
              82 30 32 34
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
