import React from 'react'
import Not from '../../assets/notFound-bg.png'
import { Button } from '../../Components/Buttons/Button';
import { useNavigate } from 'react-router-dom';
export const NotFound = () => {
  const navigate = useNavigate()

  const Back = () => {
    navigate("/")
  }
  return (
    <div className="relative flex items-center font-Roboto">
      <img src={Not} alt="" />
      <div className="absolute right-52 ">
        <h1 className="text-[300px] font-bold text-secondary-500">404</h1>
        <h2 className="text-[50px] font-bold text-green-600 -mt-20">
          Page not found
        </h2>
        <p className='text-sm'>The page you are looking for doesn't exist or has been moved</p>
        <Button onClick={Back} variant="primary" className="text-white font-bold mt-3">Go To HomePage</Button>
      </div>
    </div>
  );
}
