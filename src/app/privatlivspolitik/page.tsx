import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privatlivspolitik — Nordstens Workspace",
}

export default function PrivatlivspolitikPage() {
  return (
    <>
      <section className="bg-[#8397a9] py-24 px-6 text-white text-center">
        <h1 className="text-5xl font-light">Privatlivspolitik</h1>
      </section>
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-3xl prose prose-slate text-sm leading-relaxed text-[#6b6b7a]">
          <p>
            Nordstens Workspace (Frederiksborg Gruppen) behandler dine personoplysninger
            i overensstemmelse med GDPR og dansk databeskyttelseslovgivning.
          </p>
          <h2>Hvilke oplysninger indsamler vi?</h2>
          <p>
            Vi indsamler oplysninger du selv giver os via kontaktformularen: navn, email,
            telefonnummer og beskedindhold.
          </p>
          <h2>Hvad bruger vi oplysningerne til?</h2>
          <p>
            Oplysningerne bruges udelukkende til at besvare din henvendelse og eventuelt
            indgå en lejeaftale med dig.
          </p>
          <h2>Deling af oplysninger</h2>
          <p>
            Vi deler ikke dine personoplysninger med tredjepart uden dit samtykke,
            medmindre det kræves af lovgivningen.
          </p>
          <h2>Kontakt</h2>
          <p>
            Spørgsmål til vores behandling af personoplysninger kan rettes til{" "}
            <a href="mailto:info@nordstens.dk" className="text-[#9d2e1e]">
              info@nordstens.dk
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
