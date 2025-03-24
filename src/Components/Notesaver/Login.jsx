import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("notesaver-user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("notesaver-auth", "true"); // Set logged-in status
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login to Notesaver</h2>
        
        {error && <p className="text-red-500">{error}</p>}

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
          Login
        </button>

        <p className="text-sm text-gray-400 mt-2">
          Don't have an account? <a href="/signup" className="text-green-400">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
