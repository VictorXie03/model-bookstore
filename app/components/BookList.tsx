import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store';
import { deleteBook } from '../reducers/booksReducer';
import BookItem from './UpdateBook';
import styles from '../styles/layout.module.css';

const BookList = () => {
    const books = useSelector((state: RootState) => state.books);
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteBook(id));
    };

    return (
        <div>
            <h2>Book List</h2>
            <ul className={styles.ul}>
                {books.map((book) => (
                    <li key={book.id}>
                        <BookItem book={book} />
                        <button onClick={() => handleDelete(book.id)}>&times;</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
