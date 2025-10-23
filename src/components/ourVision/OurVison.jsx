import React from "react";

import logo from "../../assets/little-girl-with-baby-kit-growing-plant-her-own.jpg";

const OurVision = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-emerald-500 mt-20">
        Remember Our Words.
      </h1>
      <p className="text-center text-xl my-4 font-medium mt-8 text-gray-500">
        It is very important to choose good toys <br /> to keep children happy
        and cheerful and to support their development
      </p>
      <div className="  flex justify-center items-center">
        <div className="rounded-md bg-pink-200 p-2 h-90 flex  justify-center items-center">
          <img
            className="h-full rounded-2xl hover:w-[700px]  "
            src={logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
