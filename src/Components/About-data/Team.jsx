import React from "react";
import { team } from "../../data/team";
import { Facebook } from "./../../assets/icon/facebook";
import { Instagram } from "./../../assets/icon/instagram";
import { Twitter } from "./../../assets/icon/twitter";
import { Link } from "react-router-dom";

export const Team = () => {
  return (
    <div className="container-uz flex justify-between gap-10 pt-20 cursor-pointer">
      {team.map((item) => (
        <div
          key={item.id}
          className="hover:scale-110 hover:ease-linear hover:duration-500 hover:shadow-2xl"
        >
          <img className="rounded-t-xl" src={item.img} alt="" />
          <div className="bg-white-50 p-3 rounded-b-xl ">
            <h3 className="text-green-600 font-medium text-2xl ">
              {item.name}
            </h3>
            <div className="flex items-center justify-between">
              <p className="font-tail text-lime text-xl">{item.profession}</p>
              <div className=" flex items-center gap-2 ">
                <Link to={"https://facebook.com"}>
                  <Facebook />
                </Link>

                <Link to={"https://instagram.com"}>
                  <Instagram />
                </Link>
                <Link to={"https://x.com"}>
                  <Twitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
