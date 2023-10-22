import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(apiUrl + "/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data && response.data.success) {
          setLoginSuccess(true);
          setLoginError(null);
        } else {
          setLoginSuccess(false);
          setLoginError("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        setLoginSuccess(false);
        setLoginError("Login failed. Please try again later.");
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {loginError && <div className="error-message">{loginError}</div>}
        {loginSuccess && <div className="success-message">Login Successful!</div>}
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
