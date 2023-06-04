import React from "react";
import iconList from "/icon-list.svg";

const Hero = () => {
  const listItem = (text) => {
    return (
      <>
        <div className="flex flex-row items-center gap-4">
          <img src={iconList} alt="icon" className="w-5 h-5" />
          <p className="">{text}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="text-zinc-700 text-[1.05rem] pt-5 pb-8 flex flex-col font-medium">
        <h1 className="text-slate-800 text-[2.5rem] leading-tight font-bold">
          Stay updated!
        </h1>
        <p className="py-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="flex flex-col gap-3">
          {listItem("Product discovery and building what matters")}
          {listItem("Measuring to ensure updates are a success")}
          {listItem("And much more!")}
        </div>
      </div>
    </>
  );
};

export default Hero;
