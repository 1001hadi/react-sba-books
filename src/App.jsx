import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookInfo from "./pages/BookInfo/BookInfo";
import FavoriteBook from "./pages/FavoriteBook";
import NotFound from "./pages/NotFound";

function App() {
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    try {
      const storedData = localStorage.getItem("favoriteBooks");

      return storedData ? JSON.parse(storedData) : [];
    } catch (err) {
      console.error("there is no book in localStorage:", err);
      return [];
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:bookId" element={<BookInfo />} />
      <Route path="/favorites" element={<FavoriteBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
