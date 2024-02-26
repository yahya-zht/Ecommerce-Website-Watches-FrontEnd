import React, { useEffect, useState } from "react";
import { Product4 } from "./Cards/Product4";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
// import image1 from "../../../assets/image/pexels-antony-trivet-9898200.jpg";
// import image2 from "../../../assets/image/pexels-antony-trivet-9898281.jpg";
// import image3 from "../../../assets/image/pexels-antony-trivet-9979735.jpg";
// import image4 from "../../../assets/image/pexels-antony-trivet-9980784.jpg";
// import image5 from "../../../assets/image/pexels-antony-trivet-9980831.jpg";
// import image6 from "../../../assets/image/pexels-antony-trivet-9981078.jpg";

export default function CenterCenter() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8000/api/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.Products);
        });
    } catch {
      console.log("error");
    }
  }, []);
  const firstFourProducts = Products.slice(4, 8);
  const first2FourProducts = Products.slice(7, 11);
  const AllfirstProducts = firstFourProducts.map((item) => (
    <div
      className="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
      key={item.id}
    >
      <Product4
        key={item.id}
        image={item.Image_Product}
        alt={item.Name}
        title={item.Name}
        star={faStar}
        // class="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
        price={item.Price_Sale}
        priceold={item.Price_First}
        link={`/Product/${item.id}`}
        icon={faCartShopping}
      />
    </div>
  ));
  const Allfirst2Products = first2FourProducts.map((item) => (
    <div
      className="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
      key={item.id}
    >
      <Product4
        key={item.id}
        image={item.Image_Product}
        alt={item.Name}
        title={item.Name}
        star={faStar}
        // class="mx-2 w-1/4 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
        price={item.Price_Sale}
        priceold={item.Price_First}
        link={`/Product/${item.id}`}
        icon={faCartShopping}
      />
    </div>
  ));
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <p className="font-bold text-5xl my-5">New Products</p>
        <div className="flex flex-col space-y-10">
          <div className="flex">
            {AllfirstProducts}
            {/* <Product4
              img={image1}
              alt="Rolex"
              title="Rolex GF500"
              star={faStar}
              class="mx-2 w-1/3 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
              price="350.00$"
              icon={faCartShopping}
            />
            <Product4
              img={image2}
              alt="Rolex"
              title="Rolex GF500"
              star={faStar}
              class="mx-2 w-1/3 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
              price="250.00$"
              icon={faCartShopping}
            />
            <Product4
              img={image3}
              alt="Rolex"
              title="Rolex GF500"
              star={faStar}
              class="mx-2 w-1/3 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
              price="500.00$"
              icon={faCartShopping}
            /> */}
          </div>
          <div className="flex">
            {Allfirst2Products}
            {/* <Product4
              img={image4}
              alt="Rolex"
              title="Rolex GF500"
              star={faStar}
              class="mx-2 w-1/3 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
              price="1000.00$"
              icon={faCartShopping}
            />
            <Product4
              img={image5}
              alt="Rolex"
              title="Rolex GF500"
              star={faStar}
              class="mx-2 w-1/3 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
              price="800.00$"
              icon={faCartShopping}
            />
            <Product4
              img={image6}
              alt="Rolex"
              title="Rolex GF500"
              star={faStar}
              class="mx-2 w-1/3 hover:rounded-none cursor-default bg-green-600 rounded-2xl shadow-xl shadow-b"
              price="700.00$"
              icon={faCartShopping}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
