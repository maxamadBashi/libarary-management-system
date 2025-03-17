import { useState } from "react";
import axios from "axios";

function UpdateBook({ book, onClose }) {
  const [formData, setFormData] = useState(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/books/${book._id}`, formData)
      .then(() => {
        alert("Book updated successfully");
        onClose();
      })
      .catch((err) => alert("Error updating book"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
        required
      />
      <button type="submit">Update Book</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

export default UpdateBook;
