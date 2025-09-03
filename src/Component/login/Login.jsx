import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = ({ user }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    const existingUser = user.find(
      (u) => u.email === login.email && u.password === login.password
    );

    if (existingUser) {
      navigate("/account", { state: existingUser });
    } else {
      alert("Invalid email or password.");
    }
  };
  return (
    <div className="login-container">
      <div className="container">
        <div className="message">
          <h1>Signin to your PopX account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <form action="" onSubmit={handlesubmit}>
          <div className="input-container">
            <div className="input">
              <input
                type="email"
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
              />
              <span>Email Address</span>
            </div>
            <div className="input">
              <input
                type="password"
                name=""
                id=""
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
              <span>Password</span>
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
