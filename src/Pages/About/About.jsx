import React from "react";
import "./About.css";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import Main from "../../assets/aboutMain.png";
import { AboutMain } from "./Components/About-Main";
import { HomeIcon } from "./../../assets/icon/Home-icon";
import { Truck } from "./../../assets/icon/Truck";
import { Button } from "../../Components/Buttons/Button";
import Section from "../../assets/about-section.png";
import { AboutSupport } from "../../Components/About-data/About-support";
import { Team } from "../../Components/About-data/Team";
import { AboutUs } from "../../Components/About-data/AboutUs";
import { Showcase } from "../../Components/Banner/Showcase";
import About_bg from '../../assets/About-bg.png'
import { Rigth } from "../../assets/icon/rigth";
export const About = () => {
  return (
    <div>
      <Showcase img={About_bg} title={"About Us"} />

      <main className="container-uz flex pt-20">
        <img className="main-img" src={Main} alt="" />
        <div>
          <p className="font-tail text-lime text-2xl">About Us</p>
          <h1 className="text-green-600 font-bold text-3xl w-72">
            We do Creative Things for Success
          </h1>
          <AboutMain
            text={
              "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
          />

          <AboutMain
            text={
              "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
          />
          <div className="grid grid-cols-2">
            <AboutMain
              icon={<Truck />}
              title={"Modern Agriculture Equipment"}
            />
            <AboutMain
              icon={<HomeIcon />}
              title={"No growth hormones are used"}
            />
            <Button variant="primary" className="text-white mt-5 flex items-end justify-center gap-2">
              Explore More <Rigth />
            </Button>
          </div>
        </div>
      </main>
      <section className="container-uz font-Roboto flex justify-between w-full items-center pt-20">
        <div>
          <p className="font-tail text-2xl text-lime">Why Choose us?</p>
          <h1 className="text-3xl text-green-600 font-bold w-96">
            We do not buy from the open market & traders.
          </h1>

          <p className="text-secondary-500 w-[490px] mt-5 text-sm">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <div>
            <div className="bg-white-50 p-3 w-56 rounded-full flex items-center gap-3 mt-5">
              <input className="" type="radio" name="radioGroup" id="input" />
              <label htmlFor="input" className="text-green-600 font-medium">
                100% Natural Product
              </label>
            </div>
            <p className="text-secondary-500 w-96 mt-3 mx-4">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
          <div>
            <div className="bg-white-50 p-3 w-56 rounded-full flex items-center gap-3 mt-5">
              <input className="" type="radio" id="input2" name="radioGroup" />
              <label htmlFor="input2" className="text-green-600 font-medium">
                100% Natural Product
              </label>
            </div>
            <p className="text-secondary-500 w-96 mt-3 mx-4">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
        </div>
        <div>
          <img className="section-img" src={Section} alt="" />
        </div>
      </section>

      <AboutSupport />

      <section className="container-uz pt-44">
        <p className="font-tail text-2xl text-lime text-center">Team</p>
        <h1 className="text-green-600 font-bold text-4xl text-center">
          Our Organic Experts
        </h1>
        <p className="text-secondary-500 text-center w-[750px] mx-auto mt-2">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <Team />
      </section>

      <section className="bg-green-600 p-5 mt-20 font-Roboto">
        <p className="font-tail text-lime text-center text-2xl">About Us</p>
        <h1 className="text-white1 font-bold text-3xl text-center">
          What We Offer for You
        </h1>
        <AboutUs />
      </section>

      <Subscribe />
    </div>
  );
};
