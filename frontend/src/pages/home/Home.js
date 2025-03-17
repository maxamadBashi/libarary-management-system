// import { useState, useEffect } from "react";
// import axios from "axios";
// import './Home.css'; // Make sure to import the CSS if not already

// function Home() {
//   const [books, setBooks] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/books")
//       .then((response) => setBooks(response.data))
//       .catch((error) => console.error("Error fetching books:", error));
//   }, []);

//   // Filter books based on search query
//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Welcome to the Library Management System</h1>

//       {/* Search bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search by title..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Book grid */}
//       <div className="book-grid">
//         {filteredBooks.length > 0 ? (
//           filteredBooks.map((book) => (
//             <div key={book._id} className="book-card">
//               <img
//                 src={book.image || require("../../assets/images/book2.jpg")}
//                 alt={book.title}
//                 className="book-image"
//               />
//               <div className="book-details">
//                 <h2 className="book-title">{book.title}</h2>
//                 <p className="book-author">Author: {book.author}</p>
//                 <p className="book-genre">Genre: {book.genre}</p>
//                 <p className="book-year">Year: {book.year}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-books-message">No books found for your search.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;








import { useState, useEffect } from "react";
import axios from "axios";
import './Home.css'; // Ensure to import the CSS

function Home() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Library Management System</h1>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Book grid */}
      <div className="book-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book._id} className="book-card">
              <img
                src={book.image || require("../../assets/images/book2.jpg")}
                alt={book.title}
                className="book-image"
              />
              <div className="book-details">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">Author: {book.author}</p>
                <p className="book-genre">Genre: {book.genre}</p>
                <p className="book-year">Year: {book.year}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-books-message">No books found for your search.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
