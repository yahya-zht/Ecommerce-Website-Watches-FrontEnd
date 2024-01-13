import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function TopPage() {
  return (
    <div className="w-full bg-white border-t-2 border-green-600">
      <div className="flex justify-between items-center mr-5 pt-2 pb-3">
        <p className="hidden md:block w-1/7"></p>
        <div className="h-8">
          <form action="#" className="h-full md:mr-52 ">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Product..."
              className="h-full rounded-l-xl w-80  border-green-600  hover:border-amber-400 focus:border-none"
            />
            <input
              type="submit"
              value="Search"
              className="bg-green-600 text-white font-semibold cursor-pointer px-3 h-full rounded-r-xl hover:bg-amber-500"
            />
          </form>
        </div>
        <div>
          <div>
            <p>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-green-600 cursor-pointer text-xl hover:text-amber-500"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
