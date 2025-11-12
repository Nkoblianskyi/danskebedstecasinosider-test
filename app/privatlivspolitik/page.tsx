import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, UserCheck, Database, FileText } from "lucide-react"

export default function PrivatlivspolitikPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-3 pb-3">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            
            <h1 className="text-4xl font-bold text-foreground">Privatlivspolitik</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Indsamling af personoplysninger</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger. Denne politik
                    forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger i overensstemmelse med GDPR og
                    dansk lovgivning.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Database className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-foreground">Hvilke oplysninger indsamler vi?</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>IP-adresse og browseroplysninger (anonymiseret)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Besøgsstatistikker og brugeradfærd på hjemmesiden</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Cookies og lignende teknologier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Oplysninger du frivilligt deler med os gennem kontaktformularer</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-semibold text-foreground">Hvordan bruger vi dine oplysninger?</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>At forbedre vores hjemmeside og tjenester</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>At analysere brugeradfærd og præferencer for bedre anbefalinger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>At vise relevante casino-anbefalinger og tilbud</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>At overholde juridiske forpligtelser og bekæmpe svindel</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Deling af oplysninger</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Vi sælger, handler eller udlejer aldrig dine personoplysninger til tredjeparter.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi kan dele anonymiserede, aggregerede data med vores casino-partnere for at forbedre vores
                    anbefalinger og tjenester. Ingen personligt identificerbare oplysninger deles.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <UserCheck className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Dine rettigheder (GDPR)</h2>
                  <p className="text-muted-foreground mb-3">I henhold til GDPR har du følgende rettigheder:</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    <strong>Ret til indsigt:</strong> Du kan anmode om en kopi af dine personoplysninger
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    <strong>Ret til berigtigelse:</strong> Du kan få rettet forkerte oplysninger
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    <strong>Ret til sletning:</strong> Du kan anmode om sletning af dine oplysninger
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    <strong>Ret til begrænsning:</strong> Du kan begrænse behandlingen af dine oplysninger
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>
                    <strong>Ret til dataportabilitet:</strong> Du kan få dine data i et struktureret format
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">Datasikkerhed</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vi implementerer passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte
                    dine personoplysninger mod uautoriseret adgang, tab eller ødelæggelse. Vores hjemmeside bruger
                    SSL-kryptering, og alle data opbevares sikkert.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-6 shadow-sm border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Kontakt os</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Hvis du har spørgsmål om vores privatlivspolitik eller ønsker at udøve dine rettigheder, kan du kontakte
                os på:
              </p>
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <p
                  className="text-primary hover:underline font-medium"
                >
                  privacy@danskebedstecasinosider.com
                </p>
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Generel kontakt:</strong>{" "}
                <p  className="text-primary hover:underline font-medium">
                  info@danskebedstecasinosider.com
                </p>
              </p>
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
