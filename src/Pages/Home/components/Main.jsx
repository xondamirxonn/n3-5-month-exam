import React from "react";
export const Main = ({ img, title, text, title2, className }) => {
  return (
    <div className="relative ">
      <img src={img} alt="" />
      <div className={className}>
        <p className="font-tail text-4xl ">{title}</p>
        <p className="font-tail text-lime text-4xl">{title2}</p>
        <p className="font-Roboto text-5xl w-[65%] font-bold ">{text}</p>
      </div>
    </div>
  );
};
