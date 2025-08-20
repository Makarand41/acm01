import React from "react";
import beta from "../../assets/images/vector1/beta.jpg";
import milestone from "../../assets/images/vector1/milestone.jpg";
import percent from "../../assets/images/vector1/percent.jpg";
import rayleigh from "../../assets/images/vector1/rayleigh.jpg";
import trapezoid from "../../assets/images/vector1/trapezoid.jpg";
import weibull from "../../assets/images/vector1/weibull.jpg";
import "./Beta.css";

const Beta = ({ setActiveSection }) => {
  return (
    <>
      <div className="container">
        {/* Left Side Icons */}
        <div className="sidebar">
          <img src={beta} alt="Beta" onClick={() => setActiveSection("beta")} />
          <img
            src={weibull}
            alt="Weibull"
            onClick={() => setActiveSection("weibull")}
          />
          <img
            src={rayleigh}
            alt="Rayleigh"
            onClick={() => setActiveSection("rayleigh")}
          />
          <img
            src={trapezoid}
            alt="Trapezoid"
            onClick={() => setActiveSection("trapezoid")}
          />
          <img
            src={percent}
            alt="Percent"
            onClick={() => setActiveSection("percent")}
          />
          <img
            src={milestone}
            alt="Milestone"
            onClick={() => setActiveSection("milestone")}
          />
        </div>

        {/* Main Form Section */}
        <div className="form-section">
          <p className="title">Reference Cost Equation/Value</p>
          <input type="text" className="input-wide" value="PayUC$ * ISQty" />

          <div className="row">
            <label>$ Appropr:</label>
            <input type="text" />
            <label>FY:</label>
            <input type="text" />
            <label>Units:</label>
            <input type="text" />
          </div>

          <div className="row">
            <strong>Spent (%):</strong>
            {/* <input type="text" />
            <label>ID</label> */}
            <input type="text" placeholder="ID" class="id-input" />
          </div>

          <div className="row">
            <label>
              <strong>Time (%):</strong>
            </label>
            {/* <input type="text" />
            <label>ID</label> */}
            <input type="text" placeholder="ID" class="id-input" />
          </div>

          <div className="row">
            <label>
              <strong>Peakness (%):</strong>
            </label>
            <select>
              <option></option>
            </select>
          </div>

          <p className="status">
            Status: <span>Value missing</span>
          </p>

          <hr className="divider" />

          <div className="row">
            <label>
              <strong>Calculate:</strong>
            </label>
            <input type="text" />
            <label>
              <strong>Lead/Lag:</strong> None
            </label>
          </div>

          <div className="row">
            <label>
              <strong>RISK Specification:</strong>
            </label>
            <span>None</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beta;
