export interface SiliconSubThemesModel {
  id: number;
  name: string;
  company?: string;
  description: string;
  icon: string;
  alt: string;
}

export const siliconSubThemes: SiliconSubThemesModel[] = [
  {
    id: 1,
    name: 'Le transport de demain',
    company: 'RATP',
    description:
      "Utiliser la technologie pour améliorer la durabilité et la connectivité des moyens de transport afin de réduire l'empreinte environnementale.",
    icon: 'train.png',
    alt: 'train',
  },
  {
    id: 2,
    name: 'Blockchain',
    company: 'Ledger',
    description:
      'Comment utiliser la blockchain pour garantir la transparence et la responsabilité dans la gestion des fonds pour les projets sociaux et environnementaux ?',
    icon: 'money.png',
    alt: 'money',
  },
  {
    id: 3,
    name: 'VR et AR',
    description:
      "Comment la réalité virtuelle et l'apprentissage immersif peuvent-ils créer une meilleure forme d'éducation pour les étudiants du monde entier ? Imaginez des environnements d'apprentissage interactifs qui permettent aux étudiants d'apprendre en plongeant dans des mondes virtuels, d'interagir avec des personnages virtuels et de vivre des expériences éducatives immersives.",
    icon: 'vr.png',
    alt: 'vr',
  },
  {
    id: 4,
    name: 'Informatique quantique',
    company: 'IBM',
    description:
      "Comment utiliser l'informatique quantique pour améliorer les initiatives technologiques au service du bien commun ? Le pouvoir de traitement exceptionnel de l'informatique quantique peut offrir des solutions novatrices pour résoudre les grands défis sociaux et environnementaux.",
    icon: 'quantum.png',
    alt: 'Quantum computer',
  },
  {
    id: 5,
    name: 'Cybersécurité',
    description:
      'Comment renforcer la cybersécurité pour protéger les données sensibles liées aux initiatives Tech For Good ?',
    icon: 'cyber-security.png',
    alt: 'cyber-security',
  },
  {
    id: 6,
    name: 'Cloud',
    description:
      'Comment utiliser le cloud pour garantir une utilisation efficace et durable des ressources numériques pour les initiatives Tech For Good ?',
    icon: 'cloud.png',
    alt: 'cloud',
  },
];
