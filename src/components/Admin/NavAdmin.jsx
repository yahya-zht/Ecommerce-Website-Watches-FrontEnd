import {
  faBagShopping,
  faEnvelope,
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
  // const f = (a) => {
  //   const p = document.getElementsByClassName("click").length;
  //   if (a === "Dashboard") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-dashboard").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-dashboard").style.color = "white";
  //   } else if (a === "Products") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-products").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-products").style.color = "white";
  //   } else if (a === "Categories") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-categories").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-categories").style.color = "white";
  //   } else if (a === "Orders") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-orders").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-orders").style.color = "white";
  //   } else if (a === "Customers") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-customers").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-customers").style.color = "white";
  //   } else if (a === "Providers") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-providers").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-providers").style.color = "white";
  //   } else if (a === "Profile") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-profile").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-profile").style.color = "white";
  //   } else if (a === "Messages") {
  //     for (let i = 0; i < p; i++) {
  //       document.getElementsByClassName("click")[i].style.backgroundColor =
  //         "rgb(23 37 84)";
  //       document.getElementsByClassName("click")[i].style.color = "white";
  //     }
  //     document.getElementById("nav-messages").style.backgroundColor =
  //       " rgb(217 119 6)";
  //     document.getElementById("nav-messages").style.color = "white";
  //   }
  // };
  // console.log(document.location.pathname);
  return (
    <>
      <div className="flex flex-col ">
        <ul className=" ">
          <li className="border-b-4 border-amber-500 mb-2">
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
              // onClick={() => f("Dashboard")}
              id="nav-dashboard"
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faShop} className="mr-2 w-8 " />
              <span className="font-semibold">Dashboard</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Products"
              id="nav-products"
              // onClick={() => f("Products")}
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faTag} className="mr-2 w-8" />
              <span className="font-semibold">Products</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Categories"
              // onClick={() => f("Categories")}
              id="nav-categories"
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faLayerGroup} className="mr-2 w-8" />
              <span className="font-semibold">Categories</span>
            </Link>
          </li>
          <li className="flex ">
            {" "}
            <Link
              to="Orders"
              // onClick={() => f("Orders")}
              id="nav-orders"
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faBagShopping} className="mr-2 w-8" />
              <span className="font-semibold">Orders</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Customers"
              // onClick={() => f("Customers")}
              id="nav-customers"
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2 w-8" />
              <span className="font-semibold">Customers</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Providers"
              // onClick={() => f("Providers")}
              id="nav-providers"
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
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
              // onClick={() => f("Profile")}
              id="nav-profile"
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2 w-8" />
              <span className="font-semibold">Profile</span>
            </Link>
          </li>
          <li className="flex ">
            <Link
              to="Messages"
              // onClick={() => f("Messages")}
              id="nav-messages"
              className="click hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-8" />
              <span className="font-semibold">Messages</span>
            </Link>
          </li>
          {/* <li className="flex ">
            <Link
              to="Setting"
              className=" hover:text-green-100 rounded-xl w-full p-2 hover:bg-amber-600 focus:text-green-100 focus:bg-amber-600"
            >
              <FontAwesomeIcon icon={faGear} className="mr-2 w-8" />
              <span className="font-semibold">Settings</span>
            </Link>
          </li> */}
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
