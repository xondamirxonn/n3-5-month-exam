import React from 'react'
import { AboutUsText } from '../../../data/product'
import { Ofood } from '../../../assets/icon/Ofood'

export const AboutUsComponent = ({title, text, icon: Icon}) => {
  return (
    <div className="flex font-Roboto items-center mt-3 gap-3">
      <div className='bg-white p-3 rounded-md '> {Icon}</div>
      <div>
        <h1 className='font-bold text-green-600'>{title}</h1>
        <p className='text-secondary-500 w-96'>{text}</p>
      </div>
    </div>
  );
}
