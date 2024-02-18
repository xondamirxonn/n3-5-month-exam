import React from 'react'
import { aboutUsData } from '../../data/aboutus-data'

export const AboutUs = () => {
  return (
    <div className="container-uz flex justify-between gap-5 pt-4 ">
      {aboutUsData.map((item) => (
        <div key={item.id}>
          <div className=" ">
            <img
              className="bg-white1 p-5 rounded-2xl h-72 w-[350px] "
              src={item.img}
            />
          </div>
          <p className='text-white1 text-center text-xl py-2'>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
