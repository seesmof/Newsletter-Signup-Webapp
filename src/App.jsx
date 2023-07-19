import { useRef, useState } from "react";
import HeroMobile from "./assets/images/illustration-sign-up-mobile.svg";
import HeroDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import BulletItem from "./assets/images/icon-list.svg";

function App() {
  const email = useRef("");
  const [emailSent, setEmailSent] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const [emailError, setEmailError] = useState(false);

  const Confirmation = ({ email = "your inbox" }) => {
    return (
      <>
        <div className="h-screen w-full bg-white flex-col flex">
          <div className="flex flex-col p-4 h-full justify-between">
            <div className="flex flex-col space-y-5 py-24">
              <img src={BulletItem} alt="" className="w-16 h-16" />
              <h2 className="font-bold text-3xl">Thanks for subscribing!</h2>
              <p>
                A confirmation email has been sent to{" "}
                <span className="font-bold">{email}</span>. Please open it and
                click the button inside to confirm your subscription
              </p>
            </div>
            <button
              className="button self-end"
              onClick={() => setEmailSent(false)}
            >
              Dismiss message
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-background font-medium w-full flex items-center justify-center">
        {emailSent ? (
          <Confirmation email={email.current.value} />
        ) : (
          <>
            <div className="bg-white lg:rounded-xl h-screen w-full">
              <div className="flex flex-col h-full">
                <img src={HeroMobile} alt="" />

                <section className="flex flex-col p-6 py-8 space-y-4">
                  <h1 className="font-bold text-4xl">Stay updated!</h1>
                  <p>
                    Join 60,000+ product managers receiving monthly updates on:
                  </p>
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
                    if (email.current.value) {
                      if (emailRegex.test(email.current.value)) {
                        setEmailSent(true);
                        setEmailError(false);
                      } else {
                        setEmailError(true);
                      }
                    }
                  }}
                >
                  <div className="flex w-full flex-row justify-between">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold mb-2 accent-orange-500"
                    >
                      Email address
                    </label>
                    {emailError && (
                      <span className="text-sm text-orange-600">
                        Valid email required
                      </span>
                    )}
                  </div>

                  <input
                    type="email"
                    id="email"
                    className={`w-full ring-2 ring-slate-200 rounded-lg px-4 py-2 font-normal ${
                      emailError &&
                      "ring-orange-600 bg-orange-200/50 text-orange-600"
                    }`}
                    placeholder="email@company.com"
                    required
                    ref={email}
                  />
                  <button className="button mt-6">
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
