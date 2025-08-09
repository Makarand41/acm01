import React from 'react'
import './Mainbar.css'
import BoxA from './BoxA'

import vector1 from '../../assets/images/boxA/vector1.png';
import vector2 from '../../assets/images/boxA/vector2.png';
import timeLogo from '../../assets/images/boxA/timeLogo.png';
import calenderLogo from '../../assets/images/boxA/calenderLogo.png';

import periodic from '../../assets/images/boxB/periodic.jpg';
import constants from '../../assets/images/boxB/constants.png';

const Mainbar = () => {
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
            <label style={{paddingLeft:"20px",paddingRight:"17px"}}>Title:</label><input type="text" style={{ width: "300px" }} />

            <label style={{paddingLeft:"20px",paddingRight:"10px"}}>Unique ID:</label><input type="text" style={{ width: "300px" }} />
          
          </div>

<br/>
          <div className="input-group">
           <label style={{paddingLeft:"20px",paddingRight:"5px"}}>CES#:</label><input type="text" style={{ width: "200px" }} />
           <label style={{paddingLeft:"20px",paddingRight:"5px"}}>PE Value:</label><input type="text" style={{ width: "160px" }} />
          <label style={{paddingLeft:"20px",paddingRight:"5px"}}>WBS#:</label><input type="text" style={{ width: "170px" }} />
            
          </div>
          <br/>
        </div>

        <div className="icon">
         <div className="tool"><img src={timeLogo}/></div>
          <div className="tool" style={{ filter: "brightness(0.8)" }}><img src={calenderLogo}/></div>
        <div className="tool" style={{ filter: "brightness(0.2)" }}><img src={vector1}/></div>
        <div className="tool" style={{ filter: "brightness(0.2)" }}><img src={vector2}/></div>
       
       
        </div>

      </div>

      <div className='BoxB'>

      <div className="A1" >
        <div className="tool"><img src={periodic}/></div>
        <div className="tool"><img src={constants}/></div>
      </div>


      <div className="section">
        <label class="eq-label">Equation/Value</label><br/>
        <input type="text" class="equation" value="PayUCS * ISQty"/>
      </div>

      <div className="form-row">
        <label>Start Date: <input type="text" /></label>
        <label>Finish Date: <input type="text" /></label>
      </div>

      <div className="form-row">
        <label>$ Approx: <input type="text" value="3010" /></label>
        <label>FY: <input type="text" /></label>
        <label>Units: <input type="text" /></label>
      </div>

      <div className="form-row status-line">
        <span className="status-complete">Status: Complete</span>
      </div>

    <hr/>

    <div className="form-row">
        <label><input type="checkbox" /> Calculate Total as average</label>
      </div>

      <div className="form-row">
        <label>Calculate: <span class="highlighted">Annual</span></label>
        <label>Lead/Lag: <span>None</span></label>
      </div>

      <div className="form-row">
        <label>RISK Specification: <span className="risk">None</span></label>
      </div>

      </div>

      </div>
    </>
  )
}

export default Mainbar
