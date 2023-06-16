import React, { useRef, useState } from "react";
import illustrationSignpMobile from "/illustration-sign-up-mobile.svg";
import iconList from "/icon-list.svg";
import Hero from "./components/Hero";
import Button from "./components/Button";
import { twMerge } from "tailwind-merge";

function App() {
  const emailValue = useRef();
  const [modalVisibility, setModalVisibility] = useState(false);

  const SuccessModal = ({ children }) => {
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
            <Button
              onClick={() => {
                toggleModelVisibility();
              }}
            >
              Dismiss message
            </Button>
          </div>
        </div>
      </>
    );
  };

  const toggleModelVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <>
      <div className="flex flex-col">
        <SuccessModal
          id="model"
          className={twMerge(modalVisibility ? "block" : "hidden")}
        >
          {emailValue.current.value}
        </SuccessModal>

        <img src={illustrationSignpMobile} alt="" />
        <div className="p-6">
          <Hero />

          <section className="flex flex-col pt-10">
            <h3 className="font-medium text-black">Email address</h3>
            <input
              type="text"
              className="border-slate-300 w-full px-5 py-2 mt-2 border rounded-md"
              placeholder="email@company.com"
              ref={emailValue}
            />
            <button className="button mt-6">
              Subscribe to monthly newsletter
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
