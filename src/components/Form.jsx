import React from "react";

const Form = () => {
  return (
    <>
      <form action="" className="flex flex-col">
        <div className="flex flex-col">
          <label
            htmlFor="email-input"
            className="text-slate-800 pb-2 text-sm font-bold"
          >
            Email address
          </label>
          <input
            type="text"
            placeholder="email@company.com"
            className="px-6 py-2 text-lg border-2 border-gray-300 rounded-md"
            id="email-input"
          />
          <button
            type="submit"
            className="bg-slate-800 px-6 py-4 mt-6 font-medium text-white rounded-lg"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
