export interface ProjeTypes {
    id: number,
    secteur: string,
    titre: string,
    promoteur: string,
    region: string,
    ville: string,
    quartier: string,
    description: string,
    image: string;
    latitude: number,
    longitude: number
}
  
export interface Filters {
    secteur: string;
    ville: string;
    region: string;
  }