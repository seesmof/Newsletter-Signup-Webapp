import React from "react";
import illustrationSignpMobile from "/illustration-sign-up-mobile.svg";

const Main = () => {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
      <div className="w-full">
        <img
          src={illustrationSignpMobile}
          alt="sign up illustration mobile"
          className="w-full"
        />
      </div>
      <div className="container flex flex-col flex-1 p-6 mx-auto bg-white"></div>
    </div>
  );
};

export default Main;
