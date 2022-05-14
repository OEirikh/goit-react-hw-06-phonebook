import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from './ContactsSlice';
import { FilterSlice } from './FilterSlice';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
    filter: FilterSlice.reducer,
  },
});
