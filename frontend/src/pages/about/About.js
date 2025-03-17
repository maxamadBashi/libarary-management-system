import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About the Library Management System</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            The Library Management System is a user-friendly platform designed
            to help you manage your library's collection of books efficiently.
            Whether you're looking to add, update, or delete books, this system
            makes it simple and intuitive. The system helps you organize your
            collection while providing an easy way to explore available books.
          </p>
          <p>
            It features a clean interface that allows users to navigate through
            books, authors, genres, and years of publication. Whether you're a
            librarian, administrator, or a casual user, the Library Management
            System is the perfect tool for keeping your library organized.
          </p>
        </div>
        <div className="about-image">
          <img
            src={require("../../assets/images/book1.jpeg")}  // Updated image path
            alt="Library"
            className="about-img"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
