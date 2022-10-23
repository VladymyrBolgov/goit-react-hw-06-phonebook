import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const contactsInitialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.find(
                    contact =>
                        action.payload.name.toLowerCase() === contact.name.toLowerCase()
                )
                    ? alert(`${action.payload.name} is already in contacts.`)
                    : state.contacts.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(
                task => task.id === action.payload
            );
            state.contacts.splice(index, 1);
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const persistedReducer = persistReducer(
    persistConfig, contactsSlice.reducer
);