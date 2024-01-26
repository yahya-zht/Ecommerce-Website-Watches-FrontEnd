import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../context/ShoppingCart";

export default function TopPage() {
  const { cartQuantity } = useShoppingCart();
  return (
    <div className="w-full bg-white ">
      <div className="flex justify-between items-center mr-5 pt-2 pb-3">
        <p className="hidden md:block w-1/7"></p>
        <div className="">
          <form action="#" className=" md:mr-52 h-8 flex ">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Product..."
              className="h-full rounded-l-xl py-2 w-80 focus:ring-green-600  border-green-600  hover:border-amber-400 focus:border-none"
            />
            <input
              type="submit"
              value="Search"
              className="bg-green-600 text-white font-semibold cursor-pointer px-3 h-full  rounded-r-xl hover:bg-amber-500"
            />
          </form>
        </div>
        <div>
          <div className="flex items-center">
            <Link
              to={"/ShoppingCart"}
              className="relative inline-flex items-center h-full"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-green-600 cursor-pointer text-xl hover:text-amber-500 h-6"
              />
              <div class="absolute inline-flex items-center  justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -end-3 dark:border-gray-900">
                {cartQuantity}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
