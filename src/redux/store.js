import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: userReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
});
