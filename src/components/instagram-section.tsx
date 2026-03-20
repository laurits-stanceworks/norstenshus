"use client"

import Script from "next/script"
import { Instagram } from "lucide-react"

export function InstagramSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <p className="text-[#9d2e1e] text-sm font-medium uppercase tracking-[0.2em] mb-2">
              Instagram
            </p>
            <h2 className="text-[#8397a9] text-3xl font-light">
              Følg med bag facaden
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nordstens_workspace/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#8397a9]/20 text-[#8397a9] text-sm font-medium px-5 py-2.5 rounded hover:border-[#9d2e1e] hover:text-[#9d2e1e] transition-colors shrink-0"
          >
            <Instagram size={16} />
            @nordstens_workspace
          </a>
        </div>

        <behold-widget feed-id="IV0CkSNn70qOHb63eNOU" />

        <Script
          src="https://w.behold.so/widget.js"
          type="module"
          strategy="afterInteractive"
        />
      </div>
    </section>
  )
}
