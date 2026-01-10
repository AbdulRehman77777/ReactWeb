
export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}
