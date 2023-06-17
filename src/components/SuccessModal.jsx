import React from "react";
import Button from "../components/Button";
import iconList from "/icon-list.svg";

const SuccessModal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className="flex flex-col items-start justify-between w-full min-h-screen">
        <div className="flex flex-col items-start w-full p-6 mt-40">
          <img src={iconList} alt="" className="w-16" />
          <h3 className="my-6 text-5xl font-bold text-black">
            Thanks for subscribing!
          </h3>
          <p>
            A confirmation email has been sent to{" "}
            <span className="font-bold">
              {children ? children : "your email"}
            </span>
            . Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-6">
          <Button onClick={onClose}>Dismiss message</Button>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
