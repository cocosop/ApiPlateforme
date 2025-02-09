import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import messagesData from "../../assets/investmentData.json";
import logo from "../../assets/img/avatar2.png";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  question?: string;
}

interface MessagesData {
  preloadedQuestions: string[];
  messages: ChatMessage[];
}

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(
    JSON.parse(localStorage.getItem("chatMessages") || "[]")
  );
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { preloadedQuestions, messages } = messagesData as MessagesData;

  const addBotMessage = (messageText: string) => {
    const botMessage: ChatMessage = { sender: "bot", text: messageText };
    setChatMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  const sendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = { sender: "user", text: messageText };
    setChatMessages((prevMessages) => [...prevMessages, userMessage]);

    const botResponse = messages.find(
      (msg) =>
        msg.question &&
        messageText.toLowerCase().includes(msg.question.toLowerCase())
    );

    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        botResponse || {
          sender: "bot",
          text: "Désolé, je n'ai pas compris votre question. Pouvez-vous reformuler ?",
        },
      ]);
    }, 1000);

    setUserInput("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [chatMessages]);

  useEffect(() => {
    if (chatMessages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
    }
  }, [chatMessages]);

  useEffect(() => {
    if (chatMessages.length === 0) {
      addBotMessage("Bonjour ! Comment puis-je vous aider aujourd'hui ? Voici quelques sujets que vous pouvez explorer :");
      setTimeout(() => addBotMessage("suggestions"), 2000);
    }
  }, []);

  return (
    // Sur desktop, la chatbox est positionnée en bas à droite (sm:bottom-5 sm:right-5)
    // Sur mobile, elle occupe toute la largeur en bas et est centrée horizontalement.
    <div className="fixed sm:bottom-5 sm:right-5 bottom-0 left-0 flex flex-col items-end z-50">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          // Utilisation de "w-full max-w-md" pour une largeur maximale adaptée
          // "mx-2" permet d'ajouter un padding horizontal sur mobile
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 border border-[#0F0B60] mx-2 sm:mx-0"
        >
          <div className="flex items-center gap-3 border-b border-[#0F0B60] pb-3 mb-3">
            <img src={logo} alt="Logo" className="w-14 h-14 rounded-full mt-3" />
            <h2 className="text-xl font-semibold text-[#0F0B60]">e-API</h2>
          </div>
          {/* Hauteur adaptée : h-80 sur mobile et h-96 sur desktop */}
          <div className="h-80 sm:h-96 overflow-y-auto p-2 space-y-2">
            <AnimatePresence>
              {chatMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {msg.text === "suggestions" ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {preloadedQuestions.map((question, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => sendMessage(question)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2 bg-[#F5BA3A] rounded-lg text-sm text-[#0F0B60] hover:bg-[#DC2123] hover:text-white transition-colors"
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  ) : (
                    <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.sender === "bot" && (
                        <img src={logo} alt="Bot" className="w-8 h-8 mr-2 rounded-full" />
                      )}
                      <p
                        className={`px-3 py-2 rounded-lg text-sm max-w-[70%] ${
                          msg.sender === "user"
                            ? "bg-[#0F0B60] text-white"
                            : "bg-[#0E600B] text-white"
                        }`}
                      >
                        {msg.text}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t border-[#0F0B60] pt-2 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(userInput)}
              className="flex-1 p-2 text-sm border border-[#0F0B60] rounded-l-lg focus:outline-none focus:border-[#F5BA3A]"
              placeholder="Écrivez un message..."
            />
            <motion.button
              onClick={() => sendMessage(userInput)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#0F0B60] text-white p-2 rounded-r-lg hover:bg-[#DC2123] transition-colors"
            >
              <MessageCircle size={20} />
            </motion.button>
          </div>
        </motion.div>
      )}
      {/* Bouton d'activation du chat */}
      {/* Taille du bouton responsive : plus petit sur mobile */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={logo} alt="Chat" className="w-16 h-16 sm:w-[100px] sm:h-[100px]" />
      </motion.button>
    </div>
  );
};

export default Chatbox;
