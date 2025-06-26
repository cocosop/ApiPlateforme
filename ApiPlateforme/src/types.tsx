export interface ProjeTypes {
    id?: number,
    secteur: string,
    titre: string,
    region: string,
    ville: string,
    quartier: string,
    description: string,
    montant:string;
    status?: string;
    image_url: string;
    latitude: number;
    longitude: number;
    ROI:string;
    budget:number;
}
  
export interface Filters {
    secteur: string;
    ville: string;
    region: string;
  }
  export type CreateProjectType = Omit<ProjeTypes, 'id'>;
