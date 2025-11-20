import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: {
    id?: string;
    email?: string;
    name?: string;
    role?: string;
    token?: string;
  } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Initialize from localStorage
const initializeAuth = () => {
  try {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (token && userStr) {
      const user = JSON.parse(userStr);
      return {
        user: { ...user, token },
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    }
  } catch (e) {
    console.error('Error parsing localStorage user data:', e);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  
  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  };
};

const initialState: AuthState = initializeAuth();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string; id?: string; email?: string; name?: string; role?: string }>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token', action.payload.token);
      // Store full user data in localStorage for persistence on page reload
      const userToStore = { ...action.payload };
      delete (userToStore as Record<string, unknown>).token;
      localStorage.setItem('user', JSON.stringify(userToStore));
      console.log('User set in Redux, isAuthenticated:', state.isAuthenticated, 'role:', action.payload.role);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('User logged out');
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
