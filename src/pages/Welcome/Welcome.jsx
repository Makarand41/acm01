import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css"; // ✅ import CSS module

export default function Welcome() {
  const navigate = useNavigate();

  const handleNewWBS = () => {
    navigate("/home"); // ✅ go to Home.jsx for now
  };

  const handleOpenWBS = () => {
    navigate("/home"); // ✅ same for now
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Welcome</h1>
        <p>Select an option to continue:</p>

        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={handleNewWBS}>
            ➕ New WBS
          </button>
          <button className={styles.btn} onClick={handleOpenWBS}>
            📂 Open Existing WBS
          </button>
        </div>
      </div>
    </div>
  );
}
