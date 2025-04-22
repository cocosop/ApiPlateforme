import React from 'react';
import { Users, UserPlus, Settings, Shield, Search, MoreVertical } from 'lucide-react';

const users = [
  {
    id: 1,
    name: "Sophie Martin",
    email: "sophie.martin@example.com",
    role: "Administrateur",
    status: "Actif",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256"
  },
  {
    id: 2,
    name: "Thomas Bernard",
    email: "thomas.bernard@example.com",
    role: "Gestionnaire",
    status: "Actif",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256"
  },
  {
    id: 3,
    name: "Marie Dubois",
    email: "marie.dubois@example.com",
    role: "Investisseur",
    status: "Inactif",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=256"
  }
];

const roles = [
  {
    name: "Administrateur",
    users: 2,
    permissions: ["Tous les accès", "Gestion utilisateurs", "Configuration système"]
  },
  {
    name: "Gestionnaire",
    users: 5,
    permissions: ["Gestion projets", "Rapports", "Communication"]
  },
  {
    name: "Investisseur",
    users: 150,
    permissions: ["Vue projets", "Investissements", "Messages"]
  }
];

const UserManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <UserPlus className="h-5 w-5" />
          Ajouter Utilisateur
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: Users, label: "Total Utilisateurs", value: "157" },
          { icon: Shield, label: "Rôles", value: "3" },
          { icon: Settings, label: "Permissions", value: "12" }
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Utilisateurs</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un utilisateur..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="divide-y">
              {users.map((user) => (
                <div key={user.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      user.status === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {user.role}
                    </span>
                    <button className="p-1 hover:bg-gray-100 rounded-full">
                      <MoreVertical className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">{role.name}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {role.users} utilisateurs
                </span>
              </div>
              <div className="space-y-2">
                {role.permissions.map((permission, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4 text-blue-500" />
                    <span>{permission}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
