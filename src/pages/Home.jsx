import "../App.css";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [searchQ, setSearchQ] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQ}`
      );
      console.log("Search Results:", response.data);
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
      </div>
    </>
  );
};

export default Home;
