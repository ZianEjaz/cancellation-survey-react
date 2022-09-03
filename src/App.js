import React, { useState } from "react";
import OffComponent from "./components/OffComponent";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [getDiscount, setGetDiscount] = useState(false);
  return (
    <>
      {!getDiscount ? (
        <>
          <div className="flex justify-center p-5">
            <>
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Cancel Subscription
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-wrap w-full bg-white outline-none focus:outline-none p-5">
                        <div className="w-1/5">icon here</div>
                        <div className="w-4/5">
                          {/*header*/}
                          <div className="flex items-start justify-center p-2 border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-bold">
                              Before You Go...
                              <br />
                              Would 50% Off For 6 Months Help?
                            </h3>
                            <button
                              className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <p className="my-1">
                              We know things REALLY suck in the world right now-
                              and many businesses and freelancers are struggling
                              to stay afloat during this covid-19 crisis.
                            </p>
                            <p className="font-bold my-4">
                              So if you could use the extra coushion, grab 50%
                              off for 6 months.
                            </p>
                            <p>We hope you're staying safe and healthy!</p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-start p-6 ">
                            <button
                              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setGetDiscount(true)}
                            >
                              50% Off For 6 Months
                            </button>
                            <button
                              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              NO thanks! i'll Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
          </div>
        </>
      ) : (
        <OffComponent />
      )}
    </>
  );
};

export default App;
