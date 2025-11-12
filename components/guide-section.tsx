import { Search, Shield, CreditCard, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"

export function GuideSection() {
  const steps = [
    {
      icon: Search,
      title: "1. Tjek Licensen",
      description: "Sørg for at casinoet har en gyldig licens fra en anerkendt regulator for sikker spil.",
    },
    {
      icon: Shield,
      title: "2. Vurder Sikkerheden",
      description: "Kontroller for SSL-kryptering og læs anmeldelser fra andre spillere om casinoets pålidelighed.",
    },
    {
      icon: CreditCard,
      title: "3. Sammenlign Bonusser",
      description: "Undersøg velkomstbonusser, omsætningskrav og andre tilbud for den bedste værdi.",
    },
    {
      icon: Trophy,
      title: "4. Test Spillene",
      description: "Prøv forskellige spil og funktioner for at sikre, at casinoet matcher dine præferencer.",
    },
  ]

  return (
    <section id="guide" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          <span className="text-foreground">Sådan Vælger Du</span>{" "}
          <span className="text-primary">Det Rette Casino</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ekspertanbefalinger til at træffe informerede beslutninger
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-md hover:border-primary/50 transition-all">
              
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
