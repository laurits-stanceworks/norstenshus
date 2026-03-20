import Image from "next/image"
import { Instagram } from "lucide-react"

const photos = [
  { src: "/images/interior-3.png", alt: "Lounge" },
  { src: "/images/rooftop.jpg", alt: "Tagterrasse" },
  { src: "/images/interior-1.png", alt: "Arbejdsplads" },
  { src: "/images/meeting.png", alt: "Møderum" },
  { src: "/images/interior-4.png", alt: "Kontor" },
  { src: "/images/building-2.jpg", alt: "Nordstens Hus" },
]

export function InstagramSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <p className="text-[#CA9665] text-sm font-medium uppercase tracking-[0.2em] mb-2">
              Instagram
            </p>
            <h2 className="text-[#262742] text-3xl font-light">
              Følg med bag facaden
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nordstens_workspace/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#262742]/20 text-[#262742] text-sm font-medium px-5 py-2.5 rounded hover:border-[#CA9665] hover:text-[#CA9665] transition-colors shrink-0"
          >
            <Instagram size={16} />
            @nordstens_workspace
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {photos.map(({ src, alt }) => (
            <a
              key={src}
              href="https://www.instagram.com/nordstens_workspace/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group block"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
