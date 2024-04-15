import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../reducers/booksReducer';
import { Book } from '../types';
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/layout.module.css";

interface AddBookProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddBook: FC<AddBookProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<Omit<Book, 'id'>>({ name: '', price: 0, category: '', description: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newBook: Book = { ...formData, id: uuidv4() };
        dispatch(addBook(newBook));
        onClose();
        setFormData({ name: '', price: 0, category: '', description: '' });
        console.log(isOpen)
    };

    return (
        <>
            {isOpen ? <div className={styles.main}>
                <button className={styles.close} onClick={onClose}>&times;</button>
                <h2>Add a Book</h2>
                <div className={styles['form-container']}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </label>
                        <label>
                            Price:
                            <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
                        </label>
                        <label>
                            Category:
                            <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
                        </label>
                        <label>
                            Description:
                            <textarea name="description" value={formData.description} onChange={handleInputChange} />
                        </label>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div> : <div></div>}
        </>
    );
};

export default AddBook;