import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store';
import { deleteBook } from '../reducers/booksReducer';
import BookItem from './UpdateBook';

const BookList = () => {
    const books = useSelector((state: RootState) => state.books);
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteBook(id));
    };

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <BookItem book={book} />
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
