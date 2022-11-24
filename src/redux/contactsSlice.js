import initialContacts from '../components/contacts.json';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
