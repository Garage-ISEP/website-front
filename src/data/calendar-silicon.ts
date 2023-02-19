export interface SiliconCalendarModel {
  id: number;
  name: string;
  description?: string;
}
export const siliconCalendar: SiliconCalendarModel[] = [
  {
    id: 0,
    name: 'Présélection : 3 Février - 26 Février',
    description:
      "Une première étape de présélection où les étudiants doivent remplir un formulaire d'inscription et réaliser un PPT (seul ou en groupe inférieur à 3) décrivant comment ils répondront à une problématique d'un des thèmes choisis (problématiques dérivées de la thématique Tech for Good, fournies par les entreprises) ",
  },
  { id: 1, name: 'Annonce des équipes qualifiés : 4 Mars' },
  {
    id: 2,
    name: 'Hackathon : 4 Mars - 24 Mars',
    description:
      'Les étudiants seront rassemblés en équipes pour participer à des sessions de coaching et de workshops fournis par Garage ISEP et ses partenaires, et travailler sur leur idée pendant un mois.',
  },
  {
    id: 3,
    name: 'Passage Jury : 25 Mars',
    description:
      "Une étape finale où les équipes présenteront leur projet devant un jury d'experts.",
  },
];
