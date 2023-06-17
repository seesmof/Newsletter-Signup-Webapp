import React, { useRef, useState } from "react";
import illustrationSignpMobile from "/illustration-sign-up-mobile.svg";
import Hero from "./components/Hero";
import SuccessModal from "./components/SuccessModal";

function App() {
  const emailValue = useRef();
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        {modalVisibility && (
          <SuccessModal
            onClose={() => setModalVisibility(false)}
            open={modalVisibility}
          >
            {emailValue.current.value}
          </SuccessModal>
        )}

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
            <button
              className="button mt-6"
              onClick={() => setModalVisibility(true)}
            >
              Subscribe to monthly newsletter
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
