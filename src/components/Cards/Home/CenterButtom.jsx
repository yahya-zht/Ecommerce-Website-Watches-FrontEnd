import React from "react";
import { CollectionProduct } from "./Cards/CollectionProduct";
import image from "../../../assets/image/pexels-pixabay-364822.jpg";
export default function CenterButtom() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex my-6">
          <div>
            <h3 className="font-bold text-3xl my-5 w-fit">Featured Products</h3>
            <div>
              <CollectionProduct
                image={image}
                alt="Image01"
                title="Rolex GM105"
                price="500.00$"
              />
              <CollectionProduct
                image={image}
                alt="Image01"
                title="Rolex GM105"
                price="500.00$"
              />
            </div>
          </div>
          <div className="">
            <h3 className="font-bold text-3xl my-5 w-fit">
              Most View Products
            </h3>
            <div className="">
              <CollectionProduct
                image={image}
                alt="Image01"
                title="Rolex GM105"
                price="500.00$"
              />
              <CollectionProduct
                image={image}
                alt="Image01"
                title="Rolex GM105"
                price="500.00$"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-3xl my-5 w-fit">
              Bestseller Products
            </h3>
            <div>
              <CollectionProduct
                image={image}
                alt="Image01"
                title="Rolex GM105"
                price="500.00$"
              />
              <CollectionProduct
                image={image}
                alt="Image01"
                title="Rolex GM105"
                price="500.00$"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
