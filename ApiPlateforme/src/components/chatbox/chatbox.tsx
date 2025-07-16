import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fab } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/chat';

import { Bot, User, Clock, HelpCircle } from 'lucide-react';
import { ChatMessage } from '../../types';
import { chatService } from '../../services/ChatService';
import { v4 as uuidv4 } from 'uuid';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Créer une nouvelle session de chat
        chatService.createSession("Consultation d'investissement");
        
        // Charger les questions préchargées
        const preloadedQuestions = chatService.getPreloadedQuestions();
        setQuestions(preloadedQuestions);
        
        // Message de bienvenue
        const welcomeMessage: ChatMessage = {
          id: uuidv4(),
          sender: "bot",
          text: "Bonjour ! Je suis votre assistant intelligent pour l'investissement au Cameroun. Je peux vous aider avec :\n\n• Les secteurs porteurs\n• Les procédures administratives\n• Les avantages fiscaux\n• Les options de financement\n• Les infrastructures disponibles\n\nComment puis-je vous aider aujourd'hui ?",
          timestamp: new Date(),
          relatedQuestions: preloadedQuestions.slice(0, 3)
        };
        
        setMessages([welcomeMessage]);
        chatService.addMessage(welcomeMessage);
      } catch (err) {
        console.error("Erreur lors du chargement des données:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const addMessage = useCallback((message: ChatMessage) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    chatService.addMessage(message);
  }, []);

  const simulateTyping = useCallback(async (response: ChatMessage) => {
    setIsTyping(true);
    
    // Simuler le temps de réflexion (1-2 secondes)
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    
    setIsTyping(false);
    addMessage(response);
  }, [addMessage]);

  const handleSendMessage = useCallback(async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    
    if (!text) return;

    // Ajouter le message de l'utilisateur
    const userMessage: ChatMessage = {
      id: uuidv4(),
      sender: "user",
      text: text,
      timestamp: new Date()
    };
    
    addMessage(userMessage);
    setInputValue("");

    // Générer la réponse du bot
    const botResponse = chatService.processMessage(text);
    await simulateTyping(botResponse);
  }, [inputValue, addMessage, simulateTyping]);

  const handleQuestionClick = useCallback((question: string) => {
    handleSendMessage(question);
  }, [handleSendMessage]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleReset = useCallback(() => {
    setMessages([]);
    chatService.clearCurrentSession();
    
    // Ajouter un nouveau message de bienvenue
    const welcomeMessage: ChatMessage = {
      id: uuidv4(),
      sender: "bot",
      text: "Conversation réinitialisée. Comment puis-je vous aider avec vos projets d'investissement au Cameroun ?",
      timestamp: new Date(),
      relatedQuestions: questions.slice(0, 3)
    };
    
    setMessages([welcomeMessage]);
    chatService.addMessage(welcomeMessage);
  }, [questions]);

  const handleBack = useCallback(() => {
    // Revenir au message de bienvenue avec les questions suggérées
    const welcomeMessage: ChatMessage = {
      id: uuidv4(),
      sender: "bot",
      text: "Voici les questions les plus fréquentes. Cliquez sur une question pour obtenir des informations détaillées :",
      timestamp: new Date(),
      relatedQuestions: questions.slice(0, 5)
    };
    
    addMessage(welcomeMessage);
  }, [questions, addMessage]);

  const handleExportConversation = useCallback(() => {
    const exportData = chatService.exportConversation();
    const blob = new Blob([exportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `conversation_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const TypingIndicator = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="flex items-center space-x-2 mb-4"
    >
      <div className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
        <Bot size={16} className="text-gray-600" />
      </div>
      <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3">
        <div className="flex space-x-1">
          <motion.div
            className="w-2 h-2 bg-gray-500 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-500 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-gray-500 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );

  const MessageBubble = ({ message }: { message: ChatMessage }) => {
    const isUser = message.sender === 'user';
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'}`}
      >
        <div className={`max-w-xs lg:max-w-md ${isUser ? 'order-1' : 'order-2'}`}>
          <div className={`flex items-end space-x-2 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
            <div className={`p-3 rounded-2xl ${
              isUser 
                ? 'bg-blue-500 text-white rounded-br-md' 
                : 'bg-gray-100 text-gray-800 rounded-bl-md'
            }`}>
              <p className="text-sm whitespace-pre-line">{message.text}</p>
            </div>
            
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              {isUser ? <User size={14} /> : <Bot size={14} />}
            </div>
          </div>
          
          <div className={`flex items-center mt-1 text-xs text-gray-500 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <Clock size={10} className="mr-1" />
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>

          {/* Questions liées */}
          {!isUser && message.relatedQuestions && message.relatedQuestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="mt-3 space-y-2"
            >
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <HelpCircle size={12} />
                <span>Questions suggérées :</span>
              </div>
              {message.relatedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="block w-full text-left bg-blue-50 hover:bg-blue-100 p-2 rounded-lg text-xs text-blue-700 transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Bouton FAB */}
      <Fab
        color="primary"
        onClick={toggleChat}
        className="!bg-blue-500 !text-white !shadow-lg hover:!bg-blue-600"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </Fab>

      {/* Fenêtre de chat avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 bg-white rounded-lg shadow-xl w-96 max-h-[600px] overflow-hidden border"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-indigo-600">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex flex-col">
                  <h5 className="text-white font-semibold">Assistant IA Investissement</h5>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <p className="text-xs text-blue-100">En ligne</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={toggleChat}
                className="p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <CloseIcon className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                  
                  {isTyping && <TypingIndicator />}
                  
                  <div ref={messagesEndRef} />
                </>
              )}

              {/* Questions préchargées (affichées quand il n'y a pas de messages) */}
              {!isLoading && messages.length === 0 && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                    <HelpCircle size={16} />
                    <span>Questions fréquentes :</span>
                  </div>
                  {questions.slice(0, 5).map((question, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="w-full text-left bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 p-3 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-200 shadow-sm hover:shadow-md group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-110 transition-transform"></div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{question}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center p-3 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <button
                  className="flex items-center space-x-1 text-xs text-green-600 hover:text-green-700 border border-green-300 hover:border-green-400 px-3 py-1 rounded-md transition-colors"
                  onClick={handleBack}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Retour</span>
                </button>
                
                <button
                  className="flex items-center space-x-1 text-xs text-orange-600 hover:text-orange-700 border border-orange-300 hover:border-orange-400 px-3 py-1 rounded-md transition-colors"
                  onClick={handleReset}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Réinitialiser</span>
                </button>
              </div>
              
              <button
                className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-700 border border-blue-300 hover:border-blue-400 px-3 py-1 rounded-md transition-colors"
                onClick={handleExportConversation}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Exporter</span>
              </button>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Écrivez votre message..."
                  className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  disabled={isTyping}
                />
                <motion.button
                  className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Envoyer un message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbox;