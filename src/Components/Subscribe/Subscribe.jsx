import React from 'react'
import './subscribe.css'
import { Button } from '../Buttons/Button';
export const Subscribe = () => {
  return (
    <div className="container-uz pt-28 font-Roboto ">
      <div className="subs-bg flex items-center ">
        <div className="flex w-full justify-around">
          <h1 className="text-4xl w-72 text-white">
            Subscribe to our Newsletter
          </h1>

          <form className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Your Email Address"
              className="p-3 rounded-md px-10 "
            />
            <Button className=" text-white" variant="primary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
