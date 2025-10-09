import { motion } from 'framer-motion';

// Données de témoignages (repris de home)
const testimonies = [
    {
        id: 1,
        description: "L'API a été un partenaire clé dans la réussite de notre projet d'investissement au Cameroun. Leur équipe nous a accompagnés à chaque étape, de l'enregistrement en ligne au suivi transparent des dossiers. Grâce à eux, nous avons pu démarrer nos opérations rapidement et sans tracas.",
        date: '12 Oct, 2023',
        author: {
            name: 'Jean Dupont',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
    },
    {
        id: 2,
        description: "Travailler avec l'API a été une expérience incroyablement fluide. Leur plateforme en ligne nous a permis de réduire considérablement les déplacements et les formalités administratives. Nous avons pu nous concentrer sur notre projet tout en ayant une visibilité totale sur l'avancement de notre dossier.",
        date: '25 Sep, 2023',
        author: {
            name: 'Fatoumata Diallo',
            imageUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
        },
    },
    {
        id: 3,
        description: "L'API a transformé notre expérience d'investissement au Cameroun. Leur processus simplifié et transparent nous a permis de gagner un temps précieux. Leur équipe est réactive et professionnelle, et nous recommandons vivement leurs services à tout investisseur.",
        date: '5 Sep, 2023',
        author: {
            name: 'Carlos Mendoza',
            imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
    },
];

const Testimony = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold text-center text-[#0F0B60] mb-8"
            >
                Témoignages de nos investisseurs
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {testimonies.map((testimony) => (
                    <div key={testimony.id} className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div className="flex items-center space-x-4 mb-4">
                            <img src={testimony.author.imageUrl} alt={testimony.author.name} className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="font-semibold text-gray-800">{testimony.author.name}</p>
                                <p className="text-sm text-gray-500">{testimony.date}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            <span className='font-bold text-xl text-[#0F0B60]'>"</span>
                            {testimony.description}
                            <span className='font-bold text-xl text-[#0F0B60]'>"</span>
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Testimony;