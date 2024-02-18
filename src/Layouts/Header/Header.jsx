import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./../../assets/icon/Logo";
import { Search } from "./../../assets/icon/Search";
import { Cart } from "../../assets/icon/Cart";

export const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="container-uz py-6 font-Roboto">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-16 ">
          <Link to={"/"}>
            <Logo />
          </Link>
          <ul className=" flex gap-3 text-green-600 font-medium ">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/pages"}>Pages</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/news"}>News</Link>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <div
            onClick={() => setSearch(!search)}
            className="bg-lime cursor-pointer  p-3 rounded-full z-[1] relative  "
          >
            <Search />
          </div>
          {search ? (
            <input
              type="text"
              className=" w-72 absolute outline-none  right-[19.5%] border-lime border pr-14 px-6 p-3 rounded-full"
            />
          ) : (
            search
          )}
          <div className="bg-white-50 w-32 rounded-full flex items-center gap-3 p-1 cursor-pointer">
            <div className="bg-green-600 p-2.5 rounded-full ">
              <Cart />
            </div>
            <h1>Cart (0)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
