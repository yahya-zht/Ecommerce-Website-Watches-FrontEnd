import React, { useEffect, useState } from "react";
import { CardsBlog } from "./Cards/CardsBlog";
import image1 from "../../../assets/image/pexels-antony-trivet-9878568.jpg";
import image2 from "../../../assets/image/pexels-mat-brown-1034063.jpg";
import image3 from "../../../assets/image/watches_Home01.jpeg";

export default function Blog() {
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
  const firstFourProducts = Products.slice(5, 8);
  const AllfirstProducts = firstFourProducts.map((item) => (
    <div key={item.id} className="w-1/3">
      <CardsBlog
        image={item.Image_Product}
        alt={item.Name}
        title={item.Name}
        text={item.Description}
        link={`/Product/${item.id}`}
      />
    </div>
  ));
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="font-bold text-3xl my-5 w-fit">Latest Blogs</h3>
        <div className="flex">{AllfirstProducts}</div>
      </div>
    </div>
  );
}
