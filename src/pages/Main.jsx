import React, { useRef, useState } from "react";
import illustrationSignpMobile from "/illustration-sign-up-mobile.svg";
import Hero from "../components/Hero";
import Success from "../components/Success";
import Button from "../components/Button";

const Main = () => {
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
      <article className="block">
        <div className="w-full">
          <img
            src={illustrationSignpMobile}
            alt="sign up illustration mobile"
            className="w-full"
          />
        </div>
        <div className="container flex flex-col justify-center flex-1 p-6 mx-auto bg-white">
          <Hero />
          <form action="" className="flex flex-col justify-center">
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
                id="email-input"
                required
              />
              <Button type={"submit"}>Subscribe to monthly newsletter</Button>
            </div>
          </form>{" "}
        </div>
      </article>
    </div>
  );
};

export default Main;
