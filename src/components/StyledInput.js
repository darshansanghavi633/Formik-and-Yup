import React from "react";

export default function StyledInput(props) {
  return (
    <div className="styledInput">
      <input
        label={props.lable}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.name}
        onChange={props.onChange}
      />
      {props.helperText && (
        <span className="helperText">{props.helperText}</span>
      )}
    </div>
  );
}
