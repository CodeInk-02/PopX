import React from "react";
import "./welcome.css";
import { Link, Links } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="mid-container">
        <div className="wel-container">
          <div className="message">
            <h1>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="btn">
            <Link to="/signup" className="nav-links">
              Create Account
            </Link>
            <Link to="/login" className="nav-links">
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
