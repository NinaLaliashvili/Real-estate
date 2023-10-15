import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
        <input type="email" placeholder="Email Address" required />
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Repeat Password" required />
        <button type="submit">Register</button>
      </form>
      <div className="already-user">
        Already a user? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Register;
