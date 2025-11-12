import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Cookie, Shield, Settings, Info } from "lucide-react"

export default function CookiePolitikPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-3 pb-3">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            
            <h1 className="text-4xl font-bold text-foreground">Cookie Politik</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Hvad er cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies er små tekstfiler, der gemmes på din computer eller mobile enhed, når du besøger vores
                    hjemmeside. De hjælper os med at gøre din oplevelse bedre ved at huske dine præferencer og forbedre
                    sidens funktionalitet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hvilke cookies bruger vi?</h2>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Nødvendige cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Disse cookies er nødvendige for, at hjemmesiden kan fungere korrekt. De kan ikke deaktiveres i vores
                    systemer. De gemmer din cookie-præference og grundlæggende sidefunktioner.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytiske cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi bruger Vercel Analytics til at forstå, hvordan besøgende bruger vores hjemmeside. Dette hjælper
                    os med at forbedre indholdet og brugeroplevelsen. Alle data er anonymiserede.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Disse cookies bruges til at vise relevante casino-anbefalinger baseret på dine interesser og
                    tidligere besøg på vores hjemmeside.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Sådan administrerer du cookies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Du kan til enhver tid ændre dine cookie-indstillinger i din browser. Bemærk, at deaktivering af
                    cookies kan påvirke funktionaliteten på vores hjemmeside.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Du kan også genåbne cookie-banneret ved at slette cookies for vores hjemmeside i din browser.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Kontakt os</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hvis du har spørgsmål om vores cookie-politik, kan du kontakte os på:{" "}
                    <p
                      className="text-primary hover:underline font-medium"
                    >
                      info@danskebedstecasinosider.com
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">Sidst opdateret: Januar 2025</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
