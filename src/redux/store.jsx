import { configureStore } from '@reduxjs/toolkit';
import { AppSlice } from './AppSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    contacts: AppSlice.reducer,
  },
});
