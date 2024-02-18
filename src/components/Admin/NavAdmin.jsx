import {
  faBagShopping,
  faEnvelope,
  faGear,
  faLayerGroup,
  faRightToBracket,
  faShop,
  faTag,
  faUser,
  faUsers,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo_watche.png";
import { useAuth } from "../../context/AuthContext";
export default function NavAdmin() {
  const auth = useAuth();
  return (
    <>
      <div className="flex flex-col  ">
        <ul>
          <li className="border-b-4 border-black">
            <div className="w-full">
              <Link to="" className="flex p-2 py-4 w-full cursor-pointer  ">
                <img src={Logo} className="w-1/4 " alt="Logo" />
                <span className="self-center w-3/4 text-2xl text-yellow-400 font-semibold whitespace-nowrap dark:text-white">
                  WatchesCom
                </span>
              </Link>
            </div>
          </li>
          <li className="flex ">
            <Link
              to=""
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faShop} className="mr-2 w-8" />
              <span className="font-semibold">Dashboard</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Products"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faTag} className="mr-2 w-8" />
              <span className="font-semibold">Products</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Categories"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2 w-8" />
              <span className="font-semibold">Categories</span>
            </Link>
          </li>
          <li className="flex ">
            {" "}
            <Link
              to="Orders"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faBagShopping} className="mr-2 w-8" />
              <span className="font-semibold">Orders</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Customers"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2 w-8" />
              <span className="font-semibold">Customers</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Providers"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon
                icon={faUsersBetweenLines}
                className="mr-2 w-8"
              />
              <span className="font-semibold">Providers</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Profile"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2 w-8" />
              <span className="font-semibold">Profile</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Messages"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-8" />
              <span className="font-semibold">Messages</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Setting"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faGear} className="mr-2 w-8" />
              <span className="font-semibold">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li className="flex ">
            <button
              onClick={() => auth.logOut()}
              className="btn-submit hover:text-green-100 rounded-xl w-full p-2 hover:bg-red-600 focus:text-green-100 focus:bg-amber-600 "
            >
              <FontAwesomeIcon className="mr-3" icon={faRightToBracket} />
              <span className="font-semibold">logout</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
