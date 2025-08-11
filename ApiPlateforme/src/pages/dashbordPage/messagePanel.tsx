import React, { useState, useRef, useEffect } from 'react';
import { Send, Search, Users, TrendingUp, Crown, Shield, Paperclip } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Message, ChatMessages, User } from '../../types';

export interface MessagePanelProps {
  messages: Message[];
  selectedChat: number | null;
  onSelectChat: (chatId: number) => void;
  chatMessages: ChatMessages[];
  onSendMessage: (messageText: string) => void;
  currentUser: User;
}
const MessagePanel: React.FC<MessagePanelProps> = ({ 
  messages, 
  selectedChat, 
  onSelectChat, 
  chatMessages,
  onSendMessage,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, selectedChat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
    if (selectedFile) {
      handleSendFile(selectedFile);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSendFile = (file: File) => {
    const url = URL.createObjectURL(file);
    onSendMessage(`[file]${file.name}|${url}`);
  };

  const filteredMessages = messages.filter(message =>
    message.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.lastMessage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.participants.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const selectedMessage = messages.find(m => m.id === selectedChat);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Shield className="h-4 w-4 text-red-500" />;
      case 'project_owner':
        return <Crown className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Admin';
      case 'project_owner':
        return 'Propriétaire';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden"> {/* h-full au lieu de h-[calc(100vh-12rem)] */}
      <div className="grid grid-cols-3 h-full min-h-0"> {/* Ajout de min-h-0 */}
        {/* Liste des Projets/Chats */}
        <div className="col-span-1 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="overflow-y-auto h-[calc(100%-5rem)]">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => onSelectChat(message.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                  selectedChat === message.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    {message.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {message.unreadCount}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-gray-900 truncate text-sm">{message.projectName}</h3>
                      <span className="text-xs text-gray-500 flex-shrink-0">{message.lastMessageTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        {getRoleIcon(message.projectOwner.role)}
                        <span className="text-xs text-gray-600">{message.projectOwner.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">•</span>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{message.participants.length}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{message.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Zone de Chat */}
        <div className="col-span-2 flex flex-col h-full min-h-0"> {/* Ajout de min-h-0 ici */}
          {selectedChat ? (
            <>
              {/* En-tête du Chat */}
              <div className="p-4 border-b border-gray-200 bg-white flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {selectedMessage?.projectName}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          {getRoleIcon(selectedMessage?.projectOwner.role || '')}
                        </div>
                      </div>
                      <p className="text-sm text-green-500 flex items-center mt-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {selectedMessage?.participants.length} participants actifs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {selectedMessage?.participants.slice(0, 4).map((participant) => (
                        <div key={participant.id} className="relative">
                          <img
                            src={participant.avatar}
                            alt={participant.name}
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                            title={`${participant.name} (${getRoleLabel(participant.role)})`}
                          />
                        </div>
                      ))}
                      {(selectedMessage?.participants.length || 0) > 4 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                          <span className="text-xs text-gray-600">+{(selectedMessage?.participants.length || 0) - 4}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages du Chat */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {chatMessages.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex ${chat.isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${chat.isCurrentUser ? 'order-2' : 'order-1'}`}>
                      <div className={`rounded-xl p-4 shadow-sm ${
                        chat.isCurrentUser
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-900 border border-gray-200'
                      }`}>
                        {!chat.isCurrentUser && (
                          <div className="flex items-center space-x-2 mb-2">
                            <img
                              src={chat.senderAvatar}
                              alt={chat.senderName}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <p className="text-xs font-medium text-blue-600">{chat.senderName}</p>
                          </div>
                        )}
                        {/* Affichage du message ou du fichier */}
                        {chat.message.startsWith('[file]') ? (() => {
                          const fileInfo = chat.message.replace('[file]', '');
                          const [fileName, url] = fileInfo.split('|');
                          return (
                            <a
                              href={url}
                              download={fileName}
                              className="flex items-center space-x-2 text-blue-500 underline"
                            >
                              <Paperclip className="h-4 w-4" />
                              <span>Télécharger : {fileName}</span>
                            </a>
                          );
                        })() : (
                          <p className="text-sm leading-relaxed">{chat.message}</p>
                        )}
                        <p className={`text-xs mt-2 ${
                          chat.isCurrentUser ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {format(chat.timestamp, 'HH:mm', { locale: fr })}
                        </p>
                      </div>
                    </div>
                    {!chat.isCurrentUser && (
                      <div className="order-1 mr-3 mt-1">
                        <img
                          src={chat.senderAvatar}
                          alt={chat.senderName}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Saisie de Message */}
              <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
                <form onSubmit={handleSendMessage} className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 flex items-center"
                    title="Envoyer un fichier"
                  >
                    <Paperclip className="h-5 w-5 text-gray-500" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Écrivez votre message..."
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={!newMessage.trim() && !selectedFile}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span className="hidden sm:inline">Envoyer</span>
                  </button>
                </form>
                {selectedFile && (
                  <div className="mt-2 text-xs text-gray-600 flex items-center space-x-2">
                    <Paperclip className="h-4 w-4" />
                    <span>{selectedFile.name}</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 bg-gray-50">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 opacity-50">
                <TrendingUp className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sélectionnez un projet</h3>
              <p className="text-sm text-center max-w-md">
                Choisissez un projet dans la liste à gauche pour accéder à son chat et communiquer avec les participants
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagePanel;