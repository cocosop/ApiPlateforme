export interface ProjeTypes {
    url_image: string;
    titre: string;
    secteur: string;
    region: string;
    ville: string;
    quartier: string;
    description: string;
    latitude: number;
    longitude: number;
    dateDebut: Date;
    dateFin: Date;
    investor: any;
    ROI: number;
    montant: number;
    budget: number;
    status: string;
}

export interface Filters {
    secteur: string;
    ville: string;
    region: string;
}
export type CreateProjectType = Omit<ProjeTypes, 'id'>;
