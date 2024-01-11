import React from "react";
import { CardsBlog } from "./Cards/CardsBlog";
import image1 from "../../../assets/image/pexels-antony-trivet-9878568.jpg";
import image2 from "../../../assets/image/pexels-mat-brown-1034063.jpg";
import image3 from "../../../assets/image/watches_Home01.jpeg";

export default function Blog() {
  return (
    <div className="w-full mt-10">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="font-bold text-3xl my-5 w-fit">Latest Blogs</h3>
        <div className="flex">
          <CardsBlog
            image={image1}
            alt="Image 01"
            title="Title 1"
            text="Tnsdjn qjsdji qjjidsq doqji d"
          />
          <CardsBlog
            image={image2}
            alt="Image 02"
            title="Title 2"
            text="Tnsdjn qjsdji qjjidsq doqji d"
          />
          <CardsBlog
            image={image3}
            alt="Image 03"
            title="Title 3"
            text="Tnsdjn qjsdji qjjidsq doqji d"
          />
        </div>
      </div>
    </div>
  );
}
