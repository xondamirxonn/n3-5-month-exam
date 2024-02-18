import React from 'react'
import { foodCart } from '../../../data/foods-card'
import { Button } from '../../../Components/Buttons/Button'

export const OrganicFood = () => {
  return (
    <div className='mt-20 flex gap-10 font-Roboto'>
      {foodCart.map((item)=> (
        <div key={item.id} className='relative '>
          <img src={item.img} alt="" />
          <Button variant="white" className=" top-48 absolute grid left-40 font-semibold text-green-600" >{item.name}</Button>
        </div>
      ))}
    </div>
  )
}
