// src/pages/InvestorDashboard.tsx

import React from 'react';

interface SubscribedProject {
  id: number;
  titre: string;
  secteur: string;
  statut: string;
  montantInvesti: string;
  progress: number;
  image: string;
  promoteur: string;
}

const subscribedProjects: SubscribedProject[] = [
  {
    id: 1,
    titre: "Modernisation de la filière cacao",
    secteur: "Agro-industrie",
    statut: "En cours",
    montantInvesti: "150 000 €",
    progress: 55,
    image: "https://source.unsplash.com/featured/?cocoa",
    promoteur: "AgriDev Cameroon"
  },
  {
    id: 2,
    titre: "Centrale solaire de Garoua",
    secteur: "Énergie",
    statut: "Planification",
    montantInvesti: "200 000 €",
    progress: 30,
    image: "https://source.unsplash.com/featured/?solar",
    promoteur: "SolarTech"
  },
  {
    id: 3,
    titre: "Plateforme numérique éducative",
    secteur: "Numérique",
    statut: "Terminé",
    montantInvesti: "100 000 €",
    progress: 100,
    image: "https://source.unsplash.com/featured/?technology",
    promoteur: "EduCam"
  }
];

const MyProjects: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Mes Projets Investis</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscribedProjects.map(project => (
          <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={project.image} alt={project.titre} className="w-full h-48 object-cover" />

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-gray-800">{project.titre}</h2>
              <p className="text-sm text-gray-600">Secteur : <span className="font-medium">{project.secteur}</span></p>
              <p className="text-sm text-gray-600">Promoteur : <span className="font-medium">{project.promoteur}</span></p>
              <p className="text-sm text-gray-600">Statut : <span className="font-semibold">{project.statut}</span></p>
              <p className="text-sm text-gray-600">Montant investi : <span className="text-green-700 font-semibold">{project.montantInvesti}</span></p>

              <div className="mt-2">
                <label className="text-xs text-gray-500">Progression</label>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div className={`bg-blue-600 h-2.5 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                </div>
                <div className="text-right text-xs mt-1 text-gray-500">{project.progress}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
