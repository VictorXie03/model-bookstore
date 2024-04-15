"use client";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { useState } from "react";
import { Title } from "./components/Title";

import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import AddBook from "./components/AddBook";
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
            <AddBook isOpen={isAddBookOpen} onClose={handleCloseAddBook} />
            <button onClick={handleOpenAddBook}>Add a book</button>
          </section>
          <section>
            <BookList />
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
