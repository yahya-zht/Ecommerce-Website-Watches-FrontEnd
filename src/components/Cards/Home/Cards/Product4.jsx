import { faStar as faStarBord } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const Product4 = (props) => {
  return (
    <Link to={props.link} className={props.class}>
      <div className="w-full flex justify-center items-center h-2/3">
        <img
          src={`http://127.0.0.1:8000/Storage/Images/product/${props.image}`}
          className="rounded-t-2xl hover:scale-95 cursor-pointer h-full"
          alt={props.alt}
        />
      </div>
      <div className="p-4 bg-gray-100 rounded-b-2xl h-1/3 flex flex-col justify-between">
        <div className="">
          <h1 className="text-3xl font-semibold my-3 cursor-pointer">
            {props.title}
          </h1>
        </div>
        <div className="text-xl text-yellow-300 ">
          <FontAwesomeIcon icon={faStar} className="mr-1" />
          <FontAwesomeIcon icon={faStar} className="mr-1" />
          <FontAwesomeIcon icon={faStar} className="mr-1" />
          <FontAwesomeIcon icon={faStarHalfStroke} className="mr-1" />
          <FontAwesomeIcon icon={faStarBord} className="mr-1" />
        </div>
        <div className="flex justify-between text-3xl my-2  ">
          <div className="text-2xl font-medium">${props.price}.00</div>
          <div>
            <FontAwesomeIcon
              icon={props.icon}
              className="mr-3 hover:text-amber-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
