import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../reducers/booksReducer';
import { Book } from '../types';
import styles from '../styles/layout.module.css';

interface BookProps {
    book: Book;
}

const BookItem = ({ book }: BookProps) => {
    const dispatch = useDispatch();
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatedBook, setUpdatedBook] = useState<Book>({ ...book });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setUpdatedBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        dispatch(updateBook(updatedBook));
        setIsUpdating(false);
    };

    return (
        <div className={styles.bookItem}>
            {isUpdating ? (
                <div className={styles.popup}>
                    <h2> Book</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={updatedBook.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={updatedBook.price}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Category:
                        <input
                            type="text"
                            name="category"
                            value={updatedBook.category}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={updatedBook.description}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            ) : (
                <div className={styles.bookItem} onClick={() => setIsUpdating(true)}>
                    <h3 className={styles.bookContent}>{book.name}</h3>
                    <p className={styles.bookContent}>Price: ${book.price}</p>
                    <p className={styles.bookContent}>Category: {book.category}</p>
                    <p className={styles.bookContent}>Description: {book.description}</p>
                </div>
            )}
        </div>
    );
};

export default BookItem;
