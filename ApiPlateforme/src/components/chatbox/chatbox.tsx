import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { MessageCircle } from "lucide-react";
import messagesData from "../../assets/investmentData.json";
import logo from "../../assets/img/api-ico.png";
import { Fab } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';


interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  question?: string;
}

// interface MessagesData {
//   preloadedQuestions: string[];
//   messages: ChatMessage[];
// }

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const validateMessage = (message: any): message is ChatMessage => {
    return (
      (message.sender === "user" || message.sender === "bot") &&
      typeof message.text === "string"
    );
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simuler une requête API
        setQuestions(messagesData.preloadedQuestions);
        const validatedMessages = messagesData.messages.filter(validateMessage);
        setMessages(validatedMessages);
      } catch (err) {
        setError("Failed to load messages");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  // Fonction pour basculer l'état d'ouverture/fermeture du chat
  const toggleChat = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Fonction pour ajouter un message
  const addMessage = useCallback((message: ChatMessage) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }, []);

  // Fonction pour envoyer un message
  const handleSendMessage = useCallback(() => {
    if (inputValue.trim()) {
      addMessage({ sender: "user", text: inputValue });
      setInputValue("");
    }
  }, [inputValue, addMessage]);

  // Fonction pour faire défiler vers le bas
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
   // Faire défiler vers le bas à chaque nouveau message
   
   // Fonction pour réinitialiser la conversation
  const handleReset = useCallback(() => {
    setMessages([]); // Réinitialiser les messages
  }, []);

  // Fonction pour revenir en arrière (exemple : retour à la liste des questions)
  const handleBack = useCallback(() => {
    setMessages(messagesData.messages as ChatMessage[]); // Revenir aux messages initiaux
  }, []);

   useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Charger les questions préchargées et les messages initiaux
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       // Simuler une requête API
  //       setQuestions(messagesData.preloadedQuestions);
  //       setMessages(messagesData.messages);
  //     } catch (err) {
  //       setError("Failed to load messages");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Faire défiler vers le bas à chaque nouveau message
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 bg-white rounded-lg shadow-lg w-96 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-[#0f0b60]">
  {/* Logo + Texte d'aide */}
  <div className="flex items-center space-x-2">
    <div className="relative">
      <img
        src={logo}
        alt="Logo"
        className="w-12 h-12 rounded-full"
      />
    </div>
    <div className="flex flex-col">
      <h5 className="text-lg text-white font-semibold">Besoin d'aide ?</h5>
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <p className="text-sm text-gray-400">En ligne</p>
      </div>
    </div>
  </div>

  {/* Bouton de fermeture */}
  <button className="p-2 rounded-full hover:bg-gray-200 transition">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
      className="w-6 h-6 text-gray-500"
      viewBox="0 0 24 24">
      <path fill="currentColor" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"></path>
    </svg>
  </button>
</div>







            {/* Chat Body */}
            <div className="p-4 h-80 overflow-y-auto">
              {isLoading ? (
                <p>Chargement...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <>
                  {messages.map((msg, index) => (
                    <div key={index} className={`mb-4 ${msg.sender === "user" ? "text-right" : ""}`}>
                      <div className={`p-3 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-blue-100 ml-auto" : "bg-blue-50"}`}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}

              {/* Questions préchargées */}
              <div className="space-y-2">
                {questions.map((question, index) => (
                  <button
                    key={index}
                    className="w-full text-left bg-blue-50 p-3 rounded-lg hover:bg-blue-100 transition-colors"
                    onClick={() => addMessage({ sender: "user", text: question })}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

         {/* Actions (Retour et À zéro) */}
<div className="flex justify-between text-xs mt-4 p-4 border-t border-green-500">
  <button
    className="flex items-center text-green-500 hover:text-green-700 border-2 border-green-500 p-2 rounded"
    onClick={handleBack}
  >
    Retour
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-500"
    >
      <path d="M9 11l-4 4 4 4m-4-4h11a4 4 0 0 0 0-8h-1" />
    </svg>
  </button>
  <button     
  className="flex items-center text-xs text-green-500 hover:text-green-700 border-2 border-green-500 p-2 rounded"
  onClick={handleReset}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-500"
    >
      <path d="M9 11l-4 4 4 4m-4-4h11a4 4 0 0 0 0-8h-1" />
    </svg>
    A zéro
  </button>
</div>


            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Écrivez votre message..."
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={handleSendMessage}
                  aria-label="Envoyer un message"
                >
 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >

               
                    <path d="m3.4 20.4 17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbox;
