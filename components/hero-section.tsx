import { Shield, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const currentDate = new Date()
  const monthNames = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ]

  return (
    <section className="relative py-4 md:py-12 px-4 max-h-[250px] md:max-h-[350px] overflow-hidden flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/elegant-casino-table-with-poker-chips-cards-and-ro.jpg')`,
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance leading-tight text-xl">
            Professionelle <span className="text-primary"> Casino</span> Anmeldelser
          </h1>

          <p className="md:text-base text-muted-foreground mb-3 md:mb-6 max-w-2xl mx-auto leading-relaxed text-pretty text-xs">
            Ekspertanalyse af licenserede casinoer med objektive ratings, detaljerede anmeldelser og opdateret
            information for informerede valg.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-2 md:mb-4">
            <div className="flex items-center gap-2">
              <Image src="/denmark-flag-icon.webp" alt="Danmark Flag" width={20} height={14} />
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold text-foreground">Licenserede</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Verificerede casinoer</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold text-foreground">Objektivt</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Uafhængige anmeldelser</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold text-foreground">Ekspertise</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Detaljeret analyse</p>
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground border-t pt-1.5 md:pt-3 inline-block">
            Sidst opdateret: {currentDate.getDate()}. {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}
