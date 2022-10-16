import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const authHeader = {
  setAuthHeader: token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`),
  clearAuthHeader: () => (axios.defaults.headers.common.Authorization = ''),
};

export const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    authHeader.setAuthHeader(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    authHeader.setAuthHeader(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    authHeader.clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    try {
      authHeader.setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
