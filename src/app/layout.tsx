import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const superblue = localFont({
  src: [
    { path: "../../public/fonts/SuperBlue-Light.otf", weight: "300" },
    { path: "../../public/fonts/SuperBlue-Regular.otf", weight: "400" },
    { path: "../../public/fonts/SuperBlue-Bold.otf", weight: "700" },
    { path: "../../public/fonts/SuperBlue-Black.otf", weight: "900" },
  ],
  variable: "--font-superblue",
  display: "swap",
})


export const metadata: Metadata = {
  title: "Nordstens Hus — Kontorfællesskab i Hillerød",
  description:
    "Moderne kontorløsninger i et historisk miljø. Flexplads, fast plads og private kontorer i hjertet af Hillerød siden 1877.",
  openGraph: {
    title: "Nordstens Hus",
    description: "Kontorfællesskab i Hillerød",
    url: "https://norstenshus.vercel.app",
    siteName: "Nordstens Hus",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "https://norstenshus.vercel.app/images/kontakt-hero.jpg",
        width: 1440,
        height: 960,
        alt: "Nordstens Hus — Slotsgade 13-15, Hillerød",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordstens Hus",
    description: "Kontorfællesskab i Hillerød",
    images: ["https://norstenshus.vercel.app/images/kontakt-hero.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${superblue.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-[family-name:var(--font-superblue)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
