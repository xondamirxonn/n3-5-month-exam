import React from "react";
import { newsData } from "../../../data/news-data";
import { Person } from "../../../assets/icon/person";
import { Button } from "../../../Components/Buttons/Button";
import { Rigth } from "../../../assets/icon/rigth";

export const News = () => {
  return (
    <div className="flex justify-between gap-10 mt-8">
      {newsData.map((item) => (
        <div key={item.id} className="relative">
          <img src={item.img}  alt="" />
          <div className="absolute top-10 left-10 w-20 flex items-center justify-center  h-20 rounded-full bg-white font-bold text-green-600">
            {item.data}
          </div>
          <div className="absolute p-8 bg-white -bottom-14 rounded-2xl left-10 shadow-xl ">
            <div className="flex items-center gap-3">
              <Person />
              <p>{item.writer}</p>
            </div>
            <h1 className="text-xl font-bold text-green-600">{item.title}</h1>
            <p className="text-secondary-500 w-96">{item.text}</p>
            <Button variant="yellow" className="text-green-600 font-bold my-2 flex justify-center items-center gap-2">
              Read More <Rigth />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
