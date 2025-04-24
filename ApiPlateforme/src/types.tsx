export interface ProjeTypes {
    id: number,
    secteur: string,
    titre: string,
    promoteur: string,
    region: string,
    ville: string,
    quartier: string,
    description: string,
    return: string;
    montant:string;
    statut: string;
    image: string;
    risk: "Faible" | "Modéré" | "Élevé";
    progress: number; 
    latitude: number,
    longitude: number
}
  
export interface Filters {
    secteur: string;
    ville: string;
    region: string;
  }