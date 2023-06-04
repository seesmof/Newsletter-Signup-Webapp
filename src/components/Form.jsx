import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  return (
    <>
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
      </form>
    </>
  );
};

export default Form;
