import { Bell, CheckCircle, AlertCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: "Nouvelle réponse à votre message",
    description: "Thomas Bernard vous a répondu dans la conversation Projet Touristique.",
    time: "Il y a 5 minutes",
    read: false,
    type: "message",
  },
  {
    id: 2,
    title: "Investissement validé",
    description: "Votre demande d'investissement dans le projet AgroTech a été approuvée.",
    time: "Aujourd'hui à 10h30",
    read: true,
    type: "success",
  },
  {
    id: 3,
    title: "Mise à jour requise",
    description: "Veuillez mettre à jour les documents de votre profil.",
    time: "Hier",
    read: false,
    type: "warning",
  },
];

const NotificationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'warning':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    default:
      return <Bell className="w-5 h-5 text-blue-500" />;
  }
};

const Notifications = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start gap-4 p-4 rounded-lg shadow-sm border bg-white transition ${
              !notif.read ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <div className="mt-1">
              <NotificationIcon type={notif.type} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{notif.title}</h3>
              <p className="text-sm text-gray-600">{notif.description}</p>
              <span className="text-xs text-gray-400">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
