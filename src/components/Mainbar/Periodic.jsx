import React from "react";
import "./Periodic.css";
import periodicIcon from "../../assets/images/boxB/periodic.jpg";
import constantIcon from "../../assets/images/boxB/constants.png";

const Periodic = () => {
  return (
    <div className="calculation-container">
      <div className="header-row">
        <div className="equation-block">
          <label className="equation-label">Equation/Value</label>
          <input
            type="text"
            placeholder="PayUC$ * ISQty"
            className="equation-input"
          />
        </div>

        <div
          className="side-icons"
          style={{ display: "flex", marginRight: "150px" }}
        >
          <button className="side-icon-btn">
            <img src={periodicIcon} alt="Periodic" className="icon-img" />
            Periodic
          </button>
          <button className="side-icon-btn">
            <img src={constantIcon} alt="Constant" className="icon-img" />
            Constant
          </button>
        </div>
      </div>

      <div className="date-row">
        <div>
          <label>Start Date:</label> &nbsp; <input type="text" />
        </div>
        <div>
          <label>Finish Date:</label> &nbsp; <input type="text" />
        </div>
      </div>

      <div className="details-row">
        <span style={{ color: "green", fontWeight: "bold" }}>$</span>
        <span>Approp:</span> &nbsp;
        <input type="text" defaultValue="3010" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>FY:</span> &nbsp;
        <input type="text" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>Units:</span> &nbsp;
        <input type="text" />
      </div>

      <p>
        Status: &nbsp;
        <span style={{ color: "green", fontWeight: "bold" }}>Complete</span>
      </p>

      <hr />

      <div style={{ marginTop: "15px" }}>
        <input type="checkbox" />
        &nbsp;
        <label>Calculate Total as average</label>
      </div>

      <div className="bottom-section">
        <div className="calculate-block">
          <strong>Calculate:</strong>
          <button className="annual-btn">Annual</button>
        </div>
        <div style={{ marginLeft: "40px" }}>
          <span style={{ fontWeight: "bold" }}>Lead/Lag:</span> None
        </div>
      </div>
      <p style={{ marginTop: "15px" }}>
        <span style={{ fontWeight: "bold" }}>RISK Specification:</span> None
      </p>
    </div>
  );
};

export default Periodic;
