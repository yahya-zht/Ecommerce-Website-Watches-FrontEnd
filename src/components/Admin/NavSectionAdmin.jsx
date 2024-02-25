import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/Search";

export default function NavSectionAdmin(props) {
  const { setResultsSearch, query, setQuery } = useSearch();
  // const { setResultsSearch, query, setQuery } = useShoppingCart();
  
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/Admin/products/search/${query}`
        );
        const data = await response.json();
        if (query === null) {
          setResultsSearch([]);
        }
        setResultsSearch(data);
        // console.log(data);
      } catch (error) {
        // console.log("NONONONOO");
        // console.log(resultsSearch);
        console.error("Error fetching data:", error);
      }
    };
  
    if (query !== "") {
      // console.log("query !== =>", query);
      fetchSearch();
    } else {
      // console.log("query []=>", query);
      setResultsSearch([]);
    }
  }, [query]);
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  return (
    <div className="flex justify-between">
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <FontAwesomeIcon
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            icon={faMagnifyingGlass}
          />
        </span>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="w-1/5 flex justify-center">
        <Link
          to={props.href}
          className=" py-2 bg-amber-600 w-full text-center  text-white rounded-xl font-semibold hover:bg-green-600"
        >
          {props.Link}
        </Link>
      </div>
    </div>
  );
}
