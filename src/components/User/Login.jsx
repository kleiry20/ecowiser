import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "./Signup";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === "test@test.com" &&
      formData.password === "hello123"
    ) {
      dispatch(login({ email: formData.email }));
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen m-auto ">
      <div className="flex flex-col items-center justify-center gap-4 p-4 border rounded-sm">
        <h2 className="text-xl">User Login</h2>
        <form onSubmit={handleSubmit} className="flex gap-4 p-8">
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
            className="px-2 border rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="p-2 transition-all duration-300 ease-in-out border rounded-md hover:bg-slate-600 hover:text-white hover:-translate-y-1"
          >
            Login
          </button>
        </form>
        <Link to={"/signup"}>
          <button className="p-2 text-white bg-blue-900 border rounded-md">
            Go to Signup
          </button>
        </Link>
      </div>
    </div>
  );
};
