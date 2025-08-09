import React from 'react';
import './Toolbar.css'; 

import Phased from '../../assets/images/toolbar/1Phased.png';

import Learning from '../../assets/images/toolbar/2Learning.png';
import Narrative from '../../assets/images/toolbar/3Narrative.png';
import CustomColumns from '../../assets/images/toolbar/4CustomColumns.png';
import RiskStatistics from '../../assets/images/toolbar/5RiskStatistics.png';
import WhatIf from '../../assets/images/toolbar/6WhatIf.png';
import Delta from '../../assets/images/toolbar/7Delta.png';
import Inflation from '../../assets/images/toolbar/8Inflation.png';
import Documentation from '../../assets/images/toolbar/9Documentation.png';
import InputSheets from '../../assets/images/toolbar/10InputSheets.png';
import More from '../../assets/images/toolbar/11More.png';
import Favourites from '../../assets/images/toolbar/12Favourites.png';
import ManageSheets from '../../assets/images/toolbar/13ManagSheets.png';
import DesignNewReports from '../../assets/images/toolbar/14DesignNewReports.png';
import ImportReports from '../../assets/images/toolbar/15ImportReports.png';



const Toolbar = () => {
  return (
    <div className="toolbar">

      {/* View Section */}
      <div className="vsection">
        <div className="vtools">
          <div className="tool"><img src={Phased} alt="Phased" /><span>Phased</span></div>
          <div className="tool"><img src={Learning} alt="Learning" /><span>Learning</span></div>
          <div className="tool"><img src={Narrative} alt="Narrative" /><span>Narrative</span></div>
          <div className="tool"><img src={CustomColumns} alt="Custom Columns" /><span>Custom<br />Columns</span></div>
          <div className="tool"><img src={RiskStatistics} alt="Risk Statistics" /><span>RISK<br />Statistics</span></div>
          <div className="tool"><img src={WhatIf} alt="What If" /><span>What-if</span></div>
          <div className="tool"><img src={Delta} alt="Delta" /><span>Delta</span></div>
          <div className="tool"><img src={Inflation} alt="Inflation" /><span>Inflation</span></div>
          <div className="tool"><img src={Documentation} alt="Documentation" /><span>Documentation</span></div>
          <div className="tool"><img src={InputSheets} alt="Input Sheets" /><span>Input Sheets</span></div>
          <div className="tool"><img src={More} alt="More" /><span>More</span></div>
        </div>
        <div className="vsection-title">View</div>
      </div>


      {/* Organize Section */}
      <div className="osection">
        <div className="otools">
          <div className="tool"><img src={Favourites} alt="Favourites" /><span>Favorites</span></div>
          <div className="tool"><img src={ManageSheets} alt="Manage Sheets" /><span>Manage<br />Sheets</span></div>
        </div>
        <div className="osection-title">Organize</div>
      </div>


       {/* Custom Reports Section */}
      <div className="crsection">
        <div className="crtools">
          <div className="tool"><img src={DesignNewReports} alt="Design New Reports" /><span>Design <br/>New Reports</span></div>
          <div className="tool"><img src={ImportReports} alt="Import Reports" /><span>Import<br />Reports</span></div>
        </div>
        <div className="crsection-title custom">Custom Reports</div>
      </div>

      </div>



        


     
  );
};

export default Toolbar;
