import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  user: {
    id?: string;
    email?: string;
    name?: string;
    token?: string;
  } | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Initialize from localStorage
const initializeAuth = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      user: { token },
      isAuthenticated: true,
      isLoading: false,
      error: null,
    };
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
    setUser: (state, action: PayloadAction<{ token: string; id?: string; email?: string; name?: string }>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem('token', action.payload.token);
      console.log('User set in Redux, isAuthenticated:', state.isAuthenticated);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('token');
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
