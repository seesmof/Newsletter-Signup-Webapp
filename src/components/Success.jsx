import React from "react";
import Button from "./Button";
import iconList from "/icon-list.svg";

const Success = ({ children }) => {
  return (
    <>
      <div className="text-zinc-700 min-h-screen bg-white">
        <div className="container flex flex-col justify-between h-full p-6 mx-auto">
          <div className="gap-7 flex flex-col flex-1">
            <img src={iconList} alt=" icon" className="w-16" />
            <h1 className="text-slate-800 text-[2.5rem] leading-[1.1] font-bold">
              Thanks for subscribing!
            </h1>
            <p className="font-medium">
              A confirmation email has been sent to{" "}
              <a href="#" className="font-bold"></a>. Please open it and click
              the button inside to confirm your subscription.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
