// staticData.ts
import { ProjeTypes } from './types'; // Update the path to your types file
import CACAO from './assets/img/cacao4.png';
import CACAO1 from './assets/img/solaire1.webp';
import ARTISAN from './assets/img/eartisans.jpg';
import TOURISTE from './assets/img/touriste.jpg';
import USINECACAO from './assets/img/usinecacao.jpg';
import AUTOROUTE from './assets/img/autoroute.jpg';
import CAFE from './assets/img/café.jpg';
import EOLIEN from './assets/img/eolien.jpg';
import STARTUP from './assets/img/startup1.jpg';

export const staticData: ProjeTypes[] = [
    {
        id: 1,
        secteur: "Agriculture",
        titre: "Mise sur pied d'une Plantation de cacao",
        ville: "Douala",
        quartier: "Akwa",
        description: "Ce projet consiste en la création d'une Plantation de cacao dédiée à la culture de caocao en masse. L'objectif est de répondre à la demande croissante en produits locaux et durables dans le pays. L'infrastructure sera équipée des dernières technologies agricoles.",
        image: CACAO
      },
      {
        id: 2,
        secteur: "Energie",
        titre: "Centrale solaire de Bafoussam",
        ville: "Bafoussam",
        quartier: "Centre-Ville",
        description: "La centrale solaire de Bafoussam est un projet visant à fournir de l'énergie propre et renouvelable à la ville et ses environs. Elle permettra de réduire la dépendance aux sources d'énergie polluantes. Ce projet fait partie d'une initiative nationale pour développer les énergies renouvelables.",
        image: CACAO1
      },
      {
        id: 3,
        secteur: "TIC",
        titre: "Plateforme de e-commerce pour artisans",
        ville: "Yaoundé",
        quartier: "Messa",
        description: "Ce projet développe une plateforme en ligne permettant aux artisans locaux de vendre leurs produits à une audience nationale et internationale. L'objectif est de promouvoir l'artisanat camerounais tout en offrant aux artisans une visibilité accrue. La plateforme inclut aussi des options de formation en ligne.",
        image: ARTISAN
        },
      {
        id: 4,
        secteur: "Tourisme",
        titre: "Resort écologique à Kribi",
        ville: "Kribi",
        quartier: "Plage",
        description: "Un complexe touristique éco-responsable à Kribi, destiné à offrir une expérience de vacances immersive en harmonie avec la nature. Le projet vise à attirer des touristes locaux et étrangers tout en préservant l'environnement. Ce resort proposera des bungalows, des activités nautiques et des randonnées.",
        image: TOURISTE
        },
      {
        id: 5,
        secteur: "Industrie",
        titre: "Usine de transformation de cacao",
        ville: "Bamenda",
        quartier: "Bamenda Centre",
        description: "Le projet consiste en la création d'une usine moderne de transformation de cacao, afin d'augmenter la valeur ajoutée du cacao camerounais. L'usine produira du chocolat et des dérivés pour le marché local et international. Cela contribuera à créer des emplois et à dynamiser l'économie régionale.",
        image: USINECACAO
        },
      {
        id: 6,
        secteur: "Infrastructures",
        titre: "Construction d'une autoroute Douala-Yaoundé",
        ville: "Douala",
        quartier: "Bonanjo",
        description: "Le projet de construction d'une autoroute reliant Douala à Yaoundé vise à améliorer la connectivité entre les deux plus grandes villes du Cameroun. Cette infrastructure permettra de réduire le temps de trajet et de stimuler le commerce et le tourisme. Le projet inclut des bretelles et des zones de repos.",
        image: AUTOROUTE
        },
      {
        id: 7,
        secteur: "Agriculture",
        titre: "Plantation de café à l'ouest",
        ville: "Dschang",
        quartier: "Village voisin",
        description: "Ce projet consiste en la création d'une grande plantation de café biologique dans la région de l'Ouest. L'objectif est de produire un café haut de gamme destiné aux marchés nationaux et internationaux. Le projet comprendra également un centre de formation pour les agriculteurs locaux.",
        image: CAFE
        },
      {
        id: 8,
        secteur: "Energie",
        titre: "Parc éolien de Maroua",
        ville: "Maroua",
        quartier: "Extrême-Nord",
        description: "Le parc éolien de Maroua est un projet destiné à produire de l'électricité à partir de l'énergie éolienne. Ce projet permettra de diversifier les sources d'énergie et d'améliorer la couverture énergétique dans la région de l'Extrême-Nord. Il comprend également des infrastructures pour la formation des techniciens locaux.",
        image: EOLIEN
        },
      {
        id: 9,
        secteur: "TIC",
        titre: "Start-up de développement d'applications mobiles",
        ville: "Yaoundé",
        quartier: "Bastos",
        description: "Cette start-up se spécialise dans le développement d'applications mobiles adaptées aux besoins des utilisateurs camerounais. L'objectif est de rendre les services numériques accessibles à tous et de créer des solutions innovantes dans les secteurs de l'éducation, de la santé et de l'administration.",
        image: STARTUP
        }
];
