import { useEffect, useState } from 'react';
import { Bell, CheckCircle, AlertCircle } from 'lucide-react';
import userService from '../../services/userService';
import projectService from '../../services/projectService';
import messageService from '../../services/messageService';
import { useAuthStore } from '../../store/AuthStore';
type User = {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  role: string;
  url_image: string;
};

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
  const [notifications, setNotifications] = useState<any[]>([]);
  const [user, setUser] = useState<User>();
  const currentUserEmail = useAuthStore((state) => state.decoded)?.sub;

  useEffect(() => {
    userService.me().then(res => setUser(res.data));
  }, []);

  useEffect(() => {
    if (!user) return;

    const fetchNotifications = async () => {
      const notifList: any[] = [];

      // Notifier l'utilisateur connecté pour les nouveaux messages non lus
      try {
        const msgRes = await messageService.fetchAllChat();
        if (msgRes.status === 200) {
          msgRes.data.forEach((chat: any) => {
            chat.messages.forEach((msg: any) => {
              if (
                msg.sender.email !== currentUserEmail && !msg.read
              ) {
                notifList.push({
                  id: `msg-${msg.id}`,
                  type: 'message',
                  title: 'Nouveau message',
                  description: `Vous avez reçu un nouveau message dans le projet "${chat.project.titre}"`,
                  time: new Date(msg.timestamp).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }),
                  read: false,
                });
              }
            });
          });
        }
      } catch (e) {
        // ignore
      }

      // Notifier l'admin si un projet est en pending (nouveau projet créé)
      // Notifier l'investor si le statut de son projet change
      try {
        const projRes = await projectService.fetchAllProjects();
        if (projRes.status === 200) {
          projRes.data.forEach((project: any) => {
            // ADMIN : notification pour chaque projet en pending
            if (user.role === 'ADMIN' && project.status === 'PENDING') {
              notifList.push({
                id: `PENDING-${project.id}`,
                type: 'warning',
                title: 'Nouveau projet en attente',
                description: `Le projet "${project.titre}" vient d'être créé et attend une validation.`,
                time: project.soumissionDate
                  ? new Date(project.soumissionDate).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
                  : '',
                read: false,
              });
            }

            // INVESTOR : notification à chaque changement de statut de son projet
            // On suppose que project.user.id ou project.ownerId correspond à l'investor
            if (
              user.role !== 'ADMIN' &&
              ((project.ownerId && project.ownerId === user.id) ||
                (project.user && project.user.id === user.id))
            ) {
              if (project.statusUpdate && !project.statusRead) {
                notifList.push({
                  id: `proj-${project.id}`,
                  type: project.status === 'ACCEPTED' ? 'success' : 'warning',
                  title: `Projet ${project.status === 'ACCEPTED' || 'STUDING' ? 'accepté' : 'mis à jour'}`,
                  description: `Le projet "${project.titre}" a été ${project.status === 'accepted' ? 'accepté' : project.status}.`,
                  time: new Date(project.statusUpdate).toLocaleString('fr-FR', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }),
                  read: false,
                });
              }
            }
          });
        }
      } catch (e) {
        // ignore
      }

      setNotifications(notifList);
    };

    fetchNotifications();
  }, [user, currentUserEmail]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      <div className="space-y-4">
        {notifications.length === 0 && (
          <div className="text-center text-gray-400">Aucune notification.</div>
        )}
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex items-start gap-4 p-4 rounded-lg shadow-sm border bg-white transition ${!notif.read ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
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
