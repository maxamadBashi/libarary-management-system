import { useState, useEffect } from "react";
import axios from "axios";
import DeleteBook from "./DeleteBook";
import "./BookList.css"; // Import the CSS file for styling

function BookList({ onEdit }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [bookToDelete, setBookToDelete] = useState(null);

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Handle deletion confirmation
  const handleDelete = (id) => {
    setBooks(books.filter((book) => book._id !== id)); // Remove the book from the UI
    setBookToDelete(null); // Close the delete modal
  };

  // Filter books by search input
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="book-list-container">
      <h1>Book List</h1>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book._id}>
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
            <div className="book-actions">
              <button className="edit-btn" onClick={() => onEdit(book)}>Edit</button>
              <button className="delete-btn" onClick={() => setBookToDelete(book._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Render DeleteBook modal if a book is selected for deletion */}
      {bookToDelete && (
        <DeleteBook
          bookId={bookToDelete}
          onDelete={handleDelete}
          onCancel={() => setBookToDelete(null)}
        />
      )}
    </div>
  );
}

export default BookList;
