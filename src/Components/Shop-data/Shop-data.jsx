import React, { useState } from "react";
import { products } from "../../data/product";
import { Button } from "../Buttons/Button";
import { Star } from "../../assets/icon/star";
import { Link } from "react-router-dom";

export const ShopData = () => {
  const [showMore, setShowMore] = useState(false);

  function toggleShowMore() {
    setShowMore(!showMore);
  }
  return (
    <div>
      <div className="grid grid-cols-4 container-uz gap-3 pt-20">
        {products.slice(0, showMore ? products.length : 4).map((item) => (
          <Link
            to={`/shops/${item.id}`}
            className="border shadow-md rounded-xl hover:shadow-2xl"
            key={item.id}
          >
            <div key={item.id} className="p-4  h-96">
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
      <div className="container-uz flex items-center pt-10">
        {products.length > 5 && (
          <div className="flex items-center mx-auto">
            {" "}
            <Button
              variant="border-green"
              className="cursor-pointer "
              onClick={toggleShowMore}
            >
              {showMore ? "Hide" : "Show " + `(${products.slice(0, 8).length})`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
