import React from "react";
import RadioOption from "./RadioOption";

const OffComponent = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-100 ">
      <div className="flex my-4 pb-5 border-b w-4/5">
        <span>icon here</span>
        <p className="text-sm font-bold">Cancellation Survey</p>
      </div>
      <div className="bg-white w-4/5 rounded-lg flex  justify-center">
        <div className="w-4/5 p-5">
          <div className="text-center w-full">
            <h3 className="text-lg font-bold">We're sad to see you go...</h3>
            <p>Can you tell us why you want to cancel the membership?</p>
          </div>
          <div className="w-full">

          
          < RadioOption />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffComponent;
