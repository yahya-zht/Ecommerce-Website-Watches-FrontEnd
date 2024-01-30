import React, { useEffect, useState } from "react";
import { CategoriesCard } from "./Cards/CategoriesCard";
// import { Link } from "react-router-dom";
// import Image01 from "../assets/image/pexels-antony-trivet-9979735.jpg";
// import Image02 from "../assets/image/pexels-antony-trivet-9981078.jpg";
// import Image03 from "../assets/image/pexels-antony-trivet-9878594.jpg";
// import Image04 from "../assets/image/pexels-pixabay-277390.jpg";
// import Image05 from "../assets/image/pexels-antony-trivet-9878568.jpg";
// import Image06 from "../assets/image/pexels-jordan-rushton-10478973.jpg";
export default function CategoriesComponent() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data : ", data.Categories);
        setCategories(data.Categories);
      });
  }, []);
  const CategoryCard = Categories.map((Category) => (
    <CategoriesCard
      key={Category.id}
      id={Category.id}
      Name={Category.Name}
      description="description"
      Image={Category.Image}
      href={"Show"}
    />
  ));
  // const Category = Categories.map((Category) => (
  //   <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  //     <Link to="#">
  //       <img class="rounded-t-lg" src={Category.Image} alt="" />
  //     </Link>
  //     <div class="p-5">
  //       <Link to="#">
  //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //           {Category.Name}
  //         </h5>
  //       </Link>
  //       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
  //         {Category.description}
  //       </p>
  //       <div className="flex items-center justify-center">
  //         <Link
  //           to="#"
  //           className="inline-flex  w-4/5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //         >
  //           Go to {Category.Name}
  //           <svg
  //             class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 14 10"
  //           >
  //             <path
  //               stroke="currentColor"
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M1 5h12m0 0L9 1m4 4L9 9"
  //             />
  //           </svg>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // ));

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="w-full  m-2">
        <div className="grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 gap-2">
          {/* {Category ? Category : "Loading"} */}
          {CategoryCard ? CategoryCard : "Loading"}
        </div>
      </div>
    </div>
  );
}
