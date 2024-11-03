// src/features/signup/signupSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age?: number;
  loading: boolean;
  error: string | null;
}

const initialState: SignupState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  age: undefined,
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    // Actions for Saga to listen to
    signupFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setAge: (state, action: PayloadAction<number | undefined>) => {
      state.age = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    reset: (state) => {
      (state.firstName = ''),
        (state.lastName = ''),
        (state.age = undefined),
        (state.email = ''),
        (state.password = ''),
        (state.loading = false);
    },
  },
});

export const {
  signupFailure,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setAge,
  setError,
  setLoading,
  reset,
} = signupSlice.actions;

export default signupSlice.reducer;
