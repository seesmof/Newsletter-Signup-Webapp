import React from "react";
import iconList from "/icon-list.svg";

const Hero = () => {
  return (
    <>
      <div className="text-zinc-700 flex flex-col font-medium">
        <h1 className="text-slate-800 text-4xl font-bold">Stay updated!</h1>
        <p className=" py-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="flex flex-col gap-3"></div>
      </div>
    </>
  );
};

export default Hero;
