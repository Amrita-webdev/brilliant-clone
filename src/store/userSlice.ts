// src/features/userSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signUpWithGoogle, signUpWithEmail, auth } from '../firebase';
import { User } from '../types';

interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

// Async thunks for Google and Email signups
export const googleSignUp = createAsyncThunk('user/googleSignUp', async (_, { rejectWithValue }) => {
  try {
    const result = await signUpWithGoogle();
    return { email: result.user.email, name: result.user.displayName };
  } catch (error) {
    return rejectWithValue('Failed to sign up with Google');
  }
});

export const emailSignUp = createAsyncThunk(
  'user/emailSignUp',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const result = await signUpWithEmail(email, password);
      return { email: result.user.email };
    } catch (error) {
      return rejectWithValue('Failed to sign up with email');
    }
  }
);

// User slice with reducer logic
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(googleSignUp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(googleSignUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(googleSignUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(emailSignUp.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(emailSignUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(emailSignUp.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
