// src/features/signup/signupSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  email: string;
  password: string;
  error: string | null;
  loading: boolean;
}

const initialState: LoginState = {
  email: '',
  password: '',
  error: null,
  loading: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    reset: (state) => {
      (state.email = ''), (state.password = ''), (state.loading = false);
    },
  },
});

export const { setEmail, setPassword, setError, setLoading, reset } =
  loginSlice.actions;

export default loginSlice.reducer;
