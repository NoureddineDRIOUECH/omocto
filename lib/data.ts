export type ContentBlock = {
  type: 'paragraph' | 'list';
  content: string | string[];
};

export interface ImageData {
  id: number;
  src: string;
  alt: string;
  description: string;
  fullDescription: ContentBlock[];
}

export const servicesData: ImageData[] = [
  {
    id: 1,
    src: '/conseil_strategie.png',
    alt: 'Conseil et Stratégie',
    description: 'Avec Omocto, portez vos relations médias à un tout autre niveau.',
    fullDescription: [
      {
        type: 'paragraph',
        content: 'The "Conseil et Stratégie" service at Omocto is founded on a consultative approach, beginning with an initial work session to understand the client\'s business, marketing strategy, and existing communication tools. This crucial step helps in meticulously grasping the client\'s positioning, target audience, competitors, performance levers, desired messages, and projected image. These insights are vital for jointly defining objectives and constraints. Following this, Omocto designs a tailored media influence strategy, detailed in a media plan that includes a budget, a precise timeline, and the necessary tools, supports, and actions. The company also analyzes the performance of media coverage to adjust and optimize the media plan, turning it into a key driver of success.',
      },
      {
        type: 'paragraph',
        content: 'Omocto offers support in various communication areas, including:',
      },
      {
        type: 'list',
        content: [
          'Strategic thinking',
          'Audit and benchmark',
          'Creation of visual identity',
          'Brand content',
          'Content conception and creation',
          'Public communication',
          'Corporate communication',
          'Product communication in B2B and B2C',
          'Impact studies with key performance indicators',
        ],
      },
    ],
  },
  {
    id: 2,
    src: '/relation_medias.png', // Placeholder image
    alt: 'Relations médias',
    description: 'Omocto, un savoir-faire de pointe en matière de relations médias.',
    fullDescription: [
      {
        type: 'paragraph',
        content: 'Chez Omocto, nous nous spécialisons dans l\'orchestration et le déploiement de votre stratégie de communication et d\'influence médiatique. Pour ce faire, nous travaillons en étroite collaboration avec vous afin d\'établir un plan média sur mesure, qui sera en accord avec vos objectifs et votre secteur d\'activité. Nous nous chargeons également de piloter les actions de relations médias auprès des journalistes de la presse généraliste et spécialisée.',
      },
      {
        type: 'paragraph',
        content: 'Omocto offre un savoir-faire de pointe en matière de relations médias, permettant de donner vie à votre communication. Leur expertise optimise les relations presse et assure une visibilité stratégique continue. La palette de compétences d\'Omocto couvre les domaines suivants :',
      },
      {
        type: 'list',
        content: [
          'Plan média / Achat d\'espace',
          'Dossiers de presse',
          'Media training',
          'Journée presse',
          'Supports de communication',
          'Revue de presse',
          'Gestion de communication de crise',
          'Voyage de presse',
          'Production des publi-rédactionnels',
          'Analyse des retombées presse et médias',
        ],
      },
    ],
  },
  {
    id: 3,
    src: '/relation_publique.png', // Placeholder image
    alt: 'Relations Publiques',
    description: 'Atteignez tous vos objectifs médias grâce à Omocto.',
    fullDescription: [
      {
        type: 'paragraph',
        content: 'Quel que soit votre domaine d\'activité, il est essentiel d\'interagir avec votre public, que ce soit pour renforcer votre image de marque, pour transmettre un message ou pour améliorer votre notoriété. Atteignez tous vos objectifs médias grâce à Omocto. Que vous ayez besoin de gérer une crise, de promouvoir votre entreprise, de disposer d\'un porte-parole pour vous représenter, ou de célébrer des événements spéciaux tels que le lancement d\'un nouveau produit ou le développement d\'un partenariat, Omocto mettra toujours à votre disposition son expertise de pointe dans le domaine des relations publiques.',
      },
    ],
  },
  {
    id: 4,
    src: '/social_digital.png', // Placeholder image
    alt: 'Social Media et Digital',
    description: 'Votre image compte pour nous.',
    fullDescription: [
      {
        type: 'paragraph',
        content: 'Aujourd\'hui, Internet occupe une place prépondérante dans le paysage médiatique. Aucune stratégie de communication ne peut ignorer l\'importance des médias en ligne, des réseaux sociaux et des plateformes d\'échange. L\'équipe de Omocto sera toujours là pour vous aider à maximiser votre présence en ligne, à développer votre notoriété et à engager davantage votre public cible sur les plateformes numériques. Chez Omocto, nous prônons surtout une approche intégrée de la communication entièrement basée sur notre expertise dans le domaine du numérique.',
      },
      {
        type: 'paragraph',
        content: 'The key areas of expertise offered are:',
      },
      {
        type: 'list',
        content: [
          'Stratégie d\'influence digitale, y compris l\'optimisation pour les médias sociaux (SMO).',
          'Gestion de l\'e-réputation.',
          'Publicité et référencement payant (Google Ads, SEA, etc.).',
          'Création d\'une image de marque forte (branding).',
          'Rédaction de contenu web optimisé pour les moteurs de recherche (SEO).',
          'Community management sur tous les réseaux sociaux et plateformes (Facebook, YouTube, LinkedIn, Twitter, Instagram, Pinterest, Snapchat, etc.).',
        ],
      },
    ],
  },
];
