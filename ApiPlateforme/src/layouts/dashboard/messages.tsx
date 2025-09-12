import React, { useEffect, useState } from 'react';
import MessagePanel from '../../pages/dashbordPage/messagePanel'
import messageService from '../../services/messageService';
import { useLocation } from 'react-router-dom';

const Messages: React.FC = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [chats, setChats] = useState<any[]>([]);
  const location = useLocation();

  const fetchAllChat = async () => {
    try {
      const res = await messageService.fetchAllChat();
      if (res.status === 200) {
        setChats(res.data);
      }
    } catch (err) {
      // Gérer l'erreur si besoin
    }
  };

  useEffect(() => {
    fetchAllChat();
  }, []);

  // Sélection automatique du chat si projectId est passé via le state
  useEffect(() => {
    if (location.state?.projectId && chats.length > 0) {
      const chat = chats.find((c: any) => c.project.id === location.state.projectId);
      if (chat) {
        setSelectedChatId(chat.id);
      }
    }
  }, [location.state, chats]);

  return (
    <div>
      <MessagePanel
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
      />
    </div>
  );
};

export default Messages;