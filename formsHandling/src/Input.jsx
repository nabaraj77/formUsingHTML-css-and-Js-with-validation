import React from "react";
import { useState } from "react";

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  //   console.log(props);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="inputBox">
      <label htmlFor="">{props.label}</label>
      <input
        className="input-field"
        {...props}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="errorMessage">{props.errormessage}</span>
    </div>
  );
};

export default Input;
