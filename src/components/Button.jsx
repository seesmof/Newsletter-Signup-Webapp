import React from "react";

const Button = ({ type, children, onClick }) => {
  return (
    <>
      <button
        type={type ? type : "button"}
        onClick={onClick}
        className="button"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
