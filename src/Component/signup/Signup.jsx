import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser, user }) => {
  const [userdata, setUserdata] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company_name: "",
    agencies: "",
  });

  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    setUser([...user, userdata]);
    navigate("/account", { state: userdata });
  }

  return (
    <div>
      <div className="signup-container">
        <h1>Create your PopX account</h1>
        <form onSubmit={handlesubmit}>
          <div className="input-container">
            <div className="input">
              <input
                type="text"
                name="name"
                required
                value={userdata.name}
                onChange={(e) =>
                  setUserdata({ ...userdata, name: e.target.value })
                }
              />
              <span>
                Full Name<sup>*</sup>
              </span>
            </div>

            <div className="input">
              <input
                type="text"
                value={userdata.phone}
                name="phone"
                required
                onChange={(e) =>
                  setUserdata({ ...userdata, phone: e.target.value })
                }
              />
              <span>
                Phone number
                <sup>*</sup>
              </span>
            </div>

            <div className="input">
              <input
                type="email"
                name="email"
                required
                value={userdata.email}
                onChange={(e) =>
                  setUserdata({ ...userdata, email: e.target.value })
                }
              />
              <span>
                Email address
                <sup>*</sup>
              </span>
            </div>

            <div className="input">
              <input
                type="password"
                name="password"
                required
                value={userdata.password}
                onChange={(e) =>
                  setUserdata({ ...userdata, password: e.target.value })
                }
              />
              <span>
                Password
                <sup>*</sup>
              </span>
            </div>

            <div className="input">
              <input
                type="text"
                value={userdata.company_name}
                onChange={(e) =>
                  setUserdata({ ...userdata, company_name: e.target.value })
                }
              />
              <span>
                Company name
                <sup style={{ color: "white" }}>*</sup>
              </span>
            </div>

            <div className="option-box">
              <span>
                Any agencies{" "}
                <sup style={{ color: "red", fontSize: "1.6rem" }}>*</sup>
              </span>
              <span>
                <label>
                  <input
                    type="radio"
                    required
                    name="agencies"
                    value="Yes"
                    checked={userdata.agencies === "Yes"}
                    onChange={(e) =>
                      setUserdata({ ...userdata, agencies: e.target.value })
                    }
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="agencies"
                    required
                    value="No"
                    checked={userdata.agencies === "No"}
                    onChange={(e) =>
                      setUserdata({ ...userdata, agencies: e.target.value })
                    }
                  />
                  No
                </label>
              </span>
            </div>
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
