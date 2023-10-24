import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import loginImage from "../../assets/login.svg";
import googleIcon from "../../assets/google.webp";
import facebookIcon from "../../assets/facebook.png";
import linkedinIcon from "../../assets/linkedin.png";

const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      email: username,
      password: password,
    };

    axios
      .post(`${apiUrl}/api/login`, requestBody)
      .then((response) => {
        if (response.status === 200) {
          setLoginSuccess(true);
          setLoginError(null);
          handleLogin();
        } else {
          setLoginSuccess(false);
          setLoginError("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        setLoginSuccess(false);
        if (error.response) {
          setLoginError("Login failed. Please check your credentials.");
        } else {
          console.log("Network error:", error);
          setLoginError("Network error. Please try again later.");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-image-container">
        <img src={loginImage} alt="Login" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {loginError && <div className="error-message">{loginError}</div>}
        {loginSuccess && (
          <div className="success-message">Login Successful!</div>
        )}
        {isAuthenticated ? (
          <button className="log-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
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
        )}
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
          {isAuthenticated ? "Log Out" : "Log In"}
        </button>
        <p className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </p>
        <hr />
        <div className="login-options">
          <span className="or-text">or login with</span>
          <div className="social-icons">
            <img src={googleIcon} alt="Google" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </div>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Sign Up.</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;