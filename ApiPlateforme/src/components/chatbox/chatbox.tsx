import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fab } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

import { Bot, User, Clock, HelpCircle } from 'lucide-react';
import { ChatMessage } from '../../types';
import { chatService } from '../../services/ChatService';
import { v4 as uuidv4 } from 'uuid';

declare global {
  interface Window {
    chtlConfig?: { chatbotId: string };
  }
}

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject Chatling config and script on mount
    window.chtlConfig = { chatbotId: "9943313373" };
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-id", "9943313373");
    script.id = "chtl-script";
    script.type = "text/javascript";
    script.src = "https://chatling.ai/js/embed.js";
    document.body.appendChild(script);
    return () => {
      if (window.chtlConfig) delete window.chtlConfig;
      const oldScript = document.getElementById("chtl-script");
      if (oldScript) oldScript.remove();
    };
  }, []);

  // Only render nothing, Chatling widget will appear automatically
  return null;

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

    // Correction ici : toutes les propriétés du type ChatMessage
    const userMessage: ChatMessage = {
      id: uuidv4(),
      sender: "user",
      senderName: "Vous",
      senderAvatar: "",
      text,
      message: text,
      timestamp: new Date(),
      isCurrentUser: true
    };

    addMessage(userMessage);
    setInputValue("");

    const botResponse = chatService.processMessage(text);
    await simulateTyping({
      ...botResponse,
      senderName: "Assistant IA",
      senderAvatar: "",
      message: botResponse.text || "",
      isCurrentUser: false
    });
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
      senderName: "Assistant IA",
      senderAvatar: "",
      text: "Conversation réinitialisée. Comment puis-je vous aider avec vos projets d'investissement au Cameroun ?",
      message: "Conversation réinitialisée. Comment puis-je vous aider avec vos projets d'investissement au Cameroun ?",
      timestamp: new Date(),
      isCurrentUser: false,
      relatedQuestions: questions.slice(0, 3)
    };

    setMessages([welcomeMessage]);
    chatService.addMessage(welcomeMessage);
  }, [questions, addMessage]);

  const handleBack = useCallback(() => {
    // Correction ici : toutes les propriétés du type ChatMessage
    const welcomeMessage: ChatMessage = {
      id: uuidv4(),
      sender: "bot",
      senderName: "Assistant IA",
      senderAvatar: "",
      text: "Voici les questions les plus fréquentes. Cliquez sur une question pour obtenir des informations détaillées :",
      message: "Voici les questions les plus fréquentes. Cliquez sur une question pour obtenir des informations détaillées :",
      timestamp: new Date(),
      isCurrentUser: false,
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
            <div className={`p-3 rounded-2xl ${isUser
              ? 'bg-blue-500 text-white rounded-br-md'
              : 'bg-gray-100 text-gray-800 rounded-bl-md'
              }`}>
              <p className="text-sm whitespace-pre-line">{message.text}</p>
            </div>

            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
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
    </div>
  );
};

export default Chatbox;