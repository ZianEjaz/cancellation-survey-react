import React from "react";
import RadioOption from "./RadioOption";
import Error from "./Error";
import TextArea from "./TextArea";
import Dropdown from "./Dropdown";

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
            <TextArea placeholder="What is the better solution? If you don't mind sharing, Your feedback is much appreciated!" />
            <RadioOption label="it's too expensive" />
            <RadioOption label="Bugs, things not working properly" />
            <div className="flex items-center p-4 font-bold mt-7">
              <h4 >
                Which product(s) did you have an issue with?
                </h4>
                <svg
            className="fill-current h-4 w-4 text-white ml-4 bg-gray-700 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
              
            </div>
            
            <Dropdown placeholder="Select Product(s)" productsArray = {["product1", "product 1","product 2","product 3","product 4"]}/>
            <div className="flex items-center p-4 font-bold mt-7">
            <h4 >
                What was it?
                </h4>
            </div>
            <RadioOption label="I just want to pay for a single plugin" />
            <RadioOption label="Not using Wordpress anymore" />
            <RadioOption label="Other" />
            <span className="my-5">
              <Error
                message={`Are you absolutely sure you want to cancel? if you do you"ll lose access to so many cool things. and you"ll lose the chance to stay on this plan at the same cost of ongoing (regardless of future price increases)`}
              />
            </span>
          </div>
          <div className="w-full py-4 flex justify-between justify-end">
            <button
              className="border-gray-300 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
              type="button"
            >
              Back
            </button>
            <div className="place-self-end">
              <button
                className="justify-self-end self-end place-self-end bg-red-500 text-white active:bg-red-600 font-bold text-sm px-6 py-2 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
                type="button"
              >
                Cancel Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffComponent;
