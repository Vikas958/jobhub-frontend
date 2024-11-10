import React, { useState } from "react";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    Axios.post('http://localhost:3000/login/jobseekers', {
      email,
      password,
    })
    .then(() => {
        alert("Login successful!");
        // Reset form fields after successful login
        setEmail("");
        setPassword("");
        setErrorMessage(""); // Clear error message on success wait
    })
    .catch((error) => {
        if (error.response) {
            setErrorMessage(error.response.data); // Set error message from server response
        } else {
            setErrorMessage("Login failed. Please try again.");
        }
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="*******"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message" style={{color: 'red'}}>{errorMessage}</p>} {/* Display error message */}
      </form>
    </div>
  );
};

export default Login;
