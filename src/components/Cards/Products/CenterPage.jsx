import React from "react";
import { CardsProduct } from "./CardsProduct";
import image1 from "../../../assets/image/pexels-antony-trivet-9878568.jpg";
import image2 from "../../../assets/image/pexels-antony-trivet-9979735.jpg";
import image3 from "../../../assets/image/pexels-antony-trivet-9981079.jpg";
import image4 from "../../../assets/image/pexels-antony-trivet-9981086.jpg";
import image5 from "../../../assets/image/pexels-antony-trivet-9980784.jpg";
import image6 from "../../../assets/image/pexels-antony-trivet-9981078.jpg";
export default function CenterPage() {
  return (
    <div className="w-full md:w-3/4 m-2">
      <div className="grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-2">
        <CardsProduct
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
        />
      </div>
    </div>
  );
}
