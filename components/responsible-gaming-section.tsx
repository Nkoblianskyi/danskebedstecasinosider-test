import { Shield, Phone, Info } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ResponsibleGamingSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ansvarligt Spil og Sikkerhed</h2>
            <p className="text-lg text-muted-foreground">Vi tager ansvarligt spil og spillerbeskyttelse alvorligt</p>
          </div>

          <div className="space-y-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Vores Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gambling skal være en form for underholdning, ikke en måde at løse økonomiske problemer på. Vores
                    mission er at hjælpe spillere med at træffe informerede beslutninger og spille ansvarligt.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Licenserede Casinoer</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Alle casinoer på vores platform har licens fra anerkendte regulatorer og følger strenge regler for
                    spillerbeskyttelse, herunder værktøjer til selvudelukkelse og grænser.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Brug for Hjælp?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Hvis du føler, at dit spil er ved at komme ud af kontrol, er der hjælp at få. Kontakt
                    støtteorganisationer og brug selvudelukkelsesværktøjer.
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Husk: Spil kun for sjov, aldrig prøv at vinde penge du har brug for.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
