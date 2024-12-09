import React, { useState } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";

const Auth = () => {
  const [users, setUsers] = useState([]); // Mock database of users

  const handleSignup = (formData) => {
    setUsers([...users, formData]); // Save user data (mocking database behavior)
  };

  const handleLogin = (formData) => {
    const userExists = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (userExists) {
      alert("Welcome back!");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h1>Auth System</h1>
      <Signup onSignup={handleSignup} />
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default Auth;
