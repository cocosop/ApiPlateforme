// staticData.ts
import  {ProjeTypes}  from './types'; // Update the path to your types file
import CACAO from './assets/img/cacao4.png';
import ENERGIE from "../src/assets/img/solar.jpg"
import CHIMIE from "../src/assets/img/medoc.jpg"
import MINE from "../src/assets/img/mine.jpg"
import INFRASTRUCTURE from "../src/assets/img/pont.jpg"

export const staticData: ProjeTypes[] = [
  {
    id: 1,
    secteur: "Agro-industrie",
    titre: "Exploitation de plantation de cacao",
    ville: "Douala",
    promoteur: "Snk1",
    region: "Nord-Ouest",
    quartier: "Bonaberi",
    description: "Mise en place d'une plantation moderne de cacao avec une production annuelle de 50 tonnes.",
    image: CACAO,
    latitude: 4.0544,
    longitude: 9.7679,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 2,
    secteur: "Énergie",
    titre: "Parc solaire de 20 MW",
    ville: "Garoua",
    quartier: "Ngaoundere route",
    promoteur: "Snk2",
    region: "Centre",
    description: "Construction d'un parc solaire pour fournir de l'énergie propre à la région du Nord.",
    image: ENERGIE,
    latitude: 9.3006,
    longitude: 13.3930,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 3,
    secteur: "Numérique",
    titre: "Plateforme de paiement mobile",
    promoteur: "Snk3",
    region: "Littoral",
    ville: "Yaoundé",
    quartier: "Bastos",
    description: "Développement d'une application de paiement mobile visant à faciliter les transactions financières locales.",
    image: "https://img.freepik.com/free-photo/high-angle-friends-reading-menu-restaurant_23-2150384825.jpg?t=st=1738099850~exp=1738103450~hmac=263dee2608a764be0cc905367387bf817f98c3b6a3df41a0103a348fa8777175&w=996",
    latitude: 3.8480,
    longitude: 11.5021,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 4,
    secteur: "Bois-Forêts",
    titre: "Exploitation forestière durable",
    promoteur: "Snk4",
    region: "Adamaoua",
    ville: "Bertoua",
    quartier: "Dimako",
    description: "Projet de reboisement et d'exploitation durable des ressources forestières locales.",
    image: "https://img.freepik.com/free-photo/wood-processing-factory_1112-1218.jpg?uid=R145003395&ga=GA1.1.506201312.1736953208&semt=ais_hybrid",
    latitude: 4.5773,
    longitude: 13.6827,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 5,
    secteur: "Textile/Confection/Cuir",
    titre: "Atelier de production de tissus locaux",
    promoteur: "Snk5",
    region: "Sud-Ouest",
    ville: "Bafoussam",
    quartier: "Marché A",
    description: "Création d'un atelier pour la fabrication et la commercialisation de tissus traditionnels camerounais.",
    image: "https://img.freepik.com/free-photo/tissue-shop-with-fabrics_1398-3773.jpg?t=st=1738100028~exp=1738103628~hmac=7aa2d06072648d91b7a3d7589ff78d1207b4271b355cde48bd7c7edf2b7160cc&w=360",
    latitude: 5.4781,
    longitude: 10.4134,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 6,
    secteur: "Hydrocarbures/Raffinage",
    titre: "Extension d'une raffinerie de pétrole",
    promoteur: "Snk6",
    region: "Ouest",
    ville: "Limbe",
    quartier: "Ngeme",
    description: "Modernisation et extension des installations de la raffinerie pour augmenter la capacité de production.",
    image: "https://img.freepik.com/free-photo/modern-factory-industrial-zone-blue-sky_181624-6369.jpg?t=st=1738099433~exp=1738103033~hmac=49ac491f699945c02c195d6322c0379e4d908b8ec815cadea9242a34562c6307&w=996",
    latitude: 4.0244,
    longitude: 9.2008,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 7,
    secteur: "Chimie et Pharmacie",
    titre: "Usine de production de médicaments génériques",
    promoteur: "Snk7",
    region: "Nord",
    ville: "Douala",
    quartier: "Makepe",
    description: "Mise en place d'une usine spécialisée dans la fabrication de médicaments génériques à prix abordables.",
    image: CHIMIE,
    latitude: 4.0511,
    longitude: 9.7679,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 8,
    secteur: "Mines/Métallurgie/Sidérurgie",
    titre: "Exploitation d'une mine de bauxite",
    promoteur: "Snk8",
    region: "Sud",
    ville: "Ngaoundal",
    quartier: "Centre",
    description: "Projet d'extraction et de transformation de la bauxite en aluminium.",
    image: MINE,
    latitude: 6.7486,
    longitude: 12.5186,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 9,
    secteur: "Financements",
    titre: "Fonds de soutien aux startups",
    promoteur: "Snk9",
    region: "Est",
    ville: "Douala",
    quartier: "Akwa",
    description: "Mise en place d'un fonds de soutien pour les startups innovantes dans divers secteurs.",
    image: "https://img.freepik.com/free-photo/innovation-creative-design-development-ideas-concept_53876-15871.jpg?uid=R145003395&ga=GA1.1.506201312.1736953208&semt=ais_hybrid",
    latitude: 4.0503,
    longitude: 9.7674,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  },
  {
    id: 10,
    secteur: "Infrastructures",
    titre: "Construction d'un pont urbain",
    promoteur: "Snk10",
    region: "Extrême-Nord",
    ville: "Yaoundé",
    quartier: "Nlongkak",
    description: "Construction d'un pont pour améliorer la fluidité du trafic dans la capitale.",
    image: INFRASTRUCTURE,
    latitude: 3.8480,
    longitude: 11.5021,
    progress: 90,
    returnRate: "+15.7%",
    retour:"20 000 000 FCFA",
    risk: "Élevé",
    statut: "Bientôt terminé",
    montant: '5 000 000 FCFA'
  }
];
