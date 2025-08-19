

import React from 'react'
import beta from "../../assets/images/vector1/beta.jpg";  
import milestone from "../../assets/images/vector1/milestone.jpg";  
import percent from "../../assets/images/vector1/percent.jpg";  
import rayleigh from "../../assets/images/vector1/rayleigh.jpg";  
import trapezoid from "../../assets/images/vector1/trapezoid.jpg";  
import weibull from "../../assets/images/vector1/weibull.jpg";  
import './Beta.css'

const Milestone = ({ setActiveSection }) => {  // 👈 receive callback from parent
  return (
    <>
      <div className='Mainbox'>
       <p>Milestone</p>

        <div className='box1'>
          <img src={beta} onClick={() => setActiveSection("beta")} />
          <img src={milestone} onClick={() => setActiveSection("milestone")}/>
          <img src={percent} onClick={() => setActiveSection("percent")}/>
          <img src={rayleigh} onClick={() => setActiveSection("rayleigh")}/>
          <img src={trapezoid} onClick={() => setActiveSection("trapezoid")}/>
          <img src={weibull} onClick={() => setActiveSection("weibull")}/>
        </div>

        <div className='box2'>
          <label>Reference Cost Equation/Value</label>
          <input/>
          <br/>
          <label>Reference Cost Equation/Value</label>
          <input/>
          <br/>
          <label>Reference Cost Equation/Value</label>
          <input/>
          <br/>
          <label>Reference Cost Equation/Value</label>
          <input/>
        </div>
      </div>
    </>
  )
}

export default Milestone

