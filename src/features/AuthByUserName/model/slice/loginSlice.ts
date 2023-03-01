import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../type/loginSchema';

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, actions: PayloadAction<string>) => {
      state.username = actions.payload;
    },
    setPassword: (state, actions: PayloadAction<string>) => {
      state.password = actions.payload;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
