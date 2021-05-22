import React from "react";

function Input(props) {
  return (
    <input onChange={props.onChange} type={props.type} value={props.value} />
  );
}
export default Input;
