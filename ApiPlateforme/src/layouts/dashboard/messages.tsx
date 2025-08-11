import React, { useState, useEffect } from 'react';
import MessagePanel from './../../pages/dashbordPage/messagePanel';
import { Message, ChatMessages, User } from '../../types';

// Utilisateurs du système
const systemUsers: User[] = [
  {
    id: 1,
    name: 'Admin Système',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
    role: 'admin'
  },
  {
    id: 2,
    name: 'Jean Dupont',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
    role: 'project_owner'
  },

];

// Utilisateur actuel (simulé)
const currentUser: User = systemUsers[0]; // Admin

const initialMessages: Message[] = [
  {
    id: 1,
    projectId: 1,
    projectName: 'Immobilier Commercial Paris',
    lastMessage: "Bonjour, j'aimerais discuter du projet d'investissement",
    lastMessageTime: '10:30',
    unreadCount: 2,
    participants: [systemUsers[0], systemUsers[1]], // Admin, Jean, Marie
    projectOwner: systemUsers[1] // Jean Dupont
  },
  {
    id: 2,
    projectId: 2,
    projectName: 'Start-up FinTech',
    lastMessage: 'Les documents ont été envoyés',
    lastMessageTime: '09:15',
    unreadCount: 0,
    participants: [systemUsers[0], systemUsers[1]], // Admin, Marie
    projectOwner: systemUsers[1] // Marie Claire
  },
  {
    id: 3,
    projectId: 3,
    projectName: 'Énergie Renouvelable',
    lastMessage: 'Merci pour votre réponse rapide',
    lastMessageTime: 'Hier',
    unreadCount: 1,
    participants: [systemUsers[0], systemUsers[1]], // Admin, Paul
    projectOwner: systemUsers[1] // Paul Martin
  }
];

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [chatMessages, setChatMessages] = useState<Record<number, ChatMessages[]>>({});

  // Messages de chat simulés pour chaque projet
  useEffect(() => {
    const mockChats: Record<number, ChatMessages[]> = {
      1: [
        {
          id: 1,
          senderId: 1,
          senderName: 'Admin Système',
          senderAvatar: systemUsers[0].avatar,
          message: "Bienvenue dans le chat du projet 'Immobilier Commercial Paris'. Ce chat a été créé automatiquement.",
          timestamp: new Date(2024, 2, 20, 9, 0),
          isCurrentUser: true
        },
        {
          id: 2,
          senderId: 2,
          senderName: 'Jean Dupont',
          senderAvatar: systemUsers[1].avatar,
          message: "Bonjour, j'aimerais discuter du projet d'investissement",
          timestamp: new Date(2024, 2, 20, 10, 30),
          isCurrentUser: false
        },
        {
          id: 3,
          senderId: 1,
          senderName: 'Admin Système',
          senderAvatar: systemUsers[0].avatar,
          message: "Bien sûr, je suis disponible pour en discuter. Quel aspect du projet vous intéresse particulièrement ?",
          timestamp: new Date(2024, 2, 20, 10, 32),
          isCurrentUser: true
        },
        {
          id: 4,
          senderId: 2,
          senderName: 'Jean Dupont',
          senderAvatar: systemUsers[1].avatar,
          message: "Je suis particulièrement intéressé par le retour sur investissement prévu pour l'immobilier commercial",
          timestamp: new Date(2024, 2, 20, 10, 35),
          isCurrentUser: false
        }
      ],
      2: [
        {
          id: 1,
          senderId: 1,
          senderName: 'Admin Système',
          senderAvatar: systemUsers[0].avatar,
          message: "Chat créé pour le projet 'Start-up FinTech'. L'admin et le propriétaire du projet ont été ajoutés automatiquement.",
          timestamp: new Date(2024, 2, 19, 8, 0),
          isCurrentUser: true
        },
        {
          id: 2,
          senderId: 3,
          senderName: 'Marie Claire',
          senderAvatar: systemUsers[1].avatar,
          message: "Les documents ont été envoyés",
          timestamp: new Date(2024, 2, 19, 9, 15),
          isCurrentUser: false
        },
        {
          id: 3,
          senderId: 1,
          senderName: 'Admin Système',
          senderAvatar: systemUsers[0].avatar,
          message: "Parfait, je vais les examiner et vous donner mon retour",
          timestamp: new Date(2024, 2, 19, 9, 18),
          isCurrentUser: true
        }
      ],
   
    };
    setChatMessages(mockChats);
  }, []);


  const handleSendMessage = (messageText: string) => {
    if (!selectedChat || !messageText.trim()) return;

    let fileUrl: string | undefined = undefined;
    let pureMessage = messageText;
    if (messageText.startsWith('[file]')) {
      const fileInfo = messageText.replace('[file]', '');
      const [fileName, url] = fileInfo.split('|');
      fileUrl = url;
      pureMessage = `[file]${fileName}|${url}`;
    }

    const newMessage: ChatMessages = {
      id: (chatMessages[selectedChat]?.length || 0) + 1,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      message: pureMessage,
      timestamp: new Date(),
      isCurrentUser: true,
      ...(fileUrl ? { fileUrl } : {})
    };

    setChatMessages({
      ...chatMessages,
      [selectedChat]: [...(chatMessages[selectedChat] || []), newMessage]
    });

    setMessages(messages.map(msg => 
      msg.id === selectedChat 
        ? { ...msg, lastMessage: pureMessage, lastMessageTime: 'Maintenant', unreadCount: 0 }
        : msg
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto h-[calc(100vh-6rem)]"> {/* Ajout de la hauteur ici */}
        <MessagePanel
          messages={messages}
          selectedChat={selectedChat}
          onSelectChat={setSelectedChat}
          chatMessages={chatMessages[selectedChat || 0] || []}
          onSendMessage={handleSendMessage}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default Messages;
