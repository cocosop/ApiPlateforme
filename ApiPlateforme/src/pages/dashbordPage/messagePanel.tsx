import React, { useState } from 'react';
import { Send, Search } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Message {
  id: number;
  from: string;
  avatar: string;
  message: string;
  time: string;
  unread: boolean;
}

interface MessagePanelProps {
  messages: Message[];
  selectedChat: number | null;
  onSelectChat: (id: number) => void;
}

const mockChatHistory = [
  {
    id: 1,
    senderId: 1,
    message: "Bonjour, j'aimerais discuter du projet d'investissement",
    timestamp: new Date(2024, 2, 20, 10, 30),
  },
  {
    id: 2,
    senderId: 2,
    message: "Bien sûr, je suis disponible pour en discuter. Quel aspect du projet vous intéresse particulièrement ?",
    timestamp: new Date(2024, 2, 20, 10, 32),
  },
  {
    id: 3,
    senderId: 1,
    message: "Je suis particulièrement intéressé par le retour sur investissement prévu",
    timestamp: new Date(2024, 2, 20, 10, 35),
  },
];

const MessagePanel: React.FC<MessagePanelProps> = ({ messages, selectedChat, onSelectChat }) => {
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const filteredMessages = messages.filter(message =>
    message.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md h-[calc(100vh-12rem)] space-y-6">
      <div className="grid grid-cols-3 h-full">
        {/* Messages List */}
        <div className="col-span-1 border-r">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)]">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => onSelectChat(message.id)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedChat === message.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img src={message.avatar} alt="" className="w-10 h-10 rounded-full" />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-2 border-white rounded-full ${
                      message.unread ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-900 truncate">{message.from}</h3>
                      <span className="text-sm text-gray-500">{message.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{message.message}</p>
                  </div>
                  {message.unread && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="col-span-2 flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={messages.find(m => m.id === selectedChat)?.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {messages.find(m => m.id === selectedChat)?.from}
                      </h3>
                      <p className="text-sm text-gray-500">En ligne</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {mockChatHistory.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex ${chat.senderId === 1 ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] rounded-lg p-3 ${
                      chat.senderId === 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{chat.message}</p>
                      <p className={`text-xs mt-1 ${
                        chat.senderId === 1 ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {format(chat.timestamp, 'HH:mm', { locale: fr })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=200&h=200&fit=crop"
                alt="Select a chat"
                className="w-32 h-32 rounded-full mb-4 opacity-50"
              />
              <p className="text-lg font-medium">Sélectionnez une conversation pour commencer</p>
              <p className="text-sm">Choisissez un contact dans la liste à gauche</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;