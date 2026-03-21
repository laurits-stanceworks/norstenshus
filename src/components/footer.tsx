import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#8397a9]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* Building illustration */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/logo-icon.svg"
            alt="Nordstens Workspace"
            width={180}
            height={140}
            className="opacity-80"
          />
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold text-base mb-4">Nordstens hus</p>
          <address className="not-italic text-white/70 text-sm leading-relaxed space-y-1">
            <p>Slotsgade 13-15</p>
            <p>3400 Hillerød</p>
            <p className="mt-3">
              <a href="mailto:info@nordstens.dk" className="hover:text-white transition-colors">
                info@nordstens.dk
              </a>
            </p>
            <p>
              <a href="tel:+4582303234" className="hover:text-white transition-colors">
                82 30 32 34
              </a>
            </p>
          </address>
        </div>

        {/* Social */}
        <div>
          <p className="text-white font-semibold text-base mb-4">Følg os på</p>
          <div className="flex gap-4 text-white/70">
            <a
              href="https://www.instagram.com/nordstens_workspace"
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
          <p className="mt-4 text-sm text-white/70">
            <Link href="/privatlivspolitik" className="hover:text-white transition-colors">
              Privatlivspolitik
            </Link>
          </p>
        </div>

      </div>
    </footer>
  )
}
