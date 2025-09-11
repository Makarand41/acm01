import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    console.log("Login submitted", { email, password });

    // ✅ redirect to Welcome page
    navigate("/welcome");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in</h2>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error">{error}</div>}

          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </label>

          <button type="submit" className="btn">
            Sign in
          </button>
        </form>

        <p className="note">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}
