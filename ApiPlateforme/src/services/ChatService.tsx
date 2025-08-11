import { ChatMessage, ChatSession, QuestionPattern } from '../types';
import { investmentData, questionPatterns } from '../assets/investmentData';
import { v4 as uuidv4 } from 'uuid';

class ChatService {
  private sessions: ChatSession[] = [];
  private currentSession: ChatSession | null = null;

  private findBestMatch(userInput: string): QuestionPattern | null {
    const input = userInput.toLowerCase();
    let bestMatch: QuestionPattern | null = null;
    let bestScore = 0;

    for (const pattern of questionPatterns) {
      let score = 0;
      for (const keyword of pattern.keywords) {
        if (input.includes(keyword.toLowerCase())) {
          score += 1;
        }
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = pattern;
      }
    }

    return bestScore > 0 ? bestMatch : null;
  }

  private generateDetailedResponse(category: string, userInput: string): string {
    const input = userInput.toLowerCase();
    
    switch (category) {
      case 'sectors':
        if (input.includes('agriculture')) {
          const sector = investmentData.sectors.agriculture;
          return `${sector.description}\n\nAvantages principaux :\n${sector.advantages.slice(0, 3).map(a => `• ${a}`).join('\n')}\n\nExemples d'investissement :\n${sector.examples.slice(0, 3).map(e => `• ${e}`).join('\n')}`;
        }
        if (input.includes('mine') || input.includes('minier')) {
          const sector = investmentData.sectors.mining;
          return `${sector.description}\n\nAvantages principaux :\n${sector.advantages.slice(0, 3).map(a => `• ${a}`).join('\n')}\n\nExemples d'opportunités :\n${sector.examples.slice(0, 3).map(e => `• ${e}`).join('\n')}`;
        }
        if (input.includes('énergie') || input.includes('renouvelable')) {
          const sector = investmentData.sectors.energy;
          return `${sector.description}\n\nAvantages principaux :\n${sector.advantages.slice(0, 3).map(a => `• ${a}`).join('\n')}\n\nExemples de projets :\n${sector.examples.slice(0, 3).map(e => `• ${e}`).join('\n')}`;
        }
        break;
        
      case 'procedures':
        if (input.includes('titre') || input.includes('foncier')) {
          const procedure = investmentData.procedures.landTitle;
          return `${procedure.title}\n\nÉtapes principales :\n${procedure.steps.slice(0, 4).map(s => `• ${s}`).join('\n')}\n\nDurée : ${procedure.duration}\nCoût : ${procedure.cost}`;
        }
        if (input.includes('entreprise') || input.includes('création')) {
          const procedure = investmentData.procedures.businessRegistration;
          return `${procedure.title}\n\nÉtapes principales :\n${procedure.steps.slice(0, 4).map(s => `• ${s}`).join('\n')}\n\nDurée : ${procedure.duration}\nCoût : ${procedure.cost}`;
        }
        break;
        
      case 'incentives':
        const incentive = investmentData.incentives.investmentCode;
        return `${incentive.description}\n\nAvantages principaux :\n${incentive.benefits.slice(0, 3).map(b => `• ${b}`).join('\n')}\n\nConditions d'éligibilité :\n${incentive.conditions.slice(0, 3).map(c => `• ${c}`).join('\n')}`;
        
      case 'financing':
        if (input.includes('bancaire') || input.includes('prêt')) {
          const financing = investmentData.financing.bankLoans;
          return `${financing.description}\n\nConditions d'éligibilité :\n${financing.eligibility.slice(0, 3).map(e => `• ${e}`).join('\n')}\n\nTermes : ${financing.terms}`;
        }
        if (input.includes('fonds') || input.includes('investissement')) {
          const financing = investmentData.financing.investmentFunds;
          return `${financing.description}\n\nConditions d'éligibilité :\n${financing.eligibility.slice(0, 3).map(e => `• ${e}`).join('\n')}\n\nTermes : ${financing.terms}`;
        }
        break;
        
      case 'contact':
        return `🤝 **Accompagnement Personnalisé**\n\nNos experts sont là pour vous accompagner :\n\n📞 **Téléphone :** +237 6XX XX XX XX\n📧 **Email :** contact@investcameroun.com\n🌐 **Site web :** www.investcameroun.com\n📍 **Adresse :** Douala, Cameroun\n\n**Services disponibles :**\n• Consultation juridique\n• Étude de faisabilité\n• Accompagnement administratif\n• Mise en relation avec partenaires locaux\n\n**Horaires :** Lundi - Vendredi, 8h - 17h`;
        
      case 'infrastructure':
        if (input.includes('port')) {
          const port = investmentData.infrastructure.doualaPort;
          return `${port.name} - ${port.location}\n\nCapacité : ${port.capacity}\n\nServices disponibles :\n${port.services.map(s => `• ${s}`).join('\n')}`;
        }
        break;
    }
    
    return "Je peux vous fournir des informations plus détaillées. Pourriez-vous préciser votre question ?";
  }

  private generateRelatedQuestions(category: string): string[] {
    const relatedQuestions: { [key: string]: string[] } = {
      sectors: [
        "Quels sont les défis du secteur agricole ?",
        "Comment investir dans les énergies renouvelables ?",
        "Quelles sont les opportunités dans le secteur minier ?"
      ],
      procedures: [
        "Combien coûte la création d'une entreprise ?",
        "Quels documents sont nécessaires ?",
        "Comment accélérer les procédures administratives ?"
      ],
      incentives: [
        "Comment bénéficier des zones économiques spéciales ?",
        "Quels sont les critères d'éligibilité ?",
        "Existe-t-il des incitations sectorielles ?"
      ],
      financing: [
        "Quelle est la différence entre les types de financement ?",
        "Comment préparer un dossier de financement ?",
        "Quels sont les taux d'intérêt actuels ?"
      ],
      infrastructure: [
        "Où se trouvent les zones industrielles ?",
        "Quels sont les services logistiques disponibles ?",
        "Comment accéder aux infrastructures portuaires ?"
      ]
    };
    
    relatedQuestions.contact = [
      "Comment prendre rendez-vous ?",
      "Quels sont vos tarifs de consultation ?",
      "Proposez-vous un accompagnement à distance ?",
      "Avez-vous des partenaires dans ma région ?"
    ];

    return relatedQuestions[category] || [];
  }

  public processMessage(userMessage: string): ChatMessage {
    const match = this.findBestMatch(userMessage);
    
    let response: string;
    let relatedQuestions: string[] = [];
    
    if (match) {
      // Générer une réponse détaillée basée sur la catégorie
      const detailedResponse = this.generateDetailedResponse(match.category, userMessage);
      response = detailedResponse;
      relatedQuestions = this.generateRelatedQuestions(match.category);
    } else {
      // Réponse par défaut avec suggestions
      response = "Je ne suis pas sûr de comprendre votre question. Voici quelques domaines sur lesquels je peux vous aider :\n\n• Secteurs d'investissement porteurs\n• Procédures administratives\n• Avantages fiscaux\n• Options de financement\n• Infrastructures disponibles\n\nPouvez-vous reformuler votre question ?";
      relatedQuestions = [
        "Quels sont les secteurs porteurs au Cameroun ?",
        "Comment obtenir un titre foncier ?",
        "Quels sont les avantages fiscaux disponibles ?"
      ];
    }

    return {
      id: uuidv4(),
      sender: "bot",
      senderName: "Assistant",
      senderAvatar: "/assets/bot-avatar.png", // Update path as needed
      message: response,
      text: response, // If 'text' is still needed elsewhere
      timestamp: new Date(),
      relatedQuestions,
      category: match?.category,
      isCurrentUser: false
    };
  }

  public getPreloadedQuestions(): string[] {
    return [
      "Quels sont les secteurs porteurs au Cameroun ?",
      "Comment obtenir un titre foncier ?",
      "Quels sont les avantages fiscaux pour les investisseurs ?",
      "Quels sont les types de financement disponibles ?",
      "Quelles sont les principales infrastructures disponibles ?",
      "Comment créer une entreprise au Cameroun ?",
      "Quelles sont les opportunités dans l'agriculture ?",
      "Comment bénéficier du Code des Investissements ?",
      "Où se trouvent les zones économiques spéciales ?",
      "Quels sont les défis de l'investissement au Cameroun ?",
      "Comment obtenir un accompagnement personnalisé ?",
      "Quels sont vos contacts pour plus d'informations ?"
    ];
  }

  public createSession(title: string = "Nouvelle conversation"): ChatSession {
    const session: ChatSession = {
      id: uuidv4(),
      title,
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.sessions.push(session);
    this.currentSession = session;
    return session;
  }

  public addMessage(message: ChatMessage): void {
    if (this.currentSession) {
      this.currentSession.messages.push(message);
      this.currentSession.updatedAt = new Date();
    }
  }

  public getCurrentSession(): ChatSession | null {
    return this.currentSession;
  }

  public getSessions(): ChatSession[] {
    return this.sessions;
  }

  public clearCurrentSession(): void {
    if (this.currentSession) {
      this.currentSession.messages = [];
      this.currentSession.updatedAt = new Date();
    }
  }

  public exportConversation(): string {
    if (!this.currentSession) return "";
    
    const messages = this.currentSession.messages.map(msg => 
      `${msg.sender.toUpperCase()}: ${msg.text}`
    ).join('\n\n');
    
    return `Conversation du ${this.currentSession.createdAt.toLocaleString()}\n\n${messages}`;
  }
}

export const chatService = new ChatService();