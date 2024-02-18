import React from 'react'
import { Subscribe } from '../../Components/Subscribe/Subscribe'
import './shop.css'
import { ShopData } from '../../Components/Shop-data/Shop-data';
import { Showcase } from '../../Components/Banner/Showcase';
import Shop_bg from '../../assets/shop-bg.png'
export const Shop = () => {
  return (
    <div>
      <Showcase img={Shop_bg} title={"Shop"} />

      <ShopData />
      <Subscribe />
    </div>
  );
}
