import React, { useState } from 'react';
import MessagePanel from '../../pages/dashbordPage/messagePanel';

const initialMessages = [
  {
    id: 1,
    from: 'Jean Dupont',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
    message: "Bonjour, j'aimerais discuter du projet d'investissement",
    time: '10:30',
    unread: true
  },
  {
    id: 2,
    from: 'Marie Claire',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
    message: 'Les documents ont été envoyés',
    time: '09:15',
    unread: false
  },
  {
    id: 3,
    from: 'Paul Martin',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop',
    message: 'Merci pour votre réponse rapide',
    time: 'Hier',
    unread: true
  }
];

const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div>
      <MessagePanel
        messages={initialMessages}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
      />
    </div>
  );
};

export default Messages;