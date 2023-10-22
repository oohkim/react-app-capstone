import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationError, setRegistrationError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegistrationError("Password and Confirm Password don't match");
      return;
    }

    axios
      .post(apiUrl + "/register", {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data && response.data.success) {
          setRegistrationSuccess(true);
          setRegistrationError(null);
        } else {
          setRegistrationSuccess(false);
          setRegistrationError("Registration failed. Please check your information.");
        }
      })
      .catch((error) => {
        setRegistrationSuccess(false);
        setRegistrationError("Registration failed. Please try again later.");
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>
        {registrationError && <div className="error-message">{registrationError}</div>}
        {registrationSuccess && <div className="success-message">Registration Successful!</div>}
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
        <p className="terms">
          By clicking 'Sign Up,' you are acknowledging and accepting our
          Terms of Service, Privacy Policy, and Cookie Policy.
        </p>
        <button className="submit-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
