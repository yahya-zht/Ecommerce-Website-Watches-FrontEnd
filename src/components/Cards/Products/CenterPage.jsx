import React, { useEffect, useState } from "react";
import { CardsProduct } from "./CardsProduct";
import { useShoppingCart } from "../../../context/ShoppingCart";
import { useSearch } from "../../../context/Search";
// import image1 from "../../../assets/image/pexels-antony-trivet-9878568.jpg";
// import image2 from "../../../assets/image/pexels-antony-trivet-9979735.jpg";
// import image3 from "../../../assets/image/pexels-antony-trivet-9981079.jpg";
// import image4 from "../../../assets/image/pexels-antony-trivet-9981086.jpg";
// import image5 from "../../../assets/image/pexels-antony-trivet-9980784.jpg";
// import image6 from "../../../assets/image/pexels-antony-trivet-9981078.jpg";
export default function CenterPage() {
  const [Products, setProducts] = useState([]);
  const { resultsSearch } = useSearch();
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/Products")
  //     .then((data) => console.log(data));
  //     .then((res) => res.json());
  // .then((data) => setProducts(data.Produits));
  // }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      // .then((data) => console.log(data.Providers))

      .then((data) => {
        if (resultsSearch.length > 0) {
          setProducts(resultsSearch);
        } else {
          setProducts(data.Products);
        }
      });
    // .then((data) => setProviders(data.Providers));
  }, [resultsSearch]);
  // console.log(Products);
  const { incrementItemQuantity } = useShoppingCart();

  const ShowProducts = Products.map((product) => (
    <div key={product.id}>
      <CardsProduct
        ic={() => incrementItemQuantity(product.id)}
        key={product.id}
        image={product.Image_Product}
        title={product.Name}
        price={product.Price_Sale}
        priceold={product.Price_First}
        link={`/Product/${product.id}`}
        star
      />
    </div>
  ));
  return (
    <div className="w-full md:w-3/4 m-2">
      <div className="grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-2">
        {ShowProducts ? ShowProducts : " Loading..."}
      </div>
    </div>
  );
}
