import "../App.css";
import { useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";
const Home = ({ addFavorite, isFavorite }) => {
  const [searchQ, setSearchQ] = useState("");
  const [books, setBooks] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQ}&key=${apiKey}`
      );
      // console.log("Search results:", res.data);
      if (res.data.items) {
        setBooks(res.data.items);
      } else {
        setBooks([]);
        <p>No Book found, try other search!</p>;
      }
    } catch (err) {
      console.error("Error fetching books:", err);
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
          <BookCard
            books={books}
            addFavorite={addFavorite}
            isFavorite={isFavorite}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
