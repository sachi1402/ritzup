import React from "react";
import { BsStarFill } from "react-icons/bs";

const Card2 = ({ title, image, price }) => {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100 bg-gradient rounded-bottom-13rem"></div>
      <div className="d-flex">
        {/* Background */}
        <img
          src={image}
          alt=""
          className="object-fit rounded-13rem sm-height-17rem md-height-13rem w-100"
        />
        {/* Title */}
        <div className="position-absolute text-white font-weight-bold bottom-6 start-6 fs-22 d-flex align-items-center gap-2">
          {title}
          <span>&#x2022;</span>
          <p className="fs-18 text-slate-200"> ${price}</p>
        </div>
      </div>
      {/* Description */}
      <div className="pt-3 d-flex justify-content-between align-items-start">
        {/* Left */}
        <div className="">
          <p className="max-width-17rem font-weight-semibold fs-17">
            This is a rare find
          </p>
          <p className="max-width-17rem fs-16 mt-n1 text-gray-500">
            Jan 28 - Aug 9
          </p>
          <p className="max-width-17rem font-weight-semibold fs-17">${price}</p>
        </div>
        {/* Right */}
        <div className="d-flex align-items-center space-x-1">
          <BsStarFill />
          <p className="fs-15">5.0</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
