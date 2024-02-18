import React from "react";
import { support } from "../../data/support";

export const AboutSupport = () => {
  return (
    <div className="container-uz gap-20 grid grid-cols-4 w-[70%] font-Roboto pt-20 items-center">
      {support.map((item) => (
        <div key={item.id} className="bg-white rounded-xl p-5 text-center shadow-lg flex flex-col items-center hover:shadow-2xl ">
          <img src={item.img} alt="" />
          <h3 className="font-bold text-green-600 ">{item.title}</h3>
          <p className="text-secondary-500">{item.text}</p>
        </div>
      ))}
    </div>
  );
};
