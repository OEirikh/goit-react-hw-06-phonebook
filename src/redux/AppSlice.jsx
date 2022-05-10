import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const AppSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload: { name, number } }) {
      state.items.every(item => item.name.toLowerCase() !== name.toLowerCase())
        ? state.items.push({
            name: name,
            number: number,
            id: nanoid(),
          })
        : alert(`${name} is alredy in contacts`);
    },
    deleteContact(state, action) {
      state.items.filter(item => item.id !== action.payload.id);
    },
    getFindedContact(state) {},
  },
});
export const { addContact, deleteContact } = AppSlice.actions;
