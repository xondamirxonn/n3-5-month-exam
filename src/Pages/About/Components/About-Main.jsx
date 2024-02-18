import React from "react";

export const AboutMain = ({ text, icon, title, className }) => {
  return (
    <div className="font-Roboto">
      <p className="text-secondary-500  py-3">{text}</p>
      <div className="flex items-center gap-2">
        {icon}
     
          <h2 className="font-bold text-2xl text-green-600 w-56">{title}</h2>
    
      </div>
    </div>
  );
};
