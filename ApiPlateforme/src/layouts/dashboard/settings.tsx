import React, { useEffect, useState } from 'react';
import { Lock, ShieldCheck, User } from 'lucide-react';
import { QRCode } from 'antd';
import { useNavigate } from 'react-router-dom';
import userService, { TwoFactorMethod } from '../../services/userService';
import accountService, { SecurityStatus } from '../../services/accountService';
import TokenInput from '../../components/tokenInput/tokenInput';
import { useAuthStore } from '../../store/AuthStore';
import { getApiErrorMessage } from '../../utils/apiError';

const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,64}$/;

const inputClass = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
const primaryButton = "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50";
const secondaryButton = "px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors";

const METHOD_LABELS: Record<TwoFactorMethod, { title: string; description: string }> = {
  NONE: { title: 'Désactivée', description: 'Connexion avec le mot de passe uniquement.' },
  EMAIL: { title: 'Code par e-mail', description: 'Un code à 6 chiffres est envoyé par e-mail à chaque connexion.' },
  TOTP: { title: "Application d'authentification", description: 'Google Authenticator, Microsoft Authenticator, Authy… (recommandé).' },
};

// Étapes de la configuration de la double authentification
type Flow =
  | { target: TwoFactorMethod; step: 'password' }
  | { target: 'EMAIL'; step: 'code' }
  | { target: 'TOTP'; step: 'code'; secret: string; otpauthUri: string }
  | { target: 'TOTP'; step: 'recovery'; codes: string[] };

const Message = ({ type, text }: { type: 'error' | 'success'; text: string }) => (
  <p className={`text-sm mt-3 ${type === 'error' ? 'text-red-600' : 'text-green-700'}`}>{text}</p>
);

const Settings: React.FC = () => {
  const navigate = useNavigate();

  // ---- Profil
  const [profile, setProfile] = useState({ firstname: '', lastname: '', phone: '', email: '' });
  const [profileMsg, setProfileMsg] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  // ---- Mot de passe
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' });
  const [passwordMsg, setPasswordMsg] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  // ---- Double authentification
  const [security, setSecurity] = useState<SecurityStatus | null>(null);
  const [flow, setFlow] = useState<Flow | null>(null);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [mfaMsg, setMfaMsg] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const loadSecurity = () => accountService.getSecurity().then((res) => setSecurity(res.data));

  useEffect(() => {
    userService.me().then((res) => setProfile({
      firstname: res.data.firstname ?? '',
      lastname: res.data.lastname ?? '',
      phone: res.data.phone ?? '',
      email: res.data.email ?? '',
    }));
    loadSecurity();
  }, []);

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileMsg(null);
    try {
      await userService.updateProfile({ firstname: profile.firstname, lastname: profile.lastname, phone: profile.phone });
      setProfileMsg({ type: 'success', text: 'Profil mis à jour.' });
    } catch (err) {
      setProfileMsg({ type: 'error', text: getApiErrorMessage(err, 'Impossible de mettre à jour le profil.') });
    }
  };

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg(null);
    if (passwords.next !== passwords.confirm) {
      setPasswordMsg({ type: 'error', text: 'Les mots de passe ne correspondent pas.' });
      return;
    }
    if (!PASSWORD_REGEX.test(passwords.next)) {
      setPasswordMsg({ type: 'error', text: '8 à 64 caractères, dont une majuscule, un chiffre et un caractère spécial.' });
      return;
    }
    try {
      await accountService.changePassword(passwords.current, passwords.next);
      // Toutes les sessions sont fermées par le serveur, y compris celle-ci
      useAuthStore.getState().clearTokens();
      alert('Mot de passe modifié. Veuillez vous reconnecter.');
      navigate('/signin');
    } catch (err) {
      setPasswordMsg({ type: 'error', text: getApiErrorMessage(err, 'Impossible de changer le mot de passe.') });
    }
  };

  const startFlow = (target: TwoFactorMethod) => {
    setFlow({ target, step: 'password' });
    setConfirmPassword('');
    setCode('');
    setMfaMsg(null);
  };

  const cancelFlow = () => {
    setFlow(null);
    setConfirmPassword('');
    setCode('');
  };

  // Étape 1 : confirmation par mot de passe
  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!flow) return;
    setBusy(true);
    setMfaMsg(null);
    try {
      if (flow.target === 'EMAIL') {
        await accountService.startEmailTwoFactor(confirmPassword);
        setFlow({ target: 'EMAIL', step: 'code' });
      } else if (flow.target === 'TOTP') {
        const res = await accountService.setupTotp(confirmPassword);
        setFlow({ target: 'TOTP', step: 'code', secret: res.data.secret, otpauthUri: res.data.otpauthUri });
      } else {
        await accountService.disableTwoFactor(confirmPassword);
        setFlow(null);
        setMfaMsg({ type: 'success', text: 'Double authentification désactivée.' });
        await loadSecurity();
      }
    } catch (err) {
      setMfaMsg({ type: 'error', text: getApiErrorMessage(err, 'Action impossible.') });
    } finally {
      setConfirmPassword('');
      setBusy(false);
    }
  };

  // Étape 2 : code reçu par e-mail ou affiché par l'application
  const submitCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!flow) return;
    setBusy(true);
    setMfaMsg(null);
    try {
      if (flow.target === 'EMAIL') {
        await accountService.confirmEmailTwoFactor(code);
        setFlow(null);
        setMfaMsg({ type: 'success', text: 'Double authentification par e-mail activée.' });
      } else {
        const res = await accountService.confirmTotp(code);
        setFlow({ target: 'TOTP', step: 'recovery', codes: res.data.recoveryCodes });
      }
      await loadSecurity();
    } catch (err) {
      setMfaMsg({ type: 'error', text: getApiErrorMessage(err, 'Code invalide.') });
      setCode('');
    } finally {
      setBusy(false);
    }
  };

  const regenerateRecoveryCodes = async () => {
    const password = window.prompt('Confirmez avec votre mot de passe pour générer de nouveaux codes de secours :');
    if (!password) return;
    try {
      const res = await accountService.regenerateRecoveryCodes(password);
      setFlow({ target: 'TOTP', step: 'recovery', codes: res.data.recoveryCodes });
      await loadSecurity();
    } catch (err) {
      setMfaMsg({ type: 'error', text: getApiErrorMessage(err, 'Impossible de générer les codes.') });
    }
  };

  const downloadRecoveryCodes = (codes: string[]) => {
    const blob = new Blob([`Codes de secours Invest in Cameroon (${profile.email})\nChaque code ne fonctionne qu'une fois.\n\n${codes.join('\n')}\n`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'codes-de-secours-invest-in-cameroon.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentMethod = security?.twoFactorMethod ?? 'NONE';

  return (
    <div className="space-y-6">
      {/* Profil */}
      <form onSubmit={saveProfile} className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <User className="h-5 w-5 mr-2" />
          Profil
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input className={inputClass} required value={profile.firstname}
              onChange={(e) => setProfile({ ...profile, firstname: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input className={inputClass} required value={profile.lastname}
              onChange={(e) => setProfile({ ...profile, lastname: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
            <input className={inputClass} required value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input className={`${inputClass} bg-gray-100 text-gray-500`} value={profile.email} disabled />
          </div>
        </div>
        {profileMsg && <Message {...profileMsg} />}
        <div className="mt-4 flex justify-end">
          <button type="submit" className={primaryButton}>Sauvegarder</button>
        </div>
      </form>

      {/* Mot de passe */}
      <form onSubmit={changePassword} className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium mb-4 flex items-center">
          <Lock className="h-5 w-5 mr-2" />
          Changer le mot de passe
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="password" className={inputClass} placeholder="Mot de passe actuel" autoComplete="current-password"
            required value={passwords.current} onChange={(e) => setPasswords({ ...passwords, current: e.target.value })} />
          <input type="password" className={inputClass} placeholder="Nouveau mot de passe" autoComplete="new-password"
            required value={passwords.next} onChange={(e) => setPasswords({ ...passwords, next: e.target.value })} />
          <input type="password" className={inputClass} placeholder="Confirmer" autoComplete="new-password"
            required value={passwords.confirm} onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })} />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          8 à 64 caractères, dont une majuscule, un chiffre et un caractère spécial. Toutes vos sessions seront fermées.
        </p>
        {passwordMsg && <Message {...passwordMsg} />}
        <div className="mt-4 flex justify-end">
          <button type="submit" className={primaryButton}>Modifier le mot de passe</button>
        </div>
      </form>

      {/* Double authentification */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium mb-1 flex items-center">
          <ShieldCheck className="h-5 w-5 mr-2" />
          Double authentification (2FA)
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Choisissez comment confirmer votre identité après le mot de passe.
          {security?.mandatory && ' La double authentification est obligatoire pour votre rôle : vous pouvez changer de méthode, mais pas la désactiver.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {(['NONE', 'EMAIL', 'TOTP'] as TwoFactorMethod[]).map((method) => {
            const active = currentMethod === method;
            const disabled = (method === 'NONE' && security?.mandatory) || !security;
            return (
              <button
                key={method}
                type="button"
                disabled={disabled || active || flow !== null}
                onClick={() => startFlow(method)}
                className={`text-left p-4 border-2 rounded-lg transition-colors ${active
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 disabled:opacity-40 disabled:hover:border-gray-200'}`}
              >
                <span className="block font-medium">
                  {METHOD_LABELS[method].title} {active && <span className="text-xs text-blue-600">(actuelle)</span>}
                </span>
                <span className="block text-xs text-gray-500 mt-1">{METHOD_LABELS[method].description}</span>
              </button>
            );
          })}
        </div>

        {currentMethod === 'TOTP' && !flow && (
          <div className="mt-4 flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <span className="text-sm text-gray-700">
              Codes de secours restants : <strong>{security?.recoveryCodesRemaining ?? 0}</strong>
            </span>
            <button type="button" className={secondaryButton} onClick={regenerateRecoveryCodes}>
              Générer de nouveaux codes
            </button>
          </div>
        )}

        {flow?.step === 'password' && (
          <form onSubmit={submitPassword} className="mt-6 border-t pt-4">
            <p className="text-sm text-gray-700 mb-2">
              {flow.target === 'NONE'
                ? 'Confirmez avec votre mot de passe pour désactiver la double authentification.'
                : 'Confirmez avec votre mot de passe pour continuer.'}
            </p>
            <input type="password" className={inputClass} autoComplete="current-password" required autoFocus
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Mot de passe" />
            <div className="mt-4 flex justify-end gap-3">
              <button type="button" className={secondaryButton} onClick={cancelFlow}>Annuler</button>
              <button type="submit" className={primaryButton} disabled={busy}>Continuer</button>
            </div>
          </form>
        )}

        {flow?.step === 'code' && (
          <form onSubmit={submitCode} className="mt-6 border-t pt-4">
            {flow.target === 'TOTP' ? (
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <QRCode value={flow.otpauthUri} size={180} />
                <div className="text-sm text-gray-700 space-y-2">
                  <p>1. Scannez ce QR code avec votre application d'authentification.</p>
                  <p>2. Ou saisissez cette clé manuellement :</p>
                  <code className="block bg-gray-100 rounded px-2 py-1 break-all select-all">{flow.secret}</code>
                  <p>3. Saisissez le code à 6 chiffres affiché par l'application.</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-700">Saisissez le code à 6 chiffres envoyé à <strong>{profile.email}</strong>.</p>
            )}
            <TokenInput value={code} onChange={setCode} />
            <div className="mt-4 flex justify-end gap-3">
              <button type="button" className={secondaryButton} onClick={cancelFlow}>Annuler</button>
              <button type="submit" className={primaryButton} disabled={busy || code.length !== 6}>Activer</button>
            </div>
          </form>
        )}

        {flow?.step === 'recovery' && (
          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-gray-700 mb-3">
              <strong>Conservez ces codes de secours en lieu sûr.</strong> Ils permettent de vous connecter si vous perdez
              votre téléphone. Chaque code ne fonctionne qu'une fois et ne sera plus affiché.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono text-sm">
              {flow.codes.map((c) => (
                <span key={c} className="bg-gray-100 rounded px-2 py-1 text-center select-all">{c}</span>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <button type="button" className={secondaryButton} onClick={() => downloadRecoveryCodes(flow.codes)}>Télécharger</button>
              <button type="button" className={primaryButton} onClick={() => { setFlow(null); setMfaMsg({ type: 'success', text: "Application d'authentification activée." }); }}>
                J'ai sauvegardé mes codes
              </button>
            </div>
          </div>
        )}

        {mfaMsg && <Message {...mfaMsg} />}
      </div>
    </div>
  );
};

export default Settings;
