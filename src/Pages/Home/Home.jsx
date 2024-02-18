import React from "react";
import { Button } from "../../Components/Buttons/Button";
import "./home.css";
import { Subscribe } from "../../Components/Subscribe/Subscribe";
import MainImg from "../../assets/main-bg.png";
import MainImg2 from "../../assets/main-bg2.png";
import { Search } from "../../assets/icon/Search";
import banana from "../../assets/banana.png";
import { Products } from "../../Components/Products-data/Products";
import AboutUs from "../../assets/aboutUs.png";
import { AboutUsComponent } from "./components/AboutUs";
import { Ofood } from "../../assets/icon/Ofood";
import { Box } from "../../assets/icon/Box";
import { Main } from "./components/Main";
import avatar from "../../assets/teste-avatar.png";
import { Star } from "../../assets/icon/star";
import dots from "../../assets/dots.png";
import { Stats } from "./components/Stats";
import { ProductOffer } from "../../Components/Products-data/ProductOffer";
import Eco from "../../assets/ecofriendly.png";
import { OrganicFood } from "./components/OrganicFood";
import { News } from "./components/News";
import { Rigth } from "../../assets/icon/rigth";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate()
  const LoadMore = () => {
   navigate("/shop")
  }
   return (
    <div className="font-Roboto">
      <div className="home-bg flex items-center">
        <div className="max-w-[1200px] mx-auto w-full">
          <h3 className="font-tail text-lime text-2xl ">100% Natural Food</h3>
          <h1 className="text-5xl w-[361px] font-bold text-green-600">
            Choose the best healthier way of life
          </h1>
          <Button
            className=" mt-4 flex items-end gap-3 justify-center"
            variant="yellow"
          >
            Explore Now <Rigth />
          </Button>
        </div>
      </div>
      <main className="container-uz pt-20 flex gap-20">
        <Main
          className="text-white absolute top-24 flex flex-col items-start left-20 "
          img={MainImg}
          title={"Natural"}
          text={"Get Garden Fresh Fruits"}
        />{" "}
        <Main
          className="text-green-600 absolute top-24 flex flex-col items-start left-20 "
          img={MainImg2}
          title2={"Offer"}
          text={"Get 10% off on Vegetables"}
        />
      </main>
      <section className="bg-white p-10 mt-10 flex items-center">
        <img src={AboutUs} alt="" />
        <div>
          <p className="font-tail text-lime text-2xl ">About Us</p>
          <h1 className="text-green-600 font-bold text-3xl w-80 font-Roboto">
            We Believe in Working Accredited Farmers
          </h1>
          <p className="text-secondary-500 w-[520px] text-sm mt-3 font-normal font-Roboto">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <AboutUsComponent
            icon={<Ofood />}
            title={"Organic Foods Only"}
            text={
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            }
          />
          <AboutUsComponent
            icon={<Box />}
            title={"Quality Standards"}
            text={
              "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            }
          />
          <Button variant="primary" className="text-white my-10 flex items-end gap-2 justify-center">
            Shop Now <Rigth />
          </Button>
        </div>
      </section>
      <div>
        <p className="font-tail text-xl text-center text-lime mt-20">
          Categories{" "}
        </p>
        <h1 className="font-Roboto text-center text-4xl font-bold text-green-600">
          Our Products
        </h1>
        <Products />
        <Button
          variant="primary"
          className="flex justify-center mx-auto mt-16 text-white gap-2 items-center"
          onClick={LoadMore}
        >
          Load More <Rigth />
        </Button>
      </div>
      <section className="test-bg mt-20 grid items-center ">
        <div className="text-center grid justify-center ">
          <p className="font-tail text-2xl text-lime">Testimonial</p>
          <h1 className="text-green-600 font-bold text-4xl">
            What Our Customer Saying?
          </h1>
          <div className="flex flex-col items-center">
            <img className=" mt-2" src={avatar} alt="" />
            <Star />
          </div>
          <div className="flex justify-center flex-col items-center">
            <p className="text-secondary-500 text-center w-[58%] mx-auto mt-10">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <h4 className="text-green-600 font-bold text-2xl py-5">
              Sara Taylor
            </h4>
            <p className="text-secondary-500 -m-4">Customer</p>
            <img className="py-8" src={dots} alt="" />
          </div>

          <Stats />
        </div>
      </section>

      <section className="bg-green-600 my-20 ">
        <div className="container-uz py-10 flex justify-between items-end">
          <div className="font-Roboto">
            <p className="font-tail text-3xl text-lime">Offer</p>
            <h2 className="text-5xl font-bold text-white">
              We Offer Organic For You
            </h2>
          </div>
          <Button
            variant="yellow"
            className="text-green-600 font-medium font-Roboto flex items-center  gap-0.5 justify-center"
          >
            View All Products <Rigth />
          </Button>
        </div>
        <ProductOffer />
      </section>

      <section className="-mt-20 relative flex font-Roboto">
        <img src={Eco} className="h-[700px] " alt="" />
        <div className="bg-white1 p-10 px-16 absolute top-32 z-10 rounded-lg shadow-xl w-[650px] left-[600px] flex flex-col gap-5">
          <div>
            <p className="font-tail text-lime text-xl">Eco Friendly</p>
            <h1 className="font-bold text-green-600  text-3xl w-72">
              Econis is a Friendly Organic Store
            </h1>
          </div>
          <div>
            <h3 className="font-medium text-green-600">
              Start with Our Company First
            </h3>
            <p className="text-secondary-500 ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-green-600">
              Start with Our Company First
            </h3>
            <p className="text-secondary-500 ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-green-600">
              Start with Our Company First
            </h3>
            <p className="text-secondary-500 ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </section>
      <OrganicFood />
      <section className="font-Roboto container-uz pt-20">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-tail text-lime text-2xl">News</p>
            <h2 className="text-4xl font-bold text-green-600 w-[60%]">
              Discover weekly content about organic food, & more
            </h2>
          </div>
          <div>
            <Button variant="border-green">More News</Button>
          </div>
        </div>
        <News />
      </section>
      <Subscribe />
    </div>
  );
};
