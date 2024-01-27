import React from "react";
import { Link } from "react-router-dom";

export const CategoriesCard = (props) => {
  return (
    <div
      key={props.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link to="#">
        <img
          className="rounded-t-lg"
          src={`http://127.0.0.1:8000/Storage/Images/Category/${props.Image}`}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.Name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex items-center justify-center">
          <Link
            to={props.href}
            className="inline-flex justify-center w-4/5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go to {props.Name}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
  );
};
