"use client";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { useState } from "react";
import { Title } from "./components/Title";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import AddBookModal from "./components/AddBook";
import BookList from "./components/BookList";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);

  const handleOpenAddBook = () => {
    setIsAddBookOpen(true);
  };

  const handleCloseAddBook = () => {
    setIsAddBookOpen(false);
  };
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Title />
          </section>
          <section className={styles.container}>
            <AddBookModal isOpen={isAddBookOpen} onClose={handleCloseAddBook} />
            <button className={styles.addButton} onClick={handleOpenAddBook}>Add a book</button>
          </section>
          <section className={styles.container}>
            <BookList />
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
