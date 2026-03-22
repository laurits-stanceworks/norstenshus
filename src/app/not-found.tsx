import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 bg-[#f5f4f0]">
      <div className="text-center max-w-md">
        <p className="text-[#9d2e1e] text-xs font-medium uppercase tracking-[0.2em] mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-light text-[#8397a9] mb-4">
          Siden findes ikke
        </h1>
        <p className="text-[#6b6b7a] text-sm leading-relaxed mb-8">
          Den side du leder efter eksisterer ikke eller er blevet flyttet.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#9d2e1e] text-white text-sm font-medium px-6 py-3 hover:bg-[#8b2518] transition-colors"
        >
          Gå til forsiden
        </Link>
      </div>
    </section>
  )
}
