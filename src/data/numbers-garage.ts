export interface NumberGarageModel {
  _id: number;
  value: string;
  name: string;
  description?: string;
}

export const numbersGarage: NumberGarageModel[] = [
  {
    _id: 0,
    value: '+80',
    name: 'Garagistes',
    description: "prêts à innover et faire vivre l'association.",
  },
  {
    _id: 1,
    value: '6',
    name: 'Labs',
    description: 'spécialisés dans différents domaines technologiques.',
  },
  {
    _id: 2,
    value: '+30',
    name: 'Projets',
    description: 'innovants, sur des technologies variées et modernes.',
  },
  {
    _id: 3,
    value: '20',
    name: 'Workshops',
    description: 'par an en moyenne, pour partager nos connaissances !',
  },
  {
    _id: 4,
    value: '2',
    name: 'Panic Night',
    description:
      'par an, nuits blanches pour a_ider les étudiants dans leurs projets.',
  },
  {
    _id: 5,
    value: '1',
    name: 'Hackathon',
    description:
      "les Silicon Days, afin d'apprendre entouré de professionnels.",
  },
];
