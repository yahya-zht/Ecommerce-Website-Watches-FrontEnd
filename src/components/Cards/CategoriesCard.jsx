import React from "react";
import { Link } from "react-router-dom";

export const CategoriesCard = (props) => {
  return (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img class="rounded-t-lg" src={props.image} alt="" />
        </Link>
        <div class="p-5">
          <Link to="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <div className="flex items-center justify-center">
            <Link
              to="#"
              className="inline-flex  w-4/5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go to {props.title}
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
