import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#8397a9]">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 grid grid-cols-3 gap-8 items-center text-center">

        {/* Building illustration */}
        <div className="flex justify-center">
          <Image
            src="/images/logo-icon.svg"
            alt="Nordstens Workspace"
            width={110}
            height={85}
            className="opacity-75"
          />
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Nordstens Hus</p>
          <address className="not-italic text-white/60 text-sm leading-loose">
            <p>Slotsgade 13-15</p>
            <p>3400 Hillerød</p>
            <p className="mt-4">
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
          <p className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Følg os på</p>
          <div className="flex gap-5 text-white/60 mb-6 justify-center">
            <a href="https://www.instagram.com/nordstens_hus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61569050765396" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://www.linkedin.com/company/nordstens-hus/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
          <Link href="/privatlivspolitik" className="text-white/40 text-xs hover:text-white/70 transition-colors">
            Privatlivspolitik
          </Link>
        </div>

      </div>
    </footer>
  )
}
