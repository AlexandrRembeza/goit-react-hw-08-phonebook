import { register, logIn, logOut, currentUser } from './authOperations';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const extraActions = [register, logIn, logOut];
const getActionsWithType = type => extraActions.map(el => el[type]);

const userInitialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const handleAuthRegisterOrLogInSuccess = (state, { payload: { user, token } }) => {
  state.user = { ...user };
  state.token = token;
  state.isLoggedIn = true;
  state.isLoading = false;
};
const handleAuthCurrentSuccess = (state, { payload: user }) => {
  state.user = { ...user };
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleLogOutSuccess = () => ({ ...userInitialState });
const handlePending = state => ({ ...state, isLoading: true });
const handleRejected = state => ({ ...state, isLoading: false });
const handleRefreshing = state => ({ ...state, isRefreshing: true });
const handleEndRefreshing = state => ({ ...state, isRefreshing: false });

export const authSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(currentUser.pending, handleRefreshing)
      .addCase(currentUser.fulfilled, handleAuthCurrentSuccess)
      .addCase(currentUser.rejected, handleEndRefreshing)
      .addCase(logOut.fulfilled, handleLogOutSuccess)
      .addMatcher(isAnyOf(...getActionsWithType('pending')), handlePending)
      .addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), handleAuthRegisterOrLogInSuccess)
      .addMatcher(isAnyOf(...getActionsWithType('rejected')), handleRejected);
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

// extraReducers: {
//   [register.pending]: handlePending,
//   [logIn.pending]: handlePending,
//   [logOut.pending]: handlePending,

//   [register.rejected]: handleRejected,
//   [logIn.rejected]: handleRejected,
//   [logOut.rejected]: handleRejected,

//   [currentUser.pending]: handleRefreshing,
//   [currentUser.rejected]: handleEndRefreshing,

// [register.fulfilled](state, { payload: { user, token } }) {
//   state.user = { ...user };
//   state.token = token;
//   state.isLoggedIn = true;
//   state.isLoading = false;
// },
//   [logIn.fulfilled](state, { payload: { user, token } }) {
//     state.user = { ...user };
//     state.token = token;
//     state.isLoggedIn = true;
//     state.isLoading = false;
//   },
//   [logOut.fulfilled]() {
//     return {
//       ...userInitialState,
//     };
//   },
// [currentUser.fulfilled](state, { payload: user }) {
//   state.user = { ...user };
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// },
// },
