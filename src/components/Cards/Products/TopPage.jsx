import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../context/ShoppingCart";
import { useSearch } from "../../../context/Search";

export default function TopPage() {
  const { cartQuantity } = useShoppingCart();
  const { setQuery, query, setResultsSearch } = useSearch();
  // useEffect(() => {
  //   const fetchSearch = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://127.0.0.1:8000/api/products/search/${query}`
  //       );
  //       const data = await response.json();
  //       if (query === null) {
  //         setResultsSearch([]);
  //       }
  //       setResultsSearch(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   if (query !== "") {
  //     fetchSearch();
  //   } else {
  //     setResultsSearch([]);
  //   }
  // }, [query]);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const handleShearch = async (R) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/products/search/${R}`
      );
      const data = await response.json();
      if (query === null) {
        setResultsSearch([]);
      } else {
        setResultsSearch(data);
      }
    } catch (error) {
      setResultsSearch([]);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full bg-white shadow-md rounded-b-xl">
      <div className="flex justify-between items-center mr-5 pt-2 pb-3">
        <p className="hidden md:block w-1/7"></p>
        <div className="">
          <form action="#" className=" md:mr-52 h-8 flex ">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Product..."
              value={query}
              onChange={handleInputChange}
              className="h-full rounded-l-xl py-2 w-80 focus:ring-green-600  border-green-600  hover:border-amber-400 focus:border-none"
            />
            <input
              onClick={() => handleShearch(query)}
              value="Search"
              type="button"
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
