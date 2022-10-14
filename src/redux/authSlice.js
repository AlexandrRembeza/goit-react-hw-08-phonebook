import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const userInitialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: {
    [register.pending]({ isLoading }) {
      isLoading = false;
    },
    [register.fulfilled](state, { payload: { user, token } }) {
      console.log(user, token);
      state.user = user;
      state.token = token;
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;
