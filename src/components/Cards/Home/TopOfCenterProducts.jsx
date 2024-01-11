import React from "react";
import { Product4 } from "./Cards/Product4";
import image1 from "../../../assets/image/pexels-antony-trivet-9878594.jpg";
import image2 from "../../../assets/image/pexels-antony-trivet-9979735.jpg";
import image3 from "../../../assets/image/pexels-antony-trivet-9980831.jpg";
import image4 from "../../../assets/image/pexels-antony-trivet-9981078.jpg";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

export default function TopOfCenterProducts() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <hr className="bg-green-600 py-1 rounded-xl mb-5" />
        <div className="flex justify-between my-4 mx-6">
          <div>
            <p className="font-bold text-3xl">
              <span className="underline decoration-4 decoration-green-600">
                Today'
              </span>
              deals
            </p>
          </div>
          <div className="text-xl ">
            <div className="bg-green-600 px-6 py-2 text-xl font-semibold text-white">
              {" "}
              Ends in: 00:00:00:00
            </div>
          </div>
        </div>
        <div className="flex">
          <Product4
            img={image1}
            alt="Rolex"
            title="Rolex GF500"
            star={faStar}
            class="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
            price="100.00$"
            icon={faCartShopping}
          />
          <Product4
            img={image2}
            alt="Rolex"
            title="Rolex GF500"
            star={faStar}
            class="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
            price="300.00$"
            icon={faCartShopping}
          />
          <Product4
            img={image3}
            alt="Rolex"
            title="Rolex GF500"
            star={faStar}
            class="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
            price="250.00$"
            icon={faCartShopping}
          />
          <Product4
            img={image4}
            alt="Rolex"
            title="Rolex GF500"
            star={faStar}
            class="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
            price="550.00$"
            icon={faCartShopping}
          />
        </div>
      </div>
    </div>
  );
}
