import "./BookCard.css"

const BookCard = ({ books }) => {
  // console.log(books);

  return (
    <>
      {books.map((book) => {
        // got this line from stack overflow as mine not work!
        let image = book.volumeInfo.imageLinks?.smallThumbnail;
        let title = book.volumeInfo?.title;
        let author = book.volumeInfo?.authors;

        return (
          <div className="card" key={book.id}>
            <img src={image} alt="book image" />
            <div className="card-body">
              <h3>{title}</h3>
              <p>By: {author}</p>
              {/* <p>&#0036; 20</p> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
