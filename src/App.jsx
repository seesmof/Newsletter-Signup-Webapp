import { useState } from "react";
import HeroMobile from "./assets/images/illustration-sign-up-mobile.svg";
import HeroDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import BulletItem from "./assets/images/icon-list.svg";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background w-full flex items-center justify-center">
        <div className="bg-white lg:rounded-xl h-screen w-full">
          <div className="flex flex-col h-full">
            <img src={HeroMobile} alt="" />

            <section className="flex flex-col py-6 px-4 space-y-4">
              <h1 className="font-bold text-4xl">Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul className="flex flex-col space-y-3">
                <li className="flex flex-row items-center gap-3">
                  <img src={BulletItem} alt="" />
                  Product discovery and building what matters
                </li>
                <li className="flex flex-row items-center gap-3">
                  <img src={BulletItem} alt="" />
                  Measuring to ensure updates are a success
                </li>
                <li className="flex flex-row items-center gap-3">
                  <img src={BulletItem} alt="" />
                  And much more!
                </li>
              </ul>
            </section>

            <form
              className="flex flex-col px-4 py-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label htmlFor="email" className="text-sm font-bold mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full ring-2 ring-slate-200 rounded-lg px-4 py-2"
                placeholder="email@company.com"
              />
              <button className="w-full bg-black text-white py-3 mt-4 rounded-xl">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
