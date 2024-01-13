import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarBord } from "@fortawesome/free-regular-svg-icons";

export const CardsProduct = (props) => {
  return (
    // <div className="w-1/4 m-4">
    //   <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //     <Link to="#">
    //       <img class="rounded-t-lg" src={img} alt="" />
    //     </Link>
    //     <div class="p-5">
    //       <Link to="#">
    //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           Noteworthy technology acquisitions 2021
    //         </h5>
    //       </Link>
    //       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p>
    //       <Link
    //         to="#"
    //         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Read more
    //         <svg
    //           class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 14 10"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 5h12m0 0L9 1m4 4L9 9"
    //           />
    //         </svg>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="m-2 ">
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#" className="flex justify-center">
          {/* <img className="p-8 rounded-t-lg" src={image} alt="product image" /> */}
          <img
            src={props.image}
            className="rounded-t-lg mb-3 h-52 w-full"
            alt=""
          />
        </Link>
        <div class="px-5 pb-5">
          <Link to="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </Link>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex text-amber-400 items-center space-x-1 rtl:space-x-reverse">
              <FontAwesomeIcon icon={faStar} className="" />
              <FontAwesomeIcon icon={faStar} className="mr-1" />
              <FontAwesomeIcon icon={faStar} className="mr-1" />
              <FontAwesomeIcon icon={faStarHalfStroke} className="mr-1" />
              <FontAwesomeIcon icon={faStarBord} className="mr-1" />
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              4.5
            </span>
          </div>
          <div class="">
            <div className="flex justify-between items-center">
              <p class="text-1xl font-bold  text-gray-900 dark:text-white">
                {props.price}.00$
              </p>
              <p class="text-1xl line-through text-red-700 font-semibold mr-6 dark:text-white ">
                {props.priceold}.00$
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-green-600 cursor-pointer text-xl hover:text-amber-500"
                />
              </p>
            </div>
            <div className="flex mt-2">
              <Link
                to="#"
                class="text-white w-full bg-green-600 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
