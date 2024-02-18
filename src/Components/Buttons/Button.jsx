import clsx from 'clsx'
import React from 'react'

export const Button = ({children, variant, className, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className={clsx( "border py-3  rounded-lg  w-[150px]", {

        "bg-green-600 border-transparent" : variant === "primary",
        "bg-lime" : variant === "lime",
        "bg-yellow border-transparent" : variant === "yellow",
        "bg-secondary-50" : variant === "secondary-50",
        "bg-white" : variant === "white",
        "bg-green-50" : variant === "green-50",
        "bg-secondary-500" : variant === "secondary-500" ,
        " border-green-600" : variant === "border-green" 
        
      }, className ) }>{children}</button>
    </div>
  )
}
