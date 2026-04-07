"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

const links = [
  { href: "/kontorloesninger", label: "Kontorløsninger" },
  { href: "/faciliteter", label: "Faciliteter" },
  { href: "/moederum", label: "Møderum" },
  { href: "/lejevilkaar", label: "Lejevilkår" },
  { href: "/design", label: "Design" },
  { href: "/hilleroed", label: "Hillerød" },
  { href: "/om-os", label: "Nordstens Hus" },
  { href: "/kontakt", label: "Kontakt" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#8397a9] text-white font-[family-name:var(--font-prumo)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/images/logo-new.svg" alt="Nordstens Workspace" width={120} height={22} />
          <span className="text-white font-semibold text-sm leading-tight">Nordstens Hus</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+4582303234"
          className="hidden xl:flex items-center gap-2 bg-[#9d2e1e] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#8b2518] transition-colors shrink-0"
        >
          <Phone size={14} />
          82 30 32 34
        </a>

        {/* Mobile toggle */}
        <button
          className="xl:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile/tablet menu */}
      {open && (
        <div className="xl:hidden bg-[#6b8394] px-4 sm:px-6 pb-6 flex flex-col gap-3 max-h-[calc(100vh-56px)] overflow-y-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+4582303234"
            className="flex items-center gap-2 bg-[#9d2e1e] text-white text-sm font-medium px-4 py-2 rounded mt-2 w-fit"
          >
            <Phone size={14} />
            82 30 32 34
          </a>
        </div>
      )}
    </header>
  )
}
