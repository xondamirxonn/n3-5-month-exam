import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/product";
import { NotFound } from "../NotFound/NotFound";
import { Star } from "../../assets/icon/star";
import { Button } from "../../Components/Buttons/Button";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import { ShopsSingle } from "../../Components/Shop-data/Shops-single";
import { Showcase } from "../../Components/Banner/Showcase";
import Shop_Single from "../../assets/shopSingle-bg.png";
import { products2 } from "../../data/products2";
export const ShopSingle = () => {
  const { id } = useParams();
  const product =
    products.find((product) => product.id == id) || products2.find((product) => product.id == id);
  const [number, setNumber] = useState(1);
  const [prices, setPrices] = useState(product?.price);

  const Plus = () => {
    setNumber(number + 1);
    setPrices(prices + product.price);
  };
  const Minus = () => {
    if (number <= 0) {
      return 0;
    } else {
      setNumber(number - 1);
      setPrices(prices - product.price);
    }
  };

  return (
    <div>
      <div className="">
        <div className="">
          {product ? (
            <div className="">
              <Showcase img={Shop_Single} title={"Shop Single"} />
              <div className="flex gap-24 container-uz pt-20">
                <div className="bg-white1 p-5 rounded-xl shadow-2xl w-[500px] relative">
                  <span className="absolute top-5 bg-green-600 p-2 text-white rounded-lg">
                    {product?.sort}
                  </span>
                  <img className="flex mx-auto" src={product?.img} alt="" />
                </div>
                <div>
                  <h1 className="font-bold text-green-600 text-4xl">
                    {product?.title}
                  </h1>
                  <div className="mt-3">
                    <Star />
                  </div>
                  <div className="flex items-center gap-2">
                    <del className="text-secondary-500 font-normal">
                      ${product?.delPrice}.00
                    </del>
                    <p className="font-bold text-green-600">
                      ${product?.price}.00
                    </p>
                  </div>
                  <p className="text-secondary-500 w-[530px] mt-5">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="flex items-center gap-5 mt-5">
                    <h4>Quantity:</h4>
                    <div className="flex items-center gap-1 border-green-600 border py-2 w-24 rounded-xl">
                      <button onClick={Minus} className="text-2xl px-3">
                        -
                      </button>
                      <h2 className="text-2xl">{number}</h2>
                      <button onClick={Plus} className="text-2xl px-2">
                        +
                      </button>
                    </div>
                    <Button variant="primary" className="text-white font-bold">
                      Add To Cart
                    </Button>
                  </div>
                  <h1>${prices}.00</h1>
                </div>
              </div>
              <ShopsSingle />
              <Subscribe />
            </div>
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
};
