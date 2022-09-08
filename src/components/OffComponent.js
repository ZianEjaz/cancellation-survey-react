import React from "react";
import RadioOption from "./RadioOption";
import Error from "./Error";
const OffComponent = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-100 ">
      <div className="flex my-4 pb-5 border-b w-3/5 py-4">
        <span>icon here</span>
        <p className=" font-bold">Cancellation Survey</p>
      </div>
      <div className="bg-white w-3/5 rounded-lg flex  justify-center">
        <div className="lg:w-3/5 p-5">
          <div className="text-center w-full py-10">
            <h3 className="text-2xl font-bold p-3">
              We're sad to see you go...
            </h3>
            <p>Can you tell us why you want to cancel the membership?</p>
          </div>
          <div className="w-full">
            <RadioOption label="I didn't relize it was a recurring membership" />
            <RadioOption label="Found a better solution" />
            <RadioOption label="it's too expensive" />
            <RadioOption label="Bugs, things not working properly" />
            <RadioOption label="I just want to pay for a single plugin" />
            <RadioOption label="Not using Wordpress anymore" />
            <RadioOption label="Other" />
            <span className="my-5">
              <Error
                message={`Are you absolutely sure you want to cancel? if you do you"ll lose access to so many cool things. and you"ll lose the chance to stay on this plan at the same cost of ongoing (regardless of future price increases)`}
              />
            </span>
          </div>
          <div className="flex w-full py-4">
            <button
              className="border-gray-300 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
              type="button"
            >
              Back
            </button>
          

            <button
              className=" bg-red-500 text-white active:bg-red-600 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
              type="button"
            >
              Cancel Membership
            </button>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffComponent;
