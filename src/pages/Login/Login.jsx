import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("Login Successful");
      })
      .catch((error) => {
        console.error("Login Error: ", error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button className="log-button" type="submit">
          Log In
        </button>
        <p className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </p>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up.</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;