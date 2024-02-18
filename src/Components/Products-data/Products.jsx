import React, { useState } from "react";
import { products } from "../../data/product";
import { Star } from "../../assets/icon/star";
import { Button } from "../Buttons/Button";
import { Link } from "react-router-dom";

export const Products = () => {
  const slices = products.slice(0, 8);
   
  return (
    <div className="grid grid-cols-4 container-uz gap-3 ">
      {slices.map((item) => (
        <Link
          to={`/shops/${item.id}`}
          key={item.id}
          className="border shadow-md rounded-xl hover:shadow-2xl"
        >
          <div className="p-4  h-96">
            <Button variant="primary" className="text-white ">
              {item.sort}
            </Button>
            <img src={item.img} alt="" />
          </div>
          <div className="bg-white rounded-xl p-3 px-8 ">
            <h1 className="font-bold text-green-600 text-lg">{item.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <del className="text-secondary-500 font-medium">
                  ${item.delPrice}.00
                </del>
                <p className="text-green-600 font-bold">${item.price}.00</p>
              </div>
              <Star />
            </div>
          </div>
        </Link>
      ))}
     
    </div>
  );
};
