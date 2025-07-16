import React from 'react';
import { motion } from 'framer-motion';
import { ChatMessage } from '../../types';
import { Bot, User, Clock } from 'lucide-react';

interface MessageBubbleProps {
  message: ChatMessage;
  onQuestionClick?: (question: string) => void;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onQuestionClick }) => {
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
            {isUser ? <User size={16} /> : <Bot size={16} />}
          </div>
        </div>
        
        <div className={`flex items-center mt-1 text-xs text-gray-500 ${isUser ? 'justify-end' : 'justify-start'}`}>
          <Clock size={12} className="mr-1" />
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
            <p className="text-xs text-gray-500 font-medium">Questions suggérées :</p>
            {message.relatedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => onQuestionClick?.(question)}
                className="block w-full text-left bg-blue-50 hover:bg-blue-100 p-2 rounded-lg text-sm text-blue-700 transition-colors duration-200"
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

export default MessageBubble;