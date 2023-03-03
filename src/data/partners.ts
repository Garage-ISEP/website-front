export interface PartnersModel {
  id: number;
  image: string;
  alt?: string;
}

export const partners: PartnersModel[] = [
  {
    id: 0,
    image: 'PBW_Talent_Marine.svg',
    alt: 'Paris Blockchain Week - 20 Mars 2023',
  },
  {
    id: 1,
    image: 'IBM_logo.png',
    alt: 'IBM',
  },
  {
    id: 2,
    image: 'RATP.png',
    alt: 'RATP',
  },
  {
    id: 3,
    image: 'Ledger_logo.png',
    alt: 'Ledger',
  },
];
