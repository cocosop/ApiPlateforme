import { useEffect, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '../../assets/img/dj.png'


const keywordsResponses = {
    investissement:
        "L'investissement est un excellent moyen de faire fructifier votre argent. Voulez-vous en savoir plus sur les différentes options disponibles ?",
    actions:
        "Investir dans des actions peut offrir des rendements élevés, mais comporte aussi des risques. Il est important de diversifier votre portefeuille.",
    immobilier:
        "L'immobilier est une option d'investissement stable et peut offrir des revenus passifs. Voulez-vous des informations sur les biens disponibles ?",
    "crypto-monnaies":
        "Les crypto-monnaies sont très volatiles mais peuvent offrir des rendements élevés. Assurez-vous de bien comprendre les risques avant d'investir.",
};

const Chatbot = () => {
    const [messages, setMessages] = useState<{ text: string; user: string }[]>([]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        // Afficher le message d'accueil quand le composant est monté
        setWelcomeMessage('Bienvenue ! Comment puis-je vous aider aujourd\'hui ?');
    }, []);
    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (input.trim() !== "") {
            // Ajouter le message de l'utilisateur
            setMessages([...messages, { text: input, user: "user" }]);

            // Générer une réponse du chatbot
            const response = getBotResponse(input);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: response, user: "chatbot" },
            ]);

            setInput("");
        }
    };

    const getBotResponse = (message: string) => {
        const lowercasedMessage = message.toLowerCase();
        const keywords = Object.keys(
            keywordsResponses
        ) as Array<keyof typeof keywordsResponses>;

        for (let keyword of keywords) {
            if (lowercasedMessage.includes(keyword)) {
                return keywordsResponses[keyword];
            }
        }
        return "Merci pour votre message ! Comment puis-je vous aider davantage ?";
    };

    return (
        <div className="z-50 fixed bottom-4 right-4">
            {/* Bouton d'ouverture/fermeture du chatbot */}
            <button
                onClick={toggleChatbot}
                className="bg-gray-900 text-white p-4 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
            >
                {isOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                ) : (
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                )}
            </button>

            {isOpen && (
                <div className="flex flex-col h-96 w-80 bg-white border border-gray-300 rounded-lg shadow-lg mt-4">
                    {/* Entête */}
                    <div className="flex items-center justify-between p-4 bg-dark-green text-white rounded-t-lg">
                        <h2 className="text-gray-500 text-lg font-semibold">Chatbot</h2>
                        <button onClick={toggleChatbot} className="focus:outline-none">
                            <XMarkIcon className="h-2 w-2" />
                        </button>
                    </div>

                    {/* Zone des messages */}
                    <div className="flex-1 overflow-auto p-4 space-y-4">
                        {welcomeMessage && (
                            <div className="chatbot-welcome">
                                {welcomeMessage}
                            </div>
                        )}
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex items-start ${message.user === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >
                                {/* Affichage de l'avatar pour le chatbot */}
                                {message.user === "chatbot" && (
                                    <div className="mr-2">
                                        <img
                                            src={Logo} // Remplacez par l'URL ou le chemin réel de votre image
                                            alt="Chatbot Avatar"

                                        />
                                    </div>
                                )}

                                {/* Bulles de message */}
                                <div
                                    className={`max-w-xs px-4 py-2 rounded-lg ${message.user === "user"
                                        ? "bg-dark-green text-white"
                                        : "bg-gray-300 text-black"
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Barre d'entrée */}
                    <div className="p-4 bg-white">
                        <div className="flex">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 p-2 border border-gray-300 rounded-l-lg"
                                placeholder="Entrez votre message..."
                            />
                            <button
                                onClick={handleSendMessage}
                                className="p-2 bg-blue-500 text-white rounded-r-lg"
                            >
                                <PaperAirplaneIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;