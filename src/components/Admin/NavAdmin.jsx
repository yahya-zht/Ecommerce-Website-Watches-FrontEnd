import {
  faBagShopping,
  faLayerGroup,
  faShop,
  faTag,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function NavAdmin() {
  return (
    <>
      <div className="flex flex-col ">
        <ul>
          <li className="flex ">
            <Link
              to=""
              className=" active:border-r-red-600 hover:bg-green-100 rounded-xl w-full p-2 hover:text-amber-600 focus:text-amber-600 "
            >
              <FontAwesomeIcon icon={faShop} className="mr-2 w-8" />
              <span className="font-semibold">Dashboard</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Products"
              className=" hover:bg-green-100 rounded-xl w-full p-2 hover:text-amber-600"
            >
              <FontAwesomeIcon icon={faTag} className="mr-2 w-8" />
              <span className="font-semibold">Products</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Categories"
              className=" hover:bg-green-100 rounded-xl w-full p-2 hover:text-amber-600"
            >
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2 w-8" />
              <span className="font-semibold">Categories</span>
            </Link>
          </li>
          <li className="flex ">
            {" "}
            <Link
              to="Orders"
              className=" hover:bg-green-100 rounded-xl w-full p-2 hover:text-amber-600"
            >
              <FontAwesomeIcon icon={faBagShopping} className="mr-2 w-8" />
              <span className="font-semibold">Orders</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Customers"
              className=" hover:bg-green-100 rounded-xl w-full p-2 hover:text-amber-600"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2 w-8" />
              <span className="font-semibold">Customers</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Profile"
              className=" hover:bg-green-100 rounded-xl w-full p-2 hover:text-amber-600"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2 w-8" />
              <span className="font-semibold">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
