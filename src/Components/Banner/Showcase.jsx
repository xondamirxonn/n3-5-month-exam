import React from 'react'

export const Showcase = ({img, title}) => {
  return (
    <div className="relative flex items-center text-center ">
      <img src={img} alt="" />
      <h1 className="absolute  z-10 font-bold text-5xl text-green-600 left-[38%]">
        {title}
      </h1>
    </div>
  );
}
