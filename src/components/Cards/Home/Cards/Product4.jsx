import { faStar as faStarBord } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const Product4 = (props) => {
  //   const [num, setnum] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      <Link to="#" className={props.class}>
        <div className="w-full ">
          <img
            src={props.img}
            className="rounded-t-2xl hover:scale-95 cursor-pointer"
            alt={props.alt}
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-b-2xl ">
          <div>
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
          <div className="flex justify-between text-3xl my-2">
            <div className="text-2xl font-medium">{props.price}</div>
            <div>
              <FontAwesomeIcon
                icon={props.icon}
                className="mr-3 hover:text-amber-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
