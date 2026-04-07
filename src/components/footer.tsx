import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#8397a9]">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">

        {/* Mobile: stacked centered, Desktop: 3-column grid */}
        <div className="flex flex-col items-center gap-10 sm:grid sm:grid-cols-3 sm:gap-8 sm:items-center sm:text-center">

          {/* Building illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/logo-icon.svg"
              alt="Nordstens Workspace"
              width={90}
              height={70}
              className="opacity-75"
            />
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-white font-semibold text-sm tracking-wide mb-3">Nordstens Hus</p>
            <address className="not-italic text-white/60 text-sm leading-loose">
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
          <div className="flex flex-col items-center gap-4">
            <p className="text-white font-semibold text-sm tracking-wide">Følg os på</p>
            <div className="flex gap-5 text-white/60">
              <a href="https://www.instagram.com/nordstens_hus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61569050765396" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/nordstens-hus/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            <Link href="/privatlivspolitik" className="text-white/40 text-xs hover:text-white/70 transition-colors">
              Privatlivspolitik
            </Link>
          </div>

        </div>

        {/* Bottom copyright */}
        <p className="text-center text-white/30 text-xs mt-10 sm:mt-12">
          © {new Date().getFullYear()} Nordstens Workspace
        </p>

      </div>
    </footer>
  )
}
