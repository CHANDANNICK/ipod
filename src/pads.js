// importing required files
import React from "react";
import "./ipod.css";

const Pads = (props) => {
  // console.log("props", props);
  return (
    <div
      unselectable="off"
      id="menu"
      className="controls"
      onClick={props.scroll}
    >
      {/* menu item to bring back to main scren */}
      <button id="menu-button" className="buttons" onClick={props.mainScr}>
        MENU
      </button>

      {/* Inner button to select particular item from list */}
      <div>
        <button className="small-button" onClick={props.optn}></button>
      </div>
    </div>
  );
};

//Exporting Pads
export default Pads;
