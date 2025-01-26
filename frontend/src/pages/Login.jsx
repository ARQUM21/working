import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(""); // To show notifications
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if CNIC and password are valid
    if (cnic.length !== 13 || isNaN(cnic)) {
      setError("Please enter a valid CNIC number (13 digits).");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Retrieve stored CNIC and password from local storage
    const storedCnic = localStorage.getItem("cnic");
    const storedPassword = localStorage.getItem("password");

    // Check if entered CNIC and password match the stored values
    if (cnic === storedCnic && password === storedPassword) {
      setNotification("Login Successful!");
      setError(""); // Clear error message
      navigate("/dashboard"); // Navigate to dashboard
    } else {
      setError("Invalid CNIC or Password.");
      setNotification(""); // Clear success notification
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-teal-600 text-center mb-6">
          User Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">CNIC</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your CNIC"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
              maxLength="13"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}
          {notification && <div className="text-green-500 text-sm">{notification}</div>}

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-black font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;