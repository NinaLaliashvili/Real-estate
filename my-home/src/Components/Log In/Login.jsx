import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Enter</button>
      </form>
      <div className="register-prompt">
        Not a user? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
