import React, { useState } from 'react';
import { Send, Search, Paperclip } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import messageService from '../../services/messageService';

export interface Message {
  id: string;
  fileUrl?: string;
  content: string;
  isRead: boolean;
  isEdited: boolean;
  timestamp: string;
  sender: {
    email: string;
    firstname?: string;
    lastname?: string;
    url_image?: string;
  };
}

export interface Chat {
  id: string;
  project: {
    id: string;
    titre?: string;
  };
  messages: Message[];
}

interface MessagePanelProps {
  chats: Chat[];
  selectedChatId: string | null;
  onSelectChat: (id: string) => void;
}

const MessagePanel: React.FC<MessagePanelProps> = ({ chats, selectedChatId, onSelectChat }) => {
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Filtrer les chats par projet.titre
  const filteredChats = chats.filter(chat =>
    chat.project.titre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Récupérer le chat sélectionné
  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  // Aperçu du fichier sélectionné
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    if (selected) {
      if (selected.type.startsWith('image/')) {
        setFilePreview(URL.createObjectURL(selected));
      } else {
        setFilePreview(null);
      }
    } else {
      setFilePreview(null);
    }
  };

  // Envoi du message au serveur
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      chatId: selectedChat?.id,
      content: newMessage,
      fileUrl: ''
    };

    try {
      // Correction : assurez-vous que messageService.sendMessage retourne une Promise
      const res = await messageService.sendMessage(payload);
      if (res && (res.status === 200 || res.status === 201)) {
        setNewMessage('');
        setFile(null);
        setFilePreview(null);
        // Optionnel : refetch ou mise à jour locale des messages
      } else {
        alert("Échec de l'envoi du message");
      }
    } catch (err) {
      alert("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };

  // Récupérer le dernier message pour l'aperçu
  const getLastMessage = (chat: Chat) => {
    if (!chat.messages || chat.messages.length === 0) return null;
    return chat.messages[chat.messages.length - 1];
  };

  // Fonction pour extraire l'id utilisateur du token JWT
  const getUserEmailFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.email || null;
    } catch {
      return null;
    }
  };

  const currentUserEmail = getUserEmailFromToken();

  // Compter les messages non lus pour l'utilisateur connecté
  const getUnreadCount = (chat: Chat) => {
    if (!chat.messages || chat.messages.length === 0 || !currentUserEmail) return 0;
    // Un message est non lu si le sender n'est pas l'utilisateur courant ET isRead === false
    return chat.messages.filter(msg => msg.sender.email !== currentUserEmail && !msg.isRead).length;
  };

  // Marquer le message comme lu lors de l'affichage (pour les messages reçus non lus)
  const handleReadMessage = async (msg: Message) => {
    if (!msg.isRead && msg.sender.email !== currentUserEmail) {
      try {
        await messageService.readMessage(msg.id);
        msg.isRead = true;
      } catch (err) {
        // Gérer l'erreur si besoin
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-[calc(100vh-12rem)] flex flex-col">
      <div className="flex flex-1">
        {/* Liste des chats */}
        <div className="w-1/3 border-r flex flex-col">
          <div className="p-4 border-b bg-gray-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>
          <div className="overflow-y-auto flex-1">
            {filteredChats.map((chat) => {
              const lastMsg = getLastMessage(chat);
              const unreadCount = getUnreadCount(chat);
              return (
                <div
                  key={chat.id}
                  onClick={() => onSelectChat(chat.id)}
                  className={`flex items-center gap-3 p-4 border-b cursor-pointer hover:bg-blue-50 transition-colors ${selectedChatId === chat.id ? 'bg-blue-100' : ''}`}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-lg">
                      {chat.project.titre?.charAt(0) ?? "?"}
                    </div>
                    {unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
                        {unreadCount}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{chat.project.titre}</h3>
                    <p className="text-xs text-gray-500 truncate">
                      {lastMsg ? lastMsg.content : ''}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Zone de messages du chat sélectionné */}
        <div className="w-2/3 flex flex-col">
          {selectedChat ? (
            <>
              {/* Header */}
              <div className="p-4 border-b bg-gray-50 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700 text-lg">
                  {selectedChat.project.titre?.charAt(0) ?? "?"}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{selectedChat.project.titre}</h3>
                  <p className="text-xs text-gray-500">Projet #{selectedChat.project.id}</p>
                </div>
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2 bg-white">
                {selectedChat.messages && selectedChat.messages.length > 0 ? (
                  [...selectedChat.messages]
                    .sort((a, b) => new Date(a.timestamp).getDate() - new Date(b.timestamp).getDate())
                    .map((msg) => {
                      const isMine = msg.sender.email === currentUserEmail;
                      return (
                        <div
                          key={msg.id}
                          className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}
                          onMouseEnter={() => !isMine && !msg.isRead && handleReadMessage(msg)}
                        >
                          <div
                            className={`rounded-2xl px-5 py-3 max-w-[60%] shadow-sm
                ${isMine
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-gray-900'
                              }`}
                          >
                            <div className="flex items-center gap-2">
                              {msg.sender.url_image && !isMine && (
                                <img src={msg.sender.url_image} alt="" className="w-7 h-7 rounded-full mr-2" />
                              )}
                              <span className="text-sm">{msg.content}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className={`text-xs ${isMine ? 'text-green-100' : 'text-gray-500'}`}>
                                {format(new Date(msg.timestamp), 'HH:mm', { locale: fr })}
                              </span>
                              {msg.fileUrl && (
                                <a
                                  href={msg.fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-200 underline ml-2"
                                >
                                  Fichier joint
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <div className="text-gray-400 text-center py-8">
                    Aucun message pour ce projet.
                  </div>
                )}
              </div>
              {/* Input */}
              <div className="p-4 border-t bg-gray-50">
                {filePreview && (
                  <div className="mb-2">
                    <img src={filePreview} alt="Aperçu" className="max-h-24 rounded" />
                  </div>
                )}
                {file && !filePreview && (
                  <div className="mb-2 text-xs text-gray-500">
                    Fichier sélectionné : {file.name}
                  </div>
                )}
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Écrivez votre message..."
                      className="w-full pl-10 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                    <label htmlFor="file-upload" className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-blue-600">
                      <Paperclip className="w-5 h-5" />
                    </label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    disabled={loading || (!newMessage.trim() && !file)}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 bg-white">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=200&h=200&fit=crop"
                alt="Select a chat"
                className="w-32 h-32 rounded-full mb-4 opacity-50"
              />
              <p className="text-lg font-medium">Sélectionnez un projet pour voir les messages</p>
              <p className="text-sm">Choisissez un projet dans la liste à gauche</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;