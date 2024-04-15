import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../lib/store';
import BookItem from './UpdateBook';
import styles from '../styles/layout.module.css';

const BookList = () => {
    const books = useSelector((state: RootState) => state.books);

    return (
        <div className={styles.listContainer}>
            <h2 className={styles.listTitle}>Book List</h2>
            <ul className={styles.ul}>
                {books.map((book) => (
                    <li key={book.id} className={styles.li}>
                        <BookItem book={book} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
