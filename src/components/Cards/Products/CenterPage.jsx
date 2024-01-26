import React, { useEffect, useState } from "react";
import { CardsProduct } from "./CardsProduct";
// import image1 from "../../../assets/image/pexels-antony-trivet-9878568.jpg";
// import image2 from "../../../assets/image/pexels-antony-trivet-9979735.jpg";
// import image3 from "../../../assets/image/pexels-antony-trivet-9981079.jpg";
// import image4 from "../../../assets/image/pexels-antony-trivet-9981086.jpg";
// import image5 from "../../../assets/image/pexels-antony-trivet-9980784.jpg";
// import image6 from "../../../assets/image/pexels-antony-trivet-9981078.jpg";
export default function CenterPage() {
  const [Products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/Products")
  //     .then((data) => console.log(data));
  //     .then((res) => res.json());
  // .then((data) => setProducts(data.Produits));
  // }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/Products")
      .then((response) => response.json())
      // .then((data) => console.log(data.Providers))
      .then((data) => setProducts(data.Products));
    // .then((data) => setProviders(data.Providers));
  }, []);
  // console.log(Products);
  const ShowProducts = Products.map((product) => (
    <div key={product.id}>
      <CardsProduct
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
        {/* <CardsProduct
          title={Products[0].nom}
          price={Products[0].prix_achat}
          priceold={Products[0].prix_vente}
          star
        /> */}
        {ShowProducts}
        {/* <CardsProduct
          image={image1}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image2}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image3}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image4}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image5}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image6}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image1}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image5}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image2}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image6}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image3}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image4}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        />
        <CardsProduct
          image={image2}
          title="Rolex M50"
          price="250"
          priceold="499"
          star
        /> */}
      </div>
    </div>
  );
}
