import { create } from 'zustand';
import { loginUser, registerUser } from '@/services';

interface User {
  token: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (payload: any) => Promise<void>;
  logout: () => void;
  register: (payload: any) => Promise<void>;
}


const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    loading: false,
    error: null,
  
    login: async (payload: any) => {
      set({ loading: true, error: null });
      try {
        const response = await loginUser(payload);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || 'Login failed');
        }
        const { token } = data;
        set({ user: { token }, loading: false });
        localStorage.setItem('token', token);
      } catch (error: any) {
        set({ loading: false, error: error.message });
      }
    },
  
    logout: () => {
      set({ user: null });
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

