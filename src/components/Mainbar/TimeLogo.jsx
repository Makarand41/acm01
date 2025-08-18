import React from "react";

const TimeLogo = () => {
  return (
    <div className="time-section" style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button>Periodic</button>
        <button>Constant</button>
      </div>

      <div className="input-group">
        <label>Equation/Value:</label>
        <input type="text" style={{ width: "400px" }} />
      </div>

      <div className="input-group" style={{ marginTop: "10px" }}>
        <label>Start Date:</label>
        <input type="date" />
        <label style={{ marginLeft: "20px" }}>Finish Date:</label>
        <input type="date" />
      </div>

      <div className="input-group" style={{ marginTop: "10px" }}>
        <label>Approx:</label>
        <input type="number" />
        <label style={{ marginLeft: "20px" }}>FY:</label>
        <input type="text" />
        <label style={{ marginLeft: "20px" }}>Units:</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default TimeLogo;
