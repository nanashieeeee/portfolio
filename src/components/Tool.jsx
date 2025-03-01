import React from "react";
function Tool(props) {
  return (
    <div className="tool py-2">
      <div className="h-75 d-flex align-items-center">
      <i className={`${props.icon} display-2`} style={{color: `${props.iconColor}`}}></i>
      </div>
      <p className="my-auto">{props.name}</p>
      
    </div>
  );
}

export default Tool;