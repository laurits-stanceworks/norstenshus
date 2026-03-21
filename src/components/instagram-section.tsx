"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"

type Post = {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
}

export function InstagramSection() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((data) => {
        if (data.data) setPosts(data.data.slice(0, 9))
      })
      .catch(() => {})
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-[#9d2e1e] text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Instagram
            </p>
            <h2 className="text-[#8397a9] text-2xl sm:text-3xl md:text-4xl font-light">
              Følg med bag facaden
            </h2>
          </div>
          <a
            href="https://www.instagram.com/nordstens_hus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#8397a9]/30 text-[#8397a9] text-sm px-4 py-2 rounded hover:border-[#9d2e1e] hover:text-[#9d2e1e] transition-colors shrink-0"
          >
            <Instagram size={15} />
            @nordstens_hus
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[4/5] overflow-hidden group block"
              >
                <Image
                  src={post.media_type === "VIDEO" ? post.thumbnail_url! : post.media_url}
                  alt={post.caption?.slice(0, 80) ?? "Instagram post"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center gap-3 p-4">
                  <Instagram size={22} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" />
                  {post.caption && (
                    <p className="text-white text-xs text-center leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-4">
                      {post.caption}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-1 sm:gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square bg-[#f5f4f0] animate-pulse" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
