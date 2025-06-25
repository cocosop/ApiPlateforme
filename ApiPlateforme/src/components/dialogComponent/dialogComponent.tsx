import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

const DialogComponent: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');



    const handleSubmit = async () => {
        try {
            await axios
                .post(`http://51.75.16.226/backend/api/v1/auth/resend-activation-token?email=${email}`)
                .then((res) => {
                    res.request.status === 202 ? setStatus('success') : setStatus('error');
                    if (res.request.status === 429) {
                        setStatus('error');
                    }
                })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    setStatus('error')
                }
                onClose();
            }
        }
        setEmail('');
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
