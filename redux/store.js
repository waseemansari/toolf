// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../Services/api';
import authSlice from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authSlice,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(api.middleware),
    // devTools: process.env.NODE_ENV !== 'production',
  });

  setupListeners(store.dispatch);

  return store;
};
