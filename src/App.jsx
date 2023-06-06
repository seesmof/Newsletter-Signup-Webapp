import React, { useRef, useState } from "react";
import illustrationSignpMobile from "/illustration-sign-up-mobile.svg";
import iconList from "/icon-list.svg";
import Hero from "./components/Hero";
import Button from "./components/Button";
import { twMerge } from "tailwind-merge";

const Success = ({ children }) => {
  return (
    <>
      <div className="text-zinc-700 absolute z-50 w-full h-screen bg-white">
        <div className="container flex flex-col justify-between h-screen p-6 pb-10 mx-auto">
          <div className="gap-7 flex flex-col flex-1 py-32">
            <img src={iconList} alt=" icon" className="w-16" />
            <h1 className="text-slate-800 text-[2.5rem] leading-[1.1] font-bold">
              Thanks for subscribing!
            </h1>
            <p className="font-medium">
              A confirmation email has been sent to{" "}
              <a href="#" className="font-bold">
                {children ? children : "your email"}
              </a>
              . Please open it and click the button inside to confirm your
              subscription.
            </p>
          </div>
          <Button>Dismiss message</Button>
        </div>
      </div>
    </>
  );
};

function App() {
  const emailRef = useRef();
  const [success, setSuccess] = useState(false);
  const onSubmit = () => setSuccess(true);
  const onDismiss = () => setSuccess(false);

  return (
    <>
      <div className="flex flex-col w-full min-h-screen overflow-hidden">
        <article className="">
          <div className="w-full">
            <img
              src={illustrationSignpMobile}
              alt="sign up illustration mobile"
              className="w-full"
            />
          </div>
          <div className="container flex flex-col justify-center flex-1 p-6 mx-auto bg-white">
            <Hero />
            <article className="flex flex-col justify-center">
              <div className="flex flex-col">
                <label
                  htmlFor="email-input"
                  className="text-slate-800 pb-2 text-sm font-bold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="email@company.com"
                  className="px-6 py-2 mb-4 text-lg border-2 border-gray-300 rounded-md"
                  ref={emailRef}
                  required
                />
                <Button type={"submit"} onClick={onSubmit}>
                  Subscribe to monthly newsletter
                </Button>
              </div>
            </article>{" "}
          </div>
        </article>

        {success && (
          <Success onDismiss={onDismiss}>{emailRef.current.value}</Success>
        )}
      </div>
    </>
  );
}

export default App;
