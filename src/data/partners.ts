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
    image: 'Ledger_logo.png',
    alt: 'Ledger',
  },
  {
    id: 3,
    image: 'ISEP_A.png',
    alt: 'ISEP Alumni',
  },
  {
    id: 4,
    image: 'Capgemini_logo.png',
    alt: 'Capgemini',
  },
  {
    id: 5,
    image: 'Vivatech_logo.png',
    alt: 'ISEP Alumni',
  },
];
