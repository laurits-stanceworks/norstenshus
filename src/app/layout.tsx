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
  metadataBase: new URL("https://nordstens.dk"),
  title: {
    default: "Nordstens Workspace — Kontorfællesskab & Kontorplads i Hillerød",
    template: "%s | Nordstens Workspace",
  },
  description:
    "Lej kontorplads, flexplads eller privat kontor i Hillerød. Nordstens Workspace tilbyder moderne kontorfællesskab i historiske rammer på Slotsgade 13-15 — under 1 time fra København.",
  keywords: [
    "kontorfællesskab Hillerød", "coworking Hillerød", "kontorplads Hillerød",
    "flexplads Hillerød", "lej kontor Hillerød", "privat kontor Hillerød",
    "mødelokale Hillerød", "kontorlejemål Hillerød", "Nordstens Workspace", "Nordstens Hus",
  ],
  openGraph: {
    title: "Nordstens Workspace — Kontorfællesskab i Hillerød",
    description: "Lej kontorplads, flexplads eller privat kontor i Hillerød. Moderne kontorfællesskab i historiske rammer.",
    url: "https://nordstens.dk",
    siteName: "Nordstens Workspace",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "/images/hero-main.jpg",
        width: 1800,
        height: 1200,
        alt: "Nordstens Hus — Kontorfællesskab på Slotsgade 13-15, Hillerød",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nordstens Workspace — Kontorfællesskab i Hillerød",
    description: "Lej kontorplads, flexplads eller privat kontor i Hillerød.",
    images: ["/images/hero-main.jpg"],
  },
  alternates: {
    canonical: "https://nordstens.dk",
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nordstens.dk",
  name: "Nordstens Workspace",
  alternateName: "Nordstens Hus",
  description: "Moderne kontorfællesskab i historiske rammer i Hillerød. Lej flexplads, fast plads eller privat kontor.",
  url: "https://nordstens.dk",
  telephone: "+4582303234",
  email: "info@nordstens.dk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Slotsgade 13-15",
    addressLocality: "Hillerød",
    postalCode: "3400",
    addressCountry: "DK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9305,
    longitude: 12.3089,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  image: "https://nordstens.dk/images/hero-main.jpg",
  priceRange: "DKK",
  currenciesAccepted: "DKK",
  paymentAccepted: "Cash, Credit Card",
  areaServed: {
    "@type": "City",
    name: "Hillerød",
  },
  sameAs: [
    "https://www.instagram.com/nordstenshus",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${superblue.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased font-[family-name:var(--font-superblue)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
