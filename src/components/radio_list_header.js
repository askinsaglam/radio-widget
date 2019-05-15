import React from 'react';
import backArrowBtn from '../img/back-arrow.png';
import switchBtn from '../img/switch.png';

const RadioListHeader = () => {
  return (
    <div className="card-header text-white bg-warning text-center">
      <div className="row">
        <div className="col-2">
          <img onClick={()=>alert("Back button is clicked")} className="radio-widget-icon" src={backArrowBtn} alt="back-arrow" />
        </div>
        <div className="col-8 widget-title">
          STATIONS
           </div>
        <div className="col-2">
          <img onClick={()=>alert("Switch button is clicked")} className="radio-widget-icon" src={switchBtn} alt="switch" />
        </div>
      </div>
    </div>
  );
}

export default RadioListHeader;