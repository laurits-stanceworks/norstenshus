import Link from "next/link"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#8397a9] text-white/80 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-white font-semibold text-lg uppercase tracking-wide mb-3">
            Nordstens Workspace
          </p>
          <p className="text-sm leading-relaxed">
            Et moderne kontorfællesskab i hjertet af Hillerød — siden 1877.
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-medium mb-3">Kontakt</p>
          <address className="not-italic text-sm leading-relaxed space-y-1">
            <p>Slotsgade 13-17</p>
            <p>3400 Hillerød</p>
            <p className="mt-2">
              <a href="tel:+4582303234" className="hover:text-white transition-colors">
                82 30 32 34
              </a>
            </p>
            <p>
              <a href="mailto:info@nordstens.dk" className="hover:text-white transition-colors">
                info@nordstens.dk
              </a>
            </p>
          </address>
        </div>

        {/* Social + legal */}
        <div>
          <p className="text-white font-medium mb-3">Følg os</p>
          <div className="flex gap-4 mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <Link
            href="/privatlivspolitik"
            className="text-sm hover:text-white transition-colors"
          >
            Privatlivspolitik
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Nordstens Workspace · Frederiksborg Gruppen
      </div>
    </footer>
  )
}
