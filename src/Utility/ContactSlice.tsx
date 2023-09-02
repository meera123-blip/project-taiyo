import { createSlice,PayloadAction} from "@reduxjs/toolkit";

export { };

//Define the contact Interface

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

// Define the initial state of the contacts slice
interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

// Create the contacts slice
const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = [...state.contacts, action.payload]; 
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
  },

});



export const { addContact,deleteContact, editContact} = ContactSlice.actions;

export default ContactSlice.reducer;