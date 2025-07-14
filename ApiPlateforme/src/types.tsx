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


  export interface Factor {
      name: string;
      description: string;
      icon: string;
      color: string;
      preview: {
          highlight: string;
          label: string;
          stats: string[];
      };
        details?: JSX.Element | ((props?: any) => JSX.Element);

  };

  export interface Section {
  id: string;
  title: string;
  icon: React.ElementType;
}
