import React, { useState } from 'react';
import { Send, Search, Paperclip, Pen, Check } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import messageService from '../../services/messageService';
import { useAuthStore } from '../../store/AuthStore';
import { Close } from '@mui/icons-material';

export interface Message {
  id: string;
  fileUrl?: string;
  content: string;
  read: boolean;
  edited: boolean;
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
  const [editingMsgId, setEditingMsgId] = useState<string | null>(null);
  const [editedContent, setEditedContent] = useState('');
  const [localChats, setLocalChats] = useState<Chat[]>(chats);

  // Mettre à jour localChats si chats change
  React.useEffect(() => {
    setLocalChats(chats);
  }, [chats]);

  // Filtrer les chats par projet.titre
  const filteredChats = localChats.filter(chat =>
    chat.project.titre?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Récupérer le chat sélectionné
  const selectedChat = localChats.find(chat => chat.id === selectedChatId);

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
    if (!selectedChat) return;
    setLoading(true);

    const payload = {
      chatId: selectedChat.id,
      content: newMessage,
      fileUrl: ''
    };

    try {
      // Envoi du message
      const res = await messageService.sendMessage(payload);
      if (res && (res.status === 200 || res.status === 201)) {
        // Création du nouveau message local
        const newMsg: Message = {
          id: res.data?.id || Math.random().toString(36), // fallback si pas d'id
          content: newMessage,
          fileUrl: '',
          read: true,
          edited: false,
          timestamp: new Date().toISOString(),
          sender: {
            email: currentUserEmail || '',
          }
        };
        // Mise à jour locale des messages
        setLocalChats(prev =>
          prev.map(chat =>
            chat.id === selectedChat.id
              ? { ...chat, messages: [...chat.messages, newMsg] }
              : chat
          )
        );
        setNewMessage('');
        setFile(null);
        setFilePreview(null);
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

  // Edition d'un message
  const handleEditMessage = async (msgId: string, newContent: string) => {
    if (!selectedChat) return;
    const payload = {
      content: newContent,
      fileUrl: ''
    };
    try {
      const res = await messageService.modifiedMessage(msgId, payload);
      if (res.status == 202) {
        // Mise à jour locale du message édité
        setLocalChats(prev =>
          prev.map(chat =>
            chat.id === selectedChat.id
              ? {
                ...chat,
                messages: chat.messages.map(msg =>
                  msg.id === msgId
                    ? { ...msg, content: newContent, isEdited: true }
                    : msg
                )
              }
              : chat
          )
        );
        setEditingMsgId(null);
        setEditedContent('');
      } else {
        alert("Échec de la modification du message");
      }
    } catch (err) {
      alert("Erreur lors de la modification du message");
    }
  };

  const currentUserEmail = useAuthStore((state) => state.decoded)?.sub

  // Compter les messages non lus pour l'utilisateur connecté
  const getUnreadCount = (chat: Chat) => {
    if (!chat.messages || chat.messages.length === 0 || !currentUserEmail) return 0;
    // Un message est non lu si le sender n'est pas l'utilisateur courant ET isRead === false
    return chat.messages.filter(msg => msg.sender.email !== currentUserEmail && !msg.read).length;
  };

  // Marquer le message comme lu lors de l'affichage (pour les messages reçus non lus)
  const handleReadMessage = async (chat: Chat) => {
    if (chat.messages.length !== 0) {
      try {
        await messageService.readMessage(chat.id);
      } catch (err) {
        console.error('An error has been detected')
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
                  onClick={() => {
                    onSelectChat(chat.id);
                    handleReadMessage(chat)
                  }}
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
                </div>
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2 bg-white">
                {selectedChat.messages && selectedChat.messages.length > 0 ? (
                  [...selectedChat.messages]
                    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
                    .map((msg) => {
                      const isMine = msg.sender.email === currentUserEmail;
                      return (
                        <div
                          key={msg.id}
                          className={`flex ${isMine ? 'justify-end' : 'justify-start'} group`}                        >
                          {/* Icone d'édition visible uniquement au hover, si isMine et non édité */}
                          {isMine && !msg.edited && (
                            <button
                              type="button"
                              className={`mr-2 ${editingMsgId === msg.id ? '' : 'invisible group-hover:visible'}`}
                              onClick={() => {
                                setEditingMsgId(msg.id);
                                setEditedContent(msg.content);
                              }}
                              aria-label="Modifier le message"
                            >
                              <Pen className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-colors" />
                            </button>
                          )}
                          <div className={`rounded-2xl px-5 py-3 max-w-[60%] shadow-sm
                            ${isMine
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-100 text-gray-900'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {msg.sender.url_image && !isMine && (
                                <img src={msg.sender.url_image} alt="" className="w-7 h-7 rounded-full mr-2" />
                              )}
                              {/* Edition inline si editingMsgId === msg.id */}
                              {editingMsgId === msg.id ? (
                                <form
                                  className="flex-1 flex gap-2"
                                  onSubmit={async (e) => {
                                    e.preventDefault();
                                    await handleEditMessage(msg.id, editedContent);
                                  }}
                                >
                                  <input
                                    type="text"
                                    value={editedContent}
                                    onChange={(e) => setEditedContent(e.target.value)}
                                    className="text-sm px-2 py-1 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                    autoFocus
                                  />
                                  <button
                                    type="submit"
                                    className="text-xs px-2 py-1 rounded text-white"
                                  >
                                    <Check className="w-5 h-5" />
                                  </button>
                                  <button
                                    type="button"
                                    className="text-xs px-2 py-1 rounded text-red-600"
                                    onClick={() => setEditingMsgId(null)}
                                  >
                                    <Close className="w-5 h-5" />
                                  </button>
                                </form>
                              ) : (
                                <span className="text-sm">{msg.content}</span>
                              )}
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
                              {/* Affichage "modifié" si le message a été édité */}
                              {msg.edited && (
                                <span className={`text-xs ${isMine ? 'text-green-100' : 'text-gray-500'} ml-2`}>modifié</span>
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
                    <span className="hidden sm:inline">Envoyer</span>
                  </button>
                </form>
               {/* {selectedFile && (
                  <div className="mt-2 text-xs text-gray-600 flex items-center space-x-2">
                    <Paperclip className="h-4 w-4" />
                    <span>{selectedFile.name}</span>
                  </div>
                )}*/}
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