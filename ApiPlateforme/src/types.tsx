export interface ProjeTypes {
    id?: number,
    secteur: string,
    titre: string,
    promoteur: string,
    region: string,
    ville: string,
    quartier: string,
    description: string,
    retour: string;
    montant:string;
    statut: string;
    image: string;
    risk: string;
    progress: number;
    latitude: number;
    longitude: number;
    returnRate:string;
}
  
export interface Filters {
    secteur: string;
    ville: string;
    region: string;
  }
  export type CreateProjectType = Omit<ProjeTypes, 'id'>;
