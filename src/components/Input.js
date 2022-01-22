import React from "react";

const Input = ({ label, name, type, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>
        <span>{label}</span>
        <input id={name} name={name} type={type} {...props} />
      </label>
    </div>
  );
};

export default Input;
