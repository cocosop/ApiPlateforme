import React, { useEffect, useState } from 'react';
import MessagePanel from '../../pages/dashbordPage/messagePanel'
import messageService from '../../services/messageService';

const Messages: React.FC = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [chats, setChats] = useState<any[]>([]);

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