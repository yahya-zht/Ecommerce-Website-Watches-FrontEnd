import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/image/pexels-antony-trivet-9979735.jpg";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowProductCard() {
  return (
    <>
      <div className="flex items-center bg-white">
        <div className="w-2/3 flex flex-col ">
          <p className="text-5xl font-bold pb-20">ROLEX G-1150</p>
          <p className="text-3xl pb-20">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            ullam suscipit distinctio commodi minus.
          </p>
          <p className="text-3xl text-green-600 font-bold">
            150.00$ <span className="text-red-800 line-through">250.00$</span>
          </p>
          <div className="flex justify-between my-16  items-center">
            <div className=" ">
              <Link
                to="#"
                className="bg-green-600 hover:bg-amber-600 px-24 py-5 text-xl text-white font-bold rounded-2xl "
              >
                Add to cart
              </Link>
            </div>
            <div className="h-full">
              <Link to="#">
                <FontAwesomeIcon
                  className="text-green-600 hover:text-amber-500 text-4xl mr-8"
                  icon={faCartShopping}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img src={img} alt="" />
        </div>
      </div>
      <div></div>
    </>
  );
}
