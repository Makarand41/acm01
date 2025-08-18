// Mainbar.jsx
import React, { useState } from 'react';
import './Mainbar.css';

import InfoBar from './InfoBar';
import TimeLogo from './TimeLogo';
import Calender from './Calender';

const Mainbar = () => {
  const [activeSection, setActiveSection] = useState(null); 
  // can be "time" or "calendar"

  return (
    <div className="mainbar">
      {/* Tabs */}
      <div className="tab-container">
        <div className="tab">RESULTS–PHASED</div>
        <div className="tab">OVERRIDES–PHASED</div>
      </div>

      {/* Pass toggle handler to InfoBar */}
      <InfoBar 
        onToggleTime={() => setActiveSection("time")} 
        onToggleCalender={() => setActiveSection("calendar")}
      />

      {/* Dynamic section */}
      {activeSection === "time" && (
        <div className="dynamic-section">
          <TimeLogo />
        </div>
      )}

      {activeSection === "calendar" && (
        <div className="dynamic-section">
          <Calender />
        </div>
      )}
    </div>
  );
};

export default Mainbar;
