import React from "react";
import { CategoriesCard } from "./Cards/CategoriesCard";
import Image01 from "../assets/image/pexels-antony-trivet-9979735.jpg";
import Image02 from "../assets/image/pexels-antony-trivet-9981078.jpg";
import Image03 from "../assets/image/pexels-antony-trivet-9878594.jpg";
import Image04 from "../assets/image/pexels-pixabay-277390.jpg";
import Image05 from "../assets/image/pexels-antony-trivet-9878568.jpg";
import Image06 from "../assets/image/pexels-jordan-rushton-10478973.jpg";
export default function CategoriesComponent() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="w-full  m-2">
        <div className="grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-2">
          <CategoriesCard
            title="Rolex"
            description="The best of the best"
            image={Image01}
          />
          <CategoriesCard
            title="Omegle"
            description="The best of the best"
            image={Image02}
          />
          <CategoriesCard
            title="Casion"
            description="The best of the best"
            image={Image03}
          />
          <CategoriesCard
            title="Rolex"
            description="The best of the best"
            image={Image04}
          />
          <CategoriesCard
            title="Rolex"
            description="The best of the best"
            image={Image05}
          />
          <CategoriesCard
            title="Rolex"
            description="The best of the best"
            image={Image06}
          />
          <CategoriesCard
            title="Rolex"
            description="The best of the best"
            image={Image01}
          />
        </div>
      </div>
    </div>
  );
}
