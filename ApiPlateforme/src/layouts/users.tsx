import React, { useEffect, useState } from "react";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem } from "@mui/material";
import { Plus } from 'lucide-react';
import userService, { TwoFactorMethod } from '../services/userService';
import adminService from '../services/adminService';
import { useAuthStore } from '../store/AuthStore';
import { isSuperAdmin, roleLabel, UserRole } from '../utils/roles';
import { getApiErrorMessage } from '../utils/apiError';

interface UserRow {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  role: UserRole;
  enabled: boolean;
  emailVerified: boolean;
  twoFactorMethod: TwoFactorMethod;
}

type InvitableRole = Exclude<UserRole, 'SUPER_ADMIN'>;

const initialFormData = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  role: "ADMIN" as InvitableRole,
};

const Users = () => {
  const currentRole = useAuthStore((state) => state.decoded?.role);
  const currentEmail = useAuthStore((state) => state.decoded?.sub);
  const superAdmin = isSuperAdmin(currentRole);

  const [users, setUsers] = useState<UserRow[]>([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const res = await userService.getAllUsers();
      setUsers(res.data);
    } catch (err) {
      setNotice(getApiErrorMessage(err, "Erreur lors du chargement des utilisateurs."));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpen = () => {
    setFormData(initialFormData);
    setOpen(true);
    setError(null);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Le compte est créé sans mot de passe : la personne reçoit une invitation par e-mail
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    try {
      await adminService.createUser({ ...formData, email: formData.email.trim() });
      setStatus('success');
      setOpen(false);
      setNotice(`Invitation envoyée à ${formData.email.trim()}.`);
      fetchUsers();
    } catch (err) {
      setStatus('error');
      setError(getApiErrorMessage(err, "Erreur lors de la création du compte."));
    }
  };

  const runAction = async (action: () => Promise<unknown>, success: string) => {
    setNotice(null);
    try {
      await action();
      setNotice(success);
      fetchUsers();
    } catch (err) {
      setNotice(getApiErrorMessage(err, "Action impossible."));
    }
  };

  // Un ADMIN ne gère que les investisseurs et porteurs de projet ; personne ne gère un SUPER_ADMIN ni son propre compte
  const canManage = (user: UserRow) =>
    user.email !== currentEmail &&
    user.role !== 'SUPER_ADMIN' &&
    (superAdmin || user.role === 'INVESTOR' || user.role === 'PROJECT_OWNER');

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between mb-6">
        {superAdmin && (
          <button
            onClick={handleOpen}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Inviter un utilisateur
          </button>
        )}
      </div>

      {notice && (
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-2 rounded text-sm">{notice}</div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.email} className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-solid border-opacity-15 border-blue-600">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{user.firstname} {user.lastname}</h3>
                <p className="text-gray-500 text-sm mb-4">{user.email}</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Téléphone</p>
                      <p className="font-semibold">{user.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Rôle</p>
                      <p className="font-semibold text-green-500">{roleLabel(user.role)}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className={`px-2 py-0.5 rounded ${user.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {user.enabled ? 'Actif' : 'Désactivé'}
                    </span>
                    {!user.emailVerified && (
                      <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">Invitation / activation en attente</span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                      2FA : {user.twoFactorMethod === 'TOTP' ? 'application' : user.twoFactorMethod === 'EMAIL' ? 'e-mail' : 'aucune'}
                    </span>
                  </div>
                  {canManage(user) && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t">
                      {user.enabled ? (
                        <button className="text-xs px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                          onClick={() => window.confirm(`Désactiver ${user.email} ? Ses sessions seront fermées immédiatement.`)
                            && runAction(() => userService.disableUser(user.email), 'Compte désactivé.')}>
                          Désactiver
                        </button>
                      ) : (
                        <button className="text-xs px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                          onClick={() => runAction(() => userService.enableUser(user.email), 'Compte réactivé.')}>
                          Réactiver
                        </button>
                      )}
                      {superAdmin && !user.emailVerified && (
                        <button className="text-xs px-3 py-1 rounded border hover:bg-gray-50"
                          onClick={() => runAction(() => adminService.resendInvitation(user.email), 'Invitation renvoyée.')}>
                          Renvoyer l'invitation
                        </button>
                      )}
                      {superAdmin && user.twoFactorMethod !== 'NONE' && (
                        <button className="text-xs px-3 py-1 rounded border hover:bg-gray-50"
                          onClick={() => window.confirm(`Réinitialiser la double authentification de ${user.email} ? (ex : téléphone perdu)`)
                            && runAction(() => adminService.resetTwoFactor(user.email), 'Double authentification réinitialisée.')}>
                          Réinitialiser la 2FA
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">Aucun utilisateur enregistré pour le moment.</p>
        )}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inviter un utilisateur</DialogTitle>
        <DialogContent>
          <p className="text-sm text-gray-500 mb-2">
            La personne recevra un code par e-mail pour activer son compte et choisir elle-même son mot de passe.
          </p>
          <form id="admin-form" onSubmit={handleSubmit}>
            <TextField margin="dense" label="Prénom" name="firstname" fullWidth required value={formData.firstname} onChange={handleChange} />
            <TextField margin="dense" label="Nom" name="lastname" fullWidth required value={formData.lastname} onChange={handleChange} />
            <TextField margin="dense" label="Téléphone" name="phone" fullWidth required value={formData.phone} onChange={handleChange} />
            <TextField margin="dense" label="Email" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} />
            <TextField select margin="dense" label="Rôle" name="role" fullWidth required value={formData.role} onChange={handleChange}>
              <MenuItem value="ADMIN">Administrateur</MenuItem>
              <MenuItem value="INVESTOR">Investisseur</MenuItem>
              <MenuItem value="PROJECT_OWNER">Porteur de projet</MenuItem>
            </TextField>
          </form>
          {error && (
            <div className="mt-2 bg-red-500 text-white px-4 py-2 rounded shadow-lg text-center">
              {error}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit" form="admin-form" variant="contained" color="primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Envoi...' : "Envoyer l'invitation"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
