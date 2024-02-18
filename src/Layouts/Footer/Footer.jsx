import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icon/Logo";
import { Instagram } from "../../assets/icon/instagram";
import { Facebook } from "../../assets/icon/facebook";
import { Twitter } from "../../assets/icon/twitter";
import { Pinterest } from "../../assets/icon/pinterest";

export const Footer = () => {
  return (
    <div className="mt-36">
      <div className="bg-white p-8 mt-10 font-Roboto ">
        <div className="container-uz flex justify-evenly">
          <div className="text-end flex gap-5">
            <div>
              <h1 className="text-xl font-bold text-green-600">Contact Us</h1>
              <ul className="text-green-600 flex flex-col gap-1">
                <div>
                  <h4 className="font-bold">Email</h4>
                  <Link to={"mailto:needhelp@Organia.com"}>
                    needhelp@Organia.com
                  </Link>
                </div>

                <div className="text-green-600 font-medium">
                  <h4 className="font-bold">Phone</h4>
                  <Link to={"tel:+666888888"}>666 888 888</Link>
                </div>
                <div className="">
                  <h4 className="font-bold">Address</h4>
                  <Link>88 road, borklyn street, USA</Link>
                </div>
              </ul>
            </div>
            <div className="border "></div>
          </div>
          <div className="flex items-center flex-col">
            <Link>
              <Logo />
            </Link>
            <h2 className="text-center w-[543px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <Link>
                <Instagram />
              </Link>
              <Link>
                <Facebook />
              </Link>
              <Link>
                <Twitter />
              </Link>
              <Link>
                <Pinterest />
              </Link>
            </div>
          </div>
          <div className="text-start flex flex-col text-green-600 ">
            <div className="flex gap-5">
              <div className="border"></div>
              <div>
                <h1 className="font-bold text-xl">Utility Pages</h1>
                <ul className="flex flex-col gap-2">
                  <Link>Style Guide</Link>
                  <Link>404 Not Found</Link>
                  <Link>Password Protected</Link>
                  <Link>Licences</Link>
                  <Link>Changelog</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-wheat p-3 font-Roboto">
        <h1 className="text-center text-secondary-500">
          Copyright © <span className="font-bold text-green-600">Organick</span>{" "}
          | Designed by{" "}
          <span className="font-bold text-green-600">VictorFlow</span> Templates
          - Powered by <span className="font-bold text-green-600">Webflow</span>
        </h1>
      </div>
    </div>
  );
};
