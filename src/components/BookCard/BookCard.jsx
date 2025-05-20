import "./BookCard.css";
import { Link } from "react-router-dom";

const BookCard = ({ books }) => {
  // console.log(books);
  if (!books) {
    return <p>Book You searched not found, Please try again!</p>;
  }

  return (
    <>
      {books.map((book) => {
        // got this line from stack overflow as mine not work!
        let image = book.volumeInfo.imageLinks?.smallThumbnail;
        let title = book.volumeInfo?.title;
        let author = book.volumeInfo?.authors[0];

        return (
          <Link to={`/books/${book.id}`} key={book.id}>
            <div className="card">
              <img src={image} alt="book image" />
              <div className="card-body">
                <h3>{title}</h3>
                <p>By: {author}</p>
                {/* <p>&#0036; 20</p> */}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // e.stopPropagation();
                  alert(`Add ${book.volumeInfo.title} to favorites`);
                }}
              >
                Add to your Favorites
              </button>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BookCard;
