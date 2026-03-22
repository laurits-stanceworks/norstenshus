import type { MetadataRoute } from "next"

const base = "https://norstenshus.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/kontorloesninger`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/faciliteter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/moederum`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/lejevilkaar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/design`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/hilleroed`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/om-os`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privatlivspolitik`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]
}
