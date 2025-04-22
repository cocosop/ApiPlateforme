import React, { useState } from 'react';
import { Briefcase, Clock, Users, BarChart2, Plus, FileText } from 'lucide-react';
import Documents from './documents';
import { X } from '@mui/icons-material';
import { Link } from 'react-router-dom';
// import { DocumentManager } from './DocumentManager';

const projects = [
  {
    id: 1,
    name: "Expansion E-commerce",
    status: "En cours",
    progress: 75,
    team: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256"
    ],
    deadline: "2024-04-15",
    budget: "€75,000",
    spent: "€52,500"
  },
  {
    id: 2,
    name: "Projet Immobilier Durable",
    status: "Planification",
    progress: 30,
    team: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256"
    ],
    deadline: "2024-06-30",
    budget: "€125,000",
    spent: "€37,500"
  },
  {
    id: 3,
    name: "Innovation Tech",
    status: "Terminé",
    progress: 100,
    team: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256"
    ],
    deadline: "2024-03-01",
    budget: "€50,000",
    spent: "€50,000"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null); 

  return (
    <div className="space-y-6">
      <Link to="/dashboard/investments">
  <button
    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
  >
    <Plus className="h-5 w-5" />
    Nouvel Investissement
  </button>
</Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      
        {[
          { icon: Briefcase, label: "Total Projets", value: "12" },
          { icon: Clock, label: "En cours", value: "8" },
          { icon: Users, label: "Équipes", value: "24" }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Tous les Projets</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-6">Projet</th>
                <th className="text-left py-3 px-6">Status</th>
                <th className="text-left py-3 px-6">Équipe</th>
                <th className="text-left py-3 px-6">Progression</th>
                <th className="text-left py-3 px-6">Budget</th>
                <th className="text-left py-3 px-6">Deadline</th>
                <th className="text-left py-3 px-6">Documents</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium">{project.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm ${project.status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                        project.status === 'Terminé' ? 'bg-green-100 text-green-700' :
                          'bg-yellow-100 text-yellow-700'
                      }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex -space-x-2">
                      {project.team.map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar}
                          alt={`Team member ${index + 1}`}
                          className="w-8 h-8 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium">{project.spent}</p>
                      <p className="text-sm text-gray-500">sur {project.budget}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{project.deadline}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Gérer</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedProject && (
        <Documents projectId={selectedProject.toString()} />
      )}
    </div>
  );
};

export default Projects;
