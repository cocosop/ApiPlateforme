import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import userService from '../../services/userService';
import { getApiErrorMessage } from '../../utils/apiError';

const DialogComponent: React.FC<{ open: boolean; onClose: () => void; defaultEmail?: string }> = ({ open, onClose, defaultEmail = '' }) => {
    const [email, setEmail] = useState(defaultEmail);
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (open) setEmail(defaultEmail);
    }, [open, defaultEmail]);

    const handleSubmit = async () => {
        setStatus('loading');
        try {
            await userService.resandVerifyActivationToken(email.trim());
            setStatus('success');
            // Message volontairement neutre : le backend ne révèle pas si le compte existe
            alert("Si un compte non activé correspond à cette adresse, un nouveau code vient d'être envoyé.");
            onClose();
        } catch (error) {
            setStatus('error');
            alert(getApiErrorMessage(error, "Erreur lors de l'envoi du code d'activation. Veuillez réessayer."));
        }
    };

    return (
        <>
            {/* Modal */}
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 relative animate-fade-in">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Renvoyer le code d’activation</h2>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Entrez votre adresse email"
                            id="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ mt: 3 }}
                        />

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-[#0F0B60] hover:bg-[#1f1b78] text-white rounded-md transition"
                            >
                                {status === 'loading' ? 'En cours...' : 'Renvoyer'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DialogComponent;
