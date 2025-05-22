import "../App.css";
import { useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";

const Home = ({ addFavorite, isFavorite }) => {
  const [searchQ, setSearchQ] = useState("");
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  async function handleSearch(e) {
    e.preventDefault();
    setBooks([]);
    setErrorMessage(null);
    // prevent searching for empty strings or not existing book
    if (!searchQ.trim()) {
      setErrorMessage("Please enter a search term.");
      return;
    }
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQ}&key=${apiKey}`
      );
      // console.log("Search results:", res.data);
      if (res.data.items && res.data.items.length > 0) {
        setBooks(res.data.items || []);
        setBooks(res.data.items);
        setErrorMessage(null);
      } else {
        setBooks([]);
        setErrorMessage("No books found, try a different search term.");
      }
    } catch (err) {
      console.error("Error fetching books:", err);
      setBooks([]);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  }
  return (
    <>
      <div className="container">
        <h1>Search your favorite Books here!</h1>
        <p>
          You can Search for you favorites Books and get all info you need, you
          are also able to mark any book you like as your favorite and collect
          them on your collection page.
        </p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQ}
            onChange={(e) => setSearchQ(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="book-container">
          {errorMessage && <p className="message-info">{errorMessage}</p>}

          {!errorMessage && (
            <BookCard
              books={books}
              addFavorite={addFavorite}
              isFavorite={isFavorite}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
