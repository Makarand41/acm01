import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // For demo: just redirect to login
    navigate("/login");
  };

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h2>🎉 Welcome!</h2>
        <p className="welcome-text">You have successfully logged in.</p>

        <button onClick={handleLogout} className="btn">
          Log out
        </button>
      </div>
    </div>
  );
}
