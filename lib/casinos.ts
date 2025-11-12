export interface Casino {
  id: string
  name: string
  url: string
  bonus: string
  logo: string
  rating: number
  votes: number
  terms: string
  isTopChoice?: boolean
}

export const casinos: Casino[] = [
  {
    id: "getlucky",
    name: "GetLucky",
    url: "https://www.getlucky.com/da",
    bonus: "100% op til 500 kr",
    logo: "/lucky.png",
    rating: 9.8,
    votes: 3781,
    terms:
      "18+ | Spil ansvarligt | Nye spillere | Omsætning 35x | 30 dage | Fuld T&C på hjemmeside",
  },
  {
    id: "leovegas",
    name: "LeoVegas",
    url: "https://www.leovegas.dk/",
    bonus: "100% op til 1.000 kr",
    logo: "/lasvegas.svg",
    rating: 9.7,
    votes: 4681,
    terms: "18+ | Ansvarligt Spil | Spillemyndigheden | Hurtige udbetalinger | 24/7 support",
    isTopChoice: true,
  },
  {
    id: "betsson",
    name: "Betsson",
    url: "https://www.betsson.dk/",
    bonus: "100% op til 500 kr",
    logo: "/betsson.png",
    rating: 9.6,
    votes: 3768,
    terms:
      "18+ | Vilkår og betingelser gælder | Kun for nye kunder | Omsætningskrav 30x | Gyldig i 21 dage ",
  },

  {
    id: "expekt",
    name: "Expekt",
    url: "https://www.expekt.dk/",
    bonus: "Få 50 gyldne freespins",
    logo: "/expekt.png",
    rating: 9.2,
    votes: 3917,
    terms:
      "18+ | Vilkår gælder | Kun nye spillere | Omsætningskrav 40x | Gælder i 7 dage | Se fuld T&C",
  },
]

export const topCasino = casinos[0]
