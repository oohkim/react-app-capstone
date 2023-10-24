import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import googleLogo from "../../assets/google.webp";

const apiUrl = import.meta.env.VITE_API_URL;

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegistrationError("Password and Confirm Password don't match");
      return;
    }

    if (!agreeToTerms) {
      setRegistrationError("Please agree to the terms and conditions.");
      return;
    }

    axios
      .post(`${apiUrl}/api/register`, {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        if (response.data && response.data.success) {
          setRegistrationSuccess(true);
          setRegistrationError(null);
        } else {
          setRegistrationSuccess(false);
          setRegistrationError(
            "Registration failed. Please check your information."
          );
        }
      })
      .catch((error) => {
        setRegistrationSuccess(false);
        setRegistrationError("Registration failed. Please try again later.");

        console.log("Data being sent:", {
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        });
      });
  };

  return (
    <div className="signup-container">
      <div className="start-text">
        <h2>WELCOME TO WRITESCAPES! <i className="bx bx-pen" style={{ marginLeft: "8px" }}></i></h2>
        <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>
        <p>If you already have an account, you can <Link to="/login">sign in here</Link>.</p>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>
        {registrationError && (
          <div className="error-message">{registrationError}</div>
        )}
        {registrationSuccess && (
          <div className="success-message">Registration Successful!</div>
        )}
        <div className="name-group">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
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
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
            />
            <span>I agree to all terms and conditions</span>
          </label>
        </div>
        <p className="terms">
          By clicking 'Sign Up,' you are acknowledging and accepting our Terms of Service, Privacy Policy, and Cookie Policy.
        </p>
        <button className="submit-button" type="submit">
          Sign Up
        </button>

        <button className="google-signup-button" type="button">
  <img src={googleLogo} alt="Google Logo" /> Sign up with Google Account
</button>
      </form>
    </div>
  );
};

export default Register;
