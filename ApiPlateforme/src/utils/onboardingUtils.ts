import projectService from '../services/projectService';
import userService from '../services/userService';

/**
 * Checks if the onboarding data exists in localStorage for the user.
 */
export const isOnboardingCompletedLocally = (email?: string | null): boolean => {
  try {
    // 1. Explicit completion flag
    if (localStorage.getItem('investor_onboarding_completed') === 'true') {
      return true;
    }
    if (email) {
      const userFlag = localStorage.getItem(`investor_onboarding_completed_${email.toLowerCase().trim()}`);
      if (userFlag === 'true') {
        return true;
      }
    }

    // 2. Check saved onboarding data payload
    const keysToCheck = ['investor_onboarding_data'];
    if (email) {
      keysToCheck.unshift(`investor_onboarding_data_${email.toLowerCase().trim()}`);
    }

    for (const key of keysToCheck) {
      const raw = localStorage.getItem(key);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Valid if companyName or investorType + address or surname
        if (
          parsed.companyName ||
          (parsed.investorType && (parsed.surname || parsed.firstName || parsed.nationality))
        ) {
          return true;
        }
      }
    }
  } catch (_) {}

  return false;
};

/**
 * Persists onboarding completion flags and data in localStorage.
 */
export const markOnboardingCompleted = (email?: string | null, data?: any): void => {
  try {
    localStorage.setItem('investor_onboarding_completed', 'true');
    if (email) {
      const cleanEmail = email.toLowerCase().trim();
      localStorage.setItem(`investor_onboarding_completed_${cleanEmail}`, 'true');
      if (data) {
        localStorage.setItem(`investor_onboarding_data_${cleanEmail}`, JSON.stringify(data));
      }
    }
    if (data) {
      localStorage.setItem('investor_onboarding_data', JSON.stringify(data));
    }
  } catch (_) {}
};

/**
 * Robust async check: checks localStorage, then queries backend projects.
 * If the user has at least 1 project in the backend, they have definitely completed onboarding.
 */
export const checkOnboardingCompleted = async (email?: string | null): Promise<boolean> => {
  // 1. Fast path: check local storage
  if (isOnboardingCompletedLocally(email)) {
    return true;
  }

  // 2. Query backend projects for this investor
  try {
    const projectsRes = await projectService.fetchAllProjects();
    const projects = Array.isArray(projectsRes.data) ? projectsRes.data : [];
    if (projects.length > 0) {
      markOnboardingCompleted(email);
      return true;
    }
  } catch (_) {}

  // 3. Fallback: check profile details
  try {
    const userRes = await userService.me();
    const user = userRes.data;
    if (user && user.email) {
      if (isOnboardingCompletedLocally(user.email)) {
        return true;
      }
    }
  } catch (_) {}

  return false;
};
