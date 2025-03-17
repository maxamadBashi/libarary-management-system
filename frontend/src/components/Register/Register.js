import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import the CSS file for styling

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); // State to hold any registration errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    axios
      .post("http://localhost:5000/api/users/register", formData)
      .then(() => {
        alert("Registration successful");
        navigate("/login"); // Redirect to login page after successful registration
      })
      .catch((err) => {
        setError("Error registering user. Please try again.");
      });
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      {error && <div className="error-message">{error}</div>} {/* Error display */}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="input-field"
        />
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
