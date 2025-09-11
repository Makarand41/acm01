import React from "react";
import styles from "./BetaC.module.css";

const BoxA = () => {
  return (
    <>
      <p className={styles.title}>Title</p>
      <input className={styles.input} />

      <div className={styles.section}>
        <label className={styles.eqLabel}>Equation/Value</label>
        <br />
        <input
          type="text"
          className={styles.equation}
          value="PayUCS * ISQty"
          readOnly
        />
      </div>
    </>
  );
};

export default BoxA;
