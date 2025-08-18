import React, { useState } from 'react'
import './Mainbar.css'
import BoxC from './BoxC'
import BoxB from './BoxB'

import vector1 from '../../assets/images/boxA/vector1.png';
import vector2 from '../../assets/images/boxA/vector2.png';
import timeLogo from '../../assets/images/boxA/timeLogo.png';
import calenderLogo from '../../assets/images/boxA/calenderLogo.png';

import periodic from '../../assets/images/boxB/periodic.jpg';
import constants from '../../assets/images/boxB/constants.png';

const Mainbar = () => {
  const [activeBox, setActiveBox] = useState("B"); // null, 'B', 'C'

  return (
    <>
      <div className="mainbar">

        <div className="tab-container">
          <div className="tab">RESULTS–PHASED</div>
          <div className="tab">OVERRIDES–PHASED</div>
        </div>

        <div className="BoxA">
          <div className="form-section">
            <div className="input-group">
              <label style={{paddingLeft:"20px",paddingRight:"17px"}}>Title:</label>
              <input type="text" style={{ width: "300px" }} />
              <label style={{paddingLeft:"20px",paddingRight:"10px"}}>Unique ID:</label>
              <input type="text" style={{ width: "300px" }} />
            </div>

            <br/>
            <div className="input-group">
              <label style={{paddingLeft:"20px",paddingRight:"5px"}}>CES#:</label>
              <input type="text" style={{ width: "200px" }} />
              <label style={{paddingLeft:"20px",paddingRight:"5px"}}>PE Value:</label>
              <input type="text" style={{ width: "160px" }} />
              <label style={{paddingLeft:"20px",paddingRight:"5px"}}>WBS#:</label>
              <input type="text" style={{ width: "170px" }} />
            </div>
            <br/>
          </div>

          <div className="icon">
            <div className="tool"><img src={timeLogo} alt="time"/></div>
            <div className="tool" style={{ filter: "brightness(0.8)" }}>
              <img src={calenderLogo} alt="calendar"/>
            </div>
            <div className="tool" style={{ filter: "brightness(0.2)" }}>
              <img src={vector1} alt="vector1"/>
            </div>
            <div className="tool" style={{ filter: "brightness(0.2)" }}>
              <img src={vector2} alt="vector2"/>
            </div>
          </div>
        </div>

        {/* Clickable Images */}
        <div className="A1">
          <div className="tool" onClick={() => setActiveBox('B')} style={{cursor: 'pointer'}}>
            <img src={periodic} alt="Periodic"/>
          </div>
          <div className="tool" onClick={() => setActiveBox('C')} style={{cursor: 'pointer'}}>
            <img src={constants} alt="Constants"/>
          </div>
        </div>

        {/* Show box based on click */}
        {activeBox === 'B' && <BoxB />}
        {activeBox === 'C' && <BoxC />}

      </div>
    </>
  )
}

export default Mainbar
