import React from "react";

function Colors(props) {
  return (
    <div className="colors">
      {props.color.map((color, index) => {
        return <div key={index} className={`color-${color}`}></div>;
      })}
    </div>
  );
}

export default Colors;
