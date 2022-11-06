import React from "react";

const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      mr={8}
      style={{width:"17px", height:"17px"}}
      checked={isChecked}
    />
  );
};

export default Checkbox;
