import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../store/slices/authSlice";
export const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    dispatch(signup({ username: formData.username, email: formData.email }));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen m-auto ">
      <div className="flex flex-col items-center justify-center gap-4 p-4 border rounded-sm">
        <h2 className="text-xl">User Signup</h2>
        <form onSubmit={handleSubmit} className="flex gap-4 p-8">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="px-4 border rounded-md"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-4 border rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="px-4 border rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="px-4 border rounded-md"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="p-2 transition-all duration-300 ease-in-out border rounded-md hover:bg-slate-600 hover:text-white hover:-translate-y-1"
          >
            Signup
          </button>
        </form>
        <Link to={"/login"}>
          <button className="p-2 text-white bg-blue-900 border rounded-md">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
};
