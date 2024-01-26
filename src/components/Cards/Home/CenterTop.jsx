import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../../assets/image/pexels-pixabay-277390.jpg";
export default function CenterTop() {
  return (
    <>
      <div className="w-full my-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex shadow-xl rounded-xl">
            <div className="w-1/2 p-5 flex flex-col justify-center bg-white pl-10 rounded-l-xl">
              <p className="font-semibold text-3xl text-green-600">
                Special Offer
              </p>
              <div className="">
                <p className=" text-4xl font-bold mt-5 uppercase ">
                  succulent garden
                </p>
                <p className="text-7xl font-bold uppercase mb-5">
                  <span className="text-green-600  ">Gift</span> Boxes
                </p>
                <p className=" font-semibold text-2xl">
                  Fro planter materiais of styleoptions, discover <br /> Which
                  planter is best for your space
                </p>
              </div>
              <div className="flex ">
                <Link
                  to="#"
                  className="font-semibold text-3xl hover:text-white hover:bg-green-600 text-green-600 px-10 py-3 mt-4 border-4 border-green-600"
                >
                  Explore The Shop
                </Link>
              </div>
            </div>
            <div className="w-1/2 ">
              <img src={image1} alt="" className="w-full rounded-r-xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
