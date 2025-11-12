import Link from "next/link"
import Image from "next/image"
import { Shield, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">Danske</span>
                <span className="text-foreground">BedsteCasinosider</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Professionel portal med ekspertanmeldelser af online casinoer. Vi leverer objektiv information til at
              træffe informerede beslutninger om spilleplatforme.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#rankings" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Top Casinoer
                </a>
              </li>
              <li>
                <a href="/#guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Guide
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Juridisk</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cookie-politik"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Politik
                </Link>
              </li>
              <li>
                <Link
                  href="/privatlivspolitik"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible gaming section */}
        <div className="border-t pt-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            
            <h3 className="font-semibold text-foreground">Ansvarligt Spil</h3>
          </div>
          <div className="flex flex-wrap gap-6 items-center mb-4">
            <a
              href="https://www.spillemyndigheden.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image
                src="/spillemynd.svg"
                alt="Spillemyndigheden"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
                href="https://www.rofus.nu"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 rounded-md hover:bg-gray-400 transition-colors duration-300 flex items-center justify-center"
              >
                <Image src="/rofus.png" alt="ROFUS" width={100} height={40} className="object-contain" />
              </a>

              <a
                href="https://www.gambleaware.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                <Image
                  src="/gamble.webp"
                  alt="GambleAware"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </a>
            <a
              href="https://www.stopspillet.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/stopsillet.svg"
                alt="StopSpillet"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Image
                src="/gamecare.svg"
                alt="GamCare"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            Gambling kan være vanedannende. Spil ansvarligt. Dette websted indeholder affiliatelinks, og vi kan modtage
            provision for registreringer gennem vores links. 18+
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} danskebedstecasinosider.com. Alle rettigheder forbeholdes.</p>
          <div className="flex gap-6">
            <Link href="/privatlivspolitik" className="hover:text-primary transition-colors">
              Privatlivspolitik
            </Link>
            <Link href="/cookie-politik" className="hover:text-primary transition-colors">
              Cookie Politik
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
