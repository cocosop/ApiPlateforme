import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, Briefcase } from 'lucide-react';
import userService from '../../services/userService';
interface User {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  role: string;
  url_image: string;
}
const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService.me()
      .then((res) => {
        setUser(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <div className="px-6 pb-6">
          <div className="flex flex-col items-center -mt-16">
            <img
              src={user?.url_image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <h2 className="mt-4 text-2xl font-bold">{user?.firstname && user?.lastname}</h2>
            {user?.role === "ADMIN" ? <p className="text-gray-600">Administrateur</p> : <p className="text-gray-600">Investisseur</p>}
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Informations Personnelles</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Nom complet</p>
                <p className="font-medium">{user?.firstname && user?.lastname}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <p className="font-medium">{user?.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Informations Professionnelles</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Poste</p>
                {user?.role === "ADMIN" ? <p className="font-medium">Administrateur</p> : <p className="font-medium">Investisseur</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Modifier le profil
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Sauvegarder les modifications
        </button>
      </div>
    </div>
  );
};

export default UserProfile;