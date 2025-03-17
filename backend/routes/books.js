const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// Add Book
router.post("/", async (req, res) => {
  try {
    const { title, author, genre, year } = req.body;
    const book = new Book({ title, author, genre, year });
    await book.save();
    res.status(201).send({ message: "Book added successfully" });
  } catch (err) {
    res.status(400).send({ error: "Error adding book" });
  }
});

// Get All Books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (err) {
    res.status(500).send({ error: "Error fetching books" });
  }
});

// Update Book
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, year } = req.body;
    await Book.findByIdAndUpdate(id, { title, author, genre, year });
    res.send({ message: "Book updated successfully" });
  } catch (err) {
    res.status(400).send({ error: "Error updating book" });
  }
});

// Delete Book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.send({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: "Error deleting book" });
  }
});

module.exports = router;
