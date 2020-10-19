export interface Card {
  id: string;
  name: string;
  imageUrl: string;
  subtype: string;
  supertype: string;
  hp: string;
  retreatCost: any;
  convertedRetreatCost: number;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  types: any;
  attacks: any;
  weaknesses: any;
  imageUrlHiRes: string;
  nationalPokedexNumber: number;
  evolvesTo: any;
}
