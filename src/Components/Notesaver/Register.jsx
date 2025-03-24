import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (localStorage.getItem("notesaver-user")) {
      setError("User already exists. Please login.");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("notesaver-user", JSON.stringify(newUser));
    navigate("/login"); // Redirect to login after signup
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form onSubmit={handleSignup} className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up for Notesaver</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 bg-gray-700 text-white rounded mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 bg-gray-700 text-white rounded mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 bg-gray-700 text-white rounded mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="w-full bg-green-500 text-black font-semibold py-2 mt-4 rounded">
          Sign Up
        </button>

        <p className="text-sm text-gray-400 mt-2">
          Already have an account? <a href="/login" className="text-green-400">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
