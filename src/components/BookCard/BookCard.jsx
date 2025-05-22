import React from "react";
import "./BookCard.css";
import { Link } from "react-router-dom";

const BookCard = ({ books, addFavorite, isFavorite }) => {
  // console.log(books);
  if (!books || books.length === 0) {
    return;
  }

  return (
    <>
      {books.map((book) => {
        // got this line from stack overflow as mine not work!
        let image = book.volumeInfo.imageLinks?.smallThumbnail;
        let title = book.volumeInfo?.title || "Untitled Book";
        let author =
          book.volumeInfo.authors && book.volumeInfo.authors.length > 0
            ? book.volumeInfo.authors[0]
            : "Unknown Author";

        return (
          <Link
            to={`/books/${book.id}`}
            key={book.id}
            className="book-card-link"
          >
            <div className="card">
              <img src={image} alt="book image" />
              <div className="card-body">
                <h3>{title}</h3>
                <p>By: {author}</p>
              </div>
              <button
                className={`favorite-button ${
                  isFavorite(book.id) ? "is-favorite" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (isFavorite(book.id)) {
                    alert(`"${title}" is already in your favorites!`);
                  } else {
                    addFavorite(book);
                    alert(`"${title}" added to your favorites!`);
                  }
                }}
              >
                {isFavorite(book.id) ? "❤️ In Favorites" : "♡ Add to Favorites"}{" "}
              </button>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BookCard;
