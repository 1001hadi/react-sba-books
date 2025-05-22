import { useNavigate } from "react-router-dom";
import "./FavoriteBook.css";

const FavoriteBook = ({ favoriteBooks, removeFavorite }) => {
  const navigate = useNavigate();

  return (
    <div className="favorites-container">
      <button onClick={() => navigate("/")} className="back-button">
        &larr; Back to Search
      </button>
      <h1>Your Favorite Books</h1>

      {favoriteBooks.length === 0 ? (
        <p className="no-favorites-message">
          You haven't added any favorite books yet. Go search and add your
          favorites!
        </p>
      ) : (
        <div className="favorite-books">
          {favoriteBooks.map((book) => {
            const image = book.volumeInfo.imageLinks?.thumbnail;
            const title = book.volumeInfo?.title;
            const author = book.volumeInfo?.authors?.[0];

            return (
              <div key={book.id} className="favorite-card">
                <img src={image} alt={title} className="favorite-card-image" />
                <div className="favorite-card-info">
                  <h3 className="favorite-card-title">{title}</h3>
                  <p className="favorite-card-author">By: {author}</p>
                </div>
                <button
                  onClick={() => removeFavorite(book.id)}
                  className="remove-favorite-button"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FavoriteBook;
