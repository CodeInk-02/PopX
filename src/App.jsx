import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Component/welcome/Welcome";
import Signup from "./Component/signup/Signup";
import Login from "./Component/login/Login";
import Account from "./Component/account/Account";

const App = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : [];
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/signup"
          element={<Signup setUser={setUser} user={user} />}
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
