import React from "react";

const Button = ({ type, children }) => {
  return (
    <>
      <button type={type ? type : "button"} className="button">
        {children}
      </button>
    </>
  );
};

export default Button;
