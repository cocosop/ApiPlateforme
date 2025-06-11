import React from 'react';
import { Bell, Lock, User, Globe, Moon, Sun } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">       
        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profil
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="jean.dupont@example.com"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              Sécurité
            </h3>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                Changer le mot de passe
              </button>
              <button className="w-full px-4 py-2 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                Activer l'authentification à deux facteurs
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Notifications par email</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after: after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Notifications push</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Moon className="h-5 w-5 mr-2" />
              Apparence
            </h3>
            <div className="flex items-center space-x-4">
              <button className="flex-1 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Sun className="h-6 w-6 mx-auto mb-2" />
                <span className="block text-sm font-medium">Clair</span>
              </button>
              <button className="flex-1 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Moon className="h-6 w-6 mx-auto mb-2" />
                <span className="block text-sm font-medium">Sombre</span>
              </button>
              <button className="flex-1 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <Globe className="h-6 w-6 mx-auto mb-2" />
                <span className="block text-sm font-medium">Système</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            Annuler
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;