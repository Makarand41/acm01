import React from "react";
import styles from "./BetaB.module.css";
import periodic from "../../assets/images/boxB/periodic.jpg";
import constants from "../../assets/images/boxB/constants.png";

const BoxB = () => {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.labelRed}>Equation/Value</label>
        <br />
        <input type="text" className={styles.inputWide} />
      </div>

      <div className={styles.container}>
        <label className={styles.dateLabel}>
          Start Date: <input type="date" />
        </label>

        <label className={styles.dateLabel}>
          Finish Date: <input type="date" />
        </label>
      </div>

      <div className={`${styles.container} ${styles.fieldGroup}`}>
        <label>
          $ Approx: <input type="text" />
        </label>
        <label>
          FY: <input type="text" />
        </label>
        <label>
          Units: <input type="text" />
        </label>
      </div>

      <div className={styles.container}>
        <p>
          Status: <span className={styles.status}>Complete</span>
        </p>
      </div>

      <hr className={styles.hr} />

      <div className={styles.container}>
        <label>
          <input type="checkbox" /> Calculate Total as average
        </label>
      </div>

      <div className={styles.container}>
        <label>
          <span className={styles.label}>Calculate</span>:{" "}
          <input value="Annual" className={styles.inputSmall} />
        </label>

        <label style={{ paddingLeft: "15px" }}>
          <span className={styles.label}>Lead/Lag</span>: None
        </label>
      </div>

      <div className={styles.container}>
        <label>
          <span className={styles.label}>RISK Specification</span>: None
        </label>
      </div>
    </>
  );
};

export default BoxB;
