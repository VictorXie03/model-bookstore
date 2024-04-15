import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../reducers/booksReducer';
import { deleteBook } from '../reducers/booksReducer';
import { Book } from '../types';
import styles from '../styles/layout.module.css';

interface BookProps {
    book: Book;
}

const BookItem = ({ book }: BookProps) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        setIsModalOpen(false);
    };

    const handleDelete = (id: string) => {
        dispatch(deleteBook(id));
    };

    return (
        <div className={styles.bookItem}>
            <div className={styles.bookContent} onClick={() => setIsModalOpen(true)}>
                <h3>{book.name}</h3>
                <p>Price: ${book.price}</p>
                <p>Category: {book.category}</p>
                <p>Description: {book.description}</p>
                <button className={styles.bookButton} onClick={() => handleDelete(book.id)}>
                    &times;
                </button>
            </div>
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={() => setIsModalOpen(false)}>
                            &times;
                        </span>
                        <h2>Update Book</h2>
                        <div className={styles.bookInput}>
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
                        </div>
                        <button className={styles.updateButton} onClick={handleUpdate}>
                            Update
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookItem;
