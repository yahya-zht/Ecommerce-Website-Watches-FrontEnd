import React, { useEffect, useState } from "react";
import { CollectionProduct } from "./Cards/CollectionProduct";
export default function CenterButtom() {
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
  const firstFourProducts = Products.slice(5, 7);
  const first2FourProducts = Products.slice(7, 9);
  const first3FourProducts = Products.slice(1, 3);
  const AllfirstProducts = firstFourProducts.map((item) => (
    <div key={item.id}>
      <CollectionProduct
        image={item.Image_Product}
        alt={item.Name}
        title={item.Name}
        price={item.Price_Sale}
        priceOld={item.Price_First}
        link={`/Product/${item.id}`}
      />
    </div>
  ));
  const Allfirst2Products = first2FourProducts.map((item) => (
    <div key={item.id}>
      <CollectionProduct
        image={item.Image_Product}
        alt={item.Name}
        title={item.Name}
        price={item.Price_Sale}
        priceOld={item.Price_First}
        link={`/Product/${item.id}`}
      />
    </div>
  ));
  const Allfirst3Products = first3FourProducts.map((item) => (
    <div key={item.id}>
      <CollectionProduct
        image={item.Image_Product}
        alt={item.Name}
        title={item.Name}
        price={item.Price_Sale}
        priceOld={item.Price_First}
        link={`/Product/${item.id}`}
      />
    </div>
  ));
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex my-6">
          <div className="w-1/3">
            <h3 className="font-bold text-3xl my-5 underline decoration-green-700 decoration-4 text-center w-full">
              Featured Products
            </h3>
            <div>{AllfirstProducts}</div>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-3xl my-5 underline decoration-green-700 decoration-4 text-center w-full">
              Most View Products
            </h3>
            <div className="">{Allfirst2Products}</div>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-3xl my-5 underline decoration-green-700 decoration-4 text-center w-full">
              Bestseller Products
            </h3>
            <div>{Allfirst3Products}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
