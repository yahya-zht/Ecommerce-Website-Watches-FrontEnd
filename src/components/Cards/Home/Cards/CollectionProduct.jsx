import { faStar as faStarBord } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const CollectionProduct = (props) => {
  return (
    <Link to={props.link}>
      <div className="flex items-center shadow-xl m-2 h-52  border-4  rounded-xl border-green-600 drop-shadow-2xl">
        <div className="w-2/5 h-full flex justify-start">
          <img
            className="h-full"
            src={`http://127.0.0.1:8000/Storage/Images/product/${props.image}`}
            alt={props.alt}
          />
        </div>
        <div className="flex flex-col pl-2 py-4 ml-5 w-2/5 justify-center">
          <p className="font-bold text-2xl text-black mb-10">{props.title}</p>
          <div className="text-xl text-yellow-300 ">
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStarHalfStroke} className="mr-1" />
            <FontAwesomeIcon icon={faStarBord} className="mr-1" />
          </div>
          <div className="text-gray-700  font-bold flex text-xl">
            <div>$ {props.price}</div>
            <div className="text-red-700 line-through ml-8">
              $ {props.priceOld}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
