import React, { useState } from 'react';
import './Mainbar.css';

import InfoBar from './InfoBar';
import TimeLogo from './TimeLogo';
import Calender from './Calender';
import Vector1 from './Vector1';
import Vector2 from './Vector2';

const Mainbar = () => {
  const [activeSection, setActiveSection] = useState("time"); 
  const [vector1Key, setVector1Key] = useState(0);  // 👈 add key for Vector1 reset

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
        onToggleVector1={() => {
          setActiveSection("vector1");
          setVector1Key(prev => prev + 1); // 👈 each click resets Vector1
        }}
        onToggleVector2={() => setActiveSection("vector2")}
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

      {activeSection === "vector1" && (
        <div className="dynamic-section">
          {/* 👇 key ensures Vector1 is reset */}
          <Vector1 key={vector1Key} />
        </div>
      )}

      {activeSection === "vector2" && (
        <div className="dynamic-section">
          <Vector2 />
        </div>
      )}
    </div>
  );
};

export default Mainbar;
