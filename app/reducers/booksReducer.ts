import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../types';

const initialState: Book[] = [];

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.push(action.payload);
        },
        updateBook: (state, action: PayloadAction<Book>) => {
            const index = state.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteBook: (state, action: PayloadAction<string>) => {
            return state.filter((book) => book.id !== action.payload);
        },
    },
});

export const { addBook, updateBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
