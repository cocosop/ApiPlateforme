import apiConfig from "./apiConfig";
import { TwoFactorMethod } from "./userService";

export interface SecurityStatus {
    twoFactorMethod: TwoFactorMethod;
    mandatory: boolean;
    recoveryCodesRemaining: number;
}

class AccountService {
    getSecurity() {
        return apiConfig.get<SecurityStatus>(`/account/security`);
    }

    changePassword(currentPassword: string, newPassword: string) {
        return apiConfig.post(`/account/password`, { currentPassword, newPassword });
    }

    startEmailTwoFactor(password: string) {
        return apiConfig.post(`/account/2fa/email/start`, { password });
    }

    confirmEmailTwoFactor(code: string) {
        return apiConfig.post(`/account/2fa/email/confirm`, { code });
    }

    setupTotp(password: string) {
        return apiConfig.post<{ secret: string; otpauthUri: string }>(`/account/2fa/totp/setup`, { password });
    }

    confirmTotp(code: string) {
        return apiConfig.post<{ recoveryCodes: string[] }>(`/account/2fa/totp/confirm`, { code });
    }

    regenerateRecoveryCodes(password: string) {
        return apiConfig.post<{ recoveryCodes: string[] }>(`/account/2fa/recovery-codes`, { password });
    }

    disableTwoFactor(password: string) {
        return apiConfig.post(`/account/2fa/disable`, { password });
    }
}

export default new AccountService();
