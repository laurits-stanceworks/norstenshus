import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

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

const prumo = localFont({
  src: "../../public/fonts/PrumoTextBold.otf",
  variable: "--font-prumo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nordstens Workspace — Kontorfællesskab i Hillerød",
  description:
    "Moderne kontorløsninger i et historisk miljø. Flexplads, fast plads og private kontorer i hjertet af Hillerød siden 1877.",
  openGraph: {
    title: "Nordstens Workspace",
    description: "Kontorfællesskab i Hillerød",
    url: "https://nordstens.dk",
    siteName: "Nordstens Workspace",
    locale: "da_DK",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${superblue.variable} ${prumo.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased font-[family-name:var(--font-superblue)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
