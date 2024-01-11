import { faStar as faStarBord } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const CollectionProduct = (props) => {
  return (
    <>
      <div className="flex items-center shadow-xl m-2 ">
        <div className="w-2/5">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="flex flex-col pl-2 py-4 w-2/5 justify-center">
          <p className="font-bold text-2xl text-black">{props.title}</p>
          <div className="text-xl text-yellow-300 ">
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <FontAwesomeIcon icon={faStarHalfStroke} className="mr-1" />
            <FontAwesomeIcon icon={faStarBord} className="mr-1" />
          </div>
          <div className="text-xl text-gray-500 font-semibold">
            {props.price}
          </div>
        </div>
      </div>
    </>
  );
};
