// In your types.ts file (example)
export interface ProjeTypes {
  id: number;
  secteur: string;
  titre: string;
  description: string;
  region: string;
  ville: string;
  quartier: string;
  latitude: number;
  longitude: number;
  montant: string;
  ROI: string;
  budget: number;
  statut: string;
  url_image: string;
  investor: string;
  dateDebut: Date;
  dateFin: Date;
  status: 'PENDING' | 'STUDYING' | 'ACCEPTED' | 'REJECTED';
}

export interface Filters {
    secteur: string;
    ville: string;
    region: string;
  }
export type CreateProjectType = Omit<ProjeTypes, 'id' | 'statut'>;


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
export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
  question?: string;
  category?: string;
  relatedQuestions?: string[];
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface InvestmentData {
  sectors: {
    [key: string]: {
      name: string;
      description: string;
      advantages: string[];
      challenges: string[];
      examples: string[];
    };
  };
  procedures: {
    [key: string]: {
      title: string;
      steps: string[];
      documents: string[];
      duration: string;
      cost: string;
    };
  };
  incentives: {
    [key: string]: {
      title: string;
      description: string;
      conditions: string[];
      benefits: string[];
    };
  };
  financing: {
    [key: string]: {
      type: string;
      description: string;
      eligibility: string[];
      terms: string;
    };
  };
  infrastructure: {
    [key: string]: {
      name: string;
      location: string;
      capacity: string;
      services: string[];
    };
  };
}

export interface QuestionPattern {
  keywords: string[];
  category: string;
  responses: string[];
  followupQuestions: string[];
}

export interface Message {
  id: number;
  projectId: number;
  projectName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  participants: User[];
  projectOwner: User;
}

export interface ChatMessage {
  senderName: string;
  senderAvatar: string;
  message: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

export interface User {
  name: string;
  avatar: string;
  role: 'admin' | 'project_owner' | 'participant';
}

export interface Project {
  id: number;
  name: string;
  description: string;
  investmentAmount: number;
  expectedReturn: number;
  duration: string;
  createdAt: Date;
  participants: User[];
  projectOwner: User;
  chatId: number;
}

export interface Message {
  id: number;
  projectId: number;
  projectName: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  participants: User[];
  projectOwner: User;
}

export interface ChatMessages {
  id: number;
  senderId: number;
  senderName: string;
  senderAvatar: string;
  message: string;
  timestamp: Date;
  isCurrentUser: boolean;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  role: 'admin' | 'project_owner' | 'participant';
}

export interface Project {
  id: number;
  name: string;
  description: string;
  investmentAmount: number;
  expectedReturn: number;
  duration: string;
  createdAt: Date;
  projectOwner: User;
  chatId: number;
}