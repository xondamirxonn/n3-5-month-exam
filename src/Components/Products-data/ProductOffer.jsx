import React from 'react'
import { products2 } from '../../data/products2';
import { Button } from '../Buttons/Button';
import { Star } from '../../assets/icon/star';
import { Link } from 'react-router-dom';

export const ProductOffer = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-4 container-uz gap-3 font-Roboto ">
        {products2.map((item) => (
          <Link
            to={`/shops/${item.id}`}
            key={item.id}
            className="border shadow-md rounded-xl bg-white1 hover:shadow-lg "
          >
            <div className="p-4  h-96 flex items-center flex-col ">
              <div className='mr-20'>
                <Button variant="primary" className="text-white">
                  {item.sort}
                </Button>
              </div>
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
    </div>
  );
}
