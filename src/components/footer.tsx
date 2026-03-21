import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#8397a9]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-12 sm:py-16 flex flex-col md:flex-row md:items-start gap-10 md:gap-0">

        {/* Building illustration */}
        <div className="md:w-1/4 flex justify-start">
          <Image
            src="/images/logo-icon.svg"
            alt="Nordstens Workspace"
            width={140}
            height={110}
            className="opacity-80"
          />
        </div>

        {/* Contact */}
        <div className="md:w-2/4">
          <p className="text-white font-semibold text-sm mb-3">Nordstens Hus</p>
          <address className="not-italic text-white/60 text-sm leading-relaxed space-y-1">
            <p>Slotsgade 13-17</p>
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
        <div className="md:w-1/4">
          <p className="text-white font-semibold text-sm mb-3">Følg os på</p>
          <div className="flex gap-4 text-white/60 mb-6">
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
          <Link href="/privatlivspolitik" className="text-white/60 text-xs hover:text-white transition-colors">
            Privatlivspolitik
          </Link>
        </div>

      </div>
    </footer>
  )
}
