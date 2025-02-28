import React from "react";

function Skill(props) {
  return (
    <div className="pb-3 hidden">
      <div>
        <i className={`${props.icon} display-3`} style={{color: `${props.iconColor}`}}></i>
        <p className="fs-4 fw-bold">{props.tool}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Skill;
