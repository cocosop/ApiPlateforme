export type UserRole = 'admin' | 'project_owner' | 'investor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}