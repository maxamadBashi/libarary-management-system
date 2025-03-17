import axios from "axios";
import "./DeleteBook.css"; // Import the CSS file for styling

function DeleteBook({ bookId, onDelete, onCancel }) {
  // Function to delete the book
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`);
      onDelete(bookId); // Notify the parent component of the deletion
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="delete-book-container">
      <div className="delete-book-modal">
        <h3>Are you sure you want to delete this book?</h3>
        <div className="modal-buttons">
          <button className="confirm-btn" onClick={handleDelete}>Yes, Delete</button>
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
