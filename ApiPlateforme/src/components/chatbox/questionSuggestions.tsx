import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface QuestionSuggestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

const QuestionSuggestions: React.FC<QuestionSuggestionsProps> = ({ questions, onQuestionClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.3 }}
      className="space-y-3"
    >
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <HelpCircle size={16} />
        <span>Questions fréquentes :</span>
      </div>
      
      <div className="space-y-2">
        {questions.map((question, index) => (
          <motion.button
            key={index}
            onClick={() => onQuestionClick(question)}
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
    </motion.div>
  );
};

export default QuestionSuggestions;