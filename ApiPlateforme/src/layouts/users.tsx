import React, { useState } from "react";
import { Box, Button, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Plus } from 'lucide-react';

const initialFormData = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  password: "",
  role: "ADMIN",
};

const Users = () => {
  const [users, setUsers] = useState<typeof initialFormData[]>([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleOpen = () => {
    setFormData(initialFormData);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setOpen(false);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleOpen}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Ajouter un administrateur
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map((user, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-solid border-opacity-15 border-blue-600">
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
                      <p className="font-semibold text-green-500">{user.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">Aucun administrateur enregistré pour le moment.</p>
        )}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un administrateur</DialogTitle>
        <DialogContent>
          <form id="admin-form" onSubmit={handleSubmit}>
            <TextField margin="dense" label="Prénom" name="firstname" fullWidth required value={formData.firstname} onChange={handleChange} />
            <TextField margin="dense" label="Nom" name="lastname" fullWidth required value={formData.lastname} onChange={handleChange} />
            <TextField margin="dense" label="Téléphone" name="phone" fullWidth required value={formData.phone} onChange={handleChange} />
            <TextField margin="dense" label="Email" name="email" type="email" fullWidth required value={formData.email} onChange={handleChange} />
            <TextField margin="dense" label="Mot de passe" name="password" type="password" fullWidth required value={formData.password} onChange={handleChange} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="submit" form="admin-form" variant="contained" color="primary">Enregistrer</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
