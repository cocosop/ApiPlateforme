import React, { useState, useMemo, useEffect } from 'react';
import {
  Modal,
  Button,
  Input,
  Tooltip,
  Popconfirm,
  Badge,
  Tag,
  Skeleton,
  Empty,
  message as antMessage,
} from 'antd';
import {
  Bell,
  Search,
  Archive,
  ArchiveRestore,
  Trash2,
  Mail,
  MailOpen,
  Eye,
  CheckCheck,
  FileText,
  AlertCircle,
  CheckCircle2,
  Info,
} from 'lucide-react';
import notificationService, { NotificationResponse } from '../../services/notificationService';
import { formatDateTime } from './data';

type FilterType = 'ALL' | 'UNREAD' | 'READ' | 'ARCHIVED';

const PRIMARY = '#0F0B60';

/* ── icône par catégorie ── */
const getCategoryIcon = (category: NotificationResponse['category']) => {
  switch (category) {
    case 'APPLICATION': return <FileText className="h-4 w-4 text-[#0F0B60]" />;
    case 'DOCUMENT':    return <AlertCircle className="h-4 w-4 text-amber-600" />;
    case 'REVIEW':      return <Eye className="h-4 w-4 text-blue-600" />;
    case 'DECISION':    return <CheckCircle2 className="h-4 w-4 text-emerald-600" />;
    case 'ACCOUNT':     return <Info className="h-4 w-4 text-purple-600" />;
    default:            return <Bell className="h-4 w-4 text-gray-500" />;
  }
};

/* ── couleur badge catégorie ── */
const getCategoryColor = (category: NotificationResponse['category']) => {
  const map: Record<string, string> = {
    APPLICATION: 'blue',
    DOCUMENT:    'orange',
    REVIEW:      'cyan',
    DECISION:    'green',
    ACCOUNT:     'purple',
  };
  return map[category] ?? 'default';
};

export const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState<NotificationResponse | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  /* ── fetch ── */
  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await notificationService.getAll();
      setNotifications(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      antMessage.error('Impossible de charger les notifications.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  /* ── compteurs ── */
  const countAll      = notifications.filter(n => !n.archived).length;
  const countUnread   = notifications.filter(n => n.unread && !n.archived).length;
  const countRead     = notifications.filter(n => !n.unread && !n.archived).length;
  const countArchived = notifications.filter(n => n.archived).length;

  /* ── filtrage ── */
  const filtered = useMemo(() => notifications
    .filter(n => {
      if (filter === 'ALL')      return !n.archived;
      if (filter === 'UNREAD')   return n.unread && !n.archived;
      if (filter === 'READ')     return !n.unread && !n.archived;
      if (filter === 'ARCHIVED') return n.archived;
      return true;
    })
    .filter(n => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        n.title.toLowerCase().includes(q) ||
        n.body.toLowerCase().includes(q) ||
        (n.projectRef?.toLowerCase().includes(q) ?? false) ||
        (n.projectName?.toLowerCase().includes(q) ?? false)
      );
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [notifications, filter, searchQuery]
  );

  /* ── ouvrir détail ── */
  const handleOpen = async (notif: NotificationResponse) => {
    setSelected(notif);
    setModalOpen(true);
    if (notif.unread) {
      try {
        await notificationService.markAsRead(notif.id);
        setNotifications(prev =>
          prev.map(n => n.id === notif.id ? { ...n, unread: false } : n)
        );
        setSelected(prev => prev ? { ...prev, unread: false } : prev);
      } catch { /* silencieux */ }
    }
  };

  /* ── toggle lu/non-lu ── */
  const handleToggleRead = async (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const notif = notifications.find(n => n.id === id);
    if (!notif) return;
    try {
      if (notif.unread) {
        await notificationService.markAsRead(id);
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
        antMessage.info('Marquée comme lue');
      } else {
        // pas d'API "mark as unread" — on met à jour localement
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: true } : n));
        antMessage.info('Marquée comme non lue');
      }
    } catch { antMessage.error('Erreur lors de la mise à jour.'); }
  };

  /* ── archive ── */
  const handleToggleArchive = async (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      const res = await notificationService.toggleArchive(id);
      const updated = res.data;
      setNotifications(prev => prev.map(n => n.id === id ? updated : n));
      antMessage.success(updated.archived ? 'Archivée' : 'Désarchivée');
      if (selected?.id === id) setModalOpen(false);
    } catch { antMessage.error('Erreur lors de l\'archivage.'); }
  };

  /* ── supprimer ── */
  const handleDelete = async (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    try {
      await notificationService.delete(id);
      setNotifications(prev => prev.filter(n => n.id !== id));
      antMessage.success('Notification supprimée');
      if (selected?.id === id) setModalOpen(false);
    } catch { antMessage.error('Erreur lors de la suppression.'); }
  };

  /* ── tout marquer lu ── */
  const handleMarkAllRead = async () => {
    try {
      await notificationService.markAllRead();
      setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
      antMessage.success('Toutes les notifications sont lues');
    } catch { antMessage.error('Erreur.'); }
  };

  /* ══════════════ RENDER ══════════════ */
  return (
    <div className="space-y-6 font-[Poppins,sans-serif]">

      {/* ── Titre + bouton mark all ── */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-[#ECEAF5] dark:border-neutral-800 pb-5">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#14112B] dark:text-white">
            Notifications
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Mises à jour sur vos candidatures, décisions et votre compte.
          </p>
        </div>
        {countUnread > 0 && (
          <Button
            onClick={handleMarkAllRead}
            icon={<CheckCheck className="h-4 w-4" />}
            style={{
              height: 40, borderRadius: 10, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 8,
              borderColor: '#ECEAF5', color: PRIMARY,
            }}
          >
            Tout marquer comme lu
          </Button>
        )}
      </div>

      {/* ── Carte principale ── */}
      <div className="rounded-2xl border border-[#ECEAF5] dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-[0_1px_3px_rgba(20,17,43,0.04)] overflow-hidden">

        {/* Filtres + recherche */}
        <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between border-b border-[#ECEAF5] dark:border-neutral-800">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
            {([
              { key: 'ALL' as FilterType,      label: 'Toutes',    count: countAll },
              { key: 'UNREAD' as FilterType,   label: 'Non lues',  count: countUnread },
              { key: 'READ' as FilterType,     label: 'Lues',      count: countRead },
              { key: 'ARCHIVED' as FilterType, label: 'Archivées', count: countArchived },
            ]).map(tab => {
              const active = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    active
                      ? 'bg-[#ECEAF8] dark:bg-[#2A1F5C] text-[#0F0B60] dark:text-white border border-[#C6C2EB]'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-transparent'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                    active ? 'bg-[#0F0B60] text-white' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative block lg:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Rechercher une notification…"
              allowClear
              style={{ paddingLeft: 36, borderRadius: 10, height: 38 }}
            />
          </div>
        </div>

        {/* Liste */}
        {loading ? (
          <div className="p-6 space-y-4">
            {[1, 2, 3].map(i => <Skeleton key={i} active avatar paragraph={{ rows: 1 }} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center px-6 py-16 text-center text-gray-400 dark:text-gray-600">
            <Bell className="mx-auto h-10 w-10 text-gray-200 dark:text-gray-700 mb-4" />
            <p className="font-semibold text-[#14112B] dark:text-white">Aucune notification</p>
            <p className="text-xs text-gray-400 mt-1">
              {searchQuery
                ? 'Aucun résultat pour votre recherche.'
                : 'Vous n\'avez aucune notification pour le moment.'}
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-[#ECEAF5] dark:divide-neutral-800">
            {filtered.map(notif => (
              <li
                key={notif.id}
                onClick={() => handleOpen(notif)}
                className={`group flex cursor-pointer items-start gap-4 px-5 py-4 transition-colors hover:bg-[#FAF9FE] dark:hover:bg-neutral-800/60 ${
                  notif.unread ? 'bg-[#FDFCFF] dark:bg-neutral-900' : ''
                }`}
              >
                {/* Icône catégorie */}
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  notif.unread
                    ? 'bg-[#ECEAF8] dark:bg-[#2A1F5C]'
                    : 'bg-gray-100 dark:bg-neutral-800'
                }`}>
                  {getCategoryIcon(notif.category)}
                </div>

                {/* Contenu */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    {notif.unread && (
                      <span className="h-2 w-2 rounded-full bg-[#0F0B60] dark:bg-[#C4B5FD] shrink-0" />
                    )}
                    <span className={`text-sm font-semibold truncate ${
                      notif.unread ? 'text-[#14112B] dark:text-white' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {notif.title}
                    </span>
                    <Tag color={getCategoryColor(notif.category)} style={{ fontSize: 10, margin: 0, borderRadius: 4 }}>
                      {notif.category}
                    </Tag>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {notif.body}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">
                      {formatDateTime(notif.createdAt)}
                    </span>
                    {notif.projectRef && (
                      <span className="text-[11px] font-semibold text-[#0F0B60] dark:text-[#C4B5FD]">
                        {notif.projectRef}
                      </span>
                    )}
                    {notif.archived && (
                      <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                        Archivée
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions rapides */}
                <div className="flex shrink-0 items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Tooltip title={notif.unread ? 'Marquer comme lue' : 'Marquer comme non lue'}>
                    <button
                      type="button"
                      onClick={e => handleToggleRead(notif.id, e)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-[#0F0B60]"
                    >
                      {notif.unread
                        ? <MailOpen className="h-4 w-4" />
                        : <Mail className="h-4 w-4" />}
                    </button>
                  </Tooltip>

                  <Tooltip title={notif.archived ? 'Désarchiver' : 'Archiver'}>
                    <button
                      type="button"
                      onClick={e => handleToggleArchive(notif.id, e)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:text-amber-600"
                    >
                      {notif.archived
                        ? <ArchiveRestore className="h-4 w-4" />
                        : <Archive className="h-4 w-4" />}
                    </button>
                  </Tooltip>

                  <Popconfirm
                    title="Supprimer cette notification ?"
                    onConfirm={e => handleDelete(notif.id, e as any)}
                    okText="Supprimer"
                    cancelText="Annuler"
                    okButtonProps={{ danger: true }}
                    onClick={e => e.stopPropagation()}
                  >
                    <Tooltip title="Supprimer">
                      <button
                        type="button"
                        onClick={e => e.stopPropagation()}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </Tooltip>
                  </Popconfirm>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ── Modal détail ── */}
      <Modal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
        width={560}
        styles={{ content: { borderRadius: 16, padding: 28 } }}
      >
        {selected && (
          <div className="space-y-5 font-[Poppins,sans-serif]">
            <div className="flex items-start gap-3 border-b border-gray-100 dark:border-neutral-800 pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECEAF8] text-[#0F0B60]">
                {getCategoryIcon(selected.category)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14112B] dark:text-white">{selected.title}</h3>
                <div className="text-xs text-gray-400 mt-0.5">{formatDateTime(selected.createdAt)}</div>
              </div>
            </div>

            {(selected.projectRef || selected.projectName) && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF9FE] dark:bg-neutral-800 border border-[#ECEAF5]">
                <Tag style={{ margin: 0, borderRadius: 6, fontWeight: 700, color: PRIMARY, background: '#ECEAF8', border: '1px solid #C6C2EB' }}>
                  {selected.projectRef}
                </Tag>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">
                  {selected.projectName}
                </span>
              </div>
            )}

            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-white dark:bg-neutral-900 p-4 rounded-xl border border-gray-100 dark:border-neutral-800">
              {selected.body}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => handleToggleArchive(selected.id)}
                  icon={selected.archived ? <ArchiveRestore className="h-4 w-4" /> : <Archive className="h-4 w-4" />}
                  style={{ borderRadius: 8, height: 38 }}
                >
                  {selected.archived ? 'Désarchiver' : 'Archiver'}
                </Button>
                <Popconfirm
                  title="Supprimer cette notification ?"
                  onConfirm={() => handleDelete(selected.id)}
                  okText="Supprimer"
                  cancelText="Annuler"
                  okButtonProps={{ danger: true }}
                >
                  <Button danger icon={<Trash2 className="h-4 w-4" />} style={{ borderRadius: 8, height: 38 }}>
                    Supprimer
                  </Button>
                </Popconfirm>
              </div>
              <Button
                type="primary"
                onClick={() => setModalOpen(false)}
                style={{ height: 38, borderRadius: 8, background: PRIMARY, border: 'none', fontWeight: 600, paddingLeft: 24, paddingRight: 24 }}
              >
                Fermer
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default NotificationsPage;
