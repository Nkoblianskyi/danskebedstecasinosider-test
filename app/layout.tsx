import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import PromotionalModal from "@/components/promotional-modal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Danske Bedste Casinosider 2025 | danskebedstecasinosider.com",
  description:
    "Professionelle anmeldelser af de bedste danske online casinoer. Find licenserede casinoer med høje bonusser og sikker spil i Danmark.",
  metadataBase: new URL("https://danskebedstecasinosider.com"),
  openGraph: {
    title: "Danske Bedste Casinosider 2025",
    description: "Professionelle anmeldelser af de bedste danske online casinoer",
    url: "https://danskebedstecasinosider.com",
    siteName: "danskebedstecasinosider",
    locale: "da_DK",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBanner />
        <PromotionalModal />
        <Analytics />
      </body>
    </html>
  )
}
