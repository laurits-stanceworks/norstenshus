"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <header className="sticky top-0 z-50 bg-[#8397a9] text-white">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-new.svg" alt="Nordstens Workspace" width={140} height={26} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+4582303234"
          className="hidden lg:flex items-center gap-2 bg-[#9d2e1e] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#8b2518] transition-colors"
        >
          <Phone size={14} />
          82 30 32 34
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#6b8394] px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white py-1 border-b border-white/10"
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
