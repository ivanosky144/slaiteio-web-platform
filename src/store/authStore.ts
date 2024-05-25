import { create } from 'zustand';
import { loginUser, registerUser } from '@/services';

interface User {
  email: string;
  token: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
  login: (payload: any) => Promise<void>;
  logout: () => void;
  register: (payload: any) => Promise<void>;
}


const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    loading: false,
    error: null,
    isLoggedIn: false,
  
    login: async (payload: any) => {
      set({ loading: true, error: null });
      try {
        const response = await loginUser(payload);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || 'Login failed');
        }
        const { token } = data;
        set({ user: { email: payload.email, token }, loading: false, isLoggedIn: true });
        localStorage.setItem('token', token);
      } catch (error: any) {
        set({ loading: false, error: error.message });
      }
    },
  
    logout: () => {
      set({ user: null, isLoggedIn: false });
      localStorage.removeItem('token');
    },
  
    register: async (payload: any) => {
      set({ loading: true, error: null });
      try {
        const response = await registerUser(payload);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || 'Registration failed');
        }
        set({ loading: false });
      } catch (error: any) {
        set({ loading: false, error: error.message });
      }
    },

  
  }));
  
  export default useAuthStore;

