import React from "react";
import { Link } from "react-router-dom";
import {
  faCartPlus,
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShoppingCart } from "../context/ShoppingCart";

export default function ShowProductCard(props) {
  const {
    getItemsQuantity,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const Quantity = getItemsQuantity(props.id);

  return (
    <>
      <div className="flex items-center bg-white">
        <div className="w-1/3">
          <img
            src={`http://127.0.0.1:8000/Storage/Images/product/${props.Image}`}
            alt="Image01"
            target="_blank"
            title="Watche"
          />
        </div>
        <div className="w-2/3 flex flex-col ">
          <div className="p-8">
            <p className="text-5xl font-bold pb-20">{props.Name}</p>
            <p className="text-3xl pb-20">{props.Description}</p>
            <div className="flex justify-between mb-7">
              <p className="text-3xl text-green-600 font-bold ">
                ${props.priceSale}.00
              </p>
              <p className="text-red-800 line-through text-2xl mr-10">
                ${props.priceOld}.00
              </p>
            </div>
            <div className="flex items-center">
              <button
                className="px-2 pt-0 text-white font-bold text-xl bg-amber-500 rounded-xl"
                onClick={() => decrementItemQuantity(props.id)}
              >
                <FontAwesomeIcon icon={faSquareMinus} />
              </button>
              <span className="mx-4 text-2xl font-bold">{Quantity}</span>
              <button
                className="px-2 pt-0 text-white font-bold text-xl bg-amber-500 rounded-xl"
                onClick={() => incrementItemQuantity(props.id)}
              >
                <FontAwesomeIcon icon={faSquarePlus} />
              </button>
              <button onClick={() => removeItemFromCart(props.id)}>
                remove
              </button>
            </div>
          </div>
          <div className="flex justify-between my-16  items-center">
            <div className="h-full ml-10 mr-8">
              <Link to="#">
                <FontAwesomeIcon
                  title="Add to cart"
                  className="text-green-600 hover:text-amber-500 text-4xl "
                  icon={faCartPlus}
                />
              </Link>
            </div>
            <div className=" ">
              <Link
                to={props.link}
                className="bg-green-600 hover:bg-amber-600 px-24 py-5 text-xl text-white font-bold rounded-2xl "
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
