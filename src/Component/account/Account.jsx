import React from "react";
import { useLocation } from "react-router-dom";
import { BsFillCameraFill } from "react-icons/bs";
import "./account.css";
const Account = () => {
  const location = useLocation();
  const user = location.state; // get user from navigation state

  if (!user) {
    return <h2>No user data received. Please login or signup.</h2>;
  }
  return (
    <div className="account-container">
      <div className="container">
        <div className="top">
          <h1>Account Settings</h1>
        </div>
        <div className="bottom">
          <div className="img">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <BsFillCameraFill className="icons" />
          </div>

          <span>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </span>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum porro
            vel sapiente labore repudiandae voluptates commodi veritatis
            maiores!.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
