"use client"

import { useState } from "react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#f5f4f0] rounded-lg p-10 text-center">
        <div className="w-12 h-12 bg-[#9d2e1e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-[#9d2e1e] text-2xl">✓</span>
        </div>
        <h3 className="text-[#8397a9] font-semibold mb-2">Besked sendt!</h3>
        <p className="text-[#6b6b7a] text-sm">
          Vi vender tilbage til dig hurtigst muligt.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#8397a9] mb-1.5">
            Navn <span className="text-[#9d2e1e]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-[#decab1] rounded px-4 py-2.5 text-sm text-[#8397a9] placeholder-[#6b6b7a]/50 focus:outline-none focus:border-[#9d2e1e] transition-colors"
            placeholder="Dit navn"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#8397a9] mb-1.5">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-[#decab1] rounded px-4 py-2.5 text-sm text-[#8397a9] placeholder-[#6b6b7a]/50 focus:outline-none focus:border-[#9d2e1e] transition-colors"
            placeholder="Dit telefonnummer"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#8397a9] mb-1.5">
          Email <span className="text-[#9d2e1e]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-[#decab1] rounded px-4 py-2.5 text-sm text-[#8397a9] placeholder-[#6b6b7a]/50 focus:outline-none focus:border-[#9d2e1e] transition-colors"
          placeholder="din@email.dk"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#8397a9] mb-1.5">
          Besked <span className="text-[#9d2e1e]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={600}
          className="w-full border border-[#decab1] rounded px-4 py-2.5 text-sm text-[#8397a9] placeholder-[#6b6b7a]/50 focus:outline-none focus:border-[#9d2e1e] transition-colors resize-none"
          placeholder="Fortæl os hvad du er interesseret i..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 accent-[#9d2e1e]"
        />
        <label htmlFor="consent" className="text-xs text-[#6b6b7a] leading-relaxed">
          Jeg accepterer at Nordstens Workspace behandler mine personoplysninger for at
          besvare min henvendelse. Læs vores{" "}
          <a href="/privatlivspolitik" className="text-[#9d2e1e] hover:underline">
            privatlivspolitik
          </a>
          .
        </label>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Noget gik galt. Prøv igen eller kontakt os direkte.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#9d2e1e] text-white font-medium py-3.5 rounded hover:bg-[#8b2518] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Sender..." : "Send besked"}
      </button>
    </form>
  )
}
