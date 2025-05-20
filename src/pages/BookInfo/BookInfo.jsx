import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./bookInfo.css";

const BookInfo = () => {
  // get the bookId from the URL,
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // For going back
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`
        );
        setBook(res.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching book details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId, apiKey]); // Re-run effect if bookId or apiKey changes

  if (loading) {
    return <div className="details-container">Loading book details...</div>;
  }

  if (error) {
    return <div className="details-container error-message">{error}</div>;
  }

  if (!book) {
    return <div className="details-container">Book not found.</div>;
  }

  // Destructure for easier access
  const { volumeInfo, saleInfo } = book;
  const imageUrl =
    volumeInfo.imageLinks?.medium || volumeInfo.imageLinks?.thumbnail;
  const title = volumeInfo.title || "Untitled Book";
  const authors = volumeInfo.authors?.join(", ") || "Unknown Author";
  const publishedDate = volumeInfo.publishedDate || "N/A";
  const description = volumeInfo.description || "No description available.";
  const pageCount = volumeInfo.pageCount || "N/A";
  const categories = volumeInfo.categories?.join(", ") || "N/A";
  const averageRating = volumeInfo.averageRating || "N/A";
  const ratingsCount = volumeInfo.ratingsCount || 0;
  const previewLink = volumeInfo.previewLink;
  const buyLink = saleInfo?.buyLink;
  const retailPrice = saleInfo?.retailPrice?.amount
    ? `${saleInfo.retailPrice.amount} ${saleInfo.retailPrice.currencyCode}`
    : "Not for sale";

  return (
    <div className="details-container">
      <button onClick={() => navigate("/")} className="back-button">
        &larr; Back to Search
      </button>
      <div className="book-details-content">
        <div className="book-details-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="book-details-info">
          <h2>{title}</h2>
          <p>
            <strong>Author(s):</strong> {authors}
          </p>
          <p>
            <strong>Published Date:</strong> {publishedDate}
          </p>
          <p>
            <strong>Pages:</strong> {pageCount}
          </p>
          <p>
            <strong>Categories:</strong> {categories}
          </p>

          <p>
            <strong>Rating:</strong> {averageRating} ({ratingsCount} reviews)
          </p>
          <p>
            <strong>Price:</strong> {retailPrice}
          </p>
        </div>
      </div>
      <div className="book-description">
        <h3>Description:</h3>
        {description}
        <div />

        <div className="details-links">
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="details-button"
            >
              Preview Book
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
