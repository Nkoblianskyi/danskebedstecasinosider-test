"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Lars Nielsen",
    rating: 5,
    comment: "Fantastisk side med de bedste casino anmeldelser! Fandt det perfekte casino gennem deres anbefalinger.",
    date: "2025-01-15",
  },
  {
    id: 2,
    name: "Mette Hansen",
    rating: 5,
    comment: "Bedste casino guide på nettet! Deres anmeldelser er altid ærlige og detaljerede. Meget hjælpsom side.",
    date: "2025-01-12",
  },
  {
    id: 3,
    name: "Anders Petersen",
    rating: 4,
    comment: "God oversigt over danske casinoer. Sammenligning af bonusser er særligt nyttig. Anbefaler siden!",
    date: "2025-01-10",
  },
  {
    id: 4,
    name: "Sofie Larsen",
    rating: 5,
    comment: "Elsker deres detaljerede anmeldelser! Hjælper mig altid med at vælge det rigtige casino. Troværdig side.",
    date: "2025-01-08",
  },
  {
    id: 5,
    name: "Michael Andersen",
    rating: 4,
    comment: "Sikker information og gode råd om ansvarligt spil. Føler mig tryg ved at bruge deres anbefalinger.",
    date: "2025-01-05",
  },
  {
    id: 6,
    name: "Anna Christensen",
    rating: 5,
    comment: "Imponerende grundige anmeldelser. Fandt mit nye favoritcasino gennem deres top 5 liste!",
    date: "2025-01-03",
  },
  {
    id: 7,
    name: "Thomas Jensen",
    rating: 4,
    comment: "Professionel side med opdaterede informationer. Casino sammenligninger er meget nyttige.",
    date: "2025-01-01",
  },
  {
    id: 8,
    name: "Camilla Møller",
    rating: 5,
    comment: "Bedste casino guide jeg har fundet. Deres ekspertanmeldelser har sparet mig for mange skuffelser.",
    date: "2024-12-28",
  },
  {
    id: 9,
    name: "Jesper Rasmussen",
    rating: 4,
    comment: "Hurtig at navigere og nem at finde information. Godt layout og brugervenlig design.",
    date: "2024-12-25",
  },
  {
    id: 10,
    name: "Marie Sørensen",
    rating: 5,
    comment: "Tryg og pålidelig information om danske casinoer. Føler mig sikker på deres anbefalinger.",
    date: "2024-12-22",
  },
  {
    id: 11,
    name: "Henrik Olsen",
    rating: 5,
    comment: "Fantastisk hjælpsom side! Deres bonus guides har hjulpet mig med at få de bedste tilbud.",
    date: "2024-12-20",
  },
  {
    id: 12,
    name: "Lise Pedersen",
    rating: 4,
    comment: "God oversigt over licenser og sikkerhed. Vigtig information for os spillere. Tak for det!",
    date: "2024-12-18",
  },
  {
    id: 13,
    name: "Peter Kristensen",
    rating: 5,
    comment: "Deres FAQ sektion besvarede alle mine spørgsmål. Meget informativ og velorganiseret side.",
    date: "2024-12-15",
  },
  {
    id: 14,
    name: "Tina Mortensen",
    rating: 4,
    comment: "Elsker at de fokuserer på ansvarligt spil. Føles som en side der virkelig tænker på spillerne.",
    date: "2024-12-12",
  },
  {
    id: 15,
    name: "Nikolaj Poulsen",
    rating: 5,
    comment: "Opdaterede anmeldelser og aktuelle bonusser. Holder altid øje med deres nye indhold.",
    date: "2024-12-10",
  },
  {
    id: 16,
    name: "Katrine Jørgensen",
    rating: 4,
    comment: "Professionel tilgang til casino anmeldelser. Kan mærke at de ved hvad de snakker om.",
    date: "2024-12-08",
  },
  {
    id: 17,
    name: "Rasmus Thomsen",
    rating: 5,
    comment: "Bedste danske casino guide! Deres top 5 liste er spot on. Har prøvet dem alle.",
    date: "2024-12-05",
  },
  {
    id: 18,
    name: "Maja Eriksen",
    rating: 4,
    comment: "God mobilversion og hurtig indlæsning. Nemt at bruge på farten når jeg skal tjekke bonusser.",
    date: "2024-12-03",
  },
  {
    id: 19,
    name: "Simon Larsen",
    rating: 5,
    comment: "Ærlige anmeldelser uden skjulte agendaer. Føles som en side jeg kan stole på 100%.",
    date: "2024-12-01",
  },
  {
    id: 20,
    name: "Louise Nielsen",
    rating: 4,
    comment: "Godt indhold om spilleregler og strategier. Ikke kun casino anmeldelser men også lærerig.",
    date: "2024-11-28",
  },
  {
    id: 21,
    name: "Martin Hansen",
    rating: 5,
    comment: "Deres sammenligning af udbetalingstider er guld værd! Sparer mig for lang ventetid.",
    date: "2024-11-25",
  },
  {
    id: 22,
    name: "Emma Andersen",
    rating: 4,
    comment: "Detaljerede beskrivelser af bonusvilkår. Hjælper mig med at undgå ubehagelige overraskelser.",
    date: "2024-11-22",
  },
  {
    id: 23,
    name: "Oliver Petersen",
    rating: 5,
    comment: "Fantastisk ressource for danske spillere! Denne side er blevet min go-to guide til casinoer.",
    date: "2024-11-20",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentReviews = () => {
    const start = currentIndex * reviewsPerPage
    return reviews.slice(start, start + reviewsPerPage)
  }

  return (
    null
  )
}
