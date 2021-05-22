import React from "react";

function Button(props) {
  return (
    <button onClick={props.onClick}>
      <span>Add</span>
    </button>
  );
}
export default Button;
