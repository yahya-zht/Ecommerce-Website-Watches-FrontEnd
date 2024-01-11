import React from "react";
import { Link } from "react-router-dom";
import Imagewatches from "../../../assets/image/watches_Home02.png";

export default function TopPage() {
  return (
    <>
      <div className="w-full">
        <h1 className="text-yellow-400 bg-green-700 text-3xl text-center font-bold py-3">
          Page Home
        </h1>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="w-2/3">
            <h1 className="text-6xl text-green-700 font-bold font-mono">
              The best Store for Watches
            </h1>
            <p className="text-2xl font-semibold ">
              New offer, hurry before it's too late
            </p>
            <div className="mt-5 flex justify-center ">
              <Link
                className="bg-green-700 text-xl text-yellow-400 rounded-2xl text-center w-1/2 py-4 font-bold hover:bg-yellow-400 hover:text-green-700"
                to="#"
              >
                ShopNew
              </Link>
            </div>
          </div>
          <div className="w-1/3">
            <img className="h-1/2" src={Imagewatches} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
