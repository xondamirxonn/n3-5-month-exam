import React from "react";
import { stats } from "../../../data/stats";

export const Stats = () => {
  return (
    <div className="flex justify-center gap-5 ">
      {stats.map((item) => (
        <div key={item.id} className="w-36 h-36 rounded-full border-lime border bg-green-50 justify-center flex items-center flex-col ">
          <h3 className="font-bold text-green-600 text-3xl">{item.numbers}</h3>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
