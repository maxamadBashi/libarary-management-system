import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";  // Ensure correct import of Dashboard-specific styles

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [formData, setFormData] = useState({ title: "", author: "", genre: "", year: "" });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  };

  const handleEdit = (book) => {
    setEditingBook(book._id);
    setFormData({ title: book.title, author: book.author, genre: book.genre, year: book.year });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/books/${id}`)
      .then(() => fetchBooks())
      .catch((error) => console.error("Error deleting book:", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingBook) {
      axios
        .put(`http://localhost:5000/api/books/${editingBook}`, formData)
        .then(() => {
          fetchBooks();
          setEditingBook(null);
          setFormData({ title: "", author: "", genre: "", year: "" });
        })
        .catch((error) => console.error("Error updating book:", error));
    } else {
      axios
        .post("http://localhost:5000/api/books", formData)
        .then(() => {
          fetchBooks();
          setFormData({ title: "", author: "", genre: "", year: "" });
        })
        .catch((error) => console.error("Error adding book:", error));
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Library Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="dashboard-form">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="dashboard-input"
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="dashboard-input"
        />
        <input
          type="text"
          placeholder="Genre"
          value={formData.genre}
          onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
          className="dashboard-input"
        />
        <input
          type="number"
          placeholder="Year"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          className="dashboard-input"
        />
        <button type="submit" className="dashboard-submit-btn">{editingBook ? "Update" : "Add"} Book</button>
      </form>

      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <div className="book-details">
              <h2>{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Year:</strong> {book.year}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleEdit(book)} className="edit-btn">Edit</button>
              <button onClick={() => handleDelete(book._id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
