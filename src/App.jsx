import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookInfo from "./pages/BookInfo/BookInfo";
import FavoriteBook from "./pages/FavoriteBook/FavoriteBook";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // local storage setup
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    try {
      const storedData = localStorage.getItem("favoriteBooks");

      return storedData ? JSON.parse(storedData) : [];
    } catch (err) {
      console.error("there is no book in localStorage:", err);
      return [];
    }
  });

  // handle save and effect when favorite books change
  useEffect(() => {
    try {
      localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    } catch (err) {
      console.error("can't save this book to favorite books:", err);
    }
  }, [favoriteBooks]);

  // handle adding favorite book
  const handleAdd = (bookToAdd) => {
    setFavoriteBooks((prevFavorites) => {
      const isFavoriteBook = prevFavorites.some(
        (book) => book.id === bookToAdd.id
      );
      if (isFavoriteBook) {
        alert(
          `Book "${bookToAdd.volumeInfo.title}" is already in your favorites.`
        );
        return prevFavorites;
      }
      alert(`Adding "${bookToAdd.volumeInfo.title}" to favorites.`);
      return [...prevFavorites, bookToAdd];
    });
  };

  // handle remove favorite book
  const HandleRemove = (bookId) => {
    setFavoriteBooks((prevFavorites) => {
      const newFavorites = prevFavorites.filter((book) => book.id !== bookId);
      alert(`Book with ID "${bookId}" has been removed from your favorites.`);
      return newFavorites;
    });
  };

  // checking if the book is favorite book
  const handleFavorite = (bookId) => {
    return favoriteBooks.some((book) => book.id === bookId);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home addFavorite={handleAdd} isFavorite={handleFavorite} />}
        />
        <Route
          path="/books/:bookId"
          element={
            <BookInfo
              addFavorite={handleAdd}
              removeFavorite={HandleRemove}
              isFavorite={handleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoriteBook
              favoriteBooks={favoriteBooks}
              removeFavorite={HandleRemove}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
