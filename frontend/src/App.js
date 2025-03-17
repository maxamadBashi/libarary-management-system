// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Register from "./pages/Register";
// import Register from "./components/Register";
import Register from "./components/Register/Register"; // If the file is named 'Register.js'

// import Login from "./c/Login";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
